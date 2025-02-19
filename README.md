# Proyecto Tenpo

Este proyecto es una aplicación web desarrollada con React, TypeScript y Vite, utilizando Ant Design como biblioteca de componentes UI.

## Requisitos Previos

- Node.js (v18 o superior)
- pnpm (v8 o superior)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd proyecto-tenpo
   ```

2. Instala las dependencias usando pnpm:
   ```bash
   pnpm install
   ```

## Desarrollo Local

Para ejecutar el proyecto en modo desarrollo:

```bash
pnpm dev
```

El servidor de desarrollo se iniciará en `http://localhost:5173`

## Credenciales de Prueba

La autenticación es simulada (fake) para propósitos de desarrollo. Debes usar las siguientes credenciales:

- **Email**: admin@email.com
- **Password**: Pass123!

## Scripts Disponibles

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Compila el proyecto para producción
- `pnpm preview` - Previsualiza la versión de producción localmente
- `pnpm lint` - Ejecuta el linter para verificar el código

## Tecnologías Principales

- React 19
- TypeScript
- Vite
- Ant Design (antd)
- React Router DOM
- Zustand (manejo de estado)
- Axios (cliente HTTP)
- SASS (estilos)

## Estructura del Proyecto

La aplicación utiliza una arquitectura moderna con React y está organizada de la siguiente manera:

- `/src` - Código fuente principal
- `/src/components` - Componentes reutilizables
- `/src/pages` - Páginas/rutas de la aplicación
- `/src/store` - Manejo de estado con Zustand
- `/src/styles` - Estilos SASS
- `/src/types` - Definiciones de tipos TypeScript

## Funcionalidades Principales

El proyecto cuenta con tres páginas:

### 1. Página de Inicio (Home)
- Proporciona una visión general del proyecto y sus funcionalidades principales
- Describe detalladamente las dos interfaces principales:
  - Tabla de Personajes Disney: Explica la estructura y características de la tabla con 2000 registros fijos
  - Lista de Usuarios: Detalla el funcionamiento del scroll infinito y la carga bajo demanda
- Incluye información técnica detallada sobre cada interfaz:
  - Características de implementación
  - Elementos de UI y su disposición
  - Comportamiento responsive
- Proporciona documentación sobre las APIs utilizadas:
  - Disney API: Detalles de endpoint y funcionalidad
  - Random User API: Especificaciones de uso y parámetros

### 2. Tabla de Personajes Disney
- Muestra una tabla interactiva con personajes del universo Disney
- Incluye avatar, nombre, película y enlace a Fandom Page
- Implementa paginación y búsqueda
- Utiliza la API de Disney para obtener los datos

### 3. Lista de Usuarios
- Presenta una lista virtualizada de usuarios
- Muestra información detallada: avatar, nombre, email, país, fecha de nacimiento y edad
- Diseño responsive que se adapta a dispositivos móviles y desktop
- Utiliza datos de prueba de la API Random User

## APIs Utilizadas

### Disney API
- **URL**: `https://api.disneyapi.dev/character`
- **Descripción**: API que proporciona información detallada sobre personajes de Disney, incluyendo nombres, imágenes y películas asociadas.
- **Uso**: Se utiliza para poblar la tabla de personajes con datos reales del universo Disney.

### Random User API
- **URL**: `https://randomuser.me/api/`
- **Descripción**: Genera datos de usuarios aleatorios para pruebas, incluyendo información como nombre, género, fecha de nacimiento, ubicación, email y avatar.
- **Uso**: Se utiliza para crear una lista de usuarios de prueba con datos realistas.

## Consideraciones Adicionales

- La aplicación utiliza React 19 con las últimas características disponibles
- Se incluye soporte para TypeScript para un desarrollo más robusto
- El diseño es responsive y se adapta a diferentes tamaños de pantalla
- Se utiliza ESLint para mantener la calidad del código

## Construcción para Producción

Para construir el proyecto para producción:

```bash
pnpm build
```

Los archivos compilados se encontrarán en el directorio `dist`.
