import { FormProps, Card, Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../config/routes';
import { useAuth } from '../../../context/useAuth';

type FieldType = {
  email: string;
  password: string;
};

export const Signin = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const response = await login(values.email, values.password);
      if (response.status === 200) {
        message.success('Login exitoso');
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
    <Card 
      hoverable 
      style={{ maxWidth: 600, margin: 'auto', marginTop: 100 }}
    >
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout='vertical'
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ type: 'email' },{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          validateTrigger="onBlur"
        >
          <Input.Password />
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
    </Card>
  );
}
