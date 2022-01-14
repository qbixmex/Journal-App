import { FormEvent } from "react";
import { Link } from "react-router-dom";
import validator from 'validator';

import { Register } from "../../Types";
import useForm from "../../Hooks/useForm";

const RegisterScreen = () => {
  
  const initialState: Register = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    password: "123456789",
    password_confirmation: "123456789"
  };

  const {
    handleInputChange,
    name,
    email,
    password,
    password_confirmation
  } = useForm<Register>( initialState );

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if( isFormValid() ) {
      console.log({ name, email, password, password_confirmation })
    }

  };

  const isFormValid = (): boolean => {
    if ( name.trim().length === 0 ) {
      console.warn("Name is required !");
      return false;
    }

    else if ( name.trim().length < 2 ) {
      console.warn("Name must be at least 3 characters long !");
      return false;
    }

    else if ( !validator.isEmail( email ) ) {
      console.warn("Email is not valid!");
      return false;
    }
    
    else if ( email.trim().length === 0 ) {
      console.warn("Email is required !");
      return false;
    }
    
    else if ( password.trim().length === 0 ) {
      console.warn("Password is required !");
      return false;
    }

    else if ( password.trim().length < 8 ) {
      console.warn("Password must be at least 8 characters long!");
      return false;
    }

    else if ( password_confirmation.trim().length === 0 ) {
      console.warn("Password must be at least 8 characters long !");
      return false;
    }

    else if ( password_confirmation.trim().length < 8 ) {
      console.warn("Password Confirmation must be at least 8 characters long !");
      return false;
    }

    else if (password !== password_confirmation) {
      console.warn("Password and Password Confirmation do not match !");
      return false;
    }

    return true;
  };

  return (
    <div className="animate__animated animate__fadeIn">
     <h1 className="auth__title">Register</h1>

     <form onSubmit={ handleRegister }>

       <div className="auth__alert-error">
        <p>There's errors in the form</p>
       </div>

      <input
        id="name"
        className="auth__input"
        type="text"
        name="name"
        placeholder="name"
        autoCorrect="off"
        autoComplete="off"
        value={ name }
        onChange={ handleInputChange }
      />

      <input
        id="email"
        className="auth__input"
        type="email"
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

      <input
        id="password_confirmation"
        className="auth__input"
        type="password"
        name="password_confirmation"
        placeholder="confirm password"
        autoCorrect="off"
        value={ password_confirmation }
        onChange={ handleInputChange }
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
