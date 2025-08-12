import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Search from '../components/Search';
import Properties from '../components/Properties';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [email, setEmail] = useState('');

  const featuredProperties = [
    // ... (keep your existing properties array)
  ];

  const categories = [
    { id: 'all', name: 'All Properties', count: 24 },
    { id: 'apartment', name: 'Apartments', count: 8 },
    { id: 'house', name: 'Houses', count: 12 },
    { id: 'villa', name: 'Villas', count: 4 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Right Neighborhood',
      excerpt: 'Key factors to consider when selecting your perfect neighborhood.',
      date: 'May 15, 2023',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      title: 'First-Time Home Buyer Guide',
      excerpt: 'Everything you need to know as a first-time home buyer.',
      date: 'June 2, 2023',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      title: '2023 Real Estate Market Trends',
      excerpt: 'The latest trends shaping the real estate market this year.',
      date: 'June 18, 2023',
      image: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const filteredProperties = featuredProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         property.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || property.type.toLowerCase() === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      
      <Search 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
      />
      
      {/* Featured Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(category => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${activeCategory === category.id ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      <Properties properties={filteredProperties} />
      
      <Testimonials />
      
      {/* Recent Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Real Estate Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <motion.div 
                key={post.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <h3 className="text-xl font-bold my-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="text-primary hover:text-secondary font-medium">
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest property listings and real estate news.
          </p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow p-3 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent hover:bg-pink-600 font-bold py-3 px-6 rounded-r-lg transition duration-300"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
