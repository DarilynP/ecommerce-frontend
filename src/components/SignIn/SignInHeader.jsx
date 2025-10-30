import "./SignIn.css";

function SignInHeader() {
  return (
    <header className="signin-header">
      {/* Logo on the left */}
      <div className="signin-header__logo">Euphoria</div>

      {/* Buttons on the right */}
      <div className="signin-header__actions">
        <button className="btn btn--login">Login</button>
        <button className="btn btn--signup">Sign Up</button>
      </div>
    </header>
  );
}

export default SignInHeader;
