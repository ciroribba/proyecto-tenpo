export interface AuthResponse {
    status: number;
    data: {
      token: string;
      user: {
        username: string;
        role: string;
        email?: string;
      };
      expiresIn: number;
    };
  }
  
  export interface AuthError {
    status: number;
    message: string;
  }

  export const fakeAuthService = async (
    email: string, 
    password: string
  ): Promise<AuthResponse> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@email.com' && password === '1234') {
          resolve({
            status: 200,
            data: {
              token: 'fake-token-123',
              user: {
                username: 'Jhon Doe',
                role: 'ADMIN',
                email: 'admin@email.com',
              },
              expiresIn: 3600
            }
          });
        } else {
          reject({
            status: 401,
            message: 'Credenciales inválidas'
          });
        }
      }, 1000);
    });
  };

