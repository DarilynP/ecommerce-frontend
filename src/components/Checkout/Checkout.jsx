
import "./Checkout.css";

function Checkout() {
  return (
    <section className="checkout-page">
      {/* Breadcrumb */}
      <div className="checkout-breadcrumb">
        Home <span>›</span> Cart <span>›</span> <strong>Checkout</strong>
      </div>

      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-layout">
        {/* LEFT: Shipping Form */}
        <div className="checkout-form">
          <h2>Shipping Information</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Street Address" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="ZIP Code" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="State" required />
              <input type="text" placeholder="Country" required />
            </div>
          </form>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <p>Sub Total</p>
            <span>$212.00</span>
          </div>
          <div className="summary-item">
            <p>Shipping</p>
            <span>$5.00</span>
          </div>
          <div className="summary-total">
            <p>Grand Total</p>
            <span>$217.00</span>
          </div>

          <button className="place-order-btn">Place Order</button>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
