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

          /* Adding gradient animation to the hero section */
          .hero-background {
            background: linear-gradient(270deg, #6495ed, #9333ea, #22d3ee); /* Updated with Cornflower Blue */
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
      <section className="bg-gradient-to-r from-[#6495ed] to-indigo-700 text-white py-20 relative overflow-hidden hero-background">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://via.placeholder.com/1920x1080" // Replace with your desired background image URL
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 text-shadow-md">
            Welcome to Snigdha OS 🌐
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-shadow-lg">
            Arch-based Linux Distribution for Penetration Testing and Ethical Hacking. Snigdha OS provides a powerful platform with the latest tools for cybersecurity professionals. 🔐💻
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <Link
              to="/download"
              className="bg-white text-[#6495ed] px-8 py-4 rounded-[5px] font-semibold shadow-lg transform hover:scale-105 hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-3"
            >
              <Download className="h-5 w-5" />
              <span>Download Now 🚀</span>
            </Link>

            <Link
              to="https://snigdha-os.github.io/documentation/"
              className="border-2 border-white text-white px-8 py-4 rounded-[5px] font-semibold transform hover:scale-105 hover:bg-white hover:text-[#6495ed] transition-all duration-300 inline-flex items-center space-x-3"
            >
              <Book className="h-5 w-5" />
              <span>Documentation 📚</span>
            </Link>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-lg text-white opacity-80 mb-4">
              Join a community of like-minded individuals dedicated to enhancing the security and safety of the digital world. 🌍🔧 Explore our open-source ecosystem and contribute to the next-gen tools.
            </p>
            <Link
              to="https://forum.snigdhaos.org/"
              className="border-2 border-white text-white px-8 py-4 rounded-[5px] font-semibold transform hover:scale-105 hover:bg-white hover:text-[#6495ed] transition-all duration-300 inline-flex items-center space-x-3"
            >
              <Users className="h-5 w-5" />
              <span>Join The Community 🤝</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-[#6495ed] to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#6495ed] mb-12 tracking-tight">
            Key Features ✨
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-red-500" />}
              title="Secure 🔒"
              description="Regular security updates and a robust system architecture keep your data safe."
            />
            <FeatureCard
              icon={<Terminal className="h-10 w-10 text-green-500" />}
              title="Powerful 💪"
              description="Full access to the terminal and system components for advanced users."
            />
            <FeatureCard
              icon={<Download className="h-10 w-10 text-blue-500" />}
              title="Free Forever 🎉"
              description="Snigdha OS is free and open source. No costs, no subscriptions."
            />
            <FeatureCard
              icon={<Award className="h-10 w-10 text-yellow-500" />}
              title="Customizable 🎨"
              description="Personalize your desktop environment to suit your needs and style."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-pink-500" />}
              title="Community Support 🤗"
              description="A vibrant community ready to help and share knowledge."
            />
            <FeatureCard
              icon={<Star className="h-10 w-10 text-[#6495ed]" />}
              title="Feature Rich ⚡"
              description="Pre-installed applications and tools for everyday use."
            />
            <FeatureCard
              icon={<Coffee className="h-10 w-10 text-brown-500" />}
              title="Energy Efficient 🌱"
              description="Optimized performance to save energy and enhance hardware longevity."
            />
            <FeatureCard
              icon={<ArrowRight className="h-10 w-10 text-teal-500" />}
              title="Fast Boot ⏱️"
              description="Experience faster boot times and smooth transitions."
            />
            <FeatureCard
              icon={<Terminal className="h-10 w-10 text-purple-500" />}
              title="Advanced Tools 🧰"
              description="Access specialized penetration testing and ethical hacking tools."
            />
          </div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-100 to-indigo-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-[#6495ed]">
            🎉 Latest Release: <span className="text-indigo-600">Snigdha OS | Arctic V ❄️</span>
          </h2>

          <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Snigdha OS Desktop"
                className="rounded-lg shadow-xl transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
              />
            </div>

            <div className="md:w-1/2 md:pl-8 p-8 space-y-6">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Snigdha OS | Arctic V brings performance enhancements, better hardware support, and a whole new visual refresh! Experience the best of both worlds: sleek design and robust functionality. 🚀
              </p>

              <div className="space-y-6">
                <Feature
                  title="🌐 New GNOME 47.0"
                  description="A fresh, faster, and more intuitive GNOME experience that simplifies navigation with improved responsiveness."
                />
                <Feature
                  title="🛠️ Updated Software Manager"
                  description="Enjoy a cleaner, faster interface for package management with streamlined features."
                />
                <Feature
                  title="🔧 Improved Hardware Support"
                  description="Snigdha OS ensures seamless compatibility with modern devices and hardware configurations for a smooth experience."
                />
                <Feature
                  title="⚡ Upgraded Kernel & Drivers"
                  description="Experience better performance with the latest Linux 6.x Zen kernel and optimized drivers for your hardware."
                />
                <Feature
                  title="🔄 Timeshift Snapshots"
                  description="Create and manage system snapshots to restore your system whenever needed, ensuring peace of mind."
                />
                <Feature
                  title="🎨 New Theme Options"
                  description="Customize your desktop with a refreshed collection of themes and dark mode improvements for a more personalized look."
                />
              </div>

              <div className="flex mt-8 justify-center space-x-6">
                <Link
                  to="/download"
                  className="inline-flex items-center space-x-3 bg-[#6495ed] text-white px-8 py-4 rounded-xl shadow-lg hover:bg-indigo-700 transform transition-all duration-300 hover:scale-105"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Now 🚀</span>
                </Link>
                <Link
                  to="/changelog"
                  className="inline-flex items-center space-x-2 bg-gray-200 text-[#6495ed] px-6 py-2 rounded-xl shadow-lg hover:bg-gray-300 transform transition-all duration-300 hover:scale-105"
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
          <h2 className="text-3xl font-bold text-center mb-12 text-[#6495ed]">Why Choose Snigdha OS? 🤔</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ReasonCard
              icon={<Award className="h-10 w-10 text-yellow-500" />}
              title="User-Friendly 😊"
              description="With its intuitive interface, Snigdha OS provides a seamless experience for beginners and experts alike."
            />
            <ReasonCard
              icon={<Users className="h-10 w-10 text-blue-500" />}
              title="Active Community 🗣️"
              description="Join a vibrant community where users collaborate, share solutions, and build knowledge together."
            />
            <ReasonCard
              icon={<Coffee className="h-10 w-10 text-red-500" />}
              title="Stable & Reliable 📊"
              description="Built on Ubuntu's LTS base, Snigdha OS ensures long-term stability and security updates."
            />
            <ReasonCard
              icon={<Star className="h-10 w-10 text-[#6495ed]" />}
              title="Lightweight ⚡"
              description="With optimized performance, Snigdha OS works well on both older and newer hardware."
            />
            <ReasonCard
              icon={<Terminal className="h-10 w-10 text-green-500" />}
              title="Customizable 🖌️"
              description="Snigdha OS offers extensive customization options, so you can tailor the OS to your exact needs."
            />
            <ReasonCard
              icon={<Shield className="h-10 w-10 text-purple-500" />}
              title="Top-Notch Security 🛡️"
              description="Snigdha OS is built with a strong focus on security. Regular updates and patches ensure that your system is always safe."
            />
            <ReasonCard
              icon={<Award className="h-10 w-10 text-orange-500" />}
              title="Performance Focused 🚀"
              description="Snigdha OS is optimized to deliver high performance even on low-spec hardware, ensuring smooth operation."
            />
            <ReasonCard
              icon={<Star className="h-10 w-10 text-yellow-500" />}
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
