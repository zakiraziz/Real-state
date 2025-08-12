const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream Home Today</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover a place you'll love to live. Browse thousands of properties for sale and rent.
        </p>
        <button className="bg-accent hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Browse Properties
        </button>
      </div>
    </section>
  );
};

export default Hero;