import { LaunchedTokenContainer } from "../components";

const Leaderboard = () => {
  return (
    <div className="mb-16 flex flex-col items-center gap-6 w-5/6 mx-auto">
      <h1 className="text-4xl font-bold mt-8">Leaderboard</h1>
      <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg text-center">
        Check out our leaderboard to see the hottest meme tokens, chosen by the
        community! New tokens debut daily. We've made it easy to buy, visit
        their sites, and join their Telegram channels. Stay updated and see
        who’s leading!
      </p>
      <LaunchedTokenContainer />
    </div>
  );
};
export default Leaderboard;
