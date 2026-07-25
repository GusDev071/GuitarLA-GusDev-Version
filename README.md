<div align="center">

<img src="public/img/logo.svg" alt="GuitarLA Logo" width="320" />

# GuitarLA — Tienda de Guitarras

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vite.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-11.11-F69220?logo=pnpm)](https://pnpm.io/)
[![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint)](https://eslint.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap)](https://getbootstrap.com/)

</div>

---

## Sobre el proyecto

**GuitarLA** es una aplicación web SPA para la venta de guitarras, construida como proyecto de aprendizaje para dominar **TypeScript** en el ecosistema de **React**. Combina tipado estático avanzado con una interfaz moderna y funcional, ofreciendo un carrito de compras completamente interactivo con persistencia en el navegador.

### Demostración de conceptos TypeScript

- Herencia de tipos (`CartItem extends Guitar`)
- Utility types (`Pick`, `Omit`, `Lookup Types`)
- `useMemo` para estado derivado tipado
- Tipado estricto de hooks personalizados
- Non-null assertion operator

---

## Características

- Catálogo de 12 guitarras con imagen, descripción y precio
- Carrito de compras con control de cantidad (mín. 1, máx. 5 unidades)
- Persistencia del carrito en `localStorage`
- Cálculo automático del total a pagar
- Operaciones CRUD completas sobre el carrito (agregar, incrementar, decrementar, eliminar, vaciar)
- Interfaz responsive con Bootstrap 5
- Código completamente tipado con TypeScript

---

## Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| React | ^19.2 | Biblioteca de interfaces |
| TypeScript | ~5.9 | Tipado estático |
| Vite | ^7.2 | Bundler y dev server |
| SWC | — | Compilación rápida vía plugin Vite |
| Bootstrap | 5.x | Estilos (CDN) |
| ESLint | ^9.39 | Linting |

---

## Estructura del proyecto

```
src/
├── components/        # Componentes React
│   ├── Guitar.tsx     # Tarjeta de producto individual
│   └── Header.tsx     # Header con logo y carrito desplegable
├── data/
│   └── db.ts          # Datos del catálogo de guitarras
├── hooks/
│   └── useCart.ts     # Hook personalizado con toda la lógica del carrito
├── types/
│   └── index.ts       # Definiciones de tipos (Guitar, CartItem)
├── App.tsx            # Componente raíz
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales
```

---

## Primeros pasos

### Requisitos previos

- **Node.js** ≥ 18
- **pnpm** (gestor de paquetes)

```bash
# Verificar instalación
node --version
pnpm --version
```

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd Guitarla-TS

# Instalar dependencias
pnpm install
```

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `pnpm dev` | Inicia el servidor de desarrollo con HMR |
| `pnpm build` | Compila TypeScript y genera el build de producción |
| `pnpm preview` | Previsualiza la build de producción localmente |
| `pnpm lint` | Ejecuta ESLint sobre el código fuente |

```bash
pnpm dev       # → http://localhost:5173
```

### Build de producción

```bash
pnpm build     # Salida en dist/
pnpm preview   # Previsualizar build
```

---

## Licencia

Proyecto desarrollado con fines educativos. Todos los derechos reservados © GuitarLA.

---

<div align="center">
  <sub>Built with ♥ using React + TypeScript + Vite</sub>
</div>
# GuitarLA-GusDev-Version
