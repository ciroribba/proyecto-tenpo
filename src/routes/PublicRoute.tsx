import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import { useAuth } from '../context/useAuth';

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;