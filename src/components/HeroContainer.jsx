import { CryptoCoin } from "../assets";
import Timer from "./Timer";

const HeroContainer = () => {
  return (
    <div className="flex gap-16 md:justify-evenly md:flex-row flex-col-reverse items-center">
      <div className="md:w-6/12 w-2/3 p-2 flex flex-col items-center md:items-start gap-5">
        <h1 className="text-5xl font-bold leading-snug">
          <span className="text-greenYellow">Time Left</span> For The Current
          Meme Coin Showdown
        </h1>
        <h3 className="capitalize text-xl mt-6 tracking-wide leading-7 mb-10">
          Don't Miss your chance to vote for your favorite meme-token before
          time runs out!
        </h3>

        {/* Timer */}

        <Timer />
        <button className="vote-btn mt-8">Vote Now</button>
      </div>
      <div className="md:w-1/3 w-2/4">
        <img src={CryptoCoin} alt="" />
      </div>
    </div>
  );
};
export default HeroContainer;
