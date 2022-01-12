import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className="animate__animated animate__fadeIn">
     <h1 className="auth__title">Login</h1>

     <form>

      <input
        id="email"
        className="auth__input"
        type="text"
        name="email"
        placeholder="email"
        autoCorrect="off"
        autoComplete="off"
      />

      <input
        id="password"
        className="auth__input"
        type="password"
        name="password"
        placeholder="password"
        autoCorrect="off"
      />

      
      <button
        id="login_button"
        className="btn btn-primary btn-block mb-3"
        type="submit"
      >
        login
      </button>

      <div className="auth__social-networks">
        <div className="google-btn mb-3">
          <div className="google-icon-wrapper">
            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
          </div>
          <p className="btn-text"><b>Sign in with google</b></p>
        </div>
      </div>

      <div className="text-right mb-2">
        <Link
          id="link_register"
          className="link"
          to="/auth/register"
        >Create new account</Link>
      </div>

     </form>
    </div>
  );
};

export default LoginScreen;
