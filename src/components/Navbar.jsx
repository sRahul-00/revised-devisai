import { Link, useLocation } from "react-router-dom";
import {
  Hamburger,
  Logo,
  PhantomWallet,
  ProfilePic,
  Pump,
  SolflareWallet,
  Sun,
  Telegram,
  Twitter,
} from "../assets";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [userLoggedIn, setUserLoggedIn] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleWalletModal = () => {
    if (isModalOpen) toggleModal();
    setIsWalletModalOpen(!isWalletModalOpen);
  };

  const toggleProfileModal = () => {
    if (isModalOpen) toggleModal();
    setIsProfileModalOpen(!isProfileModalOpen);
  };

  const connectSolflare = () => {
    // Here you'd implement Solflare's connection logic
    console.log("Connecting to Solflare...");
  };

  const connectPhantom = () => {
    // Here you'd implement Phantom's connection logic
    console.log("Connecting to Phantom...");
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    console.log(isDarkMode);

    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const logoutUser = () => {
    setUserLoggedIn(false);
    toggleProfileModal();
  };

  // console.log(currentPath, typeof currentPath);
  return (
    <div className="w-full lg:h-[100px] flex md:justify-around justify-between px-16 md:px-0 items-center">
      <div className="lg:hidden">
        {/* Hamburger button for mobile */}
        <button onClick={toggleModal}>
          <img src={Hamburger} alt="" className="w-9" />
        </button>
      </div>

      <div className="flex gap-28">
        <div className="gap-8 hidden lg:flex items-center justify-start">
          <Link
            to={"/"}
            className={`hover:text-greenYellow transition-colors font-semibold text-lg ${
              currentPath === "/" && `text-greenYellow`
            }`}
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className={`hover:text-greenYellow transition-colors font-semibold text-lg ${
              currentPath === "/about" && `text-greenYellow`
            }`}
          >
            About
          </Link>
          <Link
            to={"/leaderboard"}
            className={`hover:text-greenYellow transition-colors font-semibold text-lg ${
              currentPath === "/leaderboard" && `text-greenYellow`
            }`}
          >
            Leaderboard
          </Link>
          <Link
            to={"/instructions"}
            className={`hover:text-greenYellow transition-colors font-semibold text-lg ${
              currentPath === "/instructions" && `text-greenYellow`
            }`}
          >
            Instruction
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-center gap-1 hover:text-greenYellow transition-colors font-semibold text-lg"
          >
            Buy
            <img src={Pump} alt="" style={{ width: "20px" }} />
          </Link>
        </div>
        <div className="md:w-24 w-16">
          <img src={Logo} alt="Logo" />
        </div>
      </div>

      <div className="md:flex hidden gap-10">
        <div className="flex gap-8 justify-center items-center">
          <button onClick={toggleTheme}>
            <img src={Sun} alt="" />
          </button>

          <Link to={"https://t.me/DevIsAiSol"} className="dark:fill-[#F6F6F6]">
            <img src={Telegram} alt="Telegram" />
          </Link>
          <Link to={"https://x.com/DevIsAiCoin"}>
            <img src={Twitter} alt="Twitter" />
          </Link>
        </div>
        {userLoggedIn ? (
          <button>
            <img
              src={ProfilePic}
              className="rounded-full w-16"
              onClick={toggleProfileModal}
              alt="Profile"
            />
          </button>
        ) : (
          <button className="connect-btn" onClick={toggleWalletModal}>
            Connect Wallet
          </button>
        )}
      </div>

      {/* connect wallet */}
      {isWalletModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-10 rounded-lg w-96 relative dark:bg-darkModeFooterColor">
            <button
              onClick={toggleWalletModal}
              className="absolute top-3 right-5 mb-4 text-4xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center mb-5">
              Select Your Wallet
            </h2>
            <div className="flex flex-col gap-4">
              <button
                onClick={connectSolflare}
                className="wallet-button h-14 flex items-center justify-center gap-2 p-4 border rounded-md hover:bg-zinc-700 bg-solflareWallet transition-colors text-white font-semibold tracking-widest text-lg"
              >
                <img src={SolflareWallet} alt="Solflare" className="w-8" />
                Solflare
              </button>
              <button
                onClick={connectPhantom}
                className="wallet-button h-14 flex items-center justify-center gap-2 p-4 border rounded-md bg-phantomWallet hover:bg-cyan-500 transition-colors"
              >
                <img src={PhantomWallet} alt="Phantom" className="w-28" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* view your profile */}

      {isProfileModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-10 rounded-lg w-588 dark:bg-darkModeFooterColor relative">
            <button
              onClick={toggleProfileModal}
              className="absolute top-3 right-5 mb-4 text-4xl"
            >
              &times;
            </button>
            <div className="flex gap-8 items-center">
              <img src={ProfilePic} alt="" className="w-20 rounded-full" />
              <h1 className="text-3xl font-bold">Profile</h1>
            </div>

            <div className="my-6 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="userName" className="text-lg font-semibold ">
                  User Name
                </label>
                <input
                  type="text"
                  value="6wT5j"
                  className="border border-slate-700 w-11/12 p-2 rounded-xl text-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="walletAddress"
                  className="text-lg font-semibold 
                  "
                >
                  Wallet Address
                </label>
                <input
                  type="text"
                  value="6wT51Kucvi8AiYcyv83aNigw2d2ZhT4DD7DD33jCnMkj"
                  className="border border-slate-700 w-11/12 p-2 rounded-xl text-black"
                />
              </div>
            </div>

            <div className="flex justify-end mt-10">
              <button onClick={logoutUser} className="mb-4 text-lg vote-btn">
                Disconnect Tab
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for mobile navigation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-darkModeFooterColor p-10 rounded-lg w-96 relative">
            <button
              onClick={toggleModal}
              className="text-right absolute top-3 right-5  mb-4 text-4xl"
            >
              &times;
            </button>
            <div className="flex flex-col gap-7">
              <Link
                to={"/"}
                className={`hover:text-greenYellow transition-colors font-semibold text-2xl text-center ${
                  currentPath === "/" && `text-greenYellow`
                }`}
                onClick={toggleModal}
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className={`hover:text-greenYellow transition-colors font-semibold text-2xl text-center ${
                  currentPath === "/about" && `text-greenYellow`
                }`}
                onClick={toggleModal}
              >
                About
              </Link>
              <Link
                to={"/leaderboard"}
                className={`hover:text-greenYellow transition-colors font-semibold text-2xl text-center ${
                  currentPath === "/leaderboard" && `text-greenYellow`
                }`}
                onClick={toggleModal}
              >
                Leaderboard
              </Link>
              <Link
                to={"/instructions"}
                className={`hover:text-greenYellow transition-colors font-semibold text-2xl text-center ${
                  currentPath === "/instructions" && `text-greenYellow`
                }`}
                onClick={toggleModal}
              >
                Instruction
              </Link>
              <Link
                to={"/"}
                className="flex items-center justify-center gap-1 hover:text-greenYellow transition-colors font-semibold text-2xl text-center"
                onClick={toggleModal}
              >
                Buy
                <img src={Pump} alt="Pump" style={{ width: "20px" }} />
              </Link>

              <div className="md:hidden flex flex-col-reverse gap-10">
                <div className="flex gap-8 justify-center items-center icon-container">
                  <Link to={"https://t.me/DevIsAiSol"}>
                    <img src={Telegram} alt="Telegram" />
                  </Link>
                  <Link to={"https://x.com/DevIsAiCoin"}>
                    <img src={Twitter} alt="Twitter" />
                  </Link>
                </div>
                {userLoggedIn ? (
                  <button
                    className="flex justify-center"
                    onClick={toggleProfileModal}
                  >
                    <img
                      src={ProfilePic}
                      className="rounded-full w-16"
                      alt="Profile"
                    />
                  </button>
                ) : (
                  <button className="connect-btn" onClick={toggleWalletModal}>
                    Connect Wallet
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// <div className="w-full  lg:h-[100px] flex justify-around items-center ">
//   <div className="lg:hidden">
//     {/* Hamburger button for mobile */}
//     <button onClick={toggleModal} className="text-xl">
//       <img src={Hamburger} alt="" />
//     </button>
//   </div>
//   <div className="flex gap-8 ">
//     <Link
//       to={"/"}
//       className={`hover:text-greenYellow transition-colors font-semibold text-lg ${
//         currentPath === "/" && `text-greenYellow`
//       }`}
//     >
//       Home
//     </Link>
//     <Link
//       to={"/about"}
//       className={`hover:text-greenYellow transition-colors font-semibold text-lg ${
//         currentPath === "/about" && `text-greenYellow`
//       }`}
//     >
//       About
//     </Link>
//     <Link
//       to={"/leaderboard"}
//       className={`hover:text-greenYellow transition-colors font-semibold text-lg ${
//         currentPath === "/leaderboard" && `text-greenYellow`
//       }`}
//     >
//       Leaderboard
//     </Link>
//     <Link
//       to={"/instructions"}
//       className={`hover:text-greenYellow transition-colors font-semibold text-lg ${
//         currentPath === "/instructions" && `text-greenYellow`
//       }`}
//     >
//       Instruction
//     </Link>
//     <Link
//       to={"/"}
//       className="flex items-center justify-center gap-1 hover:text-greenYellow transition-colors font-semibold text-lg"
//     >
//       Buy
//       <img src={Pump} alt="" style={{ width: "20px" }} />
//     </Link>
//   </div>
//   <div
//     className="w-20 mr-16
//   "
//   >
//     <img src={Logo} alt="" />
//   </div>
//   <div className="flex gap-8">
//     <div className="flex gap-8 justify-center items-center">
//       {/* <button>
//         <img src={Sun} alt="" />
//       </button> */}
//       <Link to={"https://t.me/DevIsAiSol"}>
//         <img src={Telegram} alt="" />
//       </Link>
//       <Link to={"https://x.com/DevIsAiCoin"}>
//         <img src={Twitter} alt="" />
//       </Link>
//     </div>
//     {userLoggedIn ? (
//       <button>
//         <img src={ProfilePic} className="rounded-full w-16" alt="" />
//       </button>
//     ) : (
//       <button className="connect-btn">Connect Wallet</button>
//     )}
//   </div>
// </div>
