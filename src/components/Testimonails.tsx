import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Home Buyer",
      content: "Found my dream home in just two weeks! The service was exceptional and made the whole process so easy.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Investor",
      content: "As an investor, I appreciate their market knowledge and honest advice. Highly recommended!",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 4
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "First-time Buyer",
      content: "They patiently guided me through every step and found properties that matched exactly what I wanted.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Seller",
      content: "Sold my property above asking price in just 5 days. Their marketing strategy was impressive.",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Renter",
      content: "Found the perfect rental within my budget. The team was responsive and professional throughout.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === Math.ceil(testimonials.length / 3) - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const renderStars = (rating) => {
    return (
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with us.
          </p>
        </div>
        
        <div className="relative">
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 ease-in-out"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                {renderStars(testimonial.rating)}
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-primary" 
                  />
                  <div>
                    <h4 className="font-bold text-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {testimonials.length > 3 && (
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}

          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            onClick={() => setCurrentIndex(prev => (prev === 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1))}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            onClick={() => setCurrentIndex(prev => (prev === Math.ceil(testimonials.length / 3) - 1 ? 0 : prev + 1))}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium">
            Share Your Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
