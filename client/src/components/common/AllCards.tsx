import { useState } from "react";
import { useGetCardsQuery } from "@/redux/api/userApi/cardsApi";
import Cards from "./Cards";
import { TCard } from "@/types";
import SearchBar from "./SearchBar";

const AllCards = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useGetCardsQuery({});

  const filteredCards = data?.data?.filter((card: TCard) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      <div className="flex flex-wrap justify-center items-center mt-16 gap-16 ">
        {filteredCards?.map((card: TCard) => (
          <Cards key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default AllCards;
