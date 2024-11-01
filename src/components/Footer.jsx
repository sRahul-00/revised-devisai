import { Link } from "react-router-dom";
import { Logo, Telegram, Twitter } from "../assets";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-footerColor dark:bg-darkModeFooterColor py-8 gap-4">
      <div className="w-32">
        <img src={Logo} alt="" />
      </div>
      <h1 className="text-3xl font-semibold capitalize ">
        your vote counts - don't miss out!
      </h1>
      <p className="w-1/3 text-lg">
        Make your mark in the meme coin showdown! Cast your vote today and help
        crown the next big winner.
      </p>
      <button className="vote-btn my-3">Vote Now</button>
      <div className="flex gap-10">
        <Link to={"https://t.me/DevIsAiSol"}>
          <img src={Telegram} alt="" className="w-8" />
        </Link>
        <Link to={"https://x.com/DevIsAiCoin"}>
          <img src={Twitter} alt="" className="w-8" />
        </Link>
      </div>
    </div>
  );
};
export default Footer;
