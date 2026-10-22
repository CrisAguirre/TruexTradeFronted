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
├── assets/
│   ├── logos/       Logo isotipo, horizontal y vertical
│   └── mocups/      Mockups y material de referencia
├── components/
│   ├── common/      Button, Badge, Avatar, SearchBar, etc.
│   ├── cards/       ArticleCard
│   ├── navigation/  Navbar
│   └── Footer.jsx
├── context/         AuthContext y ThemeContext
├── data/            Datos de ejemplo
├── hooks/           useAuth, useTheme, useMediaQuery
├── layouts/         PublicLayout
├── pages/           Vistas de la aplicación
├── services/        Consumo de API
├── styles/          Tokens, base, utilidades y CSS modular
├── App.jsx          Definición de rutas
└── main.jsx         Punto de entrada
```

## Temas

La app soporta modo claro y oscuro con `data-theme` en `<html>`.
El tema se guarda en `localStorage` y los usuarios autenticados usan
modo oscuro por defecto.

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
