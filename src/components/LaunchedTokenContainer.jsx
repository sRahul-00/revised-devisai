import { data } from "../utils/fakeData";
import LaunchedTokenCard from "./LaunchedTokenCard";

const LaunchedTokenContainer = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 py-12 place-items-center gap-14 w-4/5 mx-auto">
      <LaunchedTokenCard token={data[0]} />
      <LaunchedTokenCard token={data[0]} />
      <LaunchedTokenCard token={data[0]} />
    </div>
  );
};
export default LaunchedTokenContainer;
