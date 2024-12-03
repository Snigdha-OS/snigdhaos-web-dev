// import React from 'react';
import { Terminal, Lock, Cpu, Cloud, Database, Shield, Wifi, Laptop } from 'lucide-react';

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
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Wireless Security",
      description: "Equipped with tools for wireless network auditing and penetration testing."
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Portable and Lightweight",
      description: "Run Snigdha OS on a USB drive for portability without leaving traces on devices."
    }
  ];

  const toolCategories = [
    {
      title: "Information Gathering",
      tools: [
        "Network scanning and enumeration",
        "OSINT tools",
        "DNS analysis",
        "Web reconnaissance",
        "Social media analysis"
      ]
    },
    {
      title: "Vulnerability Analysis",
      tools: [
        "Automated scanning tools",
        "Database assessment",
        "Cisco tools",
        "Fuzzing tools",
        "Web app vulnerability scanning"
      ]
    },
    {
      title: "Exploitation Tools",
      tools: [
        "Metasploit Framework",
        "Buffer Overflow exploitation",
        "SQL injection tools",
        "Social Engineering tools"
      ]
    },
    {
      title: "Post-Exploitation",
      tools: [
        "Privilege escalation",
        "Persistence",
        "Data exfiltration",
        "Forensics tools"
      ]
    },
    {
      title: "Wireless Attacks",
      tools: [
        "WiFi cracking tools",
        "Aircrack-ng suite",
        "WEP/WPA/WPA2 attacks",
        "Bluetooth hacking"
      ]
    },
    {
      title: "Reverse Engineering",
      tools: [
        "Disassemblers",
        "Debuggers",
        "Binary analysis tools"
      ]
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Features</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make Snigdha OS the premier platform for security testing.
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

        {/* Tool Categories Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Tool Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#754ffe]">{category.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {category.tools.map((tool, i) => (
                    <li key={i}>• {tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
