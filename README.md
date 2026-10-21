# Truex

Frontend de la aplicación de trueques en línea, construido con React y Vite.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
├── assets/          Recursos estáticos
├── components/      Componentes reutilizables
├── context/         Estado global (autenticación)
├── data/            Datos de ejemplo
├── layouts/         Plantillas de página
├── pages/           Vistas de la aplicación
├── services/        Consumo de API
├── App.jsx          Definición de rutas
├── index.css        Estilos globales
└── main.jsx         Punto de entrada
```

## Rutas

| Ruta            | Página              |
| --------------- | ------------------- |
| `/`             | Inicio              |
| `/explorar`     | Explorar trueques   |
| `/producto/:id` | Detalle del artículo |
| `/publicar`     | Publicar artículo   |
| `/perfil`       | Perfil del usuario  |
| `/login`        | Iniciar sesión      |
| `/registro`     | Crear cuenta        |
| `*`             | No encontrada       |
