import { useState } from "react";

import svg from "../../assets/images/img.svg";
import Modal from "./Modal";
import { useAddCardsMutation } from "@/redux/api/userApi/cardsApi";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addCards] = useAddCardsMutation();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async (title: string, description: string) => {
    try {
      const data = { title, description };
      await addCards(data).unwrap();
      alert("Request submitted successfully");
    } catch (error) {
      alert("Failed to submit request");
    }
  };

  return (
    <>
      <nav className="bg-slate-900 border-b shadow-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4">
          <div className="flex items-center space-x-4 text-white text-sm md:text-base">
            <img src={svg} alt="Logo" className="w-28 h-28" />
            <span className="text-gray-500">|</span>
            <a href="#" className="hover:text-gray-300 text-xl">
              Help Center
            </a>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={handleOpenModal}
              className="border border-white text-white text-sm md:text-base py-2 px-4 rounded-lg hover:text-slate-300"
            >
              Submit a Request
            </button>
          </div>
        </div>
      </nav>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default Navbar;
