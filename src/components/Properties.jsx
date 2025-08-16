import PropertyCard from './PropertyCard';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Properties = ({ properties }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [filter, setFilter] = useState('all');

  // Filter properties based on selection
  const filteredProperties = properties.filter(property => {
    if (filter === 'all') return true;
    return property.type === filter;
  });

  // Slice to show only the visible properties
  const visibleProperties = filteredProperties.slice(0, visibleCount);

  // Property types for filter buttons
  const propertyTypes = ['all', ...new Set(properties.map(prop => prop.type))];

  const loadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-dark">Featured Properties</h2>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {propertyTypes.map(type => (
            <button
              key={type}
              onClick={() => {
                setFilter(type);
                setVisibleCount(6);
              }}
              className={`px-4 py-2 rounded-full capitalize ${filter === type 
                ? 'bg-primary text-white' 
                : 'bg-white text-dark border border-gray-300 hover:border-primary'}`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Properties grid */}
        {visibleProperties.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {/* Load more button */}
            {visibleCount < filteredProperties.length && (
              <div className="text-center mt-10">
                <button 
                  onClick={loadMore}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Load More Properties
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No properties found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

Properties.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      type: PropTypes.string,
      // Add other property shape validations as needed
    })
  ).isRequired,
};

export default Properties;
