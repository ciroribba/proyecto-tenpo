import { LogoutOutlined } from '@ant-design/icons';
import { Layout, Modal, Typography, Button } from "antd";
import { useAuth } from '../context/useAuth';
import { ROUTES } from '../config/routes';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;
const { Text } = Typography;

const LayoutHeader = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [modal, contextHolder] = Modal.useModal();

  const handleLogout = () => {
    modal.confirm({
      title: '¿Estás seguro que deseas cerrar sesión?',
      content: 'Se cerrará tu sesión actual',
      okText: 'Sí',
      cancelText: 'No',
      onOk: () => {
        logout();
        navigate(ROUTES.LOGIN);
      },
    });
  };

  return (
    <>
      <Header className="layout-header">
        <Text strong>T-CHALLENGE</Text>
        <Button size='small' icon={<LogoutOutlined />} onClick={handleLogout}>Salir
        </Button>       
      </Header>
      {contextHolder}
    </>
  )
}

export default LayoutHeader;