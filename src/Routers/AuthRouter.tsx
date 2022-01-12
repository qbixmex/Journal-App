import { Routes, Route } from "react-router-dom";
import LoginScreen from "../Components/Auth/LoginScreen";
import RegisterScreen from "../Components/Auth/RegisterScreen";
import { Navigate } from 'react-router-dom';

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={ <LoginScreen /> } />
      <Route path="register" element={ <RegisterScreen /> } />

      <Route path="*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  );
};

export default AuthRouter;
