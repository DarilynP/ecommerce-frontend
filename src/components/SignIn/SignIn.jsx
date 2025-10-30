import SignInHeader from "./SignInHeader";
import signinbanner from "../../assets/images/signinbanner.png";
import "./SignIn.css";

function SignIn() {
  return (
    <section className="signin-page">
      <div className="signin-page__content">
        {/* Header */}
        <SignInHeader />

        {/* Body: image + form side by side */}
        <div className="signin-page__body">
          {/* Left: Image */}
          <div className="signin-page__image">
            <img src={signinbanner} alt="Fashion collection" />
          </div>

          {/* Right: Sign-in form */}
          <div className="signin-page__main">
            <h2 className="signin-page__title">Sign In</h2>

            <div className="signin-page__social">
              {/* <p>Sign in with Google or Twitter:</p> */}
              <div className="signin-page__social-buttons">
                <button className="btn btn--google"> Continue with Google</button>
                <button className="btn btn--twitter">Contiue with Twitter</button>
              </div>
            </div>

            <div className="signin-page__divider">or</div>

            <form className="signin-page__form">
              <input type="text" placeholder="Username or Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="btn btn--primary">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
