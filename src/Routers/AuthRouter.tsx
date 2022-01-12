import { Routes, Route } from "react-router-dom";
import LoginScreen from "../Components/Auth/LoginScreen";
import RegisterScreen from "../Components/Auth/RegisterScreen";
import { Navigate } from 'react-router-dom';

const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container animate__animated animate__pulse">
        <Routes>
          <Route path="login" element={ <LoginScreen /> } />
          <Route path="register" element={ <RegisterScreen /> } />
          <Route path="*" element={ <Navigate replace to="/auth/login" /> } />
        </Routes>
      </div>
    </div>
  );
};

export default AuthRouter;
