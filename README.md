# FisioWebs.com - Sitio Web Profesional

Sitio web completo para **FisioWebs.com**, estudio digital especializado en crear sitios web profesionales para clínicas y fisioterapeutas.

## 🎨 Características

- ✅ Diseño premium moderno y profesional (estilo Apple health-tech)
- ✅ 100% Responsive (mobile, tablet, desktop)
- ✅ **Mockups integrados en 5 ubicaciones** (Hero, Responsive, Portfolio, CTA)
- ✅ Animaciones suaves y micro-interacciones
- ✅ Hero con slideshow de 6 imágenes (cada 6 segundos)
- ✅ Formulario de contacto con Typeform embed
- ✅ Navegación fluida con scroll suave
- ✅ Optimizado para rendimiento
- ✅ Botones flotantes (WhatsApp + Back to top)
- ✅ SEO-friendly
- ✅ WhatsApp e Instagram configurados

## 🛠️ Stack Tecnológico

- **HTML5** - Estructura semántica
- **CSS3** - Estilos premium con variables CSS
- **JavaScript Vanilla** - Sin dependencias externas

## 📂 Estructura de Archivos

```
StartUP web/
│
├── index.html          # Página principal
├── styles.css          # Estilos completos
├── script.js           # Funcionalidad JavaScript
├── README.md           # Este archivo
│
└── assets/             # Carpeta de imágenes
    ├── README.md       # Instrucciones para imágenes
    ├── hero-background.jpg
    ├── portfolio-avant.jpg
    ├── portfolio-sport.jpg
    ├── portfolio-premium.jpg
    ├── mockup-laptop.png
    └── mockup-mobile.png
```

## 🚀 Cómo Usar

### 1. Visualizar Localmente

Simplemente abre `index.html` en tu navegador web preferido:

- Doble click en `index.html`, o
- Click derecho → "Abrir con" → Navegador

### 2. Agregar Imágenes

Lee el archivo `assets/README.md` para saber qué imágenes necesitas y dónde conseguirlas.

Placeholders temporales ya están configurados para que puedas visualizar el sitio inmediatamente.

### 3. Personalizar Contenido

#### Textos y Enlaces
Edita `index.html` para modificar:
- Títulos y descripciones
- Links del portfolio
- Información de servicios
- Precios de planes

#### Colores y Estilos
Edita las variables CSS en `styles.css` (líneas 7-31):
```css
:root {
    --color-white: #FFFFFF;
    --color-blue: #0A2A43;
    --color-mint: #26C281;
    --color-gray: #ECEEEF;
    /* ... más variables */
}
```

#### Funcionalidades
Edita `script.js` para modificar:
- Comportamiento del formulario (línea 119+)
- Animaciones
- Efectos de scroll

### 4. Configurar WhatsApp

En `index.html`, busca los enlaces de WhatsApp y reemplaza con tu número:

```html
<!-- Línea ~441 y ~517 -->
<a href="https://wa.me/TU_NUMERO" ...>
```

Formato: `https://wa.me/59899123456` (código de país + número)

### 5. Configurar Redes Sociales

Actualiza los enlaces de Instagram en el footer (línea ~522):

```html
<a href="https://instagram.com/TU_USUARIO" ...>
```

### 6. Configurar Formulario de Contacto

El formulario está configurado para mostrar los datos en consola. Para enviarlo a un servicio:

**Opción A: EmailJS (Gratis)**
1. Registrarse en [EmailJS.com](https://www.emailjs.com/)
2. Configurar servicio de email
3. Agregar código de integración en `script.js`

**Opción B: Formspree (Gratis)**
1. Registrarse en [Formspree.io](https://formspree.io/)
2. Crear formulario
3. Actualizar action del form en `index.html`

**Opción C: Google Forms**
1. Crear Google Form
2. Usar script de integración

## 🌐 Publicar en Internet

### Opción 1: Netlify (Recomendado - Gratis)
1. Crear cuenta en [Netlify.com](https://www.netlify.com/)
2. Arrastrar carpeta del proyecto a Netlify Drop
3. ¡Listo! Tu sitio estará en línea

### Opción 2: GitHub Pages (Gratis)
1. Subir proyecto a repositorio GitHub
2. Activar GitHub Pages en Settings
3. Tu sitio estará en `usuario.github.io/repo`

### Opción 3: Vercel (Gratis)
1. Crear cuenta en [Vercel.com](https://vercel.com/)
2. Importar proyecto
3. Deploy automático

### Opción 4: Hosting Tradicional
- Subir archivos por FTP a tu servidor web
- Asegurarte que `index.html` esté en la raíz

## 📱 Secciones Incluidas

1. **Navbar** - Navegación fija con efecto scroll
2. **Hero** - Sección principal con slideshow + mockup laptop
3. **Por qué elegirnos** - 4 beneficios clave
4. **Diseño Responsive** - ⭐ Nueva sección con mockup mobile
5. **Portfolio** - 3 proyectos + mockups duales (laptop + mobile)
6. **Servicios/Planes** - 3 planes con precios
7. **Proceso** - 4 pasos del servicio
8. **CTA Final** - ⭐ Nueva sección con mockup laptop
9. **Contacto** - Formulario Typeform
10. **Footer** - Información y enlaces

## 🖼️ Mockups del Producto

El sitio está diseñado para mostrar tus mockups en **5 ubicaciones estratégicas**:

### Archivos Necesarios
Coloca estos archivos en la carpeta `/assets`:
- `mockup-laptop.png` (1200x800px, PNG transparente)
- `mockup-mobile.png` (800x1200px, PNG transparente)

### Ubicaciones
1. **Hero Section** - Mockup laptop debajo del título
2. **Sección Responsive** - Mockup mobile con features
3. **Portfolio** - Ambos mockups en grid
4. **CTA Final** - Mockup laptop antes del formulario

**Nota:** Si no subes los mockups, se mostrarán placeholders SVG automáticamente.

📖 **Documentación completa:** `MOCKUPS-INTEGRATION.md`

## 🎨 Paleta de Colores

- **Blanco**: #FFFFFF - Base
- **Azul Profundo**: #0A2A43 - Principal
- **Verde Menta**: #26C281 - Acento
- **Gris Claro**: #ECEEEF - Fondos

## 🔤 Tipografías

- **Montserrat Bold** - Títulos
- **Inter Regular** - Texto
- **Poppins Medium** - Botones/UI

## ✨ Funcionalidades JavaScript

- Menú móvil responsive
- Scroll suave a secciones
- Animaciones al hacer scroll
- Validación de formulario
- Notificaciones de usuario
- Botón volver arriba
- Efectos hover en tarjetas
- Lazy loading de imágenes

## 📝 Notas Importantes

1. **WhatsApp**: Actualizar número en HTML
2. **Instagram**: Actualizar usuario en footer
3. **Links Portfolio**: Agregar URLs reales de demos
4. **Imágenes**: Reemplazar placeholders con fotos reales
5. **Formulario**: Configurar servicio de envío

## 🐛 Solución de Problemas

**Las imágenes no se ven:**
- Verifica que los archivos estén en la carpeta `assets/`
- Verifica que los nombres coincidan exactamente

**El menú móvil no funciona:**
- Asegúrate que `script.js` esté cargado
- Abre la consola del navegador (F12) para ver errores

**El formulario no envía:**
- Revisa la configuración en `script.js`
- Configura un servicio de backend o webhook

## 📞 Soporte

Para dudas o personalizaciones adicionales, contacta a FisioWebs.com

---

**© FisioWebs.com - 2025**

Hecho con ❤️ para profesionales de la salud del movimiento
