const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-dark">{property.title}</h3>
          <span className="bg-primary text-white text-sm px-2 py-1 rounded">{property.type}</span>
        </div>
        <p className="text-gray-600 mb-4">{property.address}</p>
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
          <span>{property.area} sqft</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-primary">${property.price.toLocaleString()}</span>
          <button className="text-accent hover:text-secondary font-medium">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;