import React from "react";
import { motion } from "framer-motion";
import Container from "../../components/Container";

const TermsContent = () => {
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
              Welcome to Iceberg Business. These Terms & Conditions ("Terms") govern your access to and use of our website, services and products supplied by Iceberg Business ("we", "us", "our"). By placing an order or using our website you agree to be bound by these Terms. If you do not agree, please do not use our site or place an order.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">1. Ordering & Acceptance</h2>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                All orders placed through the website are subject to acceptance by Iceberg Business. We reserve the right to refuse or cancel any order for any reason, including product unavailability, pricing errors, or suspected fraudulent activity.
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                An order confirmation email does not constitute acceptance of an order. Acceptance occurs when we dispatch the product or explicitly confirm the order.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">2. Prices & Payment</h2>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                Prices displayed on the website are in Indian Rupees (INR) and are inclusive/exclusive of taxes as indicated on the product page.
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                We accept the payment methods displayed at checkout. Payment must be made in full before dispatch.
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                We strive to ensure price accuracy; in the event of a manifest error in pricing, we reserve the right to cancel the order and notify the customer.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">3. Product Information</h2>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                We make every effort to display accurate product information, images, specifications and availability. However, minor variations may occur.
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                Colors displayed on your screen may vary depending on monitor settings.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">4. Delivery</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Delivery terms are provided on the Shipping page and at checkout. Delivery times are estimates and may vary due to stock, location or unforeseen events.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">5. Returns, Cancellations & Refunds</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Our Cancellation & Refunds policy governs returns, cancellations and refunds. Please consult that page for detailed procedures and eligibility.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">6. Intellectual Property</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              All content on the website — including text, graphics, logos, images and software — is the property of Iceberg Business or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce or exploit such content without our prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">7. Liability</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              To the maximum extent permitted by law, Iceberg Business' liability for any loss or damage arising under or in connection with these Terms will be limited to the price paid for the products concerned. We are not liable for indirect, incidental or consequential losses.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">8. Privacy</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Your use of the website is also governed by our Privacy Policy, which explains how we collect and use personal information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">9. Governing Law</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              These Terms are governed by the laws of India. Any dispute arising out of or in connection with these Terms will be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
            </p>
          </div>

          <div className="bg-[#e7f5ff] rounded-[32px] p-6 sm:p-8 mt-10">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">10. Contact</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              If you have any questions about these Terms, please contact us:<br />
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

export default TermsContent;
