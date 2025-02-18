import '@ant-design/v5-patch-for-react-19';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/AuthContext.tsx';
import { ConfigProvider } from 'antd';
import App from './App.tsx';
import esES from 'antd/es/locale/es_ES';
import './assets/sass/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ConfigProvider locale={esES}>
        <App />
      </ConfigProvider>
    </AuthProvider>    
  </StrictMode>,
)
