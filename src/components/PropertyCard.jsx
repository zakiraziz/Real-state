import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaShareAlt, FaMapMarkerAlt } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}K`;
    }
    return `$${price}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
      {/* Property Image with Badges */}
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {property.featured && (
          <div className="absolute top-2 left-2 bg-secondary text-white px-2 py-1 rounded text-xs font-bold">
            Featured
          </div>
        )}
        {property.status && (
          <div className={`absolute top-2 right-2 text-white px-2 py-1 rounded text-xs font-bold ${
            property.status === 'For Sale' ? 'bg-primary' : 
            property.status === 'Sold' ? 'bg-red-600' : 
            'bg-blue-600'
          }`}>
            {property.status}
          </div>
        )}
      </div>

      {/* Property Actions */}
      <div className="absolute top-40 right-2 flex flex-col space-y-2">
        <button 
          onClick={toggleFavorite}
          className={`p-2 rounded-full shadow-md ${isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-700'}`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <FaHeart />
        </button>
        <div className="relative">
          <button 
            onClick={() => setShowShareOptions(!showShareOptions)}
            className="p-2 rounded-full bg-white text-gray-700 shadow-md"
            aria-label="Share property"
          >
            <FaShareAlt />
          </button>
          {showShareOptions && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 p-2">
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Copy Link</button>
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Share on Facebook</button>
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Share on Twitter</button>
            </div>
          )}
        </div>
      </div>

    

export default PropertyCard;
