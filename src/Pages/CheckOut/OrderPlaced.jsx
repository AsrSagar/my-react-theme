import react from "react";
import CheckoutPage from "./CheckOut";

const product = {
  id: 123, // Your WooCommerce product ID
  name: "Sample Product",
};

export default function App() {
  return (
    <div>
      <h1>WooCommerce React Checkout</h1>
      <CheckoutPage product={product} />
    </div>
  );
}