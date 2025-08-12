import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-dark">About Our Real Estate Agency</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, our agency has been helping clients find their dream homes for over a decade. 
                What started as a small local office has grown into one of the most trusted names in real estate.
              </p>
              <p className="text-gray-600 mb-4">
                We pride ourselves on our deep market knowledge, honest advice, and commitment to our clients' 
                satisfaction. Our team of experienced agents brings together decades of combined experience.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Our office" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-light p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-gray-600">
                To make the process of buying, selling, or renting properties as smooth and stress-free as possible 
                while delivering exceptional value to our clients.
              </p>
            </div>
            <div className="bg-light p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Our Values</h3>
              <p className="text-gray-600">
                Integrity, professionalism, and personalized service are at the core of everything we do. We treat 
                every client like family.
              </p>
            </div>
            <div className="bg-light p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Our Team</h3>
              <p className="text-gray-600">
                50+ dedicated professionals with diverse expertise in residential, commercial, and luxury properties 
                across all price ranges.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Over 1,000 satisfied clients served</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Average 98% client satisfaction rating</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Local market experts with neighborhood-specific knowledge</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Full-service agency handling all aspects of the transaction</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Competitive commission rates with no hidden fees</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;