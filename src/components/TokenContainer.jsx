import VoteTokenCard from "./VoteTokenCard";
import { data } from "../utils/fakeData";

const TokenContainer = () => {
  console.log(data);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 place-items-center gap-14 w-4/5 mx-auto py-11">
      <VoteTokenCard token={data[0]} />
      <VoteTokenCard token={data[0]} />
      <VoteTokenCard token={data[0]} />
      <VoteTokenCard token={data[0]} />
      <VoteTokenCard token={data[0]} />
      <VoteTokenCard token={data[0]} />
    </div>
  );
};
export default TokenContainer;
