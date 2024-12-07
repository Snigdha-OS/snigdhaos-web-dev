import { useEffect, useState } from 'react';
import { Github } from 'lucide-react';

export function Footer() {
  const [githubFollowers, setGithubFollowers] = useState<number | null>(null);
  // const [gitlabFollowers, setGitlabFollowers] = useState<number | null>(null);

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
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Snigdha OS Section */}
          <div>
            <h3 className="font-extrabold text-lg mb-4">Snigdha OS</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Arch based Linux Distribution for Penetration Testing and Ethical Hacking!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-extrabold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://blog.snigdhaos.org/" className="hover:text-indigo-400 transition-colors">
                  Blog <sup> upcoming!</sup>
                </a>
              </li>
              <li>
                <a href="https://forum.snigdhaos.org/" className="hover:text-indigo-400 transition-colors">
                  Forums<sup> maintenance!</sup>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Community<sup> upcoming!</sup>
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
                  href="https://snigdha-os.github.io/documentation/category/installation"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Installation Guide <sup>
                    <a href="https://snigdha-os.github.io/documentation/category/installation">git-version</a>
                  </sup>
                </a>
              </li>
              <li>
                <a
                  href="https://snigdha-os.github.io/documentation/category/user-guide"
                  className="hover:text-indigo-400 transition-colors"
                >
                  User Guide <sup>git-version</sup>
                </a>
              </li>
              <li>
                <a
                  href="https://snigdha-os.github.io/documentation/introduction/release_notes"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Release Notes <sup>git-version</sup>
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-extrabold text-lg mb-4">Connect</h3>
            <div className="flex space-x-5">
              {/* GitHub Follower Count Card */}
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center space-x-3">
                <a
                  href="https://github.com/Snigdha-OS"
                  className="hover:text-indigo-400 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-7 w-7 text-white" />
                </a>
                {githubFollowers !== null && (
                  <div className="text-white">
                    <span className="block text-sm">Followers</span>
                    <span className="text-lg font-bold">{githubFollowers}</span>
                  </div>
                )}
              </div>
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
