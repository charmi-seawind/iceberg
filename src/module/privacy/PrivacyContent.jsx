import React from "react";
import { motion } from "framer-motion";
import Container from "../../components/Container";

const PrivacyContent = () => {
  return (
    <section className="bg-white font-sans overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
              Iceberg Business ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose and protect your information when you visit our website or use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">1. Information We Collect</h2>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                <span><strong>Personal information:</strong> name, email address, phone number, shipping and billing address, payment information (processed by third-party payment gateways), and account credentials.</span>
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                <span><strong>Transactional data:</strong> order history, returns, refunds and communications related to purchases.</span>
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                <span><strong>Technical data:</strong> IP address, device and browser information, pages visited and cookies.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">2. How We Use Your Information</h2>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                To process and fulfill orders, manage returns and refunds, and provide customer support.
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                To communicate about orders, promotional offers, and service updates (you may opt out of marketing messages).
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                To improve our website, products, and services through analytics and customer feedback.
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                To detect and prevent fraud and ensure the security of our systems.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">3. Cookies & Tracking</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We use cookies and similar technologies to provide and improve our services, remember user preferences and gather analytics data. You can control cookie preferences through your browser settings; however, disabling certain cookies may affect site functionality.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">4. Data Sharing & Disclosure</h2>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                We may share personal data with service providers who help us operate the website, process payments, manage deliveries, or provide marketing/analytics services. These third parties are bound by confidentiality and data protection obligations.
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                We will not sell your personal information to third parties.
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                We may disclose information if required by law or to protect our legal rights.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">5. Data Security</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We implement reasonable technical and organizational measures to protect personal data from unauthorized access, disclosure or loss. Payment information is handled by secure, PCI-compliant payment gateways; we do not store full card details on our servers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">6. Data Retention</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We retain personal information for as long as necessary to provide services, comply with legal obligations and resolve disputes. Retention periods vary by data type and purpose.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">7. Your Rights</h2>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                You may access, correct, or request deletion of your personal information by contacting us at info@icebergbusiness.com.
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                You may opt out of marketing communications at any time using the unsubscribe link or by contacting customer support.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">8. Children</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Our website is not intended for children under the age of 18. We do not knowingly collect personal information from minors. If you believe we have collected information from a child, please contact us to request removal.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">9. Changes to this Policy</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.
            </p>
          </div>

          <div className="bg-[#e7f5ff] rounded-[32px] p-6 sm:p-8 mt-10">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">10. Contact</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              <strong>Iceberg Business</strong><br />
              B-1103, Mondeal Heights, Near Novotel Hotel,<br />
              SG Highway, Ahmedabad, Gujarat, 380015.<br />
              Phone: +91 9099907779<br />
              Email: info@icebergbusiness.com
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default PrivacyContent;
