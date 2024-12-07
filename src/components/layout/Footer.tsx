import React from 'react';
import { Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#3c3c3c] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Linux Mint</h3>
            <p className="text-sm text-gray-300">
              Linux Mint is an elegant, easy to use, up to date and comfortable
              GNU/Linux desktop distribution.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/blog" className="hover:text-green-400">Blog</a></li>
              <li><a href="/forums" className="hover:text-green-400">Forums</a></li>
              <li><a href="/community" className="hover:text-green-400">Community</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Documentation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/docs/installation" className="hover:text-green-400">Installation Guide</a></li>
              <li><a href="/docs/user-guide" className="hover:text-green-400">User Guide</a></li>
              <li><a href="/docs/release-notes" className="hover:text-green-400">Release Notes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/linuxmint" className="hover:text-green-400">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/linux_mint" className="hover:text-green-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Linux Mint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}