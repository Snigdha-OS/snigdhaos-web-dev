import React from 'react';
import { Download, Shield, Terminal, Award, Users, Coffee, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Snigdha OS</h1>
          <p className="text-xl mb-8">From freedom comes elegance</p>
          <div className="flex justify-center space-x-4">
          <Link
            to="/download"
            className="bg-white text-indigo-700 px-8 py-3 rounded-[5px] font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
          <Download className="h-5 w-5" /> {/* Icon */}
          <span>Download Now</span>
            </Link>

            <Link
  to="/about"
  className="border-2 border-white text-white px-8 py-3 rounded-[5px] font-semibold hover:bg-white hover:text-indigo-700 transition-colors inline-flex items-center space-x-2"
>
  <ArrowRight className="h-5 w-5" /> {/* Icon */}
  <span>Learn More</span>
</Link>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="h-12 w-12 text-indigo-600" />}
              title="Secure"
              description="Regular security updates and a robust system architecture keep your data safe."
            />
            <FeatureCard
              icon={<Terminal className="h-12 w-12 text-indigo-600" />}
              title="Powerful"
              description="Full access to the terminal and system components for advanced users."
            />
            <FeatureCard
              icon={<Download className="h-12 w-12 text-indigo-600" />}
              title="Free Forever"
              description="Linux Mint is free and open source. No costs, no subscriptions."
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
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Linux Mint Desktop"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-2xl font-bold mb-4">Linux Mint 21.3</h3>
                <p className="text-gray-600 mb-6">
                  Experience the latest features and improvements in our newest
                  release. Enjoy enhanced performance, better hardware support, and
                  a refined user interface.
                </p>
                <div className="space-y-4">
                  <Feature title="New Cinnamon 6.0" description="Improved desktop experience with better performance" />
                  <Feature title="Updated Software Manager" description="Faster and more reliable package management" />
                  <Feature title="Enhanced Hardware Support" description="Better compatibility with latest devices" />
                </div>
                <Link
                  to="/download"
                  className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors mt-6"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Linux Mint */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Linux Mint?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ReasonCard
              icon={<Award className="h-10 w-10 text-yellow-500" />}
              title="User-Friendly"
              description="Perfect for beginners and experts alike"
            />
            <ReasonCard
              icon={<Users className="h-10 w-10 text-blue-500" />}
              title="Active Community"
              description="Get help and support when you need it"
            />
            <ReasonCard
              icon={<Coffee className="h-10 w-10 text-red-500" />}
              title="Stable & Reliable"
              description="Built on solid foundations"
            />
            <ReasonCard
              icon={<Star className="h-10 w-10 text-purple-500" />}
              title="Feature Rich"
              description="Everything you need, out of the box"
            />
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard number="15M+" label="Downloads" />
            <StatCard number="100+" label="Countries" />
            <StatCard number="500K+" label="Active Users" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Try Linux Mint?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join millions of users worldwide and experience the freedom of Linux Mint.
          </p>
          <Link
            to="/download"
            className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
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
    <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0">
        <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
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
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <div className="text-4xl font-bold text-indigo-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}