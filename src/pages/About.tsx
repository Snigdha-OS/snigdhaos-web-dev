import React from 'react';
import { Heart, Users, Shield } from 'lucide-react';

export function About() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">About Linux Mint</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Linux Mint is one of the most popular desktop Linux distributions and
            used by millions of people. It is elegant, easy to use, comfortable,
            and powerful.
          </p>
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

        {/* History Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our History</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <TimelineItem
                year="2006"
                title="The Beginning"
                description="Linux Mint was founded by Clement Lefebvre and launched its first release, Ada."
              />
              <TimelineItem
                year="2008"
                title="Growing Popular"
                description="Linux Mint gained significant popularity and became one of the most widely used Linux distributions."
              />
              <TimelineItem
                year="2010"
                title="Mint Tools"
                description="Development of Mint-specific tools began, making system management easier for users."
              />
              <TimelineItem
                year="Present"
                title="Continuing Innovation"
                description="Linux Mint continues to innovate while maintaining its commitment to stability and user-friendliness."
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Clement Lefebvre"
              role="Project Leader"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <TeamMember
              name="Gwendal Le Bihan"
              role="Development Lead"
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <TeamMember
              name="Joseph Mills"
              role="Community Manager"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </section>
      </div>
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
    <div className="text-center p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
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

function TeamMember({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}