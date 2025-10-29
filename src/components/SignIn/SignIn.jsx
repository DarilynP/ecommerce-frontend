import "./SignIn.css";

function SignIn() {
  return (
    <section className="signin-page">
      {/* Header */}
      <header className="signin-page__header">
        <div className="signin-page__logo">Euphoria</div>
        <div className="signin-page__actions">
          <button className="btn btn--signup">Sign Up</button>
        </div>
      </header>

      {/* Main content */}
      <div className="signin-page__content">
        <h2 className="signin-page__title">Sign In</h2>

        {/* Social login */}
        <div className="signin-page__social">
          <p>Sign in with Google or Twitter:</p>
          <button className="btn btn--google">Google</button>
          <button className="btn btn--twitter">Twitter</button>
        </div>

        <div className="signin-page__divider">or</div>

        {/* Email/Password form */}
        <form className="signin-page__form">
          <input type="text" placeholder="Username or Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn btn--primary">Sign In</button>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
