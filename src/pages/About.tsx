// import React from 'react';
import { Shield, Users, Globe, Package, Laptop, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Snigdha OS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Snigdha OS is an open-source, Debian-based Linux distribution geared towards various information security tasks.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16 mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Snigdha OS aims to provide security professionals and IT administrators with the most comprehensive and trusted suite of security tools. Our mission is to enable cybersecurity professionals and enthusiasts to perform thorough security auditing and penetration testing with enterprise-grade tools.
          </p>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Shield className="h-12 w-12 text-[#754ffe] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Security Focus</h3>
            <p className="text-gray-600">
              Built specifically for penetration testing and security auditing, with hundreds of tools pre-installed.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="h-12 w-12 text-[#754ffe] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600">
              Supported by a vast community of security professionals and enthusiasts worldwide.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Globe className="h-12 w-12 text-[#754ffe] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
            <p className="text-gray-600">
              Used by cybersecurity professionals and organizations around the world.
            </p>
          </div>
        </div>

        {/* Why Snigdha OS? */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16 mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Snigdha OS?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Snigdha OS is designed by security professionals for security professionals. It provides the tools needed for penetration testing, vulnerability scanning, and forensic analysis. It is not just a Linux distribution—it's a full-fledged security platform.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            With its constant updates and cutting-edge features, Snigdha OS ensures that you are always prepared for the latest security challenges. It is trusted by both ethical hackers and security researchers globally.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Package className="h-12 w-12 text-[#754ffe] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Comprehensive Toolset</h3>
            <p className="text-gray-600">
              Over 600 pre-installed penetration testing tools, covering a variety of cybersecurity tasks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Laptop className="h-12 w-12 text-[#754ffe] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Customizable Environment</h3>
            <p className="text-gray-600">
              Snigdha OS is highly customizable, allowing you to configure the environment based on your needs and workflows.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Star className="h-12 w-12 text-[#754ffe] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Top-tier Performance</h3>
            <p className="text-gray-600">
              Snigdha OS is optimized for high performance and can run on a wide variety of platforms, including ARM and virtual machines.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16 mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Values</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              At Snigdha OS, we value openness, transparency, and the ability to create solutions that enable professionals to tackle real-world security issues. Our focus is on delivering a user-friendly yet powerful platform that enhances the security community's efforts globally.
            </p>
            <p>
              Snigdha OS is committed to maintaining the highest standards of development, ensuring that the tools we provide are the most reliable, secure, and effective in the industry.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our History</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Snigdha OS was released in 2013 as a complete, top-to-bottom rebuild of BackTrack Linux. It adheres completely to Debian development standards and features a vast array of penetration testing tools from various security and forensics domains.
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
