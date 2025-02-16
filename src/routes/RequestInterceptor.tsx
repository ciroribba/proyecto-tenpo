import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import { ReactNode } from 'react';

const RequestInterceptor = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  axios.interceptors.request.use(
    (request) => {      
        const token = sessionStorage.getItem('token-tenpo');

        if (token) {
          request.headers['Authorization'] = `Bearer ${token}`;
        }
        
        return request;      
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          sessionStorage.removeItem('token-tenpo');
          navigate(ROUTES.LOGIN);
        }
      }

      return Promise.reject(error);
    }
  );

  return <>{children}</>;
};

export default RequestInterceptor;
