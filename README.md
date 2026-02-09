# Hubsho Clone - Sitio moderno en Astro

Réplica moderna del sitio Hubsho.com construida con Astro, con diseño minimalista y todas las secciones del footer completas.

## 🚀 Características

- ✅ Diseño moderno y minimalista
- ✅ 100% responsive (mobile-first)
- ✅ Performance optimizado
- ✅ Hero section con animaciones
- ✅ Sección de características con iconos
- ✅ Soluciones por industria
- ✅ Planes y precios
- ✅ Testimonios de clientes
- ✅ CTA con formulario
- ✅ Footer completo con 6 secciones

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🎨 Estructura del proyecto

```
hubsho-clone/
├── src/
│   ├── components/
│   │   ├── Header.astro         # Navegación principal
│   │   ├── Hero.astro           # Hero con CTA
│   │   ├── Features.astro       # Características del producto
│   │   ├── Solutions.astro      # Soluciones por industria
│   │   ├── Pricing.astro        # Planes y precios
│   │   ├── Testimonials.astro   # Testimonios
│   │   ├── CTA.astro            # Formulario de contacto
│   │   └── Footer.astro         # Footer completo
│   ├── layouts/
│   │   └── Layout.astro         # Layout principal
│   └── pages/
│       └── index.astro          # Página principal
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## 🎯 Secciones del Footer

El footer incluye 6 secciones completas:

1. **Producto** - Características, planes, integraciones, API
2. **Soluciones** - Por industria y casos de uso
3. **Recursos** - Blog, guías, tutoriales, centro de ayuda
4. **Empresa** - Nosotros, contacto, carreras, partners
5. **Legal** - Términos, privacidad, cookies, SLA
6. **Soporte** - Centro de soporte, status, chat

## 🎨 Personalización

### Colores

Puedes cambiar los colores en `src/layouts/Layout.astro`:

```css
:root {
  --color-primary: #0066FF;
  --color-primary-dark: #0052CC;
  --color-secondary: #00D9FF;
  /* ... más variables */
}
```

### Contenido

Para modificar el contenido, edita directamente los componentes en `src/components/`.

## 📱 Responsive

El sitio está optimizado para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ⚡ Performance

- Genera HTML estático
- CSS optimizado y minimal
- Sin JavaScript en el cliente (excepto interacciones necesarias)
- Imágenes optimizadas
- Fuentes web optimizadas (Inter desde Google Fonts)

## 🛠️ Tecnologías

- **Astro 4.16** - Framework principal
- **TypeScript** - Type safety
- **CSS moderno** - Variables CSS, Grid, Flexbox
- **Google Fonts** - Inter

## 📝 Notas

- El sitio está en español
- Optimizado para conversión
- Diseño minimalista y profesional
- Sin dependencias pesadas
- 100% personalizable

## 🎓 Créditos

Desarrollado por PikinLabs - Digital Agency
Basado en Hubsho.com

---

¿Necesitas agregar más funcionalidad? El código es fácil de extender:

- Agrega animaciones con View Transitions
- Integra un CMS headless
- Conecta con APIs de terceros
- Añade un blog con Astro Content Collections
