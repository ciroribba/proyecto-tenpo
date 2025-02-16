import { ReactNode } from 'react';
import { HomeFilled, UnorderedListOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Modal } from 'antd';
import { useAuth } from '../../context/useAuth';
import { ROUTES } from '../../config/routes';
import { useNavigate } from 'react-router-dom';
import { JSX } from 'react/jsx-runtime';

const { Header, Content, Footer, Sider } = Layout;

interface MasterPageProps {
  children: ReactNode;
}

const getItem = (label: string, key: string, icon: JSX.Element) => {
    return {
      key,
      icon,
      label,
    };
  };
  
  const itemsMenu = [
    getItem('Home', ROUTES.HOME, <HomeFilled />),
    getItem('Personajes de Disney', ROUTES.TABLE_CHARACTERS, <UnorderedListOutlined />),
    getItem('Lista de usuarios', ROUTES.LIST_USERS, <UnorderedListOutlined />),
  ];

  const MasterPage = ({ children }: MasterPageProps) => {
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
  
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
  
    const handleMenuClick = ({ key }: { key: string }) => {
      navigate(key);
    };
  
  
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={itemsMenu} onClick={handleMenuClick} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <span onClick={handleLogout}>TENPO - N A S A</span>
            </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Demo ©{new Date().getFullYear()} Created by Ciro Ribba
          </Footer>
        </Layout>
        {contextHolder}
      </Layout>
    );
  };
  
  export default MasterPage;