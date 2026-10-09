from pathlib import Path
import json,zipfile,hashlib
r=Path(__file__).resolve().parents[1];out=r.parent/'output'
e=json.loads((r/'evidence/e2e-results.json').read_text());x=json.loads((r/'evidence/extended-results.json').read_text())
report=f'''# Resultados · Trastuzumab

Verificación del 8 de octubre de 2026.

- Compilación TypeScript/Vite y caché de producción: correctas.
- 10 pruebas unitarias aprobadas: configuración, secuencia, disulfuros, duplicados/progreso, mando, zona muerta, cambio de modelo, temporizador y recursos ausentes.
- {len(e['checks'])} verificaciones principales de navegador y {len(x['checks'])} ampliadas aprobadas. Evidencia JSON y capturas en evidence/.
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

'''+ '\n'.join('- '+c for c in e['checks']+x['checks'])
(r/'RESULTADOS_PRUEBAS.md').write_text(report,encoding='utf-8')
excluded={'node_modules','.git','__pycache__','.server.pid','server.log','server-error.log'}
records=[]
for name,full in [('Museo_Trastuzumab_v1.0.zip',True),('Trastuzumab_Para_GitHub_Vercel.zip',False)]:
 dest=out/name
 with zipfile.ZipFile(dest,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as z:
  for p in r.rglob('*'):
   if not p.is_file():continue
   rel=p.relative_to(r)
   if any(v in excluded for v in rel.parts):continue
   if not full and rel.parts[0] in ['dist','runtime','evidence']:continue
   z.write(p,str(Path('museo-trastuzumab')/rel) if full else str(rel))
 with zipfile.ZipFile(dest) as z:assert z.testzip() is None
 records.append(dict(file=name,bytes=dest.stat().st_size,sha256=hashlib.sha256(dest.read_bytes()).hexdigest()))
audio=json.loads((r/'public/audio/scripts.json').read_text(encoding='utf-8'))
with zipfile.ZipFile(out/'Guiones_ElevenLabs_Trastuzumab.zip','w',zipfile.ZIP_DEFLATED) as z:
 z.write(r/'GUIONES_ELEVENLABS.md','GUIONES_ELEVENLABS.md')
 for k,v in audio.items():z.writestr(k+'.txt',v)
(out/'Trastuzumab_SHA256.json').write_text(json.dumps(records,indent=2))
print(json.dumps(records,indent=2))
