import React from 'react';

const Donate: React.FC = () => {
  return (
    <section 
      id="donate" 
      className="py-20 bg-black text-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">Make a Difference Today</h2>
            <p className="text-gray-300 text-lg mb-8">
              Your contribution can change lives. Every dollar helps us provide essential resources
              to those in need and support our community initiatives.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-yellow-400 p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-lg font-semibold mb-1">Feed the Hungry</h4>
                  <p className="text-gray-400">$25 can provide meals for a family of four for a week.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-400 p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-lg font-semibold mb-1">Provide Shelter</h4>
                  <p className="text-gray-400">$100 helps secure emergency housing for someone in need.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-400 p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-lg font-semibold mb-1">Support Education</h4>
                  <p className="text-gray-400">$50 provides educational materials for children in need.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#monthly"
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors duration-300 text-center"
              >
                Monthly Giving
              </a>
              <a
                href="#onetime"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-colors duration-300 text-center"
              >
                One-time Donation
              </a>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-900 rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Donation Form</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2" htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2" htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Donation Amount</label>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {['$25', '$50', '$100', '$250', '$500', 'Other'].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className="bg-gray-800 border border-gray-700 text-white py-2 rounded hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Donation Frequency</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="frequency" className="mr-2" defaultChecked />
                      <span>One-time</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="frequency" className="mr-2" />
                      <span>Monthly</span>
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-3 px-6 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors duration-300"
                >
                  Donate Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;