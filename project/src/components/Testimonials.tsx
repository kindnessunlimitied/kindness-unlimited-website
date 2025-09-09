import React, { useState } from 'react';

interface Testimonial {
  id: number;
  author: string;
  quote: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      author: "Leo Tolstoy",
      quote: "My piece of bread only belongs to me when I know that everyone else has a share, and that no one starves while I eat.",
      image: "/gallery/LeoTolstoy.png"
    },
    {
      id: 2,
      author: "Vincent Van Gogh",
      quote: "To save a life is a beautiful thing. To make a home for the homeless—it must be good. Whatever the world may say, it cannot be wrong.",
      image: "/gallery/Vincent_van_Gogh_-_s0273V1962_-_Van_Gogh_Museum.jpg"
    },
    {
      id: 3,
      author: "Ron Hall",
      quote: "The biggest misconception is that the homeless are lazy. I urge you to meet someone at your local mission—you'll see how wrong that is.",
      image: "/gallery/Ron_Hall_BSurface_digital.webp"
    },
    {
      id: 4,
      author: "Syesha Mercado",
      quote: "Before you ignore another homeless person, remember—they could be someone's parent, and they have a story.",
      image: "/gallery/sys.jpg"
    },
    {
      id: 5,
      author: "Richard Gere",
      quote: "Small acts of kindness can change lives.",
      image: "/gallery/MV5BMTI2NDQ2OTY4M15BMl5BanBnXkFtZTYwNTYyNjc4._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 6,
      author: "Daniel Quinn",
      quote: "Don't force the homeless into places you find suitable. Help them survive in the places they choose.",
      image: "/gallery/71yI698nOKL.jpg"
    },
    {
      id: 7,
      author: "Dalai Lama",
      quote: "Our prime purpose in life is to help others. If you can't help them, at least don't hurt them.",
      image: "/gallery/Tenzin_Gyatso_-_14th_Dalai_Lama_(2012).jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Voices That Define Our Mission</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          <p className="text-gray-700 mt-6 max-w-2xl mx-auto">
            Hear from those who inspire our mission and remind us why kindness matters.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <div className="relative mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-yellow-400">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].author}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/3 md:pl-8">
                <svg className="w-12 h-12 text-yellow-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-800 text-lg md:text-xl italic mb-6">
                  {testimonials[activeIndex].quote}
                </p>
                <p className="text-black font-bold text-xl">— {testimonials[activeIndex].author}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-yellow-400 text-black rounded-full p-2 focus:outline-none hover:bg-yellow-300 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-yellow-400 text-black rounded-full p-2 focus:outline-none hover:bg-yellow-300 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Thumbnails */}
          <div className="flex flex-wrap justify-center gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`relative cursor-pointer transition-all duration-300 ${
                  index === activeIndex ? 'opacity-100 scale-110' : 'opacity-60 hover:opacity-80'
                }`}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 ${
                  index === activeIndex ? 'border-yellow-400' : 'border-gray-200'
                }`}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {hoverIndex === index && (
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs p-2 rounded whitespace-nowrap z-10">
                    {testimonial.author}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;