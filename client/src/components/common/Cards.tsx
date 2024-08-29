import { TCard } from "@/types";

const Cards = ({ card }: { card: TCard }) => {
  return (
    <div className="border  border-gray-500 border-opacity-30 w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-4/12 h-60 rounded-lg shadow-sm mt-3 mx-5 bg-slate-200">
      <div>
        <h2 className="text-lg font-semibold px-4 py-2">{card?.title}</h2>
        <hr className="my-2 w-full border-t border-gray-500 border-opacity-30" />
        <p className="mt-2 text-sm text-gray-600 py-6 px-4">
          {card?.description}
        </p>
      </div>
    </div>
  );
};

export default Cards;
