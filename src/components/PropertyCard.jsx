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
  {/* Property Details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-dark hover:text-primary transition-colors cursor-pointer">
            {property.title}
          </h3>
          <span className="bg-primary text-white text-xs px-2 py-1 rounded uppercase">
            {property.type}
          </span>
        </div>

        <div className="flex items-center text-gray-600 mb-2">
          <FaMapMarkerAlt className="mr-1 text-sm" />
          <p className="text-sm">{property.address}</p>
        </div>

        <div className="flex justify-between text-sm text-gray-500 mb-4 border-b border-gray-200 pb-4">
          <span className="flex items-center">
            <FaBed className="mr-1" /> {property.bedrooms}
          </span>
          <span className="flex items-center">
            <FaBath className="mr-1" /> {property.bathrooms}
          </span>
          <span className="flex items-center">
            <FaRulerCombined className="mr-1" /> {property.area.toLocaleString()} sqft
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-primary block">{formatPrice(property.price)}</span>
            {property.pricePerSqft && (
              <span className="text-xs text-gray-500">${property.pricePerSqft}/sqft</span>
            )}
          </div>
          <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors">
            View Details
          </button>
        </div>

        {/* Additional Info */}
        {property.yearBuilt && (
          <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500">
            Built: {property.yearBuilt}
          </div>
        )}
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    area: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    featured: PropTypes.bool,
    status: PropTypes.oneOf(['For Sale', 'For Rent', 'Sold', 'Pending']),
    pricePerSqft: PropTypes.number,
    yearBuilt: PropTypes.number,
  }).isRequired,
};
    

export default PropertyCard;
