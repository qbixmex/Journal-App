import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../Types";

type Props = {
  children: JSX.Element;
};

const PrivateRoutes = ( { children }: Props ) => {

  const logged = useSelector(({ auth }: RootState) => auth.logged );

  return logged
    ? children
    : <Navigate to="/auth/login" />
};

export default PrivateRoutes;
