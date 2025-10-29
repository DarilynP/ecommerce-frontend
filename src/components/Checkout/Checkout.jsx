import "./Checkout.css";

function Checkout() {
  return (
    <section className="checkout">
      <h2>Checkout</h2>
      <form className="checkout__form">
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="City" required />
        <button type="submit">Place Order</button>
      </form>
    </section>
  );
}

export default Checkout;
