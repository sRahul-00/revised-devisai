import { Link } from "react-router-dom";
import { DevIsAI } from "../assets";
import { Features } from "../components";

const About = () => {
  return (
    <div className="flex flex-col items-center w-full p-10">
      <h1 className="text-4xl font-bold my-5">
        Welcome to Daily Meme Token Voting!
      </h1>
      <p className="md:w-10/12 text-lg md:leading-8 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-center">
        At Devisai.com, we bring the vibrant meme token universe to life. Every
        day, you can explore 20 fresh and exciting meme tokens, each with its
        unique appeal. Cast your vote in our daily event and help choose the
        Meme Token of the Day. Your voice matters, and with every vote, you
        shape the future of the meme token community.
      </p>

      <Link className="vote-btn my-10" to="/">
        Vote now
      </Link>
      {/* video */}

      <h1 className="text-4xl font-bold mt-8">About DevIsAI</h1>
      <div className="flex md:flex-row flex-col  gap-10 md:w-10/12 flex-1 items-center mt-6">
        <p className="md:leading-8 leading-9 text-lg dark:text-gray-400 text-gray-600 font-semibold ">
          Devisai is on a mission to transform the meme token landscape by
          offering an engaging platform where daily voting and interaction drive
          the community. With our intuitive interface, users can easily explore
          and vote for their favourite meme tokens, contributing to a lively and
          ever-evolving community. Powered by advanced AI, Devisai continuously
          adapts, refining and generating even better meme tokens. It’s all
          designed to foster an endlessly growing ecosystem for meme coin
          enthusiasts and creators alike
        </p>
        <img src={DevIsAI} alt="" className="md:w-1/3 w-64" />
      </div>

      <h1 className="text-4xl font-bold mt-8">Features</h1>
      <Features />
    </div>
  );
};
export default About;
