import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { firebase } from "../Firebase/firebase-config"
import JournalScreen from "../Components/Journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { login } from '../Actions/auth';

const AppRouter = () => {

  const dispatch = useDispatch();

  const [ checking, setChecking ] = useState( true );
  const [ isLoggedIn, setIsLoggedIn ] = useState( false );

  useEffect(() => {

    firebase.auth().onAuthStateChanged(( user ) => {
      if ( user?.uid && user?.displayName ) {
        dispatch( login( user.uid, user?.displayName ) );
        setIsLoggedIn( true );
      } else {
        setIsLoggedIn( false );
      }

      setChecking( false );

    });
  }, [ dispatch ]);

  if ( checking ) return ( <h1>Wait ...</h1> );

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
