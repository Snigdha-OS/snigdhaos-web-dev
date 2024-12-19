import React from 'react';
import { Download, Shield, Terminal, Award, Users, Coffee, ArrowRight, Star, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      {/* Embedded CSS */}
      <style>
        {`
          /* Gradient animation for the hero section background */
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          /* Hero Section Background */
          .hero-background {
            background: linear-gradient(270deg, #6495ed, #28282b, #6495ed); /* Updated Gradient */
            background-size: 300% 300%;
            animation: gradientAnimation 15s ease infinite;
          }


          /* Card hover effect */
          .card:hover {
            transform: scale(1.05);
            transition: transform 0.3s ease-in-out;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#000000] to-[#6495ed] text-white py-20 relative overflow-hidden hero-background">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://via.placeholder.com/1920x1080" // Replace with your desired background image URL
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold mb-6 text-shadow-md leading-tight">
            EXPERIENCE THE POWER OF
          </h1>
          <h1 className="text-5xl font-extrabold mb-6 text-shadow-md leading-tight transform hover:scale-110 hover:text-[#ffffff] transition-all duration-300">
            SNIGDHA OS 🔥
          </h1>

          <p className="text-xl mb-8 max-w-3xl mx-auto text-shadow-lg text-justify">
            Snigdha OS is a lightweight, Arch-based Linux distribution crafted for <strong>Penetration Testing 🛡️</strong>, <strong>Ethical Hacking 🔍</strong>, and general use. Power up your system with cutting-edge tools 🛠️ and enhanced security features 🔐💻.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex justify-center space-x-6 mt-6">
            <Link
              to="/download"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transform hover:scale-105 hover:bg-white hover:text-[#6495ed] transition-all duration-300 inline-flex items-center space-x-3"
            >
              <Download className="h-5 w-5" />
              <span>Download Now 🚀</span>
            </Link>

            <Link
              to="https://snigdha-os.github.io/documentation/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transform hover:scale-105 hover:bg-white hover:text-[#6495ed] transition-all duration-300 inline-flex items-center space-x-3"
            >
              <Book className="h-5 w-5" />
              <span>Documentation 📚</span>
            </Link>
          </div>

          {/* Additional Information */}
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-xl mb-8 max-w-3xl mx-auto text-shadow-lg text-justify">
              Join our thriving community of developers and cybersecurity professionals who are working together to build a safer digital world. Contribute to the project or simply enjoy the tools designed for your security needs.
            </p>

            {/* Call to Action Button */}
            <div className="flex justify-center mt-6">
              <Link
                to="/community"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transform hover:scale-105 hover:bg-white hover:text-[#6495ed] transition-all duration-300 inline-flex items-center space-x-3"
              >
                <Users className="h-5 w-5" />
                <span>Join the Community 🤝</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-[#ffffff] to-white">
  <div className="container mx-auto px-4">
    {/* Main Heading */}
    <h2 className="text-4xl font-bold text-center text-[#6495ed] mb-12 tracking-tight">
      Key Features ✨
    </h2>

    {/* Subheading */}
    <p className="text-xl text-center text-gray-700 mb-6 max-w-3xl mx-auto">
      Discover the amazing features of Snigdha OS that make it the perfect choice for developers, cybersecurity professionals, and anyone looking for a fast, secure, and customizable OS.
    </p>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      <FeatureCard
        icon={<Shield className="h-10 w-10 text-red-500 mx-auto" />}
        title="Secure 🔒"
        description="Regular security updates and a robust system architecture keep your data safe."
      />
      <FeatureCard
        icon={<Terminal className="h-10 w-10 text-green-500 mx-auto" />}
        title="Powerful 💪"
        description="Full access to the terminal and system components for advanced users."
      />
      <FeatureCard
        icon={<Download className="h-10 w-10 text-blue-500 mx-auto" />}
        title="Free Forever 🎉"
        description="Snigdha OS is free and open source. No costs, no subscriptions."
      />
      <FeatureCard
        icon={<Award className="h-10 w-10 text-yellow-500 mx-auto" />}
        title="Customizable 🎨"
        description="Personalize your desktop environment to suit your needs and style."
      />
      <FeatureCard
        icon={<Users className="h-10 w-10 text-pink-500 mx-auto" />}
        title="Community Support 🤗"
        description="A vibrant community ready to help and share knowledge."
      />
      <FeatureCard
        icon={<Star className="h-10 w-10 text-[#6495ed] mx-auto" />}
        title="Feature Rich ⚡"
        description="Pre-installed applications and tools for everyday use."
      />
      <FeatureCard
        icon={<Coffee className="h-10 w-10 text-brown-500 mx-auto" />}
        title="Energy Efficient 🌱"
        description="Optimized performance to save energy and enhance hardware longevity."
      />
      <FeatureCard
        icon={<ArrowRight className="h-10 w-10 text-teal-500 mx-auto" />}
        title="Fast Boot ⏱️"
        description="Experience faster boot times and smooth transitions."
      />
      <FeatureCard
        icon={<Terminal className="h-10 w-10 text-purple-500 mx-auto" />}
        title="Advanced Tools 🧰"
        description="Access specialized penetration testing and ethical hacking tools."
      />
    </div>
  </div>

  {/* Inline CSS for Border Animation and Centered Icons */}
  <style>
    {`
      .feature-card {
        position: relative;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .feature-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        border: 2px solid #6495ed; /* Add a blue border on hover */
      }

      .feature-card .icon {
        margin-bottom: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .feature-card .title {
        font-size: 1.25rem;
        font-weight: 600;
      }

      .feature-card .description {
        font-size: 1rem;
        color: #4b5563;
      }
    `}
  </style>
</section>

      {/* Latest Release Section */}
<section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
  <div className="container mx-auto px-4">
    {/* Section Heading */}
    <h2 className="text-5xl font-extrabold text-center mb-8 text-indigo-600">
      🎉 Latest Release: <span className="text-[#6495ed]">Snigdha OS | Arctic V ❄️</span>
    </h2>
    <p className="text-xl text-gray-700 text-center mb-12 leading-relaxed">
      Discover the latest features and improvements in <span className="text-indigo-600 font-medium">Snigdha OS</span>. 
      Designed for speed, reliability, and a seamless user experience. 🚀
    </p>

    {/* Content Wrapper */}
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          alt="Snigdha OS Desktop"
          className="rounded-lg shadow-xl transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 pointer-events-none"></div>
      </div>

      {/* Features Section */}
      <div className="p-8 lg:p-12 space-y-6">
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Snigdha OS | Arctic V brings an enhanced user experience with optimized performance, modern visuals, and seamless hardware compatibility.
        </p>

        <div className="space-y-6">
          <Feature
            title="🌐 New GNOME 47.0"
            description="A faster, more intuitive GNOME experience with improved navigation and responsiveness."
          />
          <Feature
            title="🛠️ Updated Software Manager"
            description="Cleaner, faster package management with streamlined features for ease of use."
          />
          <Feature
            title="🔧 Improved Hardware Support"
            description="Enjoy seamless compatibility with modern hardware for a smoother experience."
          />
          <Feature
            title="⚡ Upgraded Kernel & Drivers"
            description="Enhanced performance with Linux 6.x Zen kernel and updated drivers."
          />
          <Feature
            title="🔄 Timeshift Snapshots"
            description="Easily create and manage snapshots to ensure system stability."
          />
          <Feature
            title="🎨 New Theme Options"
            description="Explore a refreshed set of themes and dark mode improvements for better customization."
          />
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center lg:justify-start mt-8 space-x-6">
          <Link
            to="/download"
            className="inline-flex items-center space-x-3 bg-[#6495ed] text-white px-8 py-4 rounded-xl shadow-lg hover:bg-indigo-700 transform transition-all duration-300 hover:scale-105"
          >
            <Download className="h-5 w-5" />
            <span>Download Now 🚀</span>
          </Link>
          <Link
            to="/changelog"
            className="inline-flex items-center space-x-3 bg-gray-200 text-indigo-600 px-6 py-3 rounded-xl shadow-lg hover:bg-gray-300 transform transition-all duration-300 hover:scale-105"
          >
            <ArrowRight className="h-5 w-5" />
            <span>View Changelog 📜</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Why Choose Snigdha OS */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-[#6495ed]">
      Why Choose Snigdha OS? 🤔
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ReasonCard
        icon={
          <div className="flex items-center justify-center h-16 w-16 mx-auto bg-yellow-100 rounded-full">
            <Award className="h-10 w-10 text-yellow-500" />
          </div>
        }
        title="User-Friendly 😊"
        description="With its intuitive interface, Snigdha OS provides a seamless experience for beginners and experts alike."
      />
      <ReasonCard
        icon={
          <div className="flex items-center justify-center h-16 w-16 mx-auto bg-blue-100 rounded-full">
            <Users className="h-10 w-10 text-blue-500" />
          </div>
        }
        title="Active Community 🗣️"
        description="Join a vibrant community where users collaborate, share solutions, and build knowledge together."
      />
      <ReasonCard
        icon={
          <div className="flex items-center justify-center h-16 w-16 mx-auto bg-red-100 rounded-full">
            <Coffee className="h-10 w-10 text-red-500" />
          </div>
        }
        title="Stable & Reliable 📊"
        description="Built on Ubuntu's LTS base, Snigdha OS ensures long-term stability and security updates."
      />
      <ReasonCard
        icon={
          <div className="flex items-center justify-center h-16 w-16 mx-auto bg-[#6495ed]/20 rounded-full">
            <Star className="h-10 w-10 text-[#6495ed]" />
          </div>
        }
        title="Lightweight ⚡"
        description="With optimized performance, Snigdha OS works well on both older and newer hardware."
      />
      <ReasonCard
        icon={
          <div className="flex items-center justify-center h-16 w-16 mx-auto bg-green-100 rounded-full">
            <Terminal className="h-10 w-10 text-green-500" />
          </div>
        }
        title="Customizable 🖌️"
        description="Snigdha OS offers extensive customization options, so you can tailor the OS to your exact needs."
      />
      <ReasonCard
        icon={
          <div className="flex items-center justify-center h-16 w-16 mx-auto bg-purple-100 rounded-full">
            <Shield className="h-10 w-10 text-purple-500" />
          </div>
        }
        title="Top-Notch Security 🛡️"
        description="Snigdha OS is built with a strong focus on security. Regular updates and patches ensure that your system is always safe."
      />
      <ReasonCard
        icon={
          <div className="flex items-center justify-center h-16 w-16 mx-auto bg-orange-100 rounded-full">
            <Award className="h-10 w-10 text-orange-500" />
          </div>
        }
        title="Performance Focused 🚀"
        description="Snigdha OS is optimized to deliver high performance even on low-spec hardware, ensuring smooth operation."
      />
      <ReasonCard
        icon={
          <div className="flex items-center justify-center h-16 w-16 mx-auto bg-yellow-100 rounded-full">
            <Star className="h-10 w-10 text-yellow-500" />
          </div>
        }
        title="Frequent Updates 🔄"
        description="Get regular updates with the latest features, bug fixes, and security patches."
      />
    </div>
  </div>
</section>

    </div>
  );
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center card">
    <div className="mb-4">{icon}</div>
    <h4 className="text-xl font-semibold text-[#6495ed]">{title}</h4>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

const Feature = ({ title, description }: { title: string; description: string }) => (
  <div>
    <h4 className="text-lg font-semibold text-[#6495ed]">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ReasonCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center card">
    <div className="mb-4">{icon}</div>
    <h4 className="text-xl font-semibold text-[#6495ed]">{title}</h4>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);
