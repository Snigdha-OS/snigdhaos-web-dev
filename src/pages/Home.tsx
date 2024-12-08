import React from 'react';
import { Download, Shield, Terminal, Award, Users, Coffee, ArrowRight, Star, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
<section className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-20 relative overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 -z-10">
    <img
      src="https://via.placeholder.com/1920x1080" // Replace with your desired background image URL
      alt="Background"
      className="w-full h-full object-cover opacity-30"
    />
  </div>

  <div className="container mx-auto px-4 text-center relative z-10">
    <h1 className="text-5xl font-extrabold mb-6 text-shadow-md">
      Welcome to Snigdha OS
    </h1>
    <p className="text-xl mb-8 max-w-3xl mx-auto text-shadow-lg">
      Arch-based Linux Distribution for Penetration Testing and Ethical Hacking.
      Snigdha OS provides a powerful platform with the latest tools for cybersecurity professionals.
    </p>
    <div className="flex justify-center space-x-6 mt-6">
      <Link
        to="/download"
        className="bg-white text-indigo-700 px-8 py-4 rounded-[5px] font-semibold shadow-lg transform hover:scale-105 hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-3"
      >
        <Download className="h-5 w-5" />
        <span>Download Now</span>
      </Link>

      <Link
        to="https://snigdha-os.github.io/documentation/"
        className="border-2 border-white text-white px-8 py-4 rounded-[5px] font-semibold transform hover:scale-105 hover:bg-white hover:text-indigo-700 transition-all duration-300 inline-flex items-center space-x-3"
      >
        <Book className="h-5 w-5" />
        <span>Documentation</span>
      </Link>
    </div>

    {/* Additional Call-to-Action */}
    <div className="mt-12 max-w-2xl mx-auto">
      <p className="text-lg text-white opacity-80 mb-4">
        Join a community of like-minded individuals dedicated to enhancing the security and safety of the digital world. Explore our open-source ecosystem and contribute to the next-gen tools.
      </p>
      <Link
        to="https://forum.snigdhaos.org/"
        className="border-2 border-white text-white px-8 py-4 rounded-[5px] font-semibold transform hover:scale-105 hover:bg-white hover:text-indigo-700 transition-all duration-300 inline-flex items-center space-x-3"
      >
        <Users className="h-5 w-5" />
        <span>Join The Community</span>
      </Link>
    </div>
  </div>
</section>

      {/* Features Section */}
<section className="py-16 bg-gradient-to-r from-indigo-50 to-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12 tracking-tight">
      Key Features
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      <FeatureCard
        icon={<Shield className="h-10 w-10 text-red-500" />}
        title="Secure"
        description="Regular security updates and a robust system architecture keep your data safe."
      />
      <FeatureCard
        icon={<Terminal className="h-10 w-10 text-green-500" />}
        title="Powerful"
        description="Full access to the terminal and system components for advanced users."
      />
      <FeatureCard
        icon={<Download className="h-10 w-10 text-blue-500" />}
        title="Free Forever"
        description="Snigdha OS is free and open source. No costs, no subscriptions."
      />
      <FeatureCard
        icon={<Award className="h-10 w-10 text-yellow-500" />}
        title="Customizable"
        description="Personalize your desktop environment to suit your needs and style."
      />
      <FeatureCard
        icon={<Users className="h-10 w-10 text-pink-500" />}
        title="Community Support"
        description="A vibrant community ready to help and share knowledge."
      />
      <FeatureCard
        icon={<Star className="h-10 w-10 text-indigo-500" />}
        title="Feature Rich"
        description="Pre-installed applications and tools for everyday use."
      />
      <FeatureCard
        icon={<Coffee className="h-10 w-10 text-brown-500" />}
        title="Energy Efficient"
        description="Optimized performance to save energy and enhance hardware longevity."
      />
      <FeatureCard
        icon={<ArrowRight className="h-10 w-10 text-teal-500" />}
        title="Fast Boot"
        description="Experience faster boot times and smooth transitions."
      />
      <FeatureCard
        icon={<Terminal className="h-10 w-10 text-purple-500" />}
        title="Advanced Tools"
        description="Access specialized penetration testing and ethical hacking tools."
      />
    </div>
  </div>
</section>



      {/* Latest Release Section */}
<section className="py-16 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Latest Release</h2>
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="Snigdha OS Desktop"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 md:pl-8">
          <h3 className="text-2xl font-regular mb-4">Snigdha OS | <b>Arctic V</b></h3>
          <p className="text-gray-600 mb-6">
            Experience the latest features and improvements in our newest release. 
            Enjoy enhanced performance, better hardware support, and a refined user interface.
          </p>

          <div className="space-y-6">
            {/* Key Features */}
            <Feature
              title="New Gnome 47.0"
              description="Enjoy a faster and more responsive desktop environment with redesigned animations and improved task handling."
            />
            <Feature
              title="Updated Software Manager"
              description="Enhanced package management with faster load times and a cleaner interface."
            />
            <Feature
              title="Improved Hardware Compatibility"
              description="Support for the latest devices and hardware configurations ensures a seamless experience."
            />
            <Feature
              title="Upgraded Kernel and Drivers"
              description="Leverage the power of the Linux 6.x Zen kernel for optimal system performance."
            />
            <Feature
              title="System Snapshots with Timeshift"
              description="Take full control of system recovery with robust snapshot features."
            />
            <Feature
              title="New Theme Options"
              description="Personalize your desktop with a refreshed collection of themes, including dark mode improvements."
            />
          </div>

          {/* Buttons */}
          <div className="flex mt-6 justify-center space-x-4">
            <Link
              to="/download"
              className="inline-flex items-center space-x-3 bg-indigo-600 text-white px-8 py-4 rounded-[5px] hover:bg-indigo-700 transition-colors"
            >
              <span>Download Now</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/changelog"
              className="inline-flex items-center space-x-2 bg-gray-200 text-indigo-600 px-6 py-2 rounded-[5px] hover:bg-gray-300 transition-colors"
            >
              <span>View Changelog</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Why Choose Snigdha OS */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Snigdha OS?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ReasonCard
        icon={<Award className="h-10 w-10 text-yellow-500" />}
        title="User-Friendly"
        description="With its intuitive interface, Snigdha OS provides a seamless experience for beginners and experts alike."
      />
      <ReasonCard
        icon={<Users className="h-10 w-10 text-blue-500" />}
        title="Active Community"
        description="Join a vibrant community where users collaborate, share solutions, and build knowledge together."
      />
      <ReasonCard
        icon={<Coffee className="h-10 w-10 text-red-500" />}
        title="Stable & Reliable"
        description="Built on Ubuntu's LTS base, Snigdha OS ensures long-term stability and security updates."
      />
      <ReasonCard
        icon={<Star className="h-10 w-10 text-purple-500" />}
        title="Feature Rich"
        description="Get all the essential applications and tools pre-installed, saving you time and effort."
      />
      <ReasonCard
        icon={<Shield className="h-10 w-10 text-green-500" />}
        title="Privacy Focused"
        description="Unlike many OS options, Snigdha OS respects your privacy with no data tracking or telemetry."
      />
      <ReasonCard
        icon={<Terminal className="h-10 w-10 text-indigo-500" />}
        title="Powerful Tools"
        description="Access advanced system tools, a customizable terminal, and powerful package management with APT."
      />
      <ReasonCard
        icon={<Download className="h-10 w-10 text-orange-500" />}
        title="Free and Open Source"
        description="Snigdha OS is free forever, with its source code available for transparency and community-driven improvements."
      />
      <ReasonCard
        icon={<ArrowRight className="h-10 w-10 text-teal-500" />}
        title="Easy Upgrades"
        description="Upgrading to new versions is straightforward, ensuring you always enjoy the latest features without hassle."
      />
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Try Snigdha OS?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join millions of users worldwide and experience the freedom of <br></br>Snigdha OS.
          </p>
          <Link
            to="/download"
            className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-8 py-3 rounded-[5px] font-semibold hover:bg-gray-100 transition-colors"
          >
            <Download className="h-5 w-5" />
            <span>Download Now</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-xl font-semibold text-indigo-500 mb-3">{title}</h3>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0">
        <div className="w-2 h-2 mt-2 rounded-[5px] bg-indigo-500"></div>
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}


function ReasonCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg text-indigo-500 font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
