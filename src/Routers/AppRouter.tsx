import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { firebase } from "../Firebase/firebase-config"
import JournalScreen from "../Components/Journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { login } from '../Actions/auth';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

const AppRouter = () => {

  const dispatch = useDispatch();

  const [ checking, setChecking ] = useState( true );

  useEffect(() => {

    firebase.auth().onAuthStateChanged(( user ) => {

      if ( user?.uid && user?.displayName ) {
        dispatch( login( user.uid, user?.displayName ) );
      }

      setChecking( false );

    });
  }, [ dispatch ]);

  if ( checking ) return ( <h1>Wait ...</h1> );

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/auth/*" element={
          <PublicRoutes>
            <AuthRouter />
          </PublicRoutes>
        } />

        <Route path="/" element={
          <PrivateRoutes>
            <JournalScreen />
          </PrivateRoutes>
        } />

        <Route path="*" element={ <Navigate replace to="/auth/login" /> } />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
