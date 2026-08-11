# Mayu Travel — Portafolio

Sitio de portafolio para Mayurlin Viera (fotografía y dirección cinematográfica para
hoteles de lujo). React + TypeScript + Vite + Tailwind CSS, desplegado en GitHub
Pages vía GitHub Actions.

**Fase actual: construcción sobre GitHub Pages.** El plan es migrar el sitio
completo a un hosting/dominio propio de Mayurlin más adelante — ver "Migración
futura" abajo antes de tocar `vite.config.ts`.

## Cómo trabajar en este proyecto

- Tocar **solo** lo que se pide explícitamente. No rediseñar, no "mejorar" de
  paso, no tocar funcionalidad no mencionada.
- **Verificar siempre con capturas reales** (Playwright) en móvil (390x844) y
  escritorio (1440x900) antes de dar algo por terminado. Mayurlin ha sido muy
  clara y repetida en que no acepta atajos aquí — cero excepciones.
- **Agrupar cambios pequeños** en una sola ronda de verificación/publicación
  cuando sea razonable, en vez de un ciclo completo de build→deploy→verify por
  cada micro-ajuste. El proceso completo (compilar, levantar servidor, capturas,
  git, PR, merge, deploy, confirmar) tiene un costo real por ronda — agrupar
  varios pedidos pequeños de Mayurlin en una sola ronda ahorra bastante.
- Cuando algo es ambiguo o tiene trade-offs reales, preguntar (con
  `AskUserQuestion` si son opciones concretas) en vez de asumir — pero sin
  bloquear el progreso en detalles menores que se pueden decidir con criterio
  razonable (documentar la decisión al reportar, no pedir permiso para todo).
- Reportar solo cuando esté **realmente verificado**, no antes.

## Pipeline de git / deploy (repetir en cada ronda)

Rama de trabajo: `claude/vieramayu-portfolio-setup-vhn4sr`.

```
1. git add <archivos específicos> (nunca git add -A a ciegas)
2. git commit -m "..."
3. git fetch origin main && git rebase origin/main
   -- casi siempre hay conflicto o "skipped previously applied commit"
      porque cada ronda anterior se fusionó con squash-merge. Es normal:
      verificar con `git log --oneline` y `git diff` que el contenido
      remoto coincide con lo ya fusionado, y resolver quedándose con HEAD
      (o `git rebase --skip` si el commit completo ya está aguas arriba).
4. npx tsc --noEmit && npm run build   (verificar limpio, otra vez tras el rebase)
5. git push -u origin claude/vieramayu-portfolio-setup-vhn4sr
   -- normalmente falla con "non-fast-forward" por la misma razón del paso 3.
      Confirmar con git log/diff que es seguro, y entonces:
      git push --force-with-lease -u origin claude/vieramayu-portfolio-setup-vhn4sr
6. mcp__github__create_pull_request (base: main)
7. mcp__github__merge_pull_request (merge_method: "squash")
8. mcp__github__actions_run_trigger (method: run_workflow, workflow_id: 328898289, ref: main)
9. mcp__Claude_Code_Remote__send_later (delay ~2 min) para confirmar el deploy y
   reportar a Mayurlin en español, breve. NUNCA fabricar el resultado del
   check-in -- llega como notificación aparte.
10. Al confirmar: mcp__github__actions_list (method: list_workflow_runs, branch: main)
    -- la respuesta es enorme (>400K caracteres), siempre se trunca. Leer el
       archivo guardado con Python (json.load) en vez de reintentar la
       herramienta.
```

**Nota sobre duplicados:** los recordatorios de `send_later` a veces llegan
tarde o fuera de orden (después de que ya se reportó ese mismo resultado por
otro camino). Si el head_sha ya fue confirmado y reportado, no repetir el
reporte completo — decir brevemente que ya se confirmó antes y seguir.

## Verificación local (antes de cada push)

```bash
npm run build
mkdir -p /tmp/servedir && ln -sf $(pwd)/dist /tmp/servedir/New-Portafolio
cd /tmp/servedir && NODE_PATH=/opt/node22/lib/node_modules \
  /opt/node22/bin/node /opt/node22/lib/node_modules/http-server/bin/http-server -p <puerto> --cors
```

Usar `http-server` (HTTP/1.1, keep-alive, range requests reales), **no**
`vite preview` ni servidores Python simples para nada relacionado con video —
ver "Limitaciones del entorno" abajo.

Luego Playwright: `NODE_PATH=/opt/node22/lib/node_modules node <script>.js`,
navegador en `/opt/pw-browsers/chromium`, `args: ['--no-sandbox']`.

## Limitaciones del entorno de este agente (no del sitio real)

- **Sin acceso a dominios externos** (curl, WebFetch, fetch del navegador):
  cualquier imagen o recurso en un dominio externo (mayurlintravel.eu,
  Unsplash, etc.) no se puede descargar ni verificar visualmente desde aquí.
  Si Mayurlin da un enlace externo, hay que pedirle el archivo directo, o
  aceptar no poder verificarlo visualmente y decirlo con honestidad.
- **El Chromium de Playwright en este entorno NO soporta H.264** (es un build
  de Chromium de código abierto, no Chrome real). Los videos deben llevar
  también una fuente WebM (`<source type="video/webm">` después de la de mp4)
  para poder verificar reproducción real aquí — en Safari/Chrome/Firefox
  reales, H.264 sí funciona sin problema.
- **Safari tiene un bug conocido** con el prop `muted` de React en `<video
  autoPlay muted>`: a veces evalúa si puede autoreproducir antes de que el
  DOM refleje el estado "silenciado", y bloquea el autoplay. Fix: forzar
  `video.muted = true` y llamar `.play()` explícitamente en un
  `useLayoutEffect` via ref (ver `components/IntroLoader.tsx`).

## Sistema de contenido editable (fotos y textos fuera del bundle)

Mayurlin quiere poder cambiar fotos y textos principales subiendo archivos a
su hosting, sin tocar código ni recompilar. Se implementó así:

- **Fotos**: `public/images/*.jpg`, referenciadas con el helper
  `publicImage(filename)` de `src/lib/content.tsx` (usa
  `import.meta.env.BASE_URL`, nunca rutas absolutas hardcodeadas).
- **Textos principales**: `public/images/content.json`, cargado en tiempo de
  ejecución (`fetch`, no import estático) vía `ContentProvider` /
  `useSiteContent()` en `src/lib/content.tsx`. Hace merge campo por campo
  contra `DEFAULT_CONTENT` (mismo archivo) — si un campo falta o el JSON está
  roto, cae al valor por defecto sin romper la página. **Mantener
  `DEFAULT_CONTENT` sincronizado con `content.json`** cada vez que se edite
  uno de los dos.

### Convención de nombres de fotos

Las 8 secciones de hotel de Inicio (`data/hotels.ts`, array `HOTEL_STORIES`,
en orden = sec1..sec8) muestran exactamente 3 fotos cada una
(`HotelSectionBlock.tsx` corta a `.slice(0, 3)`). Cada layoutVariant (0-7)
define una forma fija por foto — **la forma (h/v/c) no se puede cambiar sin
tocar el layout**:

| Sección | foto1 | foto2 | foto3 |
|---|---|---|---|
| sec1 (Ritz-Carlton Abama — ya con fotos reales) | v | v | h |
| sec2 | h | c | v |
| sec3 | v | h | v |
| sec4 | v | c | h |
| sec5 | h (16:9) | v | v |
| sec6 | c | v | h |
| sec7 | v | v | v |
| sec8 | c | c | h |

Nombre de archivo: `sec{N}-foto{N}-{h|v|c}.jpg`. Al recibir fotos nuevas sin
etiquetar: revisar las dimensiones reales (ancho vs. alto) para saber su
orientación natural y encajarlas en el slot que pida esa forma — no hace
falta que Mayurlin especifique cuál va dónde. Con criterio propio se decide
cuál foto es la "protagonista" (slot más grande) cuando hay varias del mismo
tipo de orientación, salvo que ella indique una preferencia.

Fotos con nombre propio (no numeradas): `hero-portada.jpg` (fondo de Inicio,
también usada en la vista previa de "Portafolio" en el menú),
`sobre-mi-mayurlin.jpg`, `sobre-mi-yerfran.jpg` (retratos en "Acerca de").

**No están en este sistema, siguen en su hosting externo (WordPress) porque
ya son editables por ella sin tocar código:** la foto de pareja de "Acerca
de" (`COUPLE_PHOTO` en `data/media.ts`) y la textura decorativa de fondo del
Hero (URL de higgs.ai en `HeroSection.tsx`).

Las 24 fotos de las 8 secciones (menos sec1, ya real) siguen siendo
marcadores de posición generados (fondo gris + nombre + dimensiones
impresas) — placeholders temporales hasta que Mayurlin mande sus fotos
reales.

## Decisiones de diseño ya tomadas (no revertir sin que ella lo pida)

- Logo actual: sin efecto de sombra/resplandor (el anterior sí lo tenía, ella
  lo pidió quitar). Tamaño reducido en dos rondas: -15% y luego -18%
  adicional (actual: 25px móvil / 30px escritorio en navbar, 25px en footer).
- Foto del Hero: sin ningún filtro CSS ni máscara/degradado sobre el cuerpo
  de la foto (pedido explícito). Sí lleva un degradado sutil, muy pequeño,
  solo en la franja superior (detrás del logo/menú) e inferior (detrás del
  texto del pie) para legibilidad — no es un filtro sobre la foto completa,
  ver `HeroSection.tsx`.
- Titular del Hero: centrado en ambos ejes, blanco puro (`text-white`),
  copy elegido por Mayurlin entre 4 opciones que generé con la skill de
  copywriting: "Contamos lo que se siente, no solo lo que se ve."
- Video de intro: se reproduce en **cada** carga/recarga (no solo la primera
  vez) — pedido explícito de ella, acepta el costo de carga adicional.
  Cache-busting por montaje (`?v=timestamp`) para evitar reconstrucción
  corrupta desde caché del navegador en recargas rápidas.
- La página "Portafolio" fue eliminada — el enlace (menú y footer) ahora
  lleva a Inicio. La foto de vista previa al pasar el mouse sobre
  "Portafolio" en el menú es la misma que el fondo del Hero.
- Marquee de marcas (`BrandsMarquee.tsx`, página Contacto): padding vertical
  simétrico y reducido (`py-8 md:py-10`) — cuidado si se vuelve a tocar, ya
  hubo una ronda donde un padding asimétrico rompió tanto el centrado de los
  logos como el espacio antes del footer.

## Migración futura a hosting propio

Cuando Mayurlin migre todo el sitio a su dominio propio: el único lugar
donde el path de GitHub Pages está hardcodeado es la línea `base:
command === 'build' ? '/New-Portafolio/' : '/'` en `vite.config.ts`. Cambiar
ese valor (a `/` si el sitio queda en la raíz del dominio), volver a
compilar, y subir el contenido completo de `dist/` (código + `public/images/`
con todas las fotos y `content.json` que ya estén puestas) al hosting nuevo.
Nada más necesita cambios — todas las rutas de fotos/contenido usan
`import.meta.env.BASE_URL` dinámicamente, así que se ajustan solas.
