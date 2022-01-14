import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLoginEmailPassword, startGoogleLogin } from "../../Actions/auth";
import useForm from '../../Hooks/useForm';
import { RootState, Login } from "../../Types";

const LoginScreen = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.ui );

  const initialState: Login = {
    email: "johndoe@gmail.com",
    password: "123456789"
  };

  const { handleInputChange, email, password } = useForm<Login>( initialState );

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch( startLoginEmailPassword( email, password ) );
  };

  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin() );
  };

  return (
    <div className="animate__animated animate__fadeIn">
     <h1 className="auth__title">Login</h1>

     <form onSubmit={ handleLogin }>

      <input
        id="email"
        className="auth__input"
        type="text"
        name="email"
        placeholder="email"
        autoCorrect="off"
        autoComplete="off"
        value={ email }
        onChange={ handleInputChange }
      />

      <input
        id="password"
        className="auth__input"
        type="password"
        name="password"
        placeholder="password"
        autoCorrect="off"
        value={ password }
        onChange={ handleInputChange }
      />
      
      <button
        id="login_button"
        className="btn btn-primary btn-block mb-3"
        type="submit"
        disabled={ loading }
      >
        login
      </button>

      <div className="auth__social-networks">
        <div
          className="google-btn mb-3"
          onClick={ handleGoogleLogin }
        >
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
