import { useEffect, useState } from 'react';
import { Github } from 'lucide-react';

export function Footer() {
  const [githubFollowers, setGithubFollowers] = useState<number | null>(null);

  // Fetch GitHub follower count
  useEffect(() => {
    async function fetchGithubFollowers() {
      const response = await fetch('https://api.github.com/users/Snigdha-OS');
      const data = await response.json();
      if (data.followers !== undefined) {
        setGithubFollowers(data.followers);
      }
    }
    fetchGithubFollowers();
  }, []);

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Snigdha OS Section */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-indigo-400">Snigdha OS</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Arch-based Linux Distribution for Penetration Testing and Ethical Hacking! Experience power and simplicity
              like never before.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-indigo-400">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="https://blog.snigdhaos.org/"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Blog <span className="text-xs text-gray-400">(Upcoming!)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://forum.snigdhaos.org/"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Forums <span className="text-xs text-gray-400">(Maintenance!)</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Community <span className="text-xs text-gray-400">(Upcoming!)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Documentation */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-indigo-400">Documentation</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="https://snigdha-os.github.io/documentation/category/installation"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Installation Guide
                </a>
              </li>
              <li>
                <a
                  href="https://snigdha-os.github.io/documentation/category/user-guide"
                  className="hover:text-indigo-400 transition-colors"
                >
                  User Guide
                </a>
              </li>
              <li>
                <a
                  href="https://snigdha-os.github.io/documentation/introduction/release_notes"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Release Notes
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-indigo-400">Connect</h3>
            <div className="flex items-center space-x-5">
              <a
                href="https://github.com/Snigdha-OS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gray-800 hover:bg-indigo-500 transition-colors px-4 py-3 rounded-lg shadow-lg"
              >
                <Github className="h-7 w-7 text-white" />
                {githubFollowers !== null && (
                  <div className="text-white">
                    <span className="text-sm">Followers</span>
                    <span className="block text-lg font-bold">{githubFollowers}</span>
                  </div>
                )}
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} <span className="text-indigo-400">Snigdha OS</span> & Tonmoy Infrastructure™.
            All rights reserved.
          </p>
          <p className="mt-2">Built with ❤️ by the Snigdha OS team.</p>
        </div>
      </div>
    </footer>
  );
}
