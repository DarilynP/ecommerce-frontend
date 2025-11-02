import "./Checkout.css";
import { useCart } from "../Cart/CartContextCart"; 

function Checkout() {
  const { cartItems } = useCart();

  // Calculate totals dynamically
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 5 : 0;
  const total = subtotal + shipping;

  return (
    <section className="checkout-page">
      {/* ---------- BREADCRUMB ---------- */}
      <div className="checkout-breadcrumb">
        Home <span>›</span> Cart <span>›</span> <strong>Checkout</strong>
      </div>

      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-container">
        {/* ---------- LEFT SIDE ---------- */}
        <div className="checkout-left">
          {/* Shipping Info */}
          <div className="checkout-section">
            <h2>Shipping Information</h2>
            <form className="checkout-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Street Address" required />
              <div className="form-row">
                <input type="text" placeholder="City" required />
                <input type="text" placeholder="ZIP Code" required />
              </div>
              <div className="form-row">
                <input type="text" placeholder="State" required />
                <input type="text" placeholder="Country" required />
              </div>
              <label className="checkbox-label">
                <input type="checkbox" /> Save this information for next time
              </label>
            </form>
          </div>

          {/* Shipping Method */}
          <div className="checkout-section">
            <h2>Shipping Method</h2>
            <div className="shipping-option">
              <span>Standard Delivery (3-5 Days)</span>
              <strong>$5.00</strong>
            </div>
          </div>

          {/* Payment Info */}
          <div className="checkout-section">
            <h2>Payment Method</h2>
            <label className="radio-option">
              <input type="radio" name="payment" defaultChecked /> Credit Card
            </label>
            <label className="radio-option">
              <input type="radio" name="payment" /> PayPal
            </label>
            <label className="radio-option">
              <input type="radio" name="payment" /> Cash on Delivery
            </label>

            <div className="card-inputs">
              <input type="text" placeholder="Card Number" />
              <input type="text" placeholder="MM/YY" />
              <input type="text" placeholder="CVC" />
            </div>

            <button className="place-order-btn">Place Order</button>
          </div>
        </div>

        {/* ---------- RIGHT SIDE (Order Summary) ---------- */}
        <div className="checkout-right">
          <div className="order-summary">
            <h2>Order Summary</h2>

            {/* ✅ Dynamically show cart items */}
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div className="summary-item" key={item.id}>
                  <img src={item.image} alt={item.name} className="summary-img" />
                  <div className="summary-details">
                    <p>{item.name}</p>
                    <span>
                      {item.color} • Size {item.size} • Qty {item.quantity}
                    </span>
                  </div>
                  <p className="summary-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))
            )}

            {/* Totals */}
            <div className="summary-item">
              <p>Subtotal</p>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <p>Shipping</p>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="summary-total">
              <p>Total</p>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
