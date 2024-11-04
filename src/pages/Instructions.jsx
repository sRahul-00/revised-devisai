import { AddSol, Connect, Trophy } from "../assets";

const Instructions = () => {
  return (
    <div className="flex flex-col gap-16 mb-16 p-8">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold mt-8">Instructions</h1>
        <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
          Step-by-step instructions to help you navigate DevIsAI, from voting on
          meme tokens to engaging with the community and beyond!
        </p>
      </div>
      <div className="flex items-center justify-center flex-col gap-14">
        {/* instruction-1 */}
        <div className="flex md:flex-row flex-col gap-10 justify-center items-center md:w-4/6">
          <div className="md:w-2/5">
            <img src={Connect} alt="" className="w-44" />
          </div>
          <div className="flex flex-col md:w-3/5">
            <h2 className="text-2xl font-bold mt-8 mb-5">
              How to Connect Your Wallet
            </h2>

            <div className="ml-4 flex flex-col gap-1">
              <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                1. Click on the "Connect Wallet" button located at the top right
                corner of the homepage or voting page
              </p>
              <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                2. Choose your preferred wallet: Solflare or Phantom.
              </p>
              <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                3. Follow the prompts to authorize the connection.
              </p>
              <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                4. Once connected, you can start voting on your favorite meme
                tokens.
              </p>
            </div>
          </div>
        </div>

        {/* instruction-2 */}
        <div className="flex items-center justify-center gap-10 md:w-4/6 md:flex-row flex-col">
          <div className="md:w-2/5">
            <img src={AddSol} alt="" className="w-48" />
          </div>
          <div className="flex-col items-center justify-center md:w-3/5">
            <h2 className="text-2xl font-bold mt-8 mb-5">How To Vote</h2>
            <div className="ml-4 flex flex-col gap-1">
              <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                1. Navigate to the "Vote" section from the main menu
              </p>
              <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                2. Connect Your Wallet
              </p>
              <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                3. Click on the "Vote" button next to your preferred meme token.
              </p>
              <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                4. You can only cast one vote
              </p>
              <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                5. You have to cast your vote before the timer run out
              </p>
              <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                6. Your vote will be recorded, and you can track the progress in
                real-time.
              </p>
              <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                7. You can also change your vote by voting another meme token
              </p>
            </div>
          </div>
        </div>

        {/* instruction-3 */}
        <div className="flex items-center justify-center gap-10 md:w-4/6 mt-4 md:flex-row flex-col">
          <div className="md:w-2/5 flex justify-start">
            <img src={Trophy} alt="" className="w-60" />
          </div>
          <div className="md:w-3/5">
            <h2 className="text-2xl font-bold mt-8 mb-5">
              Checking The Leaderboard
            </h2>
            <div className="ml-4 flex flex-col gap-1">
              <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                1. Go to the "Leaderboard" section to see the past winners
              </p>
              <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                2. The leaderboard is updated daily with the winning tokens
              </p>
              <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                3. For each token, you can
                <div className="ml-3">
                  <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                    3.1 Buy: Click on the "Buy" button to purchase the token
                  </p>
                  <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                    3.2 Website: Click on the globe icon to visit the token's
                    website
                  </p>
                  <p className="md:leading-7 leading-9 dark:text-gray-400 text-gray-600 font-semibold text-lg">
                    3.3 Telegram: Click on the Telegram icon to join their
                    community channel
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Instructions;
