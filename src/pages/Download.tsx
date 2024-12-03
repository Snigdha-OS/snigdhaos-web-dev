import React from 'react';
import { Download, Laptop, HardDrive, Cloud } from 'lucide-react';

export default function DownloadPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Download Kali Linux</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the installation option that best suits your needs
          </p>
        </div>

        {/* Download Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Laptop className="h-12 w-12 text-[#754ffe] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Installer Images</h3>
            <p className="text-gray-600 mb-4">
              Full installation images for various architectures
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
              Pre-configured VMs for VMware and VirtualBox
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
              Images for Raspberry Pi and other ARM devices
            </p>
            <button className="bg-[#754ffe] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6344d5] transition-colors inline-flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Download ARM
            </button>
          </div>
        </div>

        {/* System Requirements */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Minimum Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 2 GB RAM</li>
                <li>• 20 GB disk space</li>
                <li>• x64 processor</li>
                <li>• USB boot support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Recommended</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 4 GB RAM</li>
                <li>• 50 GB disk space</li>
                <li>• Multi-core processor</li>
                <li>• Graphics card</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Installation Guide */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Installation Guide</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Follow these steps to install Kali Linux:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Download the appropriate image for your system</li>
              <li>Create a bootable USB drive or DVD</li>
              <li>Boot from the installation media</li>
              <li>Follow the installation wizard</li>
            </ol>
            <p className="text-gray-600 mt-4">
              For detailed installation instructions, please refer to our documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}