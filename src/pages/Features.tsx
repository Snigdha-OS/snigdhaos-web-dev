import React from 'react';
import { Terminal, Lock, Cpu, Cloud, Database, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Terminal className="h-8 w-8" />,
      title: "600+ Security Tools",
      description: "Pre-installed penetration testing and security tools covering various security domains."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Multi-language Support",
      description: "Tools and documentation available in multiple languages for global accessibility."
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Wide Hardware Support",
      description: "Supports ARM architecture (RPi), wireless interfaces, and GPU cracking."
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Compatible",
      description: "Can be run on various cloud platforms and virtual environments."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Customizable",
      description: "Fully customizable environment with various desktop environments available."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Ready",
      description: "Suitable for both individual and enterprise-level security testing."
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Features</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make Kali Linux the premier platform for security testing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-[#754ffe] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Tools Categories */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Tool Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#754ffe]">Information Gathering</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Network scanning and enumeration</li>
                <li>• OSINT tools</li>
                <li>• DNS analysis</li>
                <li>• Web reconnaissance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#754ffe]">Vulnerability Analysis</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated scanning tools</li>
                <li>• Database assessment</li>
                <li>• Cisco tools</li>
                <li>• Fuzzing tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}