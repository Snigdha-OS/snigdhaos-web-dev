// src/pages/PrivacyPolicy.tsx

import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-lg mb-4">Last Updated: [Date]</p>
      
      <h2 className="text-2xl font-semibold mt-4">1. Information We Collect</h2>
      <p>We collect the following types of information when you use our website:</p>
      <h3 className="text-xl font-semibold mt-4">Personal Information</h3>
      <ul className="list-disc ml-6">
        <li>Email Address</li>
        <li>Account Information</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Non-Personal Information</h3>
      <ul className="list-disc ml-6">
        <li>Usage Data</li>
        <li>Cookies and Tracking Technologies</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6">
        <li>To provide, maintain, and improve our services.</li>
        <li>To communicate with you.</li>
        <li>To monitor and analyze the usage of our website.</li>
        <li>To respond to customer service requests.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">3. How We Protect Your Information</h2>
      <p>We implement a variety of security measures to maintain the safety of your personal information.</p>

      <h2 className="text-2xl font-semibold mt-4">4. Sharing Your Information</h2>
      <p>We do not sell or share your personal information without your consent, except for the reasons listed in this policy.</p>

      <h2 className="text-2xl font-semibold mt-4">5. Third-Party Links</h2>
      <p>Our website may contain links to third-party sites that are not controlled by us.</p>

      <h2 className="text-2xl font-semibold mt-4">6. Your Rights and Choices</h2>
      <ul className="list-disc ml-6">
        <li>Access, update, or delete your information.</li>
        <li>Opt-out of communications from us.</li>
        <li>Control cookies and tracking technologies.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">7. Data Retention</h2>
      <p>We retain your information only as long as necessary to provide you with our services.</p>

      <h2 className="text-2xl font-semibold mt-4">8. Children's Privacy</h2>
      <p>Our services are not intended for children under 13. We do not knowingly collect information from children under 13.</p>

      <h2 className="text-2xl font-semibold mt-4">9. Changes to This Privacy Policy</h2>
      <p>We may update our Privacy Policy. Any changes will be posted here with a revised "Last Updated" date.</p>

      <h2 className="text-2xl font-semibold mt-4">10. Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
      <p>Email: support@snigdhaos.com</p>
    </div>
  );
};

export default PrivacyPolicy;
