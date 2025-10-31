# 🎨 Guía de Personalización Rápida - FisioWebs.com

## 🚀 Cambios Esenciales (Hacer PRIMERO)

### 1. WhatsApp (2 lugares)
**Archivo:** `index.html`

**Buscar (Ctrl+F):** `https://wa.me/`

**Reemplazar con:** `https://wa.me/59899123456` (tu número con código de país)

```html
<!-- Línea ~441 (Footer) -->
<a href="https://wa.me/59899123456" target="_blank" ...>

<!-- Línea ~517 (Botón flotante) -->
<a href="https://wa.me/59899123456" class="whatsapp-float" ...>
```

### 2. Instagram
**Archivo:** `index.html`

**Buscar:** `https://instagram.com/`

**Reemplazar con:** `https://instagram.com/fisiowebs` (tu usuario)

### 3. Links de Demos del Portfolio
**Archivo:** `index.html` - Líneas ~147 y ~163

```html
<!-- Cambiar estos # por URLs reales -->
<a href="#" class="btn btn-outline">Ver demo</a>

<!-- Por ejemplo: -->
<a href="https://demo-deportivo.fisiowebs.com" class="btn btn-outline">Ver demo</a>
```

## 🎨 Personalización de Colores

**Archivo:** `styles.css` - Líneas 7-13

```css
:root {
    --color-white: #FFFFFF;
    --color-blue: #0A2A43;      /* Color principal */
    --color-mint: #26C281;       /* Color de acento */
    --color-gray: #ECEEEF;       /* Fondos */
}
```

### Paletas Alternativas Sugeridas:

**Opción Azul Médico:**
```css
--color-blue: #003D82;
--color-mint: #00B4D8;
```

**Opción Verde Natural:**
```css
--color-blue: #1B4332;
--color-mint: #52B788;
```

**Opción Morado Premium:**
```css
--color-blue: #2D1B69;
--color-mint: #7C3AED;
```

## 💰 Cambiar Precios

**Archivo:** `index.html` - Sección Servicios

```html
<!-- Buscar estas líneas y modificar -->
<span class="amount">149</span>  <!-- Landing Starter -->
<span class="amount">299</span>  <!-- Sitio Completo -->
<span class="amount">499</span>  <!-- Sitio + Turnos -->
```

## 📧 Configurar Envío de Formulario

### Opción 1: Formspree (Más Fácil)

1. Ir a https://formspree.io/
2. Crear cuenta gratis
3. Obtener tu endpoint
4. **Archivo:** `index.html` - Línea ~345

```html
<form id="contactForm" class="contact-form" action="https://formspree.io/f/TU_CODIGO" method="POST">
```

5. **Archivo:** `script.js` - Comentar o eliminar líneas 119-180 (todo el event listener del form)

### Opción 2: EmailJS (Más Control)

1. Ir a https://www.emailjs.com/
2. Crear cuenta y servicio
3. **Archivo:** `script.js` - Agregar después de línea 119:

```javascript
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data)
    .then(() => {
        showNotification('¡Gracias por tu consulta!', 'success');
        contactForm.reset();
    })
    .catch(() => {
        showNotification('Error al enviar', 'error');
    });
```

## 🖼️ Reemplazar Imágenes

Las imágenes actuales son placeholders de Unsplash. Para usar tus propias imágenes:

**Archivo:** `index.html`

### Hero Slideshow (Líneas ~46-51)
El hero tiene 6 imágenes que rotan automáticamente cada 6 segundos:

```html
<!-- Actual (placeholders): -->
<img src="https://images.unsplash.com/..." alt="Clínica moderna 1" class="hero-image active">
<img src="https://images.unsplash.com/..." alt="Clínica moderna 2" class="hero-image">
<!-- ... 4 imágenes más -->

<!-- Cambiar a tus propias imágenes: -->
<img src="assets/hero-1.jpg" alt="Clínica moderna 1" class="hero-image active">
<img src="assets/hero-2.jpg" alt="Fisioterapia deportiva" class="hero-image">
<img src="assets/hero-3.jpg" alt="Rehabilitación" class="hero-image">
<!-- etc... -->
```

**Tip:** Puedes agregar o quitar imágenes. La primera imagen debe tener la clase `active`.

### Cambiar Velocidad del Slideshow
**Archivo:** `script.js` - Línea ~312

```javascript
const slideInterval = 6000; // 6 segundos (cambiar el número)
// 7000 = 7 segundos
// 5000 = 5 segundos
```

### Portfolio (Líneas ~123, ~139, ~155)
```html
<!-- Cambiar URLs de Unsplash por: -->
<img src="assets/portfolio-avant.jpg" ...>
<img src="assets/portfolio-sport.jpg" ...>
<img src="assets/portfolio-premium.jpg" ...>
```

### Mockups (Líneas ~176, ~179)
```html
<img src="assets/mockup-laptop.png" ...>
<img src="assets/mockup-mobile.png" ...>
```

**Luego coloca tus imágenes en la carpeta `assets/`**

## ✏️ Modificar Textos Principales

### Hero Section
**Archivo:** `index.html` - Líneas 49-54

```html
<h1>FisioWebs<span>.com</span></h1>
<h2>Presencia digital que impulsa tu clínica.</h2>
<p>Webs profesionales para clínicas...</p>
```

### Beneficios
**Archivo:** `index.html` - Líneas 78-108

Cada tarjeta tiene:
- `<h3>` = Título
- `<p>` = Descripción

### Planes
**Archivo:** `index.html` - Líneas 196-280

Cada plan tiene:
- `<h3>` = Nombre del plan
- `<span class="amount">` = Precio
- `<li>` = Características

## 🎯 Agregar Google Analytics

**Archivo:** `index.html` - Antes de `</head>` (línea ~24)

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 📱 Agregar Meta Pixel (Facebook/Instagram Ads)

**Archivo:** `index.html` - Antes de `</head>`

```html
<!-- Meta Pixel -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'TU_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## 🔍 Mejorar SEO

### Meta Tags
**Archivo:** `index.html` - Línea ~7

```html
<meta name="description" content="Actualiza esta descripción con keywords relevantes">
<meta name="keywords" content="fisioterapia web, sitios web clínicas, diseño web salud">
<meta name="author" content="FisioWebs.com">

<!-- Open Graph (para redes sociales) -->
<meta property="og:title" content="FisioWebs.com - Sitios Web para Fisioterapeutas">
<meta property="og:description" content="Presencia digital profesional">
<meta property="og:image" content="URL_DE_TU_IMAGEN_PREVIEW">
<meta property="og:url" content="https://fisiowebs.com">
```

## 🚀 Checklist Antes de Publicar

- [ ] WhatsApp configurado (2 lugares)
- [ ] Instagram actualizado
- [ ] Precios actualizados
- [ ] Links de demos funcionando
- [ ] Formulario de contacto enviando emails
- [ ] Imágenes reales agregadas
- [ ] Google Analytics instalado
- [ ] Meta tags de SEO completados
- [ ] Probado en móvil
- [ ] Probado en diferentes navegadores

## 💡 Tips

1. **Prueba en móvil:** Abre Chrome DevTools (F12) → Toggle device toolbar
2. **Velocidad:** Usa TinyPNG.com para optimizar imágenes
3. **Favicon:** Agrega un favicon.ico en la raíz
4. **SSL:** Usa HTTPS al publicar (Netlify/Vercel lo dan gratis)

---

¿Dudas? Revisa el `README.md` principal para más información.
