import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const Invoice = () => {
  const cartItems = useSelector((state) => state.cart?.cartItems || []);
  const reduxCheckoutData = useSelector(
    (state) => state.checkout?.checkoutData || {}
  );
  const invoiceRef = useRef();

  const [checkoutData] = useState(() => {
    const storedData = localStorage.getItem("checkoutData");
    return storedData ? JSON.parse(storedData) : reduxCheckoutData;
  });

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + (Number(item.price) || 0) * (Number(item.quantity) || 0),
    0
  );
  const discountAmount = subtotal * 0.1;
  const taxAmount = 0;
  const grandTotal = subtotal - discountAmount + taxAmount;

  const downloadInvoice = () => {
    const input = invoiceRef.current;
    html2canvas(input, {
      useCORS: true,
      scale: 2,
      logging: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("invoice.pdf");
    });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <button
          onClick={downloadInvoice}
          style={{
            background: "#b45309",
            color: "#ffffff",
            padding: "0.5rem 1rem",
            borderRadius: "0.375rem",
            border: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Download Invoice
        </button>
      </div>

      <div
        style={{
          background: "#f3f4f6",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <div
          ref={invoiceRef}
          style={{
            background: "#ffffff",
            padding: "2rem",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            width: "794px",
            minHeight: "1123px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #e5e7eb",
              paddingBottom: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#2563eb",
                }}
              >
                Jeweley
              </h1>
              <p style={{ color: "#4b5563" }}>{checkoutData?.streetAddress1}</p>
              <p style={{ color: "#4b5563" }}>
                charmi@gmail.com | jewelery@gmail.com
              </p>
              <p style={{ color: "#4b5563" }}>+{checkoutData?.mobile}</p>
            </div>

            <div style={{ textAlign: "right" }}>
              <p style={{ fontWeight: "bold" }}>
                Invoice No: <span style={{ color: "#374151" }}>LL93784</span>
              </p>
              <p style={{ fontWeight: "bold" }}>
                Invoice Date:{" "}
                <span style={{ color: "#374151" }}>10 March 2022</span>
              </p>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#3b82f6",
                }}
              >
                ₹{subtotal.toFixed(2)}
              </h2>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #e5e7eb",
              padding: "1rem",
              borderRadius: "0.375rem",
              marginBottom: "1rem",
              display: "grid",
                gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div>
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "1.125rem",
                  color: "#2563eb",
                  marginBottom: "0.5rem",
                }}
              >
                Invoice To
              </h2>
              <p>
                <strong>Name:</strong> {checkoutData?.firstName}
              </p>
              <p>
                <strong>Email:</strong> charmi@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> {checkoutData?.mobile}
              </p>
              <p>
                <strong>Address:</strong> {checkoutData?.streetAddress1}
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "1.125rem",
                  color: "#2563eb",
                  marginBottom: "0.5rem",
                }}
              >
                Shipping Address
              </h2>
            
              <p>
                <strong>City: </strong> {checkoutData?.streetAddress1}
              </p>
              <p>
                <strong>State:</strong> {checkoutData?.state}
              </p>
              <p>
                <strong>Address:</strong> {checkoutData?.streetAddress1}
              </p>
              <p>
                <strong>Zip Code</strong> {checkoutData?.postcode}
              </p>
            </div>
          </div>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "1px solid #e5e7eb",
              borderRadius: "0.375rem",
              overflow: "hidden",
            }}
          >
            {/* Table Header */}
            <thead style={{ background: "#2563eb", color: "#ffffff" }}>
              <tr>
                <th style={{ padding: "0.5rem", textAlign: "left" }}>Item</th>
                <th style={{ padding: "0.5rem", textAlign: "left" }}>Name</th>
                <th style={{ padding: "0.5rem", textAlign: "left" }}>Price</th>
                <th style={{ padding: "0.5rem", textAlign: "left" }}>Qty</th>
                <th style={{ padding: "0.5rem", textAlign: "left" }}>Total</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody style={{ background: "#f3f4f6" }}>
              {cartItems.map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.5rem", textAlign: "left" }}>
                    {item.id}
                  </td>
                  <td style={{ padding: "0.5rem", textAlign: "left" }}>
                    {item.name}
                  </td>
                  <td style={{ padding: "0.5rem", textAlign: "left" }}>
                    ₹{item.price}
                  </td>
                  <td style={{ padding: "0.5rem", textAlign: "left" }}>
                    {item.quantity}
                  </td>
                  <td style={{ padding: "0.5rem", textAlign: "left" }}>
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: "1.5rem" }}>
            <p style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
              Payment Info:
            </p>
            <p>{checkoutData?.firstName}</p>
            <p>Credit Card - 236********928</p>
            <p>
              Amount: <strong>₹{subtotal.toFixed(2)}</strong>
            </p>

            <div
              style={{
                borderTop: "1px solid #e5e7eb",
                marginTop: "1rem",
                paddingTop: "1rem",
                textAlign: "right",
              }}
            >
              <p>
                Subtotal:{" "}
                <span style={{ fontWeight: "bold" }}>
                  ₹{subtotal.toFixed(2)}
                </span>
              </p>
              <p style={{ color: "#ef4444" }}>
                Discount (10%):{" "}
                <span style={{ fontWeight: "bold" }}>
                  -₹{discountAmount.toFixed(2)}
                </span>
              </p>
              <p>
                Tax (0%):{" "}
                <span style={{ fontWeight: "bold" }}>
                  ₹{taxAmount.toFixed(2)}
                </span>
              </p>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#2563eb",
                }}
              >
                Grand Total: ₹{grandTotal.toFixed(2)}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
