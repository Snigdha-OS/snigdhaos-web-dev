import React from 'react';
import { Github, Twitter, Youtube } from 'lucide-react';

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
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="/forums" className="text-gray-400 hover:text-[#754ffe]">Forums</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-[#754ffe]">Blog</a></li>
              <li><a href="/support" className="text-gray-400 hover:text-[#754ffe]">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/snigdha-os" className="text-gray-400 hover:text-[#754ffe]">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/snigdhaos" className="text-gray-400 hover:text-[#754ffe]">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://youtube.com/snigdhaos" className="text-gray-400 hover:text-[#754ffe]">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Snigdha OS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}