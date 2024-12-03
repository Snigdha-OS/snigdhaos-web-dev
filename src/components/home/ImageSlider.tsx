import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    type: 'image',
    url: "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Data Encryption",
    description: "Protect sensitive information with strong encryption protocols."
  },
  {
    type: 'image',
    url: "https://images.unsplash.com/photo-1516314175872-b4fe7fe63f55?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA3fDB8MHxwaG90by1mZWF0Y2h8Mnx8c3lzdGVtcyUyMGF0JTIwd29yayxlbnwwfHx8fDE2NzgzNjI4NzY&ixlib=rb-1.2.1&q=80&w=1080",
    title: "Firewalls",
    description: "Secure your network with advanced firewall protection."
  },
  {
    type: 'image',
    url: "https://images.unsplash.com/photo-1584697964178-70f5289cbbd1?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA3fDB8MHxwaG90by1mZWF0Y2h8OXx8c3lzdGVtcyUyMGFuZCUyMHNlY3VyaXR5fGVufDB8fHx8fDE2NzgzNjM0NjQ&ixlib=rb-1.2.1&q=80&w=1080",
    title: "Malware Detection",
    description: "Detect and mitigate malware threats with sophisticated tools."
  },
  {
    type: 'image',
    url: "https://images.unsplash.com/photo-1584697964178-70f5289cbbd1?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA3fDB8MHxwaG90by1mZWF0Y2h8OXx8c3lzdGVtcyUyMGFuZCUyMHNlY3VyaXR5fGVufDB8fHx8fDE2NzgzNjM0NjQ&ixlib=rb-1.2.1&q=80&w=1080",
    title: "Cybersecurity Awareness",
    description: "Stay informed about the latest cybersecurity trends and threats."
  },
  {
    type: 'image',
    url: "https://images.unsplash.com/photo-1584697964178-70f5289cbbd1?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA3fDB8MHxwaG90by1mZWF0Y2h8OXx8c3lzdGVtcyUyMGFuZCUyMHNlY3VyaXR5fGVufDB8fHx8fDE2NzgzNjM0NjQ&ixlib=rb-1.2.1&q=80&w=1080",
    title: "Advanced Threat Protection",
    description: "Protect your systems with advanced threat protection tools."
  },
  {
    type: 'image',
    url: "https://images.unsplash.com/photo-1590517286893-84f635b02cf0?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA3fDB8MHxwaG90by1mZWF0Y2h8MXx8cGFzc3dvcmQlMjBmb3IlMjBjdXJlcyxlbnwwfHx8fDE2NzgzNjM5Nzg&ixlib=rb-1.2.1&q=80&w=1080",
    title: "Cybersecurity Policy",
    description: "Establish robust cybersecurity policies for your organization."
  },
  {
    type: 'image',
    url: "https://images.unsplash.com/photo-1622736606985-5f6881a2ffb6?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA3fDB8MHxwaG90by1mZWF0Y2h8NXx8aXNtYWdlJTIwd2l0aCUyMHRlY2huaWNhbHxlbnwwfHx8fDE2NzgzNjQyNzg&ixlib=rb-1.2.1&q=80&w=1080",
    title: "Cybersecurity Tools",
    description: "Utilize the latest cybersecurity tools to keep your systems safe."
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
      }, 2000); // Longer interval for videos
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
    <div className="relative h-[735px] w-full group">
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
