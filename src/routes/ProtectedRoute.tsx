import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import { MasterPage } from '../pages';
import { useAuth } from '../context/useAuth';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return (
    <MasterPage>
      <Outlet />
    </MasterPage>
  );
};

export default ProtectedRoute;