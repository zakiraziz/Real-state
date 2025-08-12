import Header from '../components/Header';
import Hero from '../components/Hero';
import Search from '../components/Search';
import Properties from '../components/Properties';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      type: "Apartment",
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
      type: "Villa",
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
      type: "House",
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
      type: "Condo",
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
      type: "House",
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
      type: "House",
      address: "303 Bay View, Seattle, WA",
      bedrooms: 4,
      bathrooms: 2.5,
      area: 2400,
      price: 850000,
      image: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div>
      <Header />
      <Hero />
      <Search />
      <Properties properties={featuredProperties} />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;