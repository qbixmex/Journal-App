import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import JournalScreen from "../Components/Journal/JournalScreen";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <JournalScreen /> } />
        <Route path="/auth/*" element={ <AuthRouter /> } />

        <Route path="*" element={ <Navigate replace to="/auth/login" /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
