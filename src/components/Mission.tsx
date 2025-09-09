import React from 'react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Our Mission</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Join Our Movement</h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Join our movement by listening, empowering others. We give voice to those forgotten by society.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Every encounter with someone experiencing homelessness is a chance to learn, to connect, and to show kindness. When we take the time to listen, we find wisdom, resilience, and often, a profound faith in life.
            </p>
            <div className="mb-6">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-2 italic">
                "We must report what we see to the world — be the change we want to see."
              </p>
              <p className="text-yellow-600 text-base md:text-lg font-medium">
                — Radu Brylynskei
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
              <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <span className="text-black font-semibold text-sm">Community Support</span>
              </div>
              
              <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <span className="text-black font-semibold text-sm">Compassionate Action</span>
              </div>
              
              <div className="flex items-center bg-gray-50 p-3 rounded-lg sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <span className="text-black font-semibold text-sm">Empowering Others</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative flex items-stretch">
            <div className="relative w-full">
              <img 
                src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="People helping others" 
                className="rounded-lg shadow-xl w-full h-full min-h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-4 rounded-lg shadow-lg">
                <p className="text-black text-xl font-bold">10+ Years</p>
                <p className="text-black text-sm">Of Community Service</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-black mb-3">Shelter Support</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              We provide essential resources to homeless shelters and work to create safe spaces for those in need.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-black mb-3">Food Programs</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our food distribution programs ensure that nutritious meals reach those experiencing food insecurity.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-black mb-3">Education Initiatives</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              We support educational programs that empower individuals to build skills and create better futures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;