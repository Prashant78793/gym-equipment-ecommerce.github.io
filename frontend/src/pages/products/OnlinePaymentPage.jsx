import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCreditCard, FaPaypal } from "react-icons/fa";
import { SiRazorpay, SiPaytm, SiGooglepay, SiPhonepe } from "react-icons/si";
import Swal from "sweetalert2";

const OnlinePaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      Swal.fire("Error", "Please select a payment method", "error");
      return;
    }

    Swal.fire({
      title: "Processing Payment",
      text: `You selected ${paymentMethod}.`,
      icon: "info",
      confirmButtonText: "OK",
    }).then(() => {
      // ✅ Here you can integrate Razorpay/Stripe API
      navigate("/orders");
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Online Payment
        </h2>

        {/* Payment Methods */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setPaymentMethod("UPI (Google Pay / PhonePe / Paytm)")}
            className={`p-4 border rounded-lg flex flex-col items-center justify-center hover:shadow-md transition ${
              paymentMethod.includes("UPI") ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <div className="flex space-x-2 text-3xl text-blue-600">
              <SiGooglepay />
              <SiPhonepe />
              <SiPaytm />
            </div>
            <span className="text-sm mt-2">UPI</span>
          </button>

          <button
            onClick={() => setPaymentMethod("Razorpay")}
            className={`p-4 border rounded-lg flex flex-col items-center justify-center hover:shadow-md transition ${
              paymentMethod === "Razorpay" ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <SiRazorpay className="text-3xl text-indigo-600" />
            <span className="text-sm mt-2">Razorpay</span>
          </button>

          <button
            onClick={() => setPaymentMethod("Net Banking")}
            className={`p-4 border rounded-lg flex flex-col items-center justify-center hover:shadow-md transition ${
              paymentMethod === "Net Banking" ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <FaCreditCard className="text-3xl text-green-600" />
            <span className="text-sm mt-2">Net Banking</span>
          </button>

          <button
            onClick={() => setPaymentMethod("Credit / Debit Card")}
            className={`p-4 border rounded-lg flex flex-col items-center justify-center hover:shadow-md transition ${
              paymentMethod === "Credit / Debit Card" ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <div className="flex space-x-2 text-3xl text-red-600">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcAmex />
            </div>
            <span className="text-sm mt-2">Card</span>
          </button>

          <button
            onClick={() => setPaymentMethod("PayPal")}
            className={`p-4 border rounded-lg flex flex-col items-center justify-center hover:shadow-md transition col-span-2 ${
              paymentMethod === "PayPal" ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <FaPaypal className="text-3xl text-blue-700" />
            <span className="text-sm mt-2">PayPal</span>
          </button>
        </div>

        {/* Payment Form */}
        <form onSubmit={handlePayment}>
          {paymentMethod && (
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Payment Details for {paymentMethod}:
              </label>

              {paymentMethod.includes("Card") && (
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full border rounded px-3 py-2"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="border rounded px-3 py-2"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="border rounded px-3 py-2"
                    />
                  </div>
                </div>
              )}

              {paymentMethod.includes("UPI") && (
                <input
                  type="text"
                  placeholder="Enter UPI ID (e.g. name@upi)"
                  className="w-full border rounded px-3 py-2"
                />
              )}

              {paymentMethod === "Net Banking" && (
                <select className="w-full border rounded px-3 py-2">
                  <option>Select Bank</option>
                  <option>SBI</option>
                  <option>HDFC</option>
                  <option>ICICI</option>
                  <option>Axis</option>
                </select>
              )}

              {paymentMethod === "PayPal" && (
                <input
                  type="email"
                  placeholder="PayPal Email"
                  className="w-full border rounded px-3 py-2"
                />
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default OnlinePaymentPage;
