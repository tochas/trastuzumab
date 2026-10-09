# Museo CHOMPIS · Trastuzumab

Sala 04, LUIS OMAR SANCHEZ ALDANA. Tema azul cobalto. PWA TypeScript/Vite/3Dmol con modelos, iconos y textos locales. Tres retos: cuatro disulfuros del Fab, reconocimiento de HER2 y recorrido del tratamiento. Mantiene controles y dinámica de las otras salas.

## Ejecución y publicación

Windows: descomprime el paquete completo y abre INICIAR_MUSEO.bat. Incluye runtime/node.exe. CERRAR_MUSEO.bat detiene únicamente esta sala (puerto 4178).

Desarrollo: pnpm install, pnpm dev. Producción: pnpm build; pnpm preview. Verificación: pnpm test. Node 22 o superior. No requiere backend ni claves.

Vercel: sube el contenido de Trastuzumab_Para_GitHub_Vercel.zip a un repositorio con package.json en la raíz. Importa en Vercel: Vite, comando pnpm build, salida dist. No subas el ZIP como un solo archivo. No se ha publicado una URL desde esta sesión; una vez que Vercel asigne la URL, se puede habilitar la cuarta tarjeta del lobby sin inventar un dominio.

## Arquitectura y alcance

src/data/trastuzumab.ts contiene contenido, fuentes, cadenas, regiones, niveles, audio y recorrido. src/main.ts: experiencia y controles; molecule.ts: visualización; core.ts: validación, juegos, mando y temporizador. public/models: PDB original, ensamblaje mmCIF y subconjuntos sin modificar coordenadas. Los nombres internos monomer/binary/complex significan Fab/HER2/complejo; no describen monómero, dímero y trímero de anticuerpos.

La secuencia interactiva muestra las dos cadenas del constructo Fab (214 y 220 aa), no el anticuerpo completo. HER2 es el blanco humano separado. No se inventa una estructura completa de trastuzumab. La función Fc se explica como concepto y no como parte del PDB. La selección primaria/3D cubre A y B; C se observa como blanco.

## PWA y offline

Manifest standalone y horizontal; service worker con caché versionada por contenido. Primera carga desde localhost o HTTPS; esperar OFFLINE PREPARADO. Modelos y ficha quedan locales. Referencias externas son opcionales. Tras actualizar, recarga conectado al servidor para instalar la nueva caché. La red del navegador se prueba deshabilitada; la instalación física y el modo avión del sistema deben ensayarse en la laptop del evento.

## Audio

Hay 20 guiones locales en public/audio/scripts.json y GUIONES_ELEVENLABS.md. Los 20 MP3 entregados por el usuario están integrados y comprobados offline. El recorrido ajustado dura 96 segundos. No hay voz de Windows ni servicio online obligatorio. Genera cada guion y conserva su nombre, luego usa IMPORTAR_AUDIOS.bat. Acepta .mp3 y .mp3.mp3, actualiza disponibilidad y caché. Volumen, silencio y textos siempre disponibles. El recorrido se adapta a la duración de los MP3.

## Rendimiento, accesibilidad y diagnóstico

Zoom limitado, animación reducida, tamaño de letra configurable, controles de teclado/táctil, etiquetas y texto además de colores. Superficie se calcula bajo demanda. El diagnóstico muestra ejes y botones; la cifra de bucle no certifica FPS de GPU. Prueba el mando físico y la laptop real del stand.

Si la pantalla queda cargando: verifica aceleración gráfica y que dist esté completo. No abras index.html con file://. Si aparece la versión anterior, recarga conectado al servidor. Si falta el PDF, la sala sigue funcionando. Guías del equipo y exposición incluidas.

## Fuentes

- RCSB · PDB 1N8Z: https://www.rcsb.org/structure/1N8Z — Difracción de rayos X, 2,52 Å. A: cadena ligera; B: fragmento pesado; C: HER2 extracelular. Ensamblaje 1. No contiene Fc ni membrana.
- Cho et al. · Nature, 2003: https://doi.org/10.1038/nature01392 — Estructura experimental del reconocimiento del dominio IV de HER2 por el Fab de trastuzumab.
- FDA · Herceptin, ficha de 2024: https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/103792s5354lbl.pdf — Anticuerpo humanizado IgG1 kappa, producción recombinante en CHO, administración intravenosa y selección mediante pruebas de HER2. Referencia académica de esa edición.
- PDB-101 · HER2 y trastuzumab: https://pdb101.rcsb.org/motm/268 — Contexto didáctico de anticuerpos anti-HER2; distingue dominios, esquemas y estructuras experimentales.
- Auditoría local · coordenadas 1N8Z: /models/audit.json — Conteo directo de residuos, enlaces S–S y proximidades de átomos pesados a 4 Å. Proximidad no equivale a energía de unión ni demuestra un enlace de hidrógeno.