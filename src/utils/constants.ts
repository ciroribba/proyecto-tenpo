export const characterFeatures = [
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

  export const userFeatures = [
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