import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">RealEstate</Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-dark hover:text-accent">Home</Link>
          <Link to="/about" className="text-dark hover:text-accent">About</Link>
          <Link to="/properties" className="text-dark hover:text-accent">Properties</Link>
          <Link to="/contact" className="text-dark hover:text-accent">Contact</Link>
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;