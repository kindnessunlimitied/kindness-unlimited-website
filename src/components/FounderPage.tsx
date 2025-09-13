import React from 'react';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface FounderPageProps {
  onLogoClick?: () => void;
}

const FounderPage: React.FC<FounderPageProps> = ({ onLogoClick }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && onLogoClick) {
        onLogoClick();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onLogoClick]);

  return (
    <div className="min-h-screen bg-white">
      <Header onLogoClick={onLogoClick} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 charity-title">
              About Our Founder
            </h1>
            <div className="w-20 h-1 bg-black mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Founder Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Founder Photo and Name */}
            <div className="text-center mb-16">
              <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl">
                <img 
                  src="/gallery/radu.jpg" 
                  alt="Radu Brylynskei" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 charity-title">
                Radu Brylynskei
              </h2>
              <p className="text-xl text-gray-600 italic">
                Founder & Kindness Ambassador
              </p>
            </div>

            {/* Story Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 rounded-xl p-8 mb-12">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  From a small town in Romania to the world's most remote corners, my journey has been shaped by kindness, curiosity, and an unshakable belief in the goodness of people.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  I once joined the French Foreign Legion, thinking strength meant toughness. I quickly learned that true strength is found in compassion, not conflict.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  I speak six languages and have told stories across many cultures. I've written a book, "Children of Communism", and created a podcast, "Stories from All Over the World", to spread light, hope, and love.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  I learned that listening was the greatest gift—and the people society often ignores had the most powerful stories to tell.
                </p>

                <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-400 mb-8">
                  <p className="text-gray-800 text-xl italic font-medium mb-2">
                    "Lots of humans around, but no humanity."
                  </p>
                  <p className="text-gray-600">
                    — overheard on my journey
                  </p>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Faith, for me, is not about religion. It's about connection—with each other and with something greater. We don't care about your politics or religion. We care that you're human. And we're here to serve with love.
                </p>

                <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-400">
                  <p className="text-gray-800 text-xl italic font-medium mb-2">
                    "We are not human beings having a spiritual experience; we are spiritual beings having a human experience."
                  </p>
                  <p className="text-gray-600">
                    — Pierre Teilhard de Chardin
                  </p>
                </div>
              </div>

              {/* What You Can Do Section */}
              <div className="bg-black text-white rounded-xl p-8">
                <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center charity-title">
                  What You Can Do
                </h3>
                
                <p className="text-white text-lg mb-8 text-center">
                  You can become a Kindness Ambassador right where you are:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    'Buy someone a meal.',
                    'Offer a smile or a kind word.',
                    'Donate to support our work.',
                    'Join us on a mission.',
                    'Volunteer at a soup kitchen or outreach center.',
                    'Pray. Encourage. Share hope.'
                  ].map((action, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-yellow-400 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-white text-lg">{action}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-yellow-400">
                  <p className="text-white text-xl italic font-medium mb-2">
                    "Not all of us can do great things. But we can do small things with great love."
                  </p>
                  <p className="text-yellow-400">
                    — Mother Teresa
                  </p>
                </div>

                <div className="text-center mt-8">
                  <a
                    href="/#donate"
                    className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors duration-300 inline-block"
                  >
                    Start Your Journey
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FounderPage;