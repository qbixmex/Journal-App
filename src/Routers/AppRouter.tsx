import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import JournalScreen from "../Components/Journal/JournalScreen";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ul className="mb-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/auth/login">Login</Link></li>
        <li><Link to="/auth/register">Register</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={ <JournalScreen /> } />
        <Route path="/auth/*" element={ <AuthRouter /> } />

        <Route path="*" element={ <Navigate replace to="/auth/login" /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
