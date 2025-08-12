import { useState } from 'react';
import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';

const PropertiesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const allProperties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      type: "apartment",
      address: "123 Main St, New York, NY",
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      price: 450000,
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Luxury Villa with Pool",
      type: "villa",
      address: "456 Ocean Dr, Miami, FL",
      bedrooms: 4,
      bathrooms: 3.5,
      area: 3200,
      price: 1200000,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Cozy Suburban Home",
      type: "house",
      address: "789 Maple Ave, Chicago, IL",
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      price: 325000,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      title: "Chic City Loft",
      type: "condo",
      address: "101 Arts District, Los Angeles, CA",
      bedrooms: 1,
      bathrooms: 1,
      area: 900,
      price: 575000,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      title: "Spacious Family Home",
      type: "house",
      address: "202 Park Lane, Austin, TX",
      bedrooms: 5,
      bathrooms: 3,
      area: 2800,
      price: 650000,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 6,
      title: "Waterfront Property",
      type: "house",
      address: "303 Bay View, Seattle, WA",
      bedrooms: 4,
      bathrooms: 2.5,
      area: 2400,
      price: 850000,
      image: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 7,
      title: "Downtown Penthouse",
      type: "apartment",
      address: "404 Skyline Blvd, San Francisco, CA",
      bedrooms: 3,
      bathrooms: 3,
      area: 2200,
      price: 2200000,
      image: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 8,
      title: "Mountain Retreat",
      type: "cabin",
      address: "505 Forest Rd, Aspen, CO",
      bedrooms: 4,
      bathrooms: 3,
      area: 3000,
      price: 950000,
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const filteredProperties = activeFilter === 'all' 
    ? allProperties 
    : allProperties.filter(property => property.type === activeFilter);

  return (
    <div>
      <Header />
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-dark">Our Property Listings</h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'all' ? 'bg-primary text-white' : 'bg-white text-dark'}`}
            >
              All Properties
            </button>
            <button 
              onClick={() => setActiveFilter('house')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'house' ? 'bg-primary text-white' : 'bg-white text-dark'}`}
            >
              Houses
            </button>
            <button 
              onClick={() => setActiveFilter('apartment')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'apartment' ? 'bg-primary text-white' : 'bg-white text-dark'}`}
            >
              Apartments
            </button>
            <button 
              onClick={() => setActiveFilter('condo')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'condo' ? 'bg-primary text-white' : 'bg-white text-dark'}`}
            >
              Condos
            </button>
            <button 
              onClick={() => setActiveFilter('villa')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'villa' ? 'bg-primary text-white' : 'bg-white text-dark'}`}
            >
              Villas
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PropertiesPage;