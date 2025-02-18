import { Typography, List} from "antd";

const {Title, Text} = Typography;

const Home = () => {
  const characterFeatures = [
    {
      title: "Carga Asíncrona de Datos",
      description: "Se utiliza un store personalizado (a través de useCharacterStore) y una acción (fetchCharacters) para obtener los datos de personajes.",
    },
    {
      title: "Interfaz Reactiva",
      description: "Uso de Spin de antd para mostrar un indicador de carga mientras se obtienen los datos.",
    },
    {
      title: "Diseño Modular",
      description: "Componentización de elementos (por ejemplo, TitleContent) para mantener una estructura limpia y reutilizable.",
    },
  ];

  const userFeatures = [
    {
      title: "Scroll Infinito y Virtualización",
      description: "Se utiliza VirtualList de rc-virtual-list para renderizar solo los elementos visibles y mejorar el rendimiento en listas grandes.",
    },
    {
      title: "Llamadas HTTP con Axios",
      description: "Implementa axios para consumir la API que provee los datos de usuarios.",
    },
    {
      title: "Notificaciones",
      description: "Uso del componente message de antd para informar al usuario cuando se cargan más datos.",
    },
    {
      title: "Responsive Design",
      description: "Uso de un hook personalizado (useIsMobile) para ajustar la disposición del contenido según el tamaño de pantalla.",
    },
  ];

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
    </div>
  );
}

export default Home;