import React from "react";

const TermsOfService = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Terms and Conditions</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">1. Introduction</h2>
        <p className="text-gray-600">
          Welcome to Hot Jobs. These Terms and Conditions govern your use of our website located at 
          <a href="https://www.hotjobs.com" className="text-blue-500 underline"> www.hotjobs.com</a>. 
          By accessing or using our website, you agree to comply with these terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">2. Acceptance of Terms</h2>
        <p className="text-gray-600">
          By using our website, you confirm that you accept these Terms and Conditions and agree to comply with them.
          If you do not agree with any part of these terms, you must not use our website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">3. Changes to Terms</h2>
        <p className="text-gray-600">
          We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective
          immediately upon posting on this page. Your continued use of the website after any changes constitutes
          your acceptance of the new Terms and Conditions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">4. User Responsibilities</h2>
        <p className="text-gray-600">
          You agree to use the website only for lawful purposes and in a way that does not infringe the rights
          of, restrict, or inhibit anyone else's use and enjoyment of the website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">5. Intellectual Property</h2>
        <p className="text-gray-600">
          All content, trademarks, and other intellectual property on the website are owned by or licensed to
          Hot Jobs. You may not reproduce, distribute, or create derivative works from any content without our
          express written permission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">6. Limitation of Liability</h2>
        <p className="text-gray-600">
          To the fullest extent permitted by law, Hot Jobs shall not be liable for any direct, indirect, incidental,
          special, consequential, or punitive damages arising from your use of the website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">7. Governing Law</h2>
        <p className="text-gray-600">
          These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any
          disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the
          courts of Navi Mumbai, India.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">8. Contact Information</h2>
        <p className="text-gray-600">
          If you have any questions about these Terms and Conditions, please contact us at 
          <a href="mailto:support@hotjobs.com" className="text-blue-500 underline"> support@hotjobs.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
