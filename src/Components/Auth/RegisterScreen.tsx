import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <div className="animate__animated animate__fadeIn">
     <h1 className="auth__title">Register</h1>

     <form>

      <input
        id="name"
        className="auth__input"
        type="text"
        name="name"
        placeholder="name"
        autoCorrect="off"
        autoComplete="off"
      />

      <input
        id="email"
        className="auth__input"
        type="email"
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

      <input
        id="password_confirmation"
        className="auth__input"
        type="password"
        name="password_confirmation"
        placeholder="confirm password"
        autoCorrect="off"
      />
      
      <button
        id="register_button"
        className="btn btn-primary btn-block mb-4"
        type="submit"
      >
        register
      </button>

      <div className="text-right mb-2">
        <Link
          id="link_login"
          className="link"
          to="/auth/login"
        >Already registered ?</Link>
      </div>

     </form>
    </div>
  );
};

export default RegisterScreen;
