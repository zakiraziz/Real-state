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

            <Link to="/favorites" className="text-dark hover:text-accent transition-colors relative">
              <FaHeart />
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>

            <Link to="/account" className="text-dark hover:text-accent transition-colors">
              <FaUser />
            </Link>

            <Link 
              to="/contact" 
              className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-full flex items-center transition-colors"
            >
              <FaPhoneAlt className="mr-2" />
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white py-4 px-2 shadow-lg rounded-b-lg">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-2 rounded ${isActive ? 'bg-accent text-white' : 'text-dark hover:bg-gray-100'}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-2 rounded ${isActive ? 'bg-accent text-white' : 'text-dark hover:bg-gray-100'}`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/properties" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-2 rounded ${isActive ? 'bg-accent text-white' : 'text-dark hover:bg-gray-100'}`
                }
              >
                Properties
              </NavLink>
              <NavLink 
                to="/agents" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-2 rounded ${isActive ? 'bg-accent text-white' : 'text-dark hover:bg-gray-100'}`
                }
              >
                Agents
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-2 rounded ${isActive ? 'bg-accent text-white' : 'text-dark hover:bg-gray-100'}`
                }
              >
                Contact
              </NavLink>

              <div className="pt-4 border-t border-gray-200">
                <form onSubmit={handleSearch} className="flex mb-4">
                  <input
                    type="text"
                    placeholder="Search properties..."
                    className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button 
                    type="submit" 
                    className="bg-accent text-white px-4 py-2 rounded-r-lg hover:bg-accent-dark"
                  >
                    <FaSearch />
                  </button>
                </form>

                <div className="flex justify-around">
                  <Link 
                    to="/favorites" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-dark hover:text-accent transition-colors p-2 relative"
                  >
                    <FaHeart size={20} />
                    <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      3
                    </span>
                  </Link>

                  <Link 
                    to="/account" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-dark hover:text-accent transition-colors p-2"
                  >
                    <FaUser size={20} />
                  </Link>

                  <Link 
                    to="/contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-dark hover:text-accent transition-colors p-2"
                  >
                    <FaPhoneAlt size={20} />
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
