import { useState } from "react";

const VoteTokenCard = ({ token }) => {
  const { imgPath, name, description, voteCount } = token;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="token border p-4 bg-cardBackground border-cardBorderColor rounded-lg shadow-lg hover:shadow-xl hover:shadow-slate-600 transition-shadow group relative">
      <div className="">
        <img src={imgPath.TrollGold} alt="" />
      </div>

      <div className="flex justify-between my-3">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <h2 className="text-xl mr-3">Votes: {voteCount}</h2>
      </div>

      {/* Slide-in description */}
      <p className="absolute bottom-36 left-0 right-0 bg-cardBackground dark:bg-darkModeFooterColor opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 p-4 z-10">
        {/* {description} */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        accusamus, deleniti quam pariatur ab totam obcaecati vero quae velit
        quia reiciendis doloribus. Cumque illum corporis excepturi maxime quae
        neque quo.
      </p>

      <div className="flex justify-center my-5">
        <button className="vote-btn w-full">Cast My Vote</button>
      </div>
    </div>
  );
};
export default VoteTokenCard;
// slide-in effect
// <div className="border p-4 bg-cardBackground border-cardBorderColor rounded-lg shadow-lg hover:shadow-xl hover:shadow-slate-600 transition-shadow">
//   <div>
//     <img src={imgPath.TrollGold} alt="" />
//   </div>

//   <div>
//     <div className="flex justify-between my-3">
//       <h1 className="text-2xl font-semibold">{name}</h1>
//       <h2 className="text-xl mr-3">Votes: {voteCount}</h2>
//     </div>
//     <p className="text-lg">{description}</p>
//     <div className="flex justify-center my-5">
//       <button className="vote-btn w-full">Cast My Vote</button>
//     </div>
//   </div>
// </div>
