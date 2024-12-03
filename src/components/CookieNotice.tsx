// src/components/CookieNotice.tsx

import React, { useState, useEffect } from 'react';

const CookieNotice: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isCookieAccepted = localStorage.getItem('cookieAccepted');
    if (!isCookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg md:max-w-md md:mx-auto">
      <p className="text-sm">
        This website uses cookies to ensure you get the best experience on our website. By continuing to browse, you consent to our use of cookies.{' '}
        <a href="/privacy-policy" className="text-blue-400 underline hover:text-blue-300">
          Learn more
        </a>.
      </p>
      <div className="mt-3 text-right">
        <button
          onClick={handleAccept}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieNotice;
