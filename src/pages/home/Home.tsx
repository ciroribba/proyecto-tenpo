import { Typography, List, Card, Divider, Descriptions } from "antd";
import { characterFeatures, userFeatures } from "../../utils/constants";

const { Title, Text } = Typography;

const Home = () => {
  return (
    <div>
      <Title level={3}>Página de Tabla de Personajes:</Title>
      <Title level={4}>Descripción General:</Title>
      <Text>
        La página muestra una tabla interactiva que lista personajes del universo Disney. Cada fila presenta:
      </Text>
      <List
        dataSource={[
          "Avatar: Imagen del personaje.",
          "Nombre: Nombre del personaje.",
          "Película: La primera película en la que aparece.",
          "Enlace a Fandom Page: Un link que dirige a la página de Fandom para más detalles.",
        ]}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <Title level={4}>Características Técnicas:</Title>
      <List
        itemLayout="horizontal"
        dataSource={characterFeatures}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<strong>{item.title}</strong>}
              description={item.description}
            />
          </List.Item>
        )}
      />

      <Title level={3}>Página de Lista de Usuarios:</Title>
      <Title level={4}>Descripción General:</Title>
      <Text>
        Esta página despliega una lista virtualizada de usuarios fake obtenidos desde una API. Cada elemento de la lista muestra:
      </Text>
      <List
        dataSource={[
          "Avatar y Nombre: Representación visual y textual del usuario.",
          "Detalles Adicionales: Correo electrónico, país de origen, fecha de nacimiento y edad.",
          "Diseño Responsive: Se adapta el layout dependiendo de si se visualiza en dispositivo móvil o en desktop.",
        ]}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <Title level={4}>Características Técnicas:</Title>
      <List
        itemLayout="horizontal"
        dataSource={userFeatures}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<strong>{item.title}</strong>}
              description={item.description}
            />
          </List.Item>
        )}
      />
      <Divider style={{ marginTop: 16, marginBottom: 16, borderColor: '#1890ff' }}>Sobre la API de Personajes</Divider>
      <Card className="mt-12">
        <Descriptions column={1} bordered>
          <Descriptions.Item label="URL">
            <a
              href="https://api.disneyapi.dev/character"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://api.disneyapi.dev/character
            </a>
          </Descriptions.Item>
          <Descriptions.Item label="Descripción">
            Devuelve una lista de personajes de Disney con detalles relevantes como nombre, imagen y películas. La API se utiliza para mostrar perfiles de personajes en una tabla interactiva, facilitando la exploración de datos del universo Disney.
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Divider style={{ marginTop: 16, marginBottom: 16, borderColor: '#1890ff' }}>Sobre la API de Usuarios</Divider>
      <Card className="mt-12">
        <Descriptions column={1} bordered>
          <Descriptions.Item label="URL">
            <a
              href="https://randomuser.me/api/?results=2000&inc=name,gender,dob,location,email,nat,picture&noinfo"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://randomuser.me/api/?results=2000&inc=name,gender,dob,location,email,nat,picture&noinfo
            </a>
          </Descriptions.Item>
          <Descriptions.Item label="Descripción">
            Proporciona datos de usuarios aleatorios para pruebas y prototipos. La solicitud retorna 20 usuarios y solo incluye campos específicos (nombre, género, fecha de nacimiento, ubicación, correo electrónico,
            nacionalidad e imagen). Se utiliza en el proyecto para poblar listas de usuarios con datos falsos.
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
}

export default Home;