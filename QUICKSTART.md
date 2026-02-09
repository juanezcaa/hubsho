# 🚀 Guía de inicio rápido - Hubsho Clone

## Instalación en 3 pasos

### 1. Instala las dependencias

```bash
cd hubsho-clone
npm install
```

### 2. Ejecuta el servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

### 3. Construye para producción

```bash
npm run build
```

Los archivos estáticos se generarán en el directorio `dist/`

---

## 🎨 Personalización rápida

### Cambiar colores de marca

Abre `src/layouts/Layout.astro` y modifica las variables CSS:

```css
:root {
  --color-primary: #0066FF;        /* Tu color principal */
  --color-primary-dark: #0052CC;   /* Versión oscura */
  --color-secondary: #00D9FF;      /* Color secundario */
}
```

### Modificar contenido del Hero

Edita `src/components/Hero.astro`:

```astro
<h1 class="hero-title">
  Tu título aquí
</h1>
<p class="hero-subtitle">
  Tu descripción aquí
</p>
```

### Agregar/Quitar características

Edita el array `features` en `src/components/Features.astro`:

```javascript
const features = [
  {
    icon: `...`,
    title: "Nueva característica",
    description: "Descripción de la característica"
  },
  // ... más características
];
```

### Modificar planes de pricing

Edita el array `plans` en `src/components/Pricing.astro`:

```javascript
const plans = [
  {
    name: "Plan Basic",
    price: "999",
    period: "mes",
    description: "Para iniciar",
    features: [
      "Característica 1",
      "Característica 2"
    ]
  }
];
```

---

## 📱 Responsive Breakpoints

El sitio se adapta automáticamente a:

- **Mobile**: < 640px
- **Tablet**: 640px - 968px  
- **Desktop**: > 968px

---

## 🎯 Componentes principales

| Componente | Ubicación | Propósito |
|------------|-----------|-----------|
| Header | `src/components/Header.astro` | Navegación principal |
| Hero | `src/components/Hero.astro` | Sección principal con CTA |
| Features | `src/components/Features.astro` | Grid de características |
| Solutions | `src/components/Solutions.astro` | Soluciones por industria |
| Pricing | `src/components/Pricing.astro` | Tabla de precios |
| Testimonials | `src/components/Testimonials.astro` | Testimonios de clientes |
| CTA | `src/components/CTA.astro` | Formulario de contacto |
| Footer | `src/components/Footer.astro` | Footer con 6 columnas |

---

## ⚡ Tips de performance

1. **Imágenes**: Agrega imágenes optimizadas en `/public/images/`
2. **Fuentes**: Las fuentes ya están optimizadas con `preconnect`
3. **Build**: Astro genera HTML estático para máxima velocidad

---

## 🔧 Comandos útiles

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Preview producción
npm run preview

# Lint TypeScript
npm run astro check
```

---

## 📦 Deploy

### Vercel (recomendado)

1. Sube el proyecto a GitHub
2. Importa en Vercel
3. ¡Listo! Auto-deploy en cada push

### Netlify

1. Conecta con GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

### Otros

Cualquier hosting de archivos estáticos funciona. Solo sube el contenido de `dist/` después de correr `npm run build`.

---

## 🐛 Troubleshooting

**Error: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Puerto ocupado**
```bash
# Usa otro puerto
npm run dev -- --port 3000
```

**Build falla**
```bash
npm run astro check
```

---

## 💡 Próximos pasos

- [ ] Conectar formulario de contacto a tu backend
- [ ] Agregar Google Analytics
- [ ] Implementar animaciones con View Transitions
- [ ] Agregar blog con Content Collections
- [ ] Integrar con tu CRM

---

¿Dudas? Revisa la documentación de Astro: https://docs.astro.build
