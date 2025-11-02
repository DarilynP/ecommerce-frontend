import "./Cart.css";
import { useNavigate } from "react-router-dom";

// --- Product Images ---
import whiteshirt from "../../assets/images/white_tshirt.png";
import graphicT from "../../assets/images/graphicT.png";
import patternshirt from "../../assets/images/patternshirt.png";
import yellowsweater from "../../assets/images/yellowsweater.png";

function Cart() {
  const navigate = useNavigate();

  // --- Cart Data ---
  const cartItems = [
    {
      id: 1,
      name: "White Cotton T-Shirt",
      color: "White",
      size: "M",
      price: 29.0,
      quantity: 1,
      shipping: "FREE",
      image: whiteshirt,
    },
    {
      id: 2,
      name: "Graphic Print Tee",
      color: "Black",
      size: "L",
      price: 39.0,
      quantity: 1,
      shipping: "FREE",
      image: graphicT,
    },
    {
      id: 3,
      name: "Patterned Shirt",
      color: "Beige",
      size: "XL",
      price: 65.0,
      quantity: 1,
      shipping: "$5.00",
      image: patternshirt,
    },
    {
      id: 4,
      name: "Yellow Sweater",
      color: "Yellow",
      size: "M",
      price: 79.0,
      quantity: 1,
      shipping: "FREE",
      image: yellowsweater,
    },
  ];

  // --- Totals ---
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 5;
  const total = subtotal + shipping;

  return (
    <section className="cart-page">
      {/* ---------- Breadcrumb ---------- */}
      <div className="cart-breadcrumb">
        Home <span>›</span> <strong>Add To Cart</strong>
      </div>

      {/* ---------- Cart Table ---------- */}
      <div className="cart-container">
        <h2 className="cart-title">Shopping Cart</h2>

        <table className="cart-table">
          <thead>
            <tr>
              <th>Product Details</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Shipping</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="product-info">
                  <img src={item.image} alt={item.name} />
                  <div className="details">
                    <h4>{item.name}</h4>
                    <p>
                      Color: <span>{item.color}</span>
                    </p>
                    <p>
                      Size: <span>{item.size}</span>
                    </p>
                  </div>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <div className="qty-control">
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                  </div>
                </td>
                <td>{item.shipping}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button className="remove-btn">🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------- Bottom Section ---------- */}
      <div className="cart-bottom">
        {/* Discount Section */}
        <div className="cart-discount">
          <h3>Discount Codes</h3>
          <p>Enter your coupon code if you have one</p>
          <div className="discount-input">
            <input type="text" placeholder="Enter coupon code" />
            <button>Apply Coupon</button>
          </div>
          <button className="continue-btn">Continue Shopping</button>
        </div>

        {/* Summary Section */}
        <div className="cart-summary">
          <div className="summary-item">
            <p>Sub Total</p>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <p>Shipping</p>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="summary-total">
            <p>Grand Total</p>
            <span>${total.toFixed(2)}</span>
          </div>

          {/* ✅ Navigate to Checkout */}
          <button
            className="checkout-btn"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/checkout");
            }}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
