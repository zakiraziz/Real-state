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
