// import React from 'react';
import { Download, Laptop, HardDrive, Cloud, Archive, Server, Box } from 'lucide-react';

export default function DownloadPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Download Snigdha OS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the installation option that best suits your needs. We provide different formats and configurations to suit every environment.
          </p>
        </div>

        {/* Download Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Laptop className="h-12 w-12 text-[#754ffe] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Installer Images</h3>
            <p className="text-gray-600 mb-4">
              Full installation images for various architectures and desktop environments.
            </p>
            <button className="bg-[#754ffe] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6344d5] transition-colors inline-flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Download ISO
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <HardDrive className="h-12 w-12 text-[#754ffe] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Virtual Machines</h3>
            <p className="text-gray-600 mb-4">
              Pre-configured VMs for VMware, VirtualBox, and Hyper-V.
            </p>
            <button className="bg-[#754ffe] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6344d5] transition-colors inline-flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Download VM
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Cloud className="h-12 w-12 text-[#754ffe] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">ARM Images</h3>
            <p className="text-gray-600 mb-4">
              Images for Raspberry Pi, ARM-based boards, and other ARM devices.
            </p>
            <button className="bg-[#754ffe] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6344d5] transition-colors inline-flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Download ARM
            </button>
          </div>
        </div>

        {/* Additional Download Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Archive className="h-12 w-12 text-[#754ffe] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Source Code</h3>
            <p className="text-gray-600 mb-4">
              Download the source code and contribute to the development of Snigdha OS.
            </p>
            <button className="bg-[#754ffe] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6344d5] transition-colors inline-flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Download Source
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Server className="h-12 w-12 text-[#754ffe] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud Images</h3>
            <p className="text-gray-600 mb-4">
              Pre-configured cloud images for platforms like AWS, Azure, and Google Cloud.
            </p>
            <button className="bg-[#754ffe] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6344d5] transition-colors inline-flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Download Cloud Image
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Box className="h-12 w-12 text-[#754ffe] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Docker Images</h3>
            <p className="text-gray-600 mb-4">
              Snigdha OS available as Docker container images for lightweight testing.
            </p>
            <button className="bg-[#754ffe] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6344d5] transition-colors inline-flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Download Docker
            </button>
          </div>
        </div>

        {/* System Requirements */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Minimum Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 2 GB RAM</li>
                <li>• 20 GB disk space</li>
                <li>• x64 or ARM processor</li>
                <li>• USB boot support</li>
                <li>• Graphics card with OpenGL support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Recommended</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 4 GB RAM</li>
                <li>• 50 GB disk space</li>
                <li>• Multi-core processor</li>
                <li>• Graphics card (NVIDIA, AMD, or integrated)</li>
                <li>• SSD for faster boot and performance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Installation Guide */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Installation Guide</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Follow these steps to install Snigdha OS on your system:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Download the appropriate image for your system</li>
              <li>Create a bootable USB drive or DVD using tools like Rufus, balenaEtcher, or dd</li>
              <li>Boot from the installation media</li>
              <li>Follow the on-screen instructions to install Snigdha OS</li>
            </ol>
            <p className="text-gray-600 mt-4">
              For detailed instructions and troubleshooting, refer to the full installation documentation available on our website.
            </p>
          </div>
        </div>

        {/* YouTube Video Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Watch the Installation Tutorial</h2>
          <div className="relative pb-9/16 h-0 overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/your-video-id-here"
              title="Installation Tutorial"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          </div>
      </div>
    </div>
  );
}
