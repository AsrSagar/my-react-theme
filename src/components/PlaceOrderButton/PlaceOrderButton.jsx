// File: PlaceOrderButton.jsx
import React, { useState } from "react";
import axios from "axios";

const PlaceOrderButton = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const placeWooOrder = async () => {
    setLoading(true);
    setMessage("");

    const url = "http://localhost/wp-react-theme/wp-json/wc/v3/orders";

    const orderData = {
        payment_method: "cod",
        payment_method_title: "Cash on Delivery",
        set_paid: false,
        billing: {
            first_name: "John",
            last_name: "Doe",
            address_1: "123 Street",
            city: "Dhaka",
            state: "Dhaka",
            postcode: "1207",
            country: "BD",
            email: "john@example.com",
            phone: "017XXXXXXXX",
        },
        shipping: {
            first_name: "John",
            last_name: "Doe",
            address_1: "123 Street",
            city: "Dhaka",
            state: "Dhaka",
            postcode: "1207",
            country: "BD",
        },
        line_items: [
            {
            product_id: 123, // Replace with your product ID
            quantity: 1,
            },
        ],
        shipping_lines: [
            {
            method_id: "flat_rate",
            method_title: "Flat Rate",
            total: "50.00",
            },
        ],
    };

    try {
      const response = await axios.post(url, orderData, {
        auth: {
          username: "ck_f43a06935403d58d90635d22f1db7e10570e2b73", // Your Consumer Key
          password: "cs_2029a263378e25918c8886931b530f0ab82ff9e1", // Your Consumer Secret
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMessage(`Order created successfully! Order ID: ${response.data.id}`);
    } catch (error) {
      setMessage(
        `Error creating order: ${error.response?.data?.message || error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={placeWooOrder}
        disabled={loading}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
};

export default PlaceOrderButton;
