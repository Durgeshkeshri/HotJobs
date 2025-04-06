import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Privacy Policy for Hot Jobs</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">1. Introduction</h2>
        <p className="text-gray-600">
          This Privacy Policy outlines how we collect, use, and protect your information when you visit the Hot Jobs
          website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">2. Information We Collect</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li className="mb-2">
            <strong>Personal Information:</strong>
            <ul className="list-disc pl-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Resume/CV</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Usage Data:</strong>
            <ul className="list-disc pl-6">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>To provide and maintain our services</li>
          <li>To notify you about changes to our services</li>
          <li>To allow you to participate in interactive features</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information to improve our services</li>
          <li>To monitor the usage of our services</li>
          <li>To detect, prevent, and address technical issues</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">4. Data Security</h2>
        <p className="text-gray-600">
          We take the security of your personal information seriously and implement appropriate technical and
          organizational measures to protect it.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">5. Sharing Your Information</h2>
        <p className="text-gray-600">
          We do not sell or rent your personal information to third parties. We may share your information with:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Service providers who assist us in operating our website</li>
          <li>Law enforcement agencies if required by law</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">6. Your Rights</h2>
        <p className="text-gray-600">You have the right to:</p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Access your personal information</li>
          <li>Request correction of your personal information</li>
          <li>Request deletion of your personal information</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">7. Changes to This Privacy Policy</h2>
        <p className="text-gray-600">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">8. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions about this Privacy Policy, please contact us at 
          <a href="mailto:support@hotjobs.com" className="text-blue-500 underline"> support@hotjobs.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
