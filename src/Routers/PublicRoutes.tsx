import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../Types/index';

type Props = {
  children: JSX.Element;
};

const PublicRoutes = ( { children }: Props ) => {

  const logged = useSelector(({ auth }: RootState) => auth.logged );

  return logged
    ? <Navigate to="/" />
    : children;

};

export default PublicRoutes;
