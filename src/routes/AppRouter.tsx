import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import RequestInterceptor from './RequestInterceptor';
import { Login, Home, TableCharacters, ListUsers } from '../pages';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <RequestInterceptor>
        <Routes>
          {/* Ruta base redirige al home si está autenticado, o al login si no */}
          <Route
            path={ROUTES.BASE}
            element={<Navigate to={ROUTES.HOME} replace />}
          />

          {/* Rutas protegidas */}
          <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.TABLE_CHARACTERS} element={<TableCharacters />} />
            <Route path={ROUTES.LIST_USERS} element={<ListUsers />} />
            {/* Aquí puedes agregar más rutas protegidas */}
          </Route>

          {/* Rutas públicas */}
          <Route element={<PublicRoute />}>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            {/* Aquí puedes agregar más rutas públicas */}
          </Route>

          {/* Ruta 404 - Redirige a la ruta base */}
          <Route path="*" element={<Navigate to={ROUTES.BASE} replace />} />
        </Routes>
      </RequestInterceptor>
    </BrowserRouter>
  );
};

export { AppRouter };
