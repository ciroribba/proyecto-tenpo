import { FormProps, Card, Button, Form, Input, message, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../config/routes';
import { useAuth } from '../../../context/useAuth';
import { useIsMobile } from '../../../utils/utils';

type FieldType = {
  email: string;
  password: string;
};

export const Signin = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const isMobile = useIsMobile();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const response = await login(values.email, values.password);
      if (response.status === 200) {
        navigate(ROUTES.HOME);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        message.error(error.message || 'Error al iniciar sesión');
      } else {
        message.error('Error al iniciar sesión');
      }
      console.error('Error en login:', error);
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    message.error('Por favor, complete todos los campos correctamente');
    console.log('Failed:', errorInfo);
  };

  return (
    <Row justify="center" className={isMobile ? 'm-10' : 'm-100'}>
      <Col xs={24} sm={20} md={16} lg={12} xl={8}>
        <Card hoverable title="T-Challenge">
          <Form
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='vertical'
          >
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[{ type: 'email' }, { required: true, message: 'Por favor ingrese correo electrónico!' }]}
            >
              <Input placeholder="jhon@doe.com" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Por favor ingrese contraseña!' }]}
              validateTrigger="onBlur"
            >
              <Input.Password placeholder="****" />
            </Form.Item>

            <Form.Item label={null}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
              >
                {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </Button>
            </Form.Item>
          </Form>
        </Card></Col></Row>
  );
}
