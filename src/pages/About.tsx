import React, { useEffect, useState } from "react";
import { Heart, Users, Shield, Package, Coffee } from "lucide-react";

interface TeamMember {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  location: string;
  company: string;
}

export function About() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/orgs/Snigdha-OS/members"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch team members");
        }
        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">About Snigdha OS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Snigdha OS is one of the most upcoming desktop Linux distributions and
            used by millions of people. It is elegant, easy to use, comfortable,
            and powerful.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Package className="h-12 w-12 text-teal-500" />}
              title="Fast & Lightweight"
              description="Snigdha OS is optimized for performance, ensuring fast boot times and smooth user experiences."
            />
            <FeatureCard
              icon={<Shield className="h-12 w-12 text-green-500" />}
              title="Security First"
              description="We prioritize your privacy and security, offering regular security updates and patches."
            />
            <FeatureCard
              icon={<Coffee className="h-12 w-12 text-yellow-500" />}
              title="Developer Friendly"
              description="Snigdha OS comes with a wide range of tools and a solid environment for developers."
            />
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Heart className="h-12 w-12 text-red-500" />}
              title="Our Mission"
              description="To produce a modern, elegant and comfortable operating system which is both powerful and easy to use."
            />
            <ValueCard
              icon={<Users className="h-12 w-12 text-blue-500" />}
              title="Community"
              description="We believe in the power of open source and community collaboration to create amazing software."
            />
            <ValueCard
              icon={<Shield className="h-12 w-12 text-green-500" />}
              title="Security"
              description="We prioritize user privacy and system security through regular updates and careful system design."
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16 text-center bg-white py-12">
          <h2 className="text-4xl font-extrabold text-indigo mb-8">What Our Users Say</h2>
          <div className="flex flex-col md:flex-row gap-12 justify-center">
            <Testimonial
              name="John Doe"
              role="Software Engineer"
              quote="Snigdha OS is the perfect balance between simplicity and power. I use it daily for my work."
              avatarUrl="https://avatars.githubusercontent.com/u/1?v=4"
              profileUrl="https://github.com/eshanized"
            />
            <Testimonial
              name="Jane Smith"
              role="Designer"
              quote="I love the clean and beautiful interface. It makes my work much more enjoyable."
              avatarUrl="https://avatars.githubusercontent.com/u/2?v=4"
              profileUrl="https://github.com/janesmith"
            />
            <Testimonial
              name="Alice Johnson"
              role="Student"
              quote="I switched to Snigdha OS for its stability and performance. It’s been a great experience so far."
              avatarUrl="https://avatars.githubusercontent.com/u/3?v=4"
              profileUrl="https://github.com/alicejohnson"
            />
          </div>
        </section>

        {/* History Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <TimelineItem
                year="2023"
                title="The Beginning"
                description="Snigdha OS was founded by Eshan Roy (aka eshanized) and launched its first release, Arctic."
              />
              <TimelineItem
                year="2024"
                title="Growing Popular"
                description="Snigdha OS gained significant popularity and became one of the most widely used Linux distributions."
              />
              <TimelineItem
                year="2024"
                title="Penetration Tools"
                description="Development of penetration-specific tools began, making system management easier for users."
              />
              <TimelineItem
                year="Present"
                title="Continuing Innovation"
                description="Snigdha OS continues to innovate while maintaining its commitment to stability and user-friendliness."
              />
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Leadership Team</h2>
          {loading ? (
            <p className="text-center text-gray-600">Loading team members...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard
                  key={member.login}
                  name={member.name || member.login}
                  image={member.avatar_url}
                  profileUrl={member.html_url}
                  bio={member.bio || "Go go, said the bird. Humankind cannot tolerate too much reality!"}
                  location={member.location || "INDIA"}
                  company={member.company || "TONMOY INFRASTRUCTURE"}
                />
              ))}
            </div>
          )}
        </section>
      </div>
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

function ValueCard({
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

function Testimonial({
  name,
  role,
  quote,
  avatarUrl,
  profileUrl,
}: {
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
  profileUrl: string;
}) {
  return (
    <div className="flex-1 bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow transform hover:scale-105">
      <p className="text-lg italic text-gray-700 mb-4">"{quote}"</p>
      <div className="flex items-center justify-center mt-4">
        <img
          src={avatarUrl}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500 shadow-md transform hover:scale-110 transition-transform"
        />
        <div className="ml-4">
          <h3 className="font-bold text-xl text-gray-800">{name}</h3>
          <p className="text-gray-500 text-sm">{role}</p>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 text-sm mt-2 inline-block"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex">
      <div className="w-24 font-bold text-green-600">{year}</div>
      <div>
        <h3 className="font-bold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function TeamMemberCard({
  name,
  image,
  profileUrl,
  bio,
  location,
  company,
}: {
  name: string;
  image: string;
  profileUrl: string;
  bio: string;
  location: string;
  company: string;
}) {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="font-bold text-lg text-gray-800">{name}</h3>
      <p className="text-gray-500 text-sm">{bio}</p>
      <p className="text-gray-600 text-sm mt-2">{location}</p>
      <p className="text-gray-600 text-sm mt-1">{company}</p>
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-500 hover:text-indigo-700 mt-2 inline-block"
      >
        View Profile
      </a>
    </div>
  );
}
