const Navbar = () => {
  return (
    <nav className="bg-slate-900 border-b shadow-sm">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4">
        {/* Left side: Abstract | Help Center */}
        <div className="flex items-center space-x-4 text-white text-sm md:text-base">
          <a href="#" className="hover:text-gray-300">
            Abstract
          </a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:text-gray-300">
            Help Center
          </a>
        </div>

        {/* Right side: Submit a Request button */}
        <div className="mt-4 md:mt-0">
          <button className="bg-blue-600 text-white text-sm md:text-base py-2 px-4 rounded-md hover:bg-blue-700">
            Submit a Request
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
