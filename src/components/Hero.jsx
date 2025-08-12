import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  ];

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[500px] overflow-hidden">
      {/* Background images with fade transition */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Find Your <span className="text-accent">Dream Home</span> Today
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Discover a place you'll love to live among thousands of properties
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/properties" 
                className="inline-block bg-accent hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full transition duration-300"
              >
                Browse Properties
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="inline-block bg-transparent hover:bg-white hover:text-primary border-2 border-white text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                Contact Agent
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Search box overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-2xl p-6 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="City, State or ZIP" 
                  className="w-full p-3 border rounded-lg pl-10 focus:ring-2 focus:ring-primary"
                />
                <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
              <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary">
                <option>All Types</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
              <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary">
                <option>Any Price</option>
                <option>$0 - $300,000</option>
                <option>$300,000 - $600,000</option>
                <option>$600,000+</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <button className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                Search
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentImage ? 'bg-accent w-6' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
