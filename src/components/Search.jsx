const Search = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg -mt-16 relative z-10 mx-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input type="text" placeholder="City, State" className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
          <select className="w-full p-2 border rounded-md">
            <option>All Types</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Commercial</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <select className="w-full p-2 border rounded-md">
            <option>All Prices</option>
            <option>$0 - $100,000</option>
            <option>$100,000 - $300,000</option>
            <option>$300,000 - $500,000</option>
            <option>$500,000+</option>
          </select>
        </div>
        <div className="flex items-end">
          <button className="w-full bg-primary hover:bg-secondary text-white py-2 px-4 rounded-md transition duration-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;