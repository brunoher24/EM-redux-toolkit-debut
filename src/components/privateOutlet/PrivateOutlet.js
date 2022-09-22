import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PrivateOutlet = () => {
  const auth = useAuth();
  const location = useLocation();

  return auth.userInfos && auth.userInfos.token ? (
    <Outlet />
  ) : (
    <Navigate to="/connexion" state={{ from: location }} />
  )
}

export default PrivateOutlet;
