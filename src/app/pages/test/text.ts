const Areas = {
  area1: "1. ÁREA COGNITIVA/INTELECTUAL",
  area2: "2. CREATIVIDAD Y PENSAMIENTO DIVERGENTE",
  area3: "3. LENGUAJE Y COMUNICACIÓN",
  area4: "4. MOTIVACION Y PERSEVERANCIA",
  area5: "5. EMOCIONAL Y SOCIAL",
  area6: "6. METACOGNITIVAS",
  area7: "7. YENDO UN POCO MÁS ATRÁS...A LA INFANCIA",
}

export const Preguntas = [
  // ÁREA COGNITIVA/INTELECTUAL
  {
    text: Areas.area1,
  },
  {
    id: "pregunta1",
    text: "Aprendo nuevos temas más rápido que la mayoría de las personas de mi edad",
  },
  {
    id: "pregunta2",
    text: "Siento curiosidad intensa por muchos temas distintos",
  },
  {
    id: "pregunta3",
    text: "Suelo encontrar soluciones originales a los problemas",
  },
  {
    id: "pregunta4",
    text: "Me aburro fácilmente cuando algo me resulta demasiado fácil o repetitivo",
  },
  {
    id: "pregunta5",
    text: "Tengo facilidad para entender conceptos abstractos o complejos",
  },
  { id: "pregunta6", text: "Tengo recuerdos desde muy temprano" },
  {
    id: "pregunta7",
    text: "En algún momento evaluaron mi CI y obtuve un resultado superior a los 115 puntos",
  },
  // CREATIVIDAD Y PENSAMIENTO DIVERGENTE
  {
    text: Areas.area2,
  },
  {
    id: "pregunta8",
    text: "Me gusta inventar historias, juegos o soluciones poco comunes",
  },
  {
    id: "pregunta9",
    text: "Tiendo a ver conexiones entre cosas que otros no relacionan (filosofía y arte, matemáticas e historia, piezas musicales con matemáticas, biología con psicología, etc.)",
  },
  {
    id: "pregunta10",
    text: "Disfruto experimentar nuevas formas de hacer las cosas",
  },
  {
    id: "pregunta11",
    text: "Cuando estoy haciendo alguna actividad ligada a la creatividad (dibujar, escribir, pintar, tocar un instrumento, tejer, coser, etc.), es el único momento en que mi mente puede parar.",
  },
  // LENGUAJE Y COMUNICACIÓN
  {
    text: Areas.area3,
  },
  {
    id: "pregunta12",
    text: "Tengo un vocabulario amplio o los demás lo perciben de ese modo.",
  },
  { id: "pregunta13", text: "Me gusta leer o escribir por placer." },
  {
    id: "pregunta14",
    text: "Cuestiono todo, es algo que casi no puedo evitar.",
  },
  // MOTIVACION Y PERSEVERANCIA
  {
    text: Areas.area4,
  },
  {
    id: "pregunta15",
    text: "Siento una fuerte necesidad de profundizar en los temas que me interesan.",
  },
  // EMOCIONAL Y SOCIAL
  {
    text: Areas.area5,
  },
  {
    id: "pregunta16",
    text: "Me cuesta encontrar personas con intereses similares.",
  },
  {
    id: "pregunta17",
    text: "Pienso, contra mi voluntad, que la mayoría de las personas son mediocres o no sienten pasión por lo que hacen.",
  },
  {
    id: "pregunta18",
    text: "Soy mi peor villano. Me autocritico todo el tiempo. Llevo el perfeccionismo a otro nivel.",
  },
  {
    id: "pregunta19",
    text: "Soy muy sensible a lo que ocurre a mi alrededor (problemas climáticos, sociales, injusticias, etc)",
  },
  {
    id: "pregunta20",
    text: 'Puedo tener problemas de ira, impaciencia o frustración extrema ante la "lentitud" ajena',
  },
  {
    id: "pregunta21",
    text: "Me cuesta mucho entender que los demás no se hagan preguntas profundas",
  },
  // METACOGNITIVAS
  {
    text: Areas.area6,
  },
  {
    id: "pregunta22",
    text: "Todo el tiempo reflexiono sobre cómo pienso o aprendo",
  },
  {
    id: "pregunta23",
    text: "Busco mejorarme todo el tiempo, identificando mis errores.",
  },
  {
    id: "pregunta24",
    text: "Disfruto pensando sobre ideas o dilemas complejos, incluso sin respuesta clara.",
  },
  // YENDO UN POCO MÁS ATRÁS...A LA INFANCIA
  {
    text: Areas.area7,
  },
  { id: "pregunta25", text: "Aprendí a leer antes de los 4 años." },
  {
    id: "pregunta26",
    text: "Comencé a tener pensamiento elaborado y abstracto desde muy temprano (5/8 años o antes) sobre temas filosóficos, éticos o morales (la religión, las guerras, veganismo, etc).",
  },
  {
    id: "pregunta27",
    text: "Buscaba hablar con adultos a la par o a su nivel.",
  },
]
export const Respuestas = [
  { text: "Definitivamente de acuerdo", value: 5 },
  { text: "Ligeramente de acuerdo", value: 4 },
  { text: "Ni de acuerdo ni en desacuerdo", value: 3 },
  { text: "Ligeramente en desacuerdo", value: 2 },
  { text: "Definitivamente en desacuerdo", value: 1 },
]