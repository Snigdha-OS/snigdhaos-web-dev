import React from 'react';
import { Shield, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Kali Linux</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kali Linux is an open-source, Debian-based Linux distribution geared towards various information security tasks.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Kali Linux aims to provide security professionals and IT administrators with the most comprehensive and trusted suite of security tools. Our mission is to enable cybersecurity professionals and enthusiasts to perform thorough security auditing and penetration testing with enterprise-grade tools.
          </p>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Shield className="h-12 w-12 text-[#754ffe] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Security Focus</h3>
            <p className="text-gray-600">
              Built specifically for penetration testing and security auditing, with hundreds of tools pre-installed.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="h-12 w-12 text-[#754ffe] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600">
              Supported by a vast community of security professionals and enthusiasts worldwide.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Globe className="h-12 w-12 text-[#754ffe] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
            <p className="text-gray-600">
              Used by cybersecurity professionals and organizations around the world.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our History</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Kali Linux was released in 2013 as a complete, top-to-bottom rebuild of BackTrack Linux. It adheres completely to Debian development standards and features a vast array of penetration testing tools from various security and forensics domains.
            </p>
            <p>
              The distribution is developed and maintained by Offensive Security, a leading provider of information security training and penetration testing services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}