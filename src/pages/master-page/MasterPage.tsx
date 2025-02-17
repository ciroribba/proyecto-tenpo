import { ReactNode, useState } from 'react';
import { HomeFilled, UnorderedListOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { ROUTES } from '../../config/routes';
import { useNavigate } from 'react-router-dom';
import { JSX } from 'react/jsx-runtime';
import LayoutHeader from '../../components/LayoutHeader';

const { Content, Footer, Sider } = Layout;

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
    const [collapsed, setCollapsed] = useState(false);

  
    const navigate = useNavigate();
  
    const handleMenuClick = ({ key }: { key: string }) => {
      navigate(key);
    };

    const handleCollapse = (collapsed: boolean) => {
      setCollapsed(collapsed);
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
            handleCollapse(collapsed);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={itemsMenu} onClick={handleMenuClick} />
        </Sider>
        <Layout>
          <LayoutHeader />
          <Content style={{ margin: '24px 16px 0', display: !collapsed ? 'none' : 'block'}}>
            <div
              style={{
                padding: 24,
                height: `calc(100vh - 155px)`,
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
      </Layout>
    );
  };
  
  export default MasterPage;