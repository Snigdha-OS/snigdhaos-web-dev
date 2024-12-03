import React from 'react';
import { FaGithub, FaDev } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Snigdha OS</h3>
            <p className="text-gray-400">The Next Generation Security-Focused Operating System</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/download" className="text-gray-400 hover:text-[#754ffe]">Download</a></li>
              <li><a href="/docs" className="text-gray-400 hover:text-[#754ffe]">Documentation</a></li>
              <li><a href="/tools" className="text-gray-400 hover:text-[#754ffe]">Tools</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-[#754ffe]">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="/forums" className="text-gray-400 hover:text-[#754ffe]">Forums</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-[#754ffe]">Blog</a></li>
              <li><a href="/support" className="text-gray-400 hover:text-[#754ffe]">Support</a></li>
              <li><a href="/contribute" className="text-gray-400 hover:text-[#754ffe]">Contribute</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/snigdha-os" className="text-gray-400 hover:text-[#754ffe]">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://dev.to/snigdhaos" className="text-gray-400 hover:text-[#754ffe]">
                <FaDev className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Newsletter Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center md:text-left">
          <div>
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-[#754ffe]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-400 hover:text-[#754ffe]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
            <form>
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded bg-gray-800 text-gray-300 mb-4"
              />
              <button className="px-4 py-2 bg-[#754ffe] text-white rounded">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Snigdha OS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
