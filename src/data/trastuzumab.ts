import type {ProteinConfig} from '../types';
export const trastuzumab:ProteinConfig={
  "id": "trastuzumab",
  "name": "Trastuzumab",
  "species": "Anticuerpo humanizado · producción CHO",
  "type": "Anticuerpo monoclonal IgG1 κ",
  "enabled": true,
  "pdb": "1N8Z",
  "assembly": 1,
  "models": {
    "monomer": "/models/trastuzumab-fab.pdb",
    "binary": "/models/trastuzumab-her2.pdb",
    "complex": "/models/trastuzumab-complex.pdb"
  },
  "chains": [
    {
      "id": "A",
      "sequence": "DIQMTQSPSSLSASVGDRVTITCRASQDVNTAVAWYQQKPGKAPKLLIYSASFLYSGVPSRFSGSRSGTDFTLTISSLQPEDFATYYCQQHYTTPPTFGQGTKVEIKRTVAAPSVFIFPPSDEQLKSGTASVVCLLNNFYPREAKVQWKVDNALQSGNSQESVTEQDSKDSTYSLSSTLTLSKADYEKHKVYACEVTHQGLSSPVTKSFNRGEC",
      "color": "#6ad8ff"
    },
    {
      "id": "B",
      "sequence": "EVQLVESGGGLVQPGGSLRLSCAASGFNIKDTYIHWVRQAPGKGLEWVARIYPTNGYTRYADSVKGRFTISADTSKNTAYLQMNSLRAEDTAVYYCSRWGGDGFYAMDYWGQGTLVTVSSASTKGPSVFPLAPSSKSTSGGTAALGCLVKDYFPEPVTVSWNSGALTSGVHTFPAVLQSSGLYSLSSVVTVPSSSLGTQTYICNVNHKPSNTKVDKKVEP",
      "color": "#759aff"
    }
  ],
  "chainRoles": {
    "A": "A",
    "B": "B",
    "C": "C"
  },
  "secondaryAnnotations": [
    {
      "chains": [
        "A"
      ],
      "from": 4,
      "to": 7,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 19,
      "to": 25,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 70,
      "to": 75,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 62,
      "to": 67,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 10,
      "to": 13,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 102,
      "to": 106,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 84,
      "to": 90,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 97,
      "to": 98,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 84,
      "to": 90,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 33,
      "to": 38,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 45,
      "to": 49,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 53,
      "to": 54,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 114,
      "to": 118,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 129,
      "to": 139,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 173,
      "to": 182,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 159,
      "to": 163,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 144,
      "to": 148,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 191,
      "to": 198,
      "type": "s"
    },
    {
      "chains": [
        "A"
      ],
      "from": 205,
      "to": 210,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 3,
      "to": 7,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 18,
      "to": 25,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 78,
      "to": 83,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 68,
      "to": 73,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 10,
      "to": 12,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 114,
      "to": 118,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 92,
      "to": 98,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 109,
      "to": 110,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 92,
      "to": 98,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 34,
      "to": 39,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 46,
      "to": 51,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 58,
      "to": 60,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 127,
      "to": 131,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 142,
      "to": 152,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 138,
      "to": 139,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 142,
      "to": 152,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 183,
      "to": 192,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 176,
      "to": 177,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 183,
      "to": 192,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 170,
      "to": 172,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 158,
      "to": 161,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 202,
      "to": 207,
      "type": "s"
    },
    {
      "chains": [
        "B"
      ],
      "from": 212,
      "to": 217,
      "type": "s"
    }
  ],
  "bridges": [
    [
      "A23",
      "A88"
    ],
    [
      "A134",
      "A194"
    ],
    [
      "B22",
      "B96"
    ],
    [
      "B147",
      "B203"
    ]
  ],
  "levels": [
    {
      "id": "primary",
      "title": "Primaria",
      "text": "A: 214 y B: 220 residuos del Fab depositado. Selecciona una letra para encontrar su posición real.",
      "applicable": true,
      "selection": []
    },
    {
      "id": "secondary",
      "title": "Secundaria",
      "text": "Láminas β del armazón de inmunoglobulina; los bucles conectan hebras. Se resaltan registros SHEET del PDB.",
      "applicable": true,
      "selection": []
    },
    {
      "id": "tertiary",
      "title": "Terciaria",
      "text": "Cada cadena forma dominios plegados; los disulfuros estabilizan regiones distantes de su secuencia.",
      "applicable": true,
      "selection": []
    },
    {
      "id": "quaternary",
      "title": "Cuaternaria",
      "text": "IgG1 completa: dos pesadas y dos ligeras (H₂L₂). 1N8Z muestra solo el subensamblaje Fab A+B y su complejo con HER2, no una IgG1 completa.",
      "applicable": true,
      "selection": []
    }
  ],
  "regions": [
    {
      "name": "Ejemplos de proximidad Fab–HER2 ≤ 4 Å",
      "residues": [
        "B103",
        "B50",
        "A94",
        "A91",
        "A92",
        "A30"
      ],
      "meaning": "Criterio geométrico, no una lista exhaustiva ni una medición de afinidad.",
      "source": "audit"
    }
  ],
  "functionalGroups": [
    {
      "name": "Disulfuro de cisteína",
      "residues": [
        "A23",
        "A88",
        "A134",
        "A194",
        "B22",
        "B96",
        "B147",
        "B203"
      ],
      "text": "Los azufres de dos cisteínas forman un enlace covalente S–S que estabiliza el dominio."
    }
  ],
  "function": "Reconocimiento de HER2 y efectos sobre proliferación; Fc del anticuerpo completo puede reclutar mecanismos inmunitarios.",
  "interactions": [
    "HER2 (dominio IV extracelular)",
    "Receptores Fc en células inmunitarias (no presentes en 1N8Z)"
  ],
  "application": {
    "name": "Herceptin · infusión intravenosa",
    "steps": [
      {
        "title": "Verificar HER2",
        "text": "El laboratorio evalúa HER2 en el tumor. La prueba acompaña la decisión clínica.",
        "icon": "①"
      },
      {
        "title": "Proteína recombinante",
        "text": "Se fabrica y controla la calidad del anticuerpo completo, no del Fab aislado de la imagen.",
        "icon": "②"
      },
      {
        "title": "Preparar formulación",
        "text": "Personal capacitado prepara la formulación indicada y preserva la estabilidad de la proteína.",
        "icon": "③"
      },
      {
        "title": "Infusión intravenosa",
        "text": "El sistema de infusión controla la administración al torrente sanguíneo. No genera especificidad molecular.",
        "icon": "④"
      },
      {
        "title": "Reconocer HER2",
        "text": "Las regiones variables reconocen una superficie extracelular del blanco.",
        "icon": "⑤"
      },
      {
        "title": "Evaluar la respuesta",
        "text": "Se evalúan beneficio y seguridad. El reconocimiento molecular no garantiza respuesta clínica.",
        "icon": "⑥"
      }
    ],
    "sourceIds": [
      "drug"
    ]
  },
  "stations": [
    {
      "id": "identity",
      "title": "Reconocer\npara intervenir",
      "kicker": "01 / IDENTIDAD",
      "text": "Trastuzumab es un anticuerpo monoclonal humanizado IgG1 κ dirigido contra HER2.",
      "detail": "Fármaco recombinante producido en células CHO. Se estudia una proteína terapéutica diseñada, no una hormona natural. El modelo 1N8Z muestra un Fab unido a HER2 extracelular. No equivale al medicamento completo.",
      "focus": "",
      "organization": "monomer",
      "audio": "identity",
      "sources": [
        "structure",
        "paper"
      ]
    },
    {
      "id": "chain",
      "title": "Dos cadenas,\nun fragmento",
      "kicker": "02 / SECUENCIA DEL FAB",
      "text": "Explora A: cadena ligera de 214 residuos, y B: fragmento de cadena pesada de 220.",
      "detail": "Estas secuencias corresponden al constructo Fab depositado en 1N8Z. Conservamos numeración y coordenadas originales. La B no es la cadena pesada completa. El anticuerpo completo tiene dos ligeras y dos pesadas; HER2 no forma parte de su secuencia.",
      "focus": "",
      "organization": "monomer",
      "audio": "chain",
      "sources": [
        "structure",
        "paper"
      ]
    },
    {
      "id": "structure",
      "title": "La forma\ndel reconocimiento",
      "kicker": "03 / NIVELES ESTRUCTURALES",
      "text": "Los dominios del Fab se organizan principalmente en láminas β, conectadas por bucles.",
      "detail": "Los bucles variables contribuyen al reconocimiento y el armazón de inmunoglobulina sostiene su disposición. Las láminas mostradas se basan en registros SHEET de 1N8Z. Una conformación cristalográfica no representa toda la movilidad en solución.",
      "focus": "secondary",
      "organization": "monomer",
      "audio": "structure",
      "sources": [
        "structure",
        "paper"
      ]
    },
    {
      "id": "bridges",
      "title": "Conecta\nlos disulfuros",
      "kicker": "04 / DISULFUROS",
      "text": "Identifica cuatro puentes S–S que estabilizan dominios del Fab.",
      "detail": "A23–A88 y A134–A194 pertenecen a la cadena ligera. B22–B96 y B147–B203 pertenecen al fragmento pesado. Son enlaces intramoleculares en cada cadena; no inventamos un enlace entre A y B ausente del registro. El juego identifica enlaces ya existentes; no simula biosíntesis.",
      "focus": "bridges",
      "organization": "monomer",
      "audio": "bridges",
      "sources": [
        "structure",
        "paper"
      ]
    },
    {
      "id": "organization",
      "title": "Una parte\ndel anticuerpo",
      "kicker": "05 / FAB Y ANTICUERPO",
      "text": "Un Fab reconoce el antígeno. La IgG1 completa incluye dos brazos Fab y una región Fc.",
      "detail": "La organización completa es H₂L₂. El archivo no contiene Fc; solo A+B y HER2 extracelular C. Completa el complejo experimental seleccionando el blanco correcto y compara fragmento libre visualizado con complejo. Ocultar HER2 no produce una estructura experimental adicional.",
      "focus": "",
      "organization": "monomer",
      "audio": "organization",
      "sources": [
        "structure",
        "paper"
      ]
    },
    {
      "id": "interaction",
      "title": "¿Dónde\nse encuentran?",
      "kicker": "06 / SUPERFICIE DE UNIÓN",
      "text": "Una superficie del Fab reconoce el dominio IV extracelular de HER2.",
      "detail": "Resaltamos ejemplos calculados directamente: algún átomo pesado del residuo del Fab está a 4 Å o menos de un átomo pesado de HER2. Este criterio geométrico es reproducible, no demuestra por sí mismo un enlace de hidrógeno ni la contribución energética de cada residuo. La numeración es la del PDB.",
      "focus": "receptor",
      "organization": "complex",
      "audio": "interaction",
      "sources": [
        "structure",
        "paper",
        "audit"
      ]
    },
    {
      "id": "function",
      "title": "Del reconocimiento\na la respuesta",
      "kicker": "07 / FUNCIÓN",
      "text": "La unión a HER2 puede limitar la proliferación; el anticuerpo completo también participa en mecanismos inmunitarios.",
      "detail": "La región Fc puede mediar citotoxicidad celular dependiente de anticuerpo. Esa función no puede verse directamente en 1N8Z porque Fc y células inmunitarias están ausentes. HER2 también participa en tejidos normales: una terapia dirigida no significa ausencia de riesgos.",
      "focus": "",
      "organization": "monomer",
      "audio": "function",
      "sources": [
        "drug",
        "education"
      ]
    },
    {
      "id": "application",
      "title": "De la molécula\na la infusión",
      "kicker": "08 / INGENIERÍA BIOMÉDICA",
      "text": "Herceptin intravenoso: una aplicación de proteína recombinante y administración controlada en cáncer HER2 positivo.",
      "detail": "El ejemplo se centra en cáncer de mama HER2 positivo en contextos indicados. Una prueba de sobreexpresión o amplificación de HER2 orienta la selección. El medicamento conserva la estructura del anticuerpo; no se administra el Fab cristalográfico aislado. Una bomba de infusión regula la entrega al torrente sanguíneo, pero no selecciona células ni modifica la afinidad. Explicación académica, sin dosis. La preparación requiere seguir el etiquetado; la agregación o pérdida de conformación puede perjudicar la calidad.",
      "focus": "",
      "organization": "monomer",
      "audio": "application",
      "sources": [
        "drug",
        "education"
      ]
    }
  ],
  "questions": [
    {
      "q": "¿Qué parte muestra 1N8Z?",
      "answers": [
        "Fab con HER2 extracelular",
        "Anticuerpo completo con Fc",
        "Un virus"
      ],
      "correct": 0,
      "explanation": "El modelo contiene el Fab y la región extracelular de HER2; no Fc, membrana ni dominio cinasa."
    },
    {
      "q": "¿Trastuzumab tiene un sitio activo catalítico?",
      "answers": [
        "No: tiene superficie de unión",
        "Sí: corta HER2",
        "Sí: fabrica ATP"
      ],
      "correct": 0,
      "explanation": "Es un anticuerpo de reconocimiento. No debe confundirse con la actividad cinasa de HER2."
    },
    {
      "q": "¿Qué componente falta para completar el complejo visible?",
      "answers": [
        "HER2 extracelular",
        "Insulina",
        "Región Fc"
      ],
      "correct": 0,
      "explanation": "A+B forman el Fab. El blanco C es HER2 extracelular; Fc no está resuelto en 1N8Z."
    },
    {
      "q": "¿Qué hace la bomba de infusión?",
      "answers": [
        "Controla la administración",
        "Reconoce HER2",
        "Cambia la secuencia"
      ],
      "correct": 0,
      "explanation": "El dispositivo regula la entrega; la especificidad molecular pertenece al anticuerpo."
    },
    {
      "q": "¿Los 434 residuos son todo el trastuzumab?",
      "answers": [
        "No, solo el Fab de este archivo",
        "Sí",
        "Son todos de HER2"
      ],
      "correct": 0,
      "explanation": "214 de A más 220 de B describen el fragmento. La IgG1 completa incluye regiones adicionales y dos copias de cada tipo de cadena."
    }
  ],
  "activities": [
    {
      "id": "ss",
      "kind": "bridges",
      "title": "Conecta los disulfuros"
    },
    {
      "id": "target",
      "kind": "organization",
      "title": "Reconoce el blanco"
    },
    {
      "id": "therapy",
      "kind": "pathway",
      "title": "Ordena la aplicación"
    }
  ],
  "sources": [
    {
      "id": "structure",
      "title": "RCSB · PDB 1N8Z",
      "url": "https://www.rcsb.org/structure/1N8Z",
      "evidence": "Difracción de rayos X, 2,52 Å. A: cadena ligera; B: fragmento pesado; C: HER2 extracelular. Ensamblaje 1. No contiene Fc ni membrana."
    },
    {
      "id": "paper",
      "title": "Cho et al. · Nature, 2003",
      "url": "https://doi.org/10.1038/nature01392",
      "evidence": "Estructura experimental del reconocimiento del dominio IV de HER2 por el Fab de trastuzumab."
    },
    {
      "id": "drug",
      "title": "FDA · Herceptin, ficha de 2024",
      "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/103792s5354lbl.pdf",
      "evidence": "Anticuerpo humanizado IgG1 kappa, producción recombinante en CHO, administración intravenosa y selección mediante pruebas de HER2. Referencia académica de esa edición."
    },
    {
      "id": "education",
      "title": "PDB-101 · HER2 y trastuzumab",
      "url": "https://pdb101.rcsb.org/motm/268",
      "evidence": "Contexto didáctico de anticuerpos anti-HER2; distingue dominios, esquemas y estructuras experimentales."
    },
    {
      "id": "audit",
      "title": "Auditoría local · coordenadas 1N8Z",
      "url": "/models/audit.json",
      "evidence": "Conteo directo de residuos, enlaces S–S y proximidades de átomos pesados a 4 Å. Proximidad no equivale a energía de unión ni demuestra un enlace de hidrógeno."
    }
  ],
  "printedSheet": "/docs/Ficha_Trastuzumab.pdf",
  "evaluationCriteria": [],
  "presenterScript": "Trastuzumab es un anticuerpo monoclonal humanizado diseñado para reconocer HER2. Forma parte de terapias dirigidas en determinados cánceres HER2 positivos. Un anticuerpo completo tiene dos cadenas pesadas y dos ligeras. Aquí vemos solo un fragmento Fab: la cadena A es ligera y la B corresponde a parte de una cadena pesada. Sus dominios ricos en láminas beta y sus puentes disulfuro sostienen la forma de reconocimiento. En el complejo experimental, este fragmento se une a la región extracelular de HER2. No tiene un sitio activo catalítico; tiene una superficie de unión. El anticuerpo completo también posee una región Fc, ausente de este modelo, que puede participar en mecanismos inmunitarios. La aplicación que presentamos conecta una prueba de HER2, el medicamento recombinante y la administración intravenosa controlada. La bomba controla la infusión; la especificidad proviene del anticuerpo. Ahora, identifica un puente o explora la superficie que reconoce HER2.",
  "cautions": [
    "1N8Z contiene un Fab, no la inmunoglobulina completa. No tiene región Fc.",
    "A: ligera de 214 residuos; B: fragmento pesado de 220. Los 434 residuos del Fab no son la longitud del fármaco completo.",
    "Los cuatro disulfuros del reto son intracadena del Fab y están registrados en 1N8Z. No representan todos los enlaces de una IgG1 completa.",
    "Trastuzumab no es una enzima. HER2 sí tiene un dominio cinasa, pero no está incluido en este modelo extracelular.",
    "HER2 es una proteína humana; trastuzumab es un anticuerpo humanizado producido por biotecnología, no una proteína humana natural sin modificar.",
    "La región Fc y la membrana se muestran solo mediante esquemas, nunca como coordenadas observadas.",
    "Trastuzumab no es trastuzumab emtansina ni trastuzumab deruxtecán: esos productos incluyen una carga farmacológica conjugada.",
    "No se promete curación ni se dan dosis. La elección terapéutica depende de evaluación clínica y biomarcadores."
  ],
  "tour": {
    "durationSeconds": 88,
    "idleSeconds": 20,
    "steps": [
      {
        "station": 0,
        "label": "Una terapia dirigida"
      },
      {
        "station": 1,
        "label": "Cadena ligera"
      },
      {
        "station": 1,
        "label": "Fragmento pesado"
      },
      {
        "station": 2,
        "label": "Láminas beta"
      },
      {
        "station": 3,
        "label": "Cuatro disulfuros"
      },
      {
        "station": 4,
        "label": "Fab y anticuerpo"
      },
      {
        "station": 4,
        "label": "Complejo Fab–HER2",
        "organization": "complex"
      },
      {
        "station": 5,
        "label": "Superficie de unión"
      },
      {
        "station": 6,
        "label": "Respuesta biológica"
      },
      {
        "station": 7,
        "label": "Aplicación biomédica"
      },
      {
        "station": 0,
        "label": "Toma el control"
      }
    ]
  },
  "audios": {
    "identity": {
      "text": "Trastuzumab es un anticuerpo monoclonal humanizado IgG1 κ dirigido contra HER2.",
      "file": "/audio/identity.mp3"
    },
    "chain": {
      "text": "Explora A: cadena ligera de 214 residuos, y B: fragmento de cadena pesada de 220.",
      "file": "/audio/chain.mp3"
    },
    "structure": {
      "text": "Los dominios del Fab se organizan principalmente en láminas β, conectadas por bucles.",
      "file": "/audio/structure.mp3"
    },
    "bridges": {
      "text": "Identifica cuatro puentes S–S que estabilizan dominios del Fab.",
      "file": "/audio/bridges.mp3"
    },
    "organization": {
      "text": "Un Fab reconoce el antígeno. La IgG1 completa incluye dos brazos Fab y una región Fc.",
      "file": "/audio/organization.mp3"
    },
    "interaction": {
      "text": "Una superficie del Fab reconoce el dominio IV extracelular de HER2.",
      "file": "/audio/interaction.mp3"
    },
    "function": {
      "text": "La unión a HER2 puede limitar la proliferación; el anticuerpo completo también participa en mecanismos inmunitarios.",
      "file": "/audio/function.mp3"
    },
    "application": {
      "text": "Herceptin intravenoso: una aplicación de proteína recombinante y administración controlada en cáncer HER2 positivo.",
      "file": "/audio/application.mp3"
    },
    "complete": {
      "text": "¡Reto completado! Identificaste cuatro puentes disulfuro reales del fragmento Fab.",
      "file": "/audio/complete.mp3"
    },
    "tour-0": {
      "text": "Trastuzumab reconoce HER2. Descubre cómo una proteína diseñada conecta estructura y tratamiento.",
      "file": "/audio/tour-0.mp3"
    },
    "tour-1": {
      "text": "La cadena A del modelo es ligera y contiene doscientos catorce aminoácidos.",
      "file": "/audio/tour-1.mp3"
    },
    "tour-2": {
      "text": "La cadena B contiene doscientos veinte residuos del fragmento pesado. No es la cadena pesada completa.",
      "file": "/audio/tour-2.mp3"
    },
    "tour-3": {
      "text": "Las láminas beta forman el armazón de estos dominios. Los bucles ayudan a definir la superficie de reconocimiento.",
      "file": "/audio/tour-3.mp3"
    },
    "tour-4": {
      "text": "Cuatro puentes disulfuro estabilizan los dominios del Fab. Encuentra sus parejas reales.",
      "file": "/audio/tour-4.mp3"
    },
    "tour-5": {
      "text": "El anticuerpo completo tiene dos cadenas pesadas y dos ligeras. Este archivo muestra solo un Fab.",
      "file": "/audio/tour-5.mp3"
    },
    "tour-6": {
      "text": "Al incluir HER2 vemos un complejo experimental. Es una comparación de componentes, no una simulación de asociación.",
      "file": "/audio/tour-6.mp3"
    },
    "tour-7": {
      "text": "La unión depende de una superficie. La proximidad entre átomos no explica por sí sola toda la afinidad.",
      "file": "/audio/tour-7.mp3"
    },
    "tour-8": {
      "text": "El anticuerpo completo puede actuar sobre la proliferación y participar en mecanismos inmunitarios mediante su región Fc.",
      "file": "/audio/tour-8.mp3"
    },
    "tour-9": {
      "text": "El sistema de infusión controla la entrega. El anticuerpo aporta el reconocimiento molecular. Explora cómo se relacionan.",
      "file": "/audio/tour-9.mp3"
    },
    "tour-10": {
      "text": "Toma el control y explora. Selecciona residuos, conecta disulfuros y descubre una aplicación biomédica.",
      "file": "/audio/tour-10.mp3"
    }
  }
};
