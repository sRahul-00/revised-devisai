import { Link } from "react-router-dom";
import { Telegram, Twitter, Web } from "../assets";

const LaunchedTokenCard = ({ token }) => {
  const { imgPath, name, description } = token;

  return (
    <div>
      <div className="border p-4 bg-cardBackground dark:bg-darkModeFooterColor border-cardBorderColor rounded-lg shadow-lg hover:shadow-xl hover:shadow-slate-600 transition-shadow group relative">
        <div>
          <img src={imgPath.TrollGold} alt="" />
        </div>

        <div>
          <div className="flex justify-between my-3">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <div className="flex gap-4 mr-3 items-center">
              <Link to={"https://x.com/DevIsAiCoin"}>
                <img src={Twitter} alt="" className="w-5" />
              </Link>
              <Link to={"https://t.me/DevIsAiSol"}>
                <img src={Telegram} alt="" className="w-6" />
              </Link>
              <Link to={"https://pump.fun"}>
                <img src={Web} alt="" className="w-6" />
              </Link>
            </div>
          </div>
          <p className="absolute bottom-36 left-0 right-0 bg-cardBackground dark:bg-darkModeFooterColor opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 p-3 z-10">
            {description}
          </p>
          <div className="flex justify-center my-5">
            <Link to="https://pump.fun" className="vote-btn w-full text-center">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchedTokenCard;
