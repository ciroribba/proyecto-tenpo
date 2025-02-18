import { Menu } from 'antd';
import { HomeFilled, UnorderedListOutlined, TableOutlined } from '@ant-design/icons';
import { ROUTES } from '../config/routes';
import { JSX } from 'react/jsx-runtime';
import { useNavigate } from 'react-router-dom';

const getItem = (label: string, key: string, icon: JSX.Element) => {
    return {
      key,
      icon,
      label,
    };
  };
  
  const itemsMenu = [
    getItem('Home', ROUTES.HOME, <HomeFilled />),
    getItem('Personajes', ROUTES.TABLE_CHARACTERS, <TableOutlined />),
    getItem('Usuarios', ROUTES.LIST_USERS, <UnorderedListOutlined />),
  ];

export const CustomMenu = () => {
    const navigate = useNavigate();
  
    const handleMenuClick = ({ key }: { key: string }) => {
      navigate(key);
    };
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={itemsMenu} onClick={handleMenuClick} />
  )
}
