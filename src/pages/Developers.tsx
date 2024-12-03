import { useEffect, useState } from 'react';
import { Code, GitBranch, Users, MessageSquare } from 'lucide-react';

// Define the type for a developer's GitHub data
type Developer = {
  id: number;
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null; // Adding bio field
};

export default function Developers() {
  const [developers, setDevelopers] = useState<Developer[]>([]);

  useEffect(() => {
    const fetchDevelopers = async () => {
      const githubUsernames = ["eshanized", "iconized", "alokified", "utkrshift"]; // Replace with actual GitHub usernames
      try {
        const developerData = await Promise.all(
          githubUsernames.map(async (username) => {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch data for ${username}`);
            }
            return response.json();
          })
        );
        setDevelopers(developerData);
      } catch (error) {
        console.error("Error fetching developer data:", error);
      }
    };

    fetchDevelopers();
  }, []);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Developers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the Snigdha OS development community and contribute to the most advanced penetration testing distribution.
          </p>
        </div>

        {/* Meet the Developers Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Meet the Developers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {developers.length > 0 ? (
              developers.map((developer) => (
                <div key={developer.id} className="p-4 border border-gray-200 rounded-lg text-center">
                  <img
                    src={developer.avatar_url}
                    alt={developer.login}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold">{developer.name || developer.login}</h3>
                  <p className="text-gray-600">@{developer.login}</p>
                  <p className="text-gray-500 text-sm mt-2">{developer.bio || "No bio available."}</p>
                  <a
                    href={developer.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#754ffe] font-medium mt-4 inline-block"
                  >
                    View Profile
                  </a>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Loading developer information...</p>
            )}
          </div>
        </div>
        
        {/* Get Involved and Development Resources Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Get Involved Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Code className="h-12 w-12 text-[#754ffe] mb-4" />
            <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
            <p className="text-gray-600 mb-6">
              There are many ways to contribute to Kali Linux. Whether you're a developer, security researcher, or documentation writer, your contributions are valuable.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <GitBranch className="h-5 w-5 mr-2 text-[#754ffe]" />
                Submit pull requests
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-[#754ffe]" />
                Report bugs
              </li>
              <li className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-[#754ffe]" />
                Join discussions
              </li>
            </ul>
          </div>

          {/* Development Resources Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Development Resources</h2>
            <div className="space-y-4">
              <a href="https://github.com/kali-linux" className="block p-4 border border-gray-200 rounded-lg hover:border-[#754ffe] transition-colors">
                <h3 className="font-semibold mb-2">GitHub Repository</h3>
                <p className="text-gray-600">Access our source code and contribute to development</p>
              </a>
              <a href="/docs/development" className="block p-4 border border-gray-200 rounded-lg hover:border-[#754ffe] transition-colors">
                <h3 className="font-semibold mb-2">Development Documentation</h3>
                <p className="text-gray-600">Learn about our development process and guidelines</p>
              </a>
              <a href="/community" className="block p-4 border border-gray-200 rounded-lg hover:border-[#754ffe] transition-colors">
                <h3 className="font-semibold mb-2">Community Forums</h3>
                <p className="text-gray-600">Discuss development topics with other contributors</p>
              </a>
            </div>
          </div>
        </div>

        {/* Current Projects */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Current Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Tool Development</h3>
              <p className="text-gray-600">Help improve existing tools or develop new security tools for Kali Linux.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-gray-600">Contribute to our documentation and help make Kali more accessible.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Testing</h3>
              <p className="text-gray-600">Help test new features and tools before they're released.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Localization</h3>
              <p className="text-gray-600">Help translate Kali Linux tools and documentation.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/irc" className="p-4 text-center border border-gray-200 rounded-lg hover:border-[#754ffe] transition-colors">
              <h3 className="font-semibold mb-2">IRC Channel</h3>
              <p className="text-gray-600">Chat with developers in real-time</p>
            </a>
            <a href="/mailing-list" className="p-4 text-center border border-gray-200 rounded-lg hover:border-[#754ffe] transition-colors">
              <h3 className="font-semibold mb-2">Mailing List</h3>
              <p className="text-gray-600">Subscribe to development discussions</p>
            </a>
            <a href="/bug-tracker" className="p-4 text-center border border-gray-200 rounded-lg hover:border-[#754ffe] transition-colors">
              <h3 className="font-semibold mb-2">Bug Tracker</h3>
              <p className="text-gray-600">Report issues and track bugs</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
