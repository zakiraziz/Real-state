import { useState } from 'react';
import { FaSearch, FaSlidersH, FaMapMarkerAlt, FaHome, FaDollarSign } from 'react-icons/fa';

const Search = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    type: 'All Types',
    priceRange: 'All Prices',
    bedrooms: '',
    bathrooms: '',
    advancedOpen: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  const toggleAdvanced = () => {
    setSearchParams(prev => ({ ...prev, advancedOpen: !prev.advancedOpen }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg -mt-16 relative z-10 mx-4 max-w-6xl w-full">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Location */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="location"
                placeholder="City, State or Zip"
                className="w-full pl-10 p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchParams.location}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
            <div className="relative">
              <FaHome className="absolute left-3 top-3 text-gray-400" />
              <select
                name="type"
                className="w-full pl-10 p-2 border rounded-md appearance-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchParams.type}
                onChange={handleChange}
              >
                <option>All Types</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Condo</option>
                <option>Townhouse</option>
                <option>Villa</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
            <div className="relative">
              <FaDollarSign className="absolute left-3 top-3 text-gray-400" />
              <select
                name="priceRange"
                className="w-full pl-10 p-2 border rounded-md appearance-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchParams.priceRange}
                onChange={handleChange}
              >
                <option>All Prices</option>
                <option>$0 - $100,000</option>
                <option>$100,000 - $300,000</option>
                <option>$300,000 - $500,000</option>
                <option>$500,000 - $750,000</option>
                <option>$750,000 - $1,000,000</option>
                <option>$1,000,000+</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end space-x-2">
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md transition duration-300 flex items-center justify-center"
            >
              <FaSearch className="mr-2" />
              Search
            </button>
            <button
              type="button"
              onClick={toggleAdvanced}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-3 rounded-md transition duration-300"
              aria-label="Advanced filters"
            >
              <FaSlidersH />
            </button>
          </div>
        </div>

        {/* Advanced Search Options */}
        {searchParams.advancedOpen && (
          <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
              <select
                name="bedrooms"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchParams.bedrooms}
                onChange={handleChange}
              >
                <option value="">Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                <option>5+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
              <select
                name="bathrooms"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchParams.bathrooms}
                onChange={handleChange}
              >
                <option value="">Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Square Feet</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

        {/* Recently Searched Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-gray-500">Popular: </span>
          <button
            type="button"
            onClick={() => setSearchParams(prev => ({ ...prev, type: 'House', priceRange: '$300,000 - $500,000' }))}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition"
          >
            Houses $300-500K
          </button>
          <button
            type="button"
            onClick={() => setSearchParams(prev => ({ ...prev, type: 'Apartment', bedrooms: '2+' }))}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition"
          >
            2+ Bed Apartments
          </button>
          <button
            type="button"
            onClick={() => setSearchParams(prev => ({ ...prev, location: 'New York' }))}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition"
          >
            New York
          </button>
        </div>
      </form>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search;
