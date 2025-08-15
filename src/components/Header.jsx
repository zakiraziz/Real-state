import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaUser, FaHeart, FaSearch, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
    // You would typically redirect to search results page
    // navigate(`/search?q=${searchQuery}`);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white shadow-md py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary mr-2">RealEstate</span>
            <span className="hidden sm:inline-block text-xs bg-primary text-white px-2 py-1 rounded">
              Premium Properties
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-2 py-1 transition-colors ${isActive ? 'text-accent font-medium border-b-2 border-accent' : 'text-dark hover:text-accent'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-2 py-1 transition-colors ${isActive ? 'text-accent font-medium border-b-2 border-accent' : 'text-dark hover:text-accent'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/properties" 
              className={({ isActive }) => 
                `px-2 py-1 transition-colors ${isActive ? 'text-accent font-medium border-b-2 border-accent' : 'text-dark hover:text-accent'}`
              }
            >
              Properties
            </NavLink>
            <NavLink 
              to="/agents" 
              className={({ isActive }) => 
                `px-2 py-1 transition-colors ${isActive ? 'text-accent font-medium border-b-2 border-accent' : 'text-dark hover:text-accent'}`
              }
            >
              Agents
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-2 py-1 transition-colors ${isActive ? 'text-accent font-medium border-b-2 border-accent' : 'text-dark hover:text-accent'}`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search properties..."
                className="pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2 text-gray-500 hover:text-accent">
                <FaSearch />
              </button>
            </form>


export default Header;
