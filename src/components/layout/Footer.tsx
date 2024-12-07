// import React from 'react';
import { Github, Gitlab } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Linux Mint Section */}
          <div>
            <h3 className="font-extrabold text-lg mb-4">Linux Mint</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Linux Mint is an elegant, easy to use, up-to-date, and comfortable
              GNU/Linux desktop distribution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-extrabold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/blog" className="hover:text-indigo-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/forums" className="hover:text-indigo-400 transition-colors">
                  Forums
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-indigo-400 transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Documentation */}
          <div>
            <h3 className="font-extrabold text-lg mb-4">Documentation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/docs/installation"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Installation Guide
                </a>
              </li>
              <li>
                <a
                  href="/docs/user-guide"
                  className="hover:text-indigo-400 transition-colors"
                >
                  User Guide
                </a>
              </li>
              <li>
                <a
                  href="/docs/release-notes"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Release Notes
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-extrabold text-lg mb-4">Connect</h3>
            <div className="flex space-x-5">
              <a
                href="https://github.com/Snigdha-OS"
                className="hover:text-indigo-400 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-7 w-7" />
              </a>
              <a
                href="https://gitlab.com/Snigdha-OS"
                className="hover:text-indigo-400 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Gitlab className="h-7 w-7" />
              </a>
              <a
                href="https://dev.to/SnigdhaOS"
                className="hover:text-indigo-400 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-7 w-7 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 40"
                >
                  <path d="M0 2.7v34.6c0 1.5.6 2.9 1.6 3.9 1 1 2.4 1.6 3.9 1.6h38.9c1.5 0 2.9-.6 3.9-1.6 1-1 1.6-2.4 1.6-3.9V2.7c0-1.5-.6-2.9-1.6-3.9-1-1-2.4-1.6-3.9-1.6H5.5c-1.5 0-2.9.6-3.9 1.6C.6-.2 0 1.2 0 2.7zm21.8 26.7h-3.9V10.6h3.9v18.8zm8.5 0h-3.3l-2.2-6.6h-1.5v6.6h-3.9V10.6h5.5c.7 0 1.3.1 1.9.4s1 .6 1.4 1.1.7 1 .9 1.7c.2.6.3 1.3.3 2v2.6c0 .7-.1 1.4-.3 2s-.5 1.1-.9 1.6c-.4.5-.8.8-1.4 1.1-.6.2-1.2.4-1.9.4h-1.6l2 6.3h2.4l3.5-6.3v6.3zm9.5 0h-3.9v-6.6h-5.6v6.6h-3.9V10.6h3.9v6.2h5.6v-6.2h3.9v18.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Snigdha OS℠ & Tonmoy Infrastructure™. All rights reserved.
          </p>
          <p className="mt-2">Built with ❤️ by the Snigdha OS team.</p>
        </div>
      </div>
    </footer>
  );
}
