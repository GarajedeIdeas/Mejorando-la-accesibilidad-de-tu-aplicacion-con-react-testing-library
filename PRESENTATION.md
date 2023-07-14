# Mejorando la accesibilidad de tu aplicación con react-testing-library 🐙

---

# WCAG

Web Content Accessibility Guidelines

---

# WCAG (Versiones)

- 1.0 _1999_
- 2.0 _2008_
- 2.1 _2018_
- **2.2 2023?**
- 3.0 ???

---

# WCAG (Principios)

- Perceptible
- Operable
- Comprensible
- Robusto

---

# WCAG (Niveles)

- A
- AA
- AAA

---

# Tipos de discapacidad

![Tipos de discapacidad](https://uploads-ssl.webflow.com/64307dc432a0341b32ac4261/64487566e2adfdd0db7b6770_BlogImage1.png)

---

# Beneficios de una rampa

![Rampa inclusiva con zona de escalera y zona de rampa](https://i0.wp.com/polioalberta.ca/wp-content/uploads/2020/02/robson-square.jpg?ssl%253D1)

---

# Garaje Live Coding

![Captura de pantalla de youtube de la charla de Eduardo](./youtube_eduardo.png)

Eduardo Iglesias - [🎬 Accesible, que no es poco](https://www.youtube.com/watch?v=OkBIttAqCuo)

---

# ¿Por que estamos aquí?

- Alguien ha hablado de accesibilidad
- Os he engañado yo
- Os ha engañado el organizador
  ...

---

# ¿Por que estamos aquí?

## Somos egoístas

---

# A todos nos toca

![Sala de rehabilitación de un centro de fisioterapia](https://www.scripps.org/sparkle-assets/seo_thumbnails/services/73/facebook-f56589acd556aec56e8822e00c87552b.jpg)

---

# Demografía española

![Gráfico de pirámide de población de España](./piramide.png)

[Pirámide poblacional INE](https://www.ine.es/covid/piramides.htm)

---

# Demografía española

## En 10 años el 25% de la población tendrá más de 65 años

---

# Miedo a la discapacidad

---

# Situaciones cotidianas

![Chicas en la playa](https://images.pexels.com/photos/2797332/pexels-photo-2797332.jpeg?auto%253Dcompress%2526cs%253Dtinysrgb%2526w%253D1260%2526h%253D750%2526dpr%253D1)

---

# Situaciones cotidianas

![Mujer con paquetes encima](https://images.pexels.com/photos/8939564/pexels-photo-8939564.jpeg?auto%253Dcompress%2526cs%253Dtinysrgb%2526w%253D1260%2526h%253D750%2526dpr%253D1)

---

# Situaciones cotidianas

![Discoteca](https://images.pexels.com/photos/1154189/pexels-photo-1154189.jpeg?auto%253Dcompress%2526cs%253Dtinysrgb%2526w%253D1260%2526h%253D750%2526dpr%253D1)

---

# Situaciones cotidianas

![Chico estornudando](https://images.pexels.com/photos/4031631/pexels-photo-4031631.jpeg?auto%253Dcompress%2526cs%253Dtinysrgb%2526w%253D1260%2526h%253D750%2526dpr%253D1)

---

# Situaciones cotidianas

![Chica con gafas de óptica de colores para comprobar su visión](https://images.pexels.com/photos/5752305/pexels-photo-5752305.jpeg?auto%253Dcompress%2526cs%253Dtinysrgb%2526w%253D1260%2526h%253D750%2526dpr%253D1)

---

# Situaciones cotidianas

![Distracciones oficina](https://images.pexels.com/photos/4476635/pexels-photo-4476635.jpeg?auto%253Dcompress%2526cs%253Dtinysrgb%2526w%253D1260%2526h%253D750%2526dpr%253D1)

---

# Situaciones cotidianas

![Chica con las manos en la cara, sentada en una mesa delante de un ordenador con signos de cansancio](https://images.pexels.com/photos/4226215/pexels-photo-4226215.jpeg?auto%253Dcompress%2526cs%253Dtinysrgb%2526w%253D1260%2526h%253D750%2526dpr%253D1)

---

# WebAIM

![WebAIM logo](https://upload.wikimedia.org/wikipedia/commons/e/e9/WebAIM_Logo.png)

WebAIM está formada por un equipo de expertos en accesibilidad web, que incluye desarrolladores, diseñadores, investigadores y profesionales de tecnología de la información.

---

# WebAIM Million

El report de 2023 sobre la accesibilidad de las 1.000.000 páginas de inicio más visitadas

- 49.991.225 errores diferentes
- 50 errores por página de media
- Un usuario con discapacidad por cada 21 paginas que visite se va a encontrar una con barreras de accesibilidad
- 96.3% de las páginas tienen al menos un error de accesibilidad
- **Los últimos 5 años los errores recaen en las mismas 5 categorías**

[WebAIM Million project](https://webaim.org/projects/million/)

---

# WebAIM Million

##"Addressing just these few types of issues would significantly improve accessibility across the web."

---

# WebAIM Million (Categorías)

Porcentaje de páginas encontradas con errores en cada categoría

- Bajo contraste (84%)
- Falta de textos alternativos (58%)
- Enlaces vacíos (50%)
- Falta de etiquetas de formulario (46%)
- Botones vacíos (28%)
- Falta de atributos de idioma (19%)

---

# Testing automatizado (25% - 30%)

![Iceberg](https://img.freepik.com/free-vector/iceberg-illustration-concept_52683-45762.jpg?w%253D2000)

- Atributos HTML (tabIndex, onClick, alt, title, ...)
- Atributos ARIA (aria-label, aria-labelledby, aria-describedby, ...)
- Contraste

---

# Testing automatizado

`Somos personas haciendo productos para personas`
