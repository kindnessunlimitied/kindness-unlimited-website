import React, { useState, useEffect } from 'react';

interface HonorImage {
  id: number;
  src: string;
  alt: string;
}

const HonorGallery: React.FC = () => {
  const honorImages: HonorImage[] = [
    {
      id: 1,
      src: "/gallery/1000004052.jpg",
      alt: "Person we honor"
    },
    {
      id: 2,
      src: "/gallery/1000004053.jpg",
      alt: "Person we honor"
    },
    {
      id: 3,
      src: "/gallery/1000004054.jpg",
      alt: "Person we honor"
    },
    {
      id: 4,
      src: "/gallery/1000004055.jpg",
      alt: "Person we honor"
    },
    {
      id: 5,
      src: "/gallery/1000004056.jpg",
      alt: "Person we honor"
    },
    {
      id: 6,
      src: "/gallery/1000004057.jpg",
      alt: "Person we honor"
    },
    {
      id: 7,
      src: "/gallery/1000004058.jpg",
      alt: "Person we honor"
    },
    {
      id: 8,
      src: "/gallery/1000004059.jpg",
      alt: "Person we honor"
    },
    {
      id: 9,
      src: "/gallery/1000004060.jpg",
      alt: "Person we honor"
    },
    {
      id: 10,
      src: "/gallery/1000004061.jpg",
      alt: "Person we honor"
    },
    {
      id: 11,
      src: "/gallery/1000004052 copy.jpg",
      alt: "Person we honor"
    },
    {
      id: 12,
      src: "/gallery/1000004053 copy.jpg",
      alt: "Person we honor"
    },
    {
      id: 13,
      src: "/gallery/1000004054 copy.jpg",
      alt: "Person we honor"
    },
    {
      id: 14,
      src: "/gallery/1000004055 copy.jpg",
      alt: "Person we honor"
    },
    {
      id: 15,
      src: "/gallery/1000004056 copy.jpg",
      alt: "Person we honor"
    },
    {
      id: 16,
      src: "/gallery/1000004062.jpg",
      alt: "Person we honor"
    },
    {
      id: 17,
      src: "/gallery/1000004063.jpg",
      alt: "Person we honor"
    },
    {
      id: 18,
      src: "/gallery/1000004064.jpg",
      alt: "Person we honor"
    },
    {
      id: 19,
      src: "/gallery/1000004065.jpg",
      alt: "Person we honor"
    },
    {
      id: 20,
      src: "/gallery/1000004066.jpg",
      alt: "Person we honor"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<HonorImage | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, honorImages.length - 4);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [honorImages.length, isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, honorImages.length - 4);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, honorImages.length - 4);
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const openLightbox = (image: HonorImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Get current 4 images to display
  const currentImages = honorImages.slice(currentIndex, currentIndex + 4);
  
  // If we don't have 4 images, pad with images from the beginning
  while (currentImages.length < 4 && honorImages.length > 0) {
    const remainingIndex = (currentIndex + currentImages.length) % honorImages.length;
    currentImages.push(honorImages[remainingIndex]);
  }

  return (
    <section id="honor" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">We Honor Them</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        {/* Photo Gallery - 4 squares */}
        <div className="max-w-4xl mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {currentImages.map((image, index) => (
              <div 
                key={`${image.id}-${currentIndex}-${index}`}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                onClick={() => openLightbox(image)}
              >
                <div className="aspect-square">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {honorImages.length > 4 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-yellow-400 text-black rounded-full p-2 shadow-lg hover:bg-yellow-300 transition-colors duration-300 focus:outline-none"
                aria-label="Previous photos"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-yellow-400 text-black rounded-full p-2 shadow-lg hover:bg-yellow-300 transition-colors duration-300 focus:outline-none"
                aria-label="Next photos"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Progress Indicators */}
          {honorImages.length > 4 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.max(1, honorImages.length - 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-yellow-400' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to photo set ${index + 1}`}
                />
              ))}
            </div>
          )}
          
          <div className="text-center mt-8">
            <p className="text-gray-700 text-xl italic font-medium">
              "We honor, we appreciate and we love them"
            </p>
          </div>
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-yellow-400 text-black rounded-full p-2 hover:bg-yellow-300 transition-colors"
                aria-label="Close lightbox"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HonorGallery;