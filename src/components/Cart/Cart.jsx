import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContextCart";

function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // Calculate totals dynamically
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 5 : 0;
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

        {cartItems.length === 0 ? (
          <p className="empty-cart-msg">Your cart is currently empty.</p>
        ) : (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product Details</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  {/* Product Details */}
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

                  {/* Price */}
                  <td>${item.price.toFixed(2)}</td>

                  {/* Quantity Controls */}
                  <td>
                    <div className="qty-control">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>
                  </td>

                  {/* Subtotal */}
                  <td>${(item.price * item.quantity).toFixed(2)}</td>

                  {/* Remove */}
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ---------- Summary Section ---------- */}
      {cartItems.length > 0 && (
        <div className="cart-bottom">
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

            {/* ✅ Proceed to Checkout */}
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
      )}
    </section>
  );
}

export default Cart;
