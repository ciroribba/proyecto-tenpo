import { ReactNode } from 'react';
import { Layout, theme } from 'antd';
import LayoutHeader from '../../components/LayoutHeader';
import { CustomMenu } from '../../components/CustomMenu';

const { Content, Footer, Sider } = Layout;

interface MasterPageProps {
  children: ReactNode;
}

const MasterPage = ({ children }: MasterPageProps) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
          <CustomMenu />
        </Sider>
        <Layout>
          <LayoutHeader />
          <Content className='layout-content'>
            <div
              style={{                
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
              className='div-content'
            >
              {children}
            </div>
          </Content>
          <Footer className='text-center'>
            T-Challenge ©{new Date().getFullYear()} Created by Ciro Ribba
          </Footer>
        </Layout>
      </Layout>
    );
  };
  
  export default MasterPage;