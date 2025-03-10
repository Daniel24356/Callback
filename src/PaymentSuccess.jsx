import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PaymentSuccess = () => {
  const location = useLocation();
  const [message, setMessage] = useState("Verifying payment...");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const reference = queryParams.get("reference");

    if (reference) {
      verifyPayment(reference);
    } else {
      setMessage("No payment reference found.");
    }
  }, [location]);

  const verifyPayment = async (reference) => {
    try {
      const response = await axios.get(
        `https://039a-102-90-81-171.ngrok-free.app/paystack/verify/${reference}`
      );

      if (response.data.status === "success") {
        setMessage("✅ Payment successful! 🎉");
      } else {
        setMessage("❌ Payment verification failed.");
      }
    } catch (error) {
      setMessage("⚠️ Error verifying payment.");
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.message}>{message}</h2>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
  },
  card: {
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "350px",
  },
  message: {
    fontSize: "20px",
    color: "#333",
  },
};

export default PaymentSuccess;
