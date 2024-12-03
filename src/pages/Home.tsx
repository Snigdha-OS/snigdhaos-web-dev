// import React from 'react';
import { ArrowRight, Shield, Settings, Activity, Cpu, Cloud, Code, Users } from 'lucide-react';
import ImageSlider from '../components/home/ImageSlider';
import PenTestTools from '../components/home/PenTestTools';

export default function Home() {
  return (
    <div>
      {/* Hero Section with Slider */}
      <ImageSlider />

      {/* Penetration Testing Tools Section */}
      <PenTestTools />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Snigdha OS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="mx-auto mb-4 h-20 w-20 text-[#754ffe]" />
              <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
              <p className="text-gray-600">Built with advanced encryption and secure protocols to safeguard your data.</p>
            </div>
            <div className="text-center">
              <Settings className="mx-auto mb-4 h-20 w-20 text-[#754ffe]" />
              <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
              <p className="text-gray-600">Tailor the OS to meet your specific needs and workflows.</p>
            </div>
            <div className="text-center">
              <Activity className="mx-auto mb-4 h-20 w-20 text-[#754ffe]" />
              <h3 className="text-xl font-semibold mb-2">Lightweight Design</h3>
              <p className="text-gray-600">Optimized for performance on both modern and older hardware.</p>
            </div>
          </div>

          {/* New Reasons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Cpu className="mx-auto mb-4 h-20 w-20 text-[#754ffe]" />
              <h3 className="text-xl font-semibold mb-2">High Performance</h3>
              <p className="text-gray-600">Snigdha OS delivers blazing-fast performance, even on low-end hardware.</p>
            </div>
            <div className="text-center">
              <Cloud className="mx-auto mb-4 h-20 w-20 text-[#754ffe]" />
              <h3 className="text-xl font-semibold mb-2">Cloud Integration</h3>
              <p className="text-gray-600">Easily integrates with popular cloud services for streamlined workflows.</p>
            </div>
            <div className="text-center">
              <Code className="mx-auto mb-4 h-20 w-20 text-[#754ffe]" />
              <h3 className="text-xl font-semibold mb-2">Developer Friendly</h3>
              <p className="text-gray-600">Packed with all the tools you need for development and penetration testing.</p>
            </div>
          </div>

          {/* Additional Reasons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Users className="mx-auto mb-4 h-20 w-20 text-[#754ffe]" />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Join a vibrant community of users, contributors, and experts.</p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto mb-4 h-20 w-20 text-[#754ffe]" />
              <h3 className="text-xl font-semibold mb-2">Regular Updates</h3>
              <p className="text-gray-600">Snigdha OS is frequently updated to ensure security and performance are up to date.</p>
            </div>
            <div className="text-center">
              <Settings className="mx-auto mb-4 h-20 w-20 text-[#754ffe]" />
              <h3 className="text-xl font-semibold mb-2">Open Source</h3>
              <p className="text-gray-600">Freely available for modification and redistribution, with a strong open-source community backing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <img
                  className="w-16 h-16 rounded-full border-2 border-gray-300"
                  src="https://avatars.githubusercontent.com/u/118294498?v=4" // Example GitHub Profile Image
                  alt="akankshaadz"
                />
              </div>
              <p className="text-gray-600 italic mb-4">
                "Snigdha OS has revolutionized how I approach cybersecurity tasks. The built-in tools are fantastic!"
              </p>
              <h4 className="font-semibold text-lg">- akankshaadz</h4>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <img
                  className="w-16 h-16 rounded-full border-2 border-gray-300"
                  src="https://avatars.githubusercontent.com/u/7654321?v=4" // Example GitHub Profile Image
                  alt="Prajwal K."
                />
              </div>
              <p className="text-gray-600 italic mb-4">
                "A game-changer for developers and penetration testers. Highly recommend!"
              </p>
              <h4 className="font-semibold text-lg">- Prajwal K.</h4>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <img
                  className="w-16 h-16 rounded-full border-2 border-gray-300"
                  src="https://avatars.githubusercontent.com/u/1122334?v=4" // Example GitHub Profile Image
                  alt="Mark L."
                />
              </div>
              <p className="text-gray-600 italic mb-4">
                "Runs seamlessly on my older laptop. The lightweight design is truly impressive."
              </p>
              <h4 className="font-semibold text-lg">- Mark L.</h4>
            </div>
            {/* Testimonial 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <img
                  className="w-16 h-16 rounded-full border-2 border-gray-300"
                  src="https://avatars.githubusercontent.com/u/3412345?v=4" // Example GitHub Profile Image
                  alt="Samantha R."
                />
              </div>
              <p className="text-gray-600 italic mb-4">
                "I love how Snigdha OS is always up-to-date with the latest tools. It's incredibly easy to use."
              </p>
              <h4 className="font-semibold text-lg">- Samantha R.</h4>
            </div>
            {/* Testimonial 5 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <img
                  className="w-16 h-16 rounded-full border-2 border-gray-300"
                  src="https://avatars.githubusercontent.com/u/7892345?v=4" // Example GitHub Profile Image
                  alt="John D."
                />
              </div>
              <p className="text-gray-600 italic mb-4">
                "Snigdha OS is an absolute powerhouse! It’s exactly what I needed for my penetration testing tasks."
              </p>
              <h4 className="font-semibold text-lg">- John D.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Is Snigdha OS free to use?</h3>
              <p className="text-gray-600">Yes, Snigdha OS is completely free and open-source.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What hardware is supported?</h3>
              <p className="text-gray-600">Snigdha OS is optimized to run on both modern and older hardware configurations.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I customize Snigdha OS?</h3>
              <p className="text-gray-600">Absolutely! Snigdha OS is highly customizable to meet your specific needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Snigdha OS?</h2>
          <p className="text-xl text-gray-600 mb-8">Join the next generation of secure computing</p>
          <a
            href="/download"
            className="bg-[#754ffe] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6344d5] transition-colors inline-flex items-center"
          >
            Download Snigdha OS
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
