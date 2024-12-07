import React from 'react';
import { Download as DownloadIcon, Monitor, Server, HardDrive, Smartphone, Code } from 'lucide-react';

export function DownloadPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Download Snigdha OS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the edition that best suits your needs. All versions are free to
            download and use.
          </p>
        </section>

        {/* Edition Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          <EditionCard
            title="Gnome Edition"
            description="Modern, innovative features while being traditional and familiar."
            icon={<Monitor className="h-12 w-12 text-indigo-600" />}
            recommended={true}
          />
          <EditionCard
            title="MATE Edition"
            description="Traditional desktop experience, highly stable and reliable."
            icon={<Server className="h-12 w-12 text-blue-600" />}
          />
          <EditionCard
            title="Xfce Edition"
            description="Lightweight and stable. Perfect for older computers."
            icon={<HardDrive className="h-12 w-12 text-purple-600" />}
          />
          <EditionCard
            title="KDE Plasma Edition"
            description="Customizable and visually stunning, perfect for power users."
            icon={<Code className="h-12 w-12 text-pink-600" />}
          />
          <EditionCard
            title="Minimal Edition"
            description="Barebones version for advanced users who prefer custom setups."
            icon={<Code className="h-12 w-12 text-gray-600" />}
          />
          <EditionCard
            title="ARM Edition"
            description="Optimized for ARM-based devices like Raspberry Pi."
            icon={<Smartphone className="h-12 w-12 text-teal-600" />}
          />
          <EditionCard
            title="Education Edition"
            description="Packed with educational tools for students and teachers."
            icon={<Server className="h-12 w-12 text-orange-600" />}
          />
          <EditionCard
            title="Gaming Edition"
            description="Enhanced with gaming tools and pre-installed gaming libraries."
            icon={<Monitor className="h-12 w-12 text-red-600" />}
          />
        </section>

        {/* System Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">System Requirements</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Minimum Requirements</h3>
                <ul className="space-y-2">
                  <li>2GB RAM (4GB recommended)</li>
                  <li>20GB of disk space (100GB recommended)</li>
                  <li>1024×768 resolution</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Recommended</h3>
                <ul className="space-y-2">
                  <li>4GB RAM or more</li>
                  <li>100GB of disk space or more</li>
                  <li>1920×1080 resolution or higher</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Download Mirrors */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Download Mirrors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MirrorButton
              region="North America"
              speed="Fast"
              url="#"
            />
            <MirrorButton
              region="Europe"
              speed="Very Fast"
              url="#"
            />
            <MirrorButton
              region="Asia"
              speed="Fast"
              url="#"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function EditionCard({
  title,
  description,
  icon,
  recommended = false,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  recommended?: boolean;
}) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 relative ${recommended ? 'border-2 border-indigo-500' : ''}`}>
      {recommended && (
        <div className="absolute top-4 right-4 bg-indigo-500 text-white px-2 py-1 rounded-full text-sm">
          Recommended
        </div>
      )}
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center mb-6">{description}</p>
      <div className="flex justify-center">
        <button className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-2 rounded-[5px] hover:bg-indigo-700 transition-colors">
          <DownloadIcon className="h-5 w-5" />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
}

function MirrorButton({
  region,
  speed,
  url,
}: {
  region: string;
  speed: string;
  url: string;
}) {
  return (
    <a
      href={url}
      className="block bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow"
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold">{region}</h3>
          <p className="text-sm text-gray-600">{speed}</p>
        </div>
        <DownloadIcon className="h-5 w-5 text-indigo-600" />
      </div>
    </a>
  );
}
