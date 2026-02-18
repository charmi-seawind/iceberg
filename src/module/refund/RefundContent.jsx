import React from "react";
import { motion } from "framer-motion";
import Container from "../../components/Container";

const RefundContent = () => {
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
              We understand that plans change. This page explains our cancellation and refund policies, including eligibility, process and timelines.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">1. Order Cancellation</h2>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                If you wish to cancel an order, please contact us as soon as possible at info@icebergbusiness.com or call +91 9099907779.
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                Cancellation is possible prior to dispatch. Once an order has been shipped, it cannot be cancelled — standard returns procedures will apply.
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                We reserve the right to cancel orders in cases of product unavailability, pricing errors, or suspected fraud. If we cancel your order, we will notify you and issue a full refund.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">2. Returns & Refund Eligibility</h2>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                Items must be returned in original condition, unused, with all packaging, tags and accessories (unless the product is defective).
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                Returns must be initiated within 7–15 days of delivery depending on the product category. Specific return windows will be listed on the product page and in the order confirmation.
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                Certain items (perishables, customized or intimate products) may not be eligible for return. Please check the product description for exceptions.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">3. Faulty or Damaged Items</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              If you receive a defective, damaged or incorrect item, please notify us within 48 hours of delivery with photos of the item and packaging. We will review and arrange a replacement, repair or refund as appropriate.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">4. Refund Process & Timeline</h2>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                Once we receive and inspect the returned item, we will notify you of the approval or rejection of your refund.
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                If approved, refunds will be processed to the original payment method. The time taken for the refund to reflect in your account may vary depending on the payment provider (typically 5–14 business days).
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                If you paid with cash on delivery and are eligible for a refund, we will offer a bank transfer refund or store credit as agreed.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">5. Return Shipping Costs</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Return shipping costs may be covered by Iceberg Business if the return is due to our error (wrong item, defective product). Otherwise, return shipping may be the responsibility of the customer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">6. How to Initiate a Return or Refund</h2>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                Contact Customer Support at info@icebergbusiness.com or call +91 9099907779 with your order details and reason for return.
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                Follow the return instructions provided by our support team, including packaging and courier instructions.
              </li>
              <li className="flex items-start text-gray-700 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3 mt-2" />
                Ship the item back using the specified courier and share tracking details with our team.
              </li>
            </ul>
          </div>

          <div className="bg-[#e7f5ff] rounded-[32px] p-6 sm:p-8 mt-10">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">7. Contact</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              For assistance with cancellations, returns or refunds, contact:<br />
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

export default RefundContent;
