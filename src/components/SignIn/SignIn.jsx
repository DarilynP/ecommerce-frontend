import SignInHeader from "./SignInHeader";
import signinbanner from "../../assets/images/signinbanner.png";
import googleIcon from "../../assets/images/Google.png";
import twitterIcon from "../../assets/images/twitter.png";

import "./SignIn.css";

function SignIn() {
  return (
    <section className="signin-page">
      {/* Header */}
      <SignInHeader />

      {/* Body: image + form side by side */}
      <div className="signin-page__body">
        {/* Left: Image */}
        <div className="signin-page__image">
          <img src={signinbanner} alt="Fashion collection banner" />
        </div>

        {/* Right: Sign-in form */}
        <div className="signin-page__main">
          <h2 className="signin-page__title">Sign In</h2>

          {/* Social login */}
          <div className="signin-page__social">
            <div className="signin-page__social-buttons">
              <button className="btn btn--google">
                <img src={googleIcon} alt="Google icon" />
                Continue with Google
              </button>

              <button className="btn btn--twitter">
                <img src={twitterIcon} alt="Twitter icon" />
                Continue with Twitter
              </button>
            </div>
          </div>

          <div className="signin-page__divider">or</div>

          {/* Form */}
          <form className="signin-page__form">
            <input type="text" placeholder="Username or Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="btn btn--primary">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
