import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    type: 'video',
    url: "https://cdn.videvo.net/videvo_files/video/premium/video0036/small_watermarked/computer_code00_preview.mp4",
    title: "Next-Gen Security",
    description: "Experience advanced security features and protection"
  },
  {
    type: 'image',
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1920",
    title: "Developer's Choice",
    description: "Built for modern development workflows"
  },
  {
    type: 'video',
    url: "https://cdn.videvo.net/videvo_files/video/premium/video0036/small_watermarked/computer_code02_preview.mp4",
    title: "Community Powered",
    description: "Supported by a growing community of innovators"
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        nextSlide();
      }, 8000); // Longer interval for videos
    }
    return () => clearInterval(timer);
  }, [currentIndex, isPlaying]);

  const renderSlideContent = () => {
    const slide = slides[currentIndex];
    if (slide.type === 'video') {
      return (
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          onPlay={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(true)}
        >
          <source src={slide.url} type="video/mp4" />
        </video>
      );
    }
    return (
      <div
        style={{
          backgroundImage: `url(${slide.url})`,
        }}
        className="w-full h-full bg-center bg-cover"
      />
    );
  };

  return (
    <div className="relative h-[600px] w-full group">
      <div className="w-full h-full bg-black relative overflow-hidden">
        {renderSlideContent()}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col text-white text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{slides[currentIndex].title}</h2>
          <p className="text-xl md:text-2xl max-w-2xl">{slides[currentIndex].description}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeft onClick={prevSlide} className="h-6 w-6" />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRight onClick={nextSlide} className="h-6 w-6" />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentIndex === slideIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}