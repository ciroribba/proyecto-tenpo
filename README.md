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
