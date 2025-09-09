import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") no-repeat center center/cover'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-yellow-400 text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fadeIn charity-title">
            Kindness Unlimited
          </h1>
          <div className="mb-8 animate-fadeIn animation-delay-200">
            <p className="text-white text-xl md:text-2xl mb-2">
              "We are poor only when we think we have nothing to give!"
            </p>
            <p className="text-yellow-400 text-lg md:text-xl font-medium">
              — Radu Brylynskei
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn animation-delay-400">
            <a
              href="#donate"
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors duration-300"
            >
              Donate Now
            </a>
            <a
              href="#mission"
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <a 
          href="#mission" 
          className="inline-block animate-bounce"
        >
          <svg 
            className="w-10 h-10 text-yellow-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;