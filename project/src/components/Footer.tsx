import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/1000005447 (1) (1) (1).png" 
                alt="Kindness Unlimited Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
              <h3 className="ml-3 font-bold text-2xl text-yellow-400">
                Kindness Unlimited
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              We believe that kindness knows no bounds. Our mission is to spread compassion and 
              support to communities in need across the world.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/buildgreatness" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-yellow-400 text-white hover:text-black p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/buildgreatness/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-yellow-400 text-white hover:text-black p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-yellow-400 text-white hover:text-black p-2 rounded-full transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-yellow-400 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Mission', 'Honor', 'Testimonials', 'Donate', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="/founder"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">›</span>
                  Founder
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold text-yellow-400 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="text-yellow-400 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-300">212-731-9869</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-yellow-400 mr-3 flex-shrink-0" size={18} />
                <a href="mailto:buildgreatness@hotmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  buildgreatness@hotmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold text-yellow-400 mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates on our projects and events.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Kindness Unlimited. All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="#terms" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#privacy" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#cookies" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;