import { useState } from "react";
import { useGetCardsQuery } from "@/redux/api/userApi/cardsApi";

import { TCard } from "@/types";
import SearchBar from "@/components/common/SearchBar";
import Cards from "@/components/common/Cards";

const HomePage = () => {
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

      <div className="flex flex-wrap justify-center items-center mt-16 gap-16">
        {filteredCards?.length ? (
          filteredCards.map((card: TCard) => (
            <Cards key={card._id} card={card} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-8">
            No titles found, try again!
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
