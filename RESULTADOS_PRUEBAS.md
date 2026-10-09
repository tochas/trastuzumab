# Resultados · Trastuzumab

Verificación del 8 de octubre de 2026.

- Compilación TypeScript/Vite y caché de producción: correctas.
- 10 pruebas unitarias aprobadas: configuración, secuencia, disulfuros, duplicados/progreso, mando, zona muerta, cambio de modelo, temporizador y recursos ausentes.
- 31 verificaciones principales de navegador y 15 ampliadas aprobadas. Evidencia JSON y capturas en evidence/.
- Modelos originales y subconjuntos auditados: 7778 átomos proteicos; A 214, B 220, C 581 residuos observados. Coordenadas comparadas con el ensamblaje biológico 1. Cuatro distancias SG–SG verificadas.
- Secuencia a modelo y picking real de átomos mediante mouse comprobados. Ambos identificadores de cadena se conservan.
- Tres retos completados; errores de selección y orden rechazados. Estabilidad tiene pregunta y retroalimentación conceptual.
- Mouse, rueda, teclado, pulsación táctil emulada y simulador de mando comprobados. Calibración simulada completada.
- Inactividad real de 20 segundos, recorrido de 88 segundos, interrupción y modo permanente comprobados.
- Expositor con cinco preguntas; tres reinicios consecutivos limpiaron el progreso.
- Vista 1366×768, 1920×1080 y 390×844 revisada. Se corrigió solapamiento de secuencias en celular.
- Sin errores JavaScript ni dependencias de red externas obligatorias. Trabajadores WebGL usan recursos blob locales.
- Manifest standalone y dos iconos; service worker activo. Recarga, complejo y PDF funcionaron con la red del navegador deshabilitada.
- INICIAR_MUSEO.bat y CERRAR_MUSEO.bat ejecutados realmente; servidor exclusivo en 4178 confirmado tras reapertura.
- Dos PDFs renderizados y revisados: ficha de 4 páginas y guía de 5 páginas.

## Límites reales

- No se probó un mando Xbox físico ni una pantalla táctil física.
- Se simuló offline en navegador, no modo avión del sistema. No se instaló la PWA en el perfil personal del usuario.
- Actualización de audio: 20 MP3 reproducidos offline; asignación comprobada a 8 estaciones, reto completado y 11 pasos del recorrido. Duración ajustada: 96 segundos. Evidencia: evidence/audio-results.json. Sin transcripción ni evaluación auditiva humana.
- No se certifica una cifra de FPS para otra laptop.
- Se ofrece el Fab experimental, no una estructura completa de trastuzumab. Fc y funciones inmunitarias se explican sin inventar coordenadas.
- Paquete preparado para GitHub/Vercel; no se ha creado una URL pública ni modificado un repositorio remoto desde esta sesión.

## Comprobaciones de navegador

- 434 CA en Fab
- Secuencia selecciona A23
- Secuencia selecciona B22
- Ãšltima posiciÃ³n B220
- Rechaza enlace falso
- Cuatro disulfuros completos
- Blanco errÃ³neo rechazado
- Complejo con tres cadenas
- ComparaciÃ³n visible
- Interfaz selecciona B103
- Complejo se conserva
- RepresentaciÃ³n cartoon
- RepresentaciÃ³n sticks
- RepresentaciÃ³n surface
- RepresentaciÃ³n combined
- RepresentaciÃ³n bridges
- Orden incorrecto rechazado
- AplicaciÃ³n completada
- Estabilidad interactiva
- Expositor: cinco preguntas
- Simulador disponible
- Teclado rota
- Reinicio 0
- Reinicio 1
- Reinicio 2
- 1920 sin desborde
- 390 sin desborde
- Recarga offline
- Complejo offline
- Sin errores JS
- Sin solicitudes externas
- Picking real sincroniza secuencia
- Picking 3D comprobado
- Rueda cambia zoom
- Texto grande y animaciÃ³n reducida
- CalibraciÃ³n simulada
- Recursos locales
- Texto de secuencia
- Estructura separada
- Inactividad real inicia museo
- AcciÃ³n cancela museo
- Recorrido real avanza
- Recorrido llega al cierre
- Modo permanente
- PWA standalone
- Ficha PDF offline