<div align="center">

<img src="public/img/logo.svg" alt="GuitarLA Logo" width="300" />

# GuitarLA — Tienda Premium de Guitarras

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-11.11-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)
[![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

*Instrumentos artesanales con diseño y sonido excepcional*

</div>

---

## ✨ Novedades — v2.0

| Área | v1.0 | v2.0 |
|---|---|---|
| **Estado** | `useState` + `useCart` hook | `useReducer` con `CartReducer` — acciones tipadas |
| **UI/UX** | Bootstrap plano, tarjetas genéricas | Diseño premium, paleta ámbar sobre crema, tipografía Outfit + Inter |
| **Carrito** | Dropdown anclado al header (hover) | Burbuja flotante FAB + panel lateral deslizante (click) |
| **Animaciones** | Una sola en el header | Cascada staggered en cards, fadeUp suave, guitarra lateral animada |
| **Logo** | Reducido dentro del header | Grande y centrado como identidad principal |
| **Footer** | Texto genérico | Crédito destacado a **GusDev** con acento ámbar |
| **Gestor** | npm | pnpm (más rápido, seguro, lockfile verificable) |

---

## Sobre el proyecto

**GuitarLA** es una SPA e-commerce de guitarras construida como proyecto de dominio de **TypeScript + React**. Evolucionó de un hook personalizado con `useState` hacia una arquitectura con **`useReducer`** y acciones discriminadas, logrando una gestión de estado predecible, escalable y completamente tipada.

### TypeScript en profundidad

- Herencia de tipos (`CartItem extends Guitar`)
- Utility types (`Pick`, `Omit`, Lookup Types)
- Discriminated unions para acciones del reducer
- `useMemo` para estado derivado tipado
- Non-null assertion operator

---

## Características

- 12 guitarras con imagen, descripción y precio
- Carrito con control de cantidad (mín. 1, máx. 5)
- Persistencia en `localStorage`
- Total automático, operaciones CRUD completas
- **Burbuja flotante** con badge contador y panel lateral
- Animaciones CSS staggered (sin librerías externas)
- Completamente responsive (Bootstrap 5 grid + custom CSS)
- Código 100% tipado con TypeScript strict

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| **React 19** | Biblioteca de interfaces |
| **TypeScript 5.9** | Tipado estático avanzado |
| **Vite 7** | Bundler + dev server con HMR |
| **SWC** | Compilación rápida |
| **Bootstrap 5.3** | Grid system (CDN) |
| **pnpm** | Gestor de paquetes |
| **ESLint 9** | Linting |

---

## Estructura

```
src/
├── components/
│   ├── Guitar.tsx        # Tarjeta de producto con animaciones
│   ├── Header.tsx        # Banner hero con logo y guitarra decorativa
│   └── CartFloating.tsx  # Burbuja flotante + panel lateral del carrito
├── reducers/
│   └── cart-reducer.ts   # useReducer con acciones tipadas (Discriminated Union)
├── data/
│   └── db.ts             # Catálogo de 12 guitarras
├── types/
│   └── index.ts          # Tipos Guitar, CartItem, GuitarID
├── App.tsx
├── main.tsx
└── index.css             # Design system completo con tokens CSS
```

---

## Arquitectura del estado

```ts
// Acciones tipadas con Discriminated Union
type CartActions =
  | { type: 'add-to-cart',      payload: { item: Guitar } }
  | { type: 'remove-from-cart', payload: { id: Guitar['id'] } }
  | { type: 'decrease-quantity', payload: { id: Guitar['id'] } }
  | { type: 'increase-quantity', payload: { id: Guitar['id'] } }
  | { type: 'clear-cart' }

// El reducer maneja toda la lógica del carrito
// Los componentes solo disparan acciones: dispatch({ type: 'add-to-cart', payload: { item } })
```

---

## Primeros pasos

```bash
# Clonar
git clone <repo-url>
cd Guitarla-TS

# Instalar dependencias
pnpm install

# Dev server → http://localhost:5173
pnpm dev

# Build producción
pnpm build

# Lint
pnpm lint
```

---

## Créditos

<div align="center">

**Diseño UI/UX por GusDev**

Paleta · Tipografía · Animaciones · Component System · Cart UX

---

<sub>Built with React + TypeScript + Vite</sub>

</div>
