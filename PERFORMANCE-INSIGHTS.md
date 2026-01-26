# Performance Insights - Durazno Landing

Análisis post-mortem del rendimiento del sitio para aplicar en futuros proyectos.

## Métricas actuales (Móvil 4G)

| Métrica | Valor | Estado |
|---------|-------|--------|
| Performance Score | 88 | Amarillo |
| FCP | 2.6s | Amarillo |
| LCP | 2.9s | Amarillo |
| TBT | 0ms | Verde |
| CLS | 0 | Verde |
| Speed Index | 4.8s | Amarillo |

---

## Errores identificados

### 1. Nuxt para una landing es overkill

El sitio es esencialmente HTML estático con un formulario. Nuxt trae Vue, Vue Router, sistema de hidratación SSG, runtime de Nuxt... todo eso suma **~88-104KB de JS** que el navegador debe parsear antes de que la página sea interactiva.

### 2. 46KB de CSS inline en el HEAD

Aunque se usó `cssnano` y `lightningcss`, todo el CSS (Tailwind + custom + AOS) termina **inline en el HTML**, bloqueando el render. Son 46KB que el navegador debe parsear antes del primer paint.

### 3. Efectos glassmorphism agresivos

Hay **5 divs con `blur-3xl` y `backdrop-filter: blur()`** en el hero y otras secciones. Estos efectos son GPU-intensivos y se renderizan desde el inicio, no después del scroll.

### 4. Animación de gradiente siempre activa

```css
.gradient-bg { animation: gradient 15s infinite; background-size: 400% 400%; }
```

Esto causa repintado constante de GPU mientras la página carga.

### 5. Google Fonts externo

Dependencia de fonts.googleapis.com para Inter (5 pesos diferentes). Eso añade:
- DNS lookup
- Conexión TLS
- Descarga del CSS
- Descarga de los archivos .woff2

### 6. Firebase Hosting no es el más rápido

Firebase es decente, pero no tiene edge network tan agresivo como Cloudflare o Vercel. El servidor está probablemente en us-central1.

---

## Recomendaciones para próximos proyectos

### Tech Stack óptimo para landing ultra-rápida

| Componente | Recomendación | Por qué |
|------------|---------------|---------|
| **Framework** | **Astro** | Zero JS por defecto. Solo envía HTML/CSS. Si necesitas interactividad, puedes añadir "islas" de Vue/React/Svelte solo donde sea necesario |
| **CSS** | **Tailwind + PurgeCSS agresivo** | Con critical CSS extraction. Solo inline los ~3-4KB del above-the-fold |
| **Fuentes** | **Self-hosted + font-display: swap** | Descargar Inter .woff2 y servirlas desde tu CDN. Elimina latencia externa |
| **Hosting** | **Cloudflare Pages** o **Vercel Edge** | Red global, edge caching, compresión Brotli automática, HTTP/3 |
| **Imágenes** | **Cloudflare Images** o **Vercel Image Optimization** | WebP/AVIF automático, resize on-the-fly |

### Configuración específica para Astro

```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'auto', // Solo inline CSS pequeño
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
      cssCodeSplit: true, // CSS separado por página
    }
  }
});
```

### Para lograr FCP < 1 segundo en 4G

1. **HTML inicial < 14KB** (cabe en primer round-trip TCP)
2. **Critical CSS inline < 4KB**
3. **Zero JS bloqueante** (defer todo)
4. **Fuentes self-hosted con preload**
5. **CDN edge con HTTP/3 + Brotli**

### Stack final recomendado

```
Astro + Tailwind → Build → Cloudflare Pages
                            ↓
                    Edge Network Global
                    HTTP/3 + Brotli
                    Cache-Control: immutable
```

### Comparativa de velocidad esperada

| Métrica | Sitio actual | Con stack recomendado |
|---------|--------------|----------------------|
| FCP | 2.6s | ~0.8-1.2s |
| LCP | 2.9s | ~1.0-1.5s |
| JS enviado | 88-104KB | 0-5KB |
| CSS crítico | 46KB | 3-4KB |

---

## Por qué NO usar jQuery/React para landings

- **jQuery**: Añade ~87KB minificado. Innecesario.
- **React/Next.js**: Similar problema que Nuxt. Hidratación JS pesada.
- **Astro**: Literalmente envía **cero JavaScript** por defecto. Perfecto para landings.

---

## Archivos clave analizados

- `nuxt.config.ts` - Build configuration
- `assets/css/main.css` - Estilos (necesitan split crítico/diferido)
- `plugins/aos.client.ts` - AOS lazy loader
- `pages/index.vue` - Landing page components
- `components/HeroSection.vue` - Animaciones pesadas
- `.output/public/index.html` - HTML generado
- `firebase.json` - Hosting config

---

*Análisis realizado: Enero 2026*
