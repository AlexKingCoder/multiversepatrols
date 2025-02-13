export const storyData = [

  /*ESCENA 1*/
  { type: "narration",
    text: `Saludos, recluta {{name}}. Bienvenido al centro de entrenamiento de los Multiverse Patrols.
    Soy el teniente Bald, y seré tu supervisor durante esta formación.
    Al parecer, uno de nuestros becarios nos recomendó tu ficha para el puesto. Pero eso no significa que vaya a ser amable contigo, o ponerte las cosas fáciles.`,
    img: "/storyImages1/teniente-bald.png"
  },
  { 
    type: "challenge",
    challengeType: "multiple-choice",
    question: "¿Qué haces mirando las musarañas? ¡¡Firmes, soldado!!",
    options: ["(Cuadrarse) ¡Señor, sí señor!", "(Rascarse la nuca) ¿Disculpe? Estaba pensando en qué hay de comer."],
    correctAnswer: "(Cuadrarse) ¡Señor, sí señor!",
    correct: "narration_correct_1",
    fail: "narration_fail_1",
    time: 10,
    points: 15
  },
  {
    id: "narration_correct_1",
    type: "narration",
    text: `<span id="teniente-bald">Teniente Bald:</span> Bien, recluta. Veo que estás atento.
    Puede que nuestros becarios hayan hecho algo bien, después de todo.`
  },
  {
    id: "narration_fail_1",
    type: "narration",
    text: `<span id="teniente-bald">Teniente Bald:</span> ¡Si te pillo distraído otra vez, te mando a la secuela de Star Wars de una patada!
    Y te lo advierto, no es agradable.`
  },

  /*ESCENA 2*/
  {type: "narration",
    text: `<span id="teniente-bald">Teniente Bald:</span> Empecemos con el entrenamiento. Toma tu equipo de esa mesa.
    ¡Cuídalo bien! Recuerda que solo la tecnología y el ingenio te mantendrán a salvo en los caóticos mundos del multiverso.
    Bien, para empezar, atraviesa esa puerta. Te llevará a la primera zona de entrenamiento.`,
    img: "/storyImages1/scene2.png"
  },
  {type: "narration",
    text: `Empujas la puerta, pero te percatas de que está cerrada.
    <span id="teniente-bald">Teniente Bald:</span> ¡Ja! ¿Qué te he dicho antes? ¿Creías que te abriría la puerta como a una estrella de cine? Tendrás que abrirla tú.
    No te preocupes. La mayoría de las puertas del multiverso pueden abrirse resolviendo su adivinanza custodio.
    Y no te recrees mucho, tienes poco tiempo. ¡Adelante!`
  },
  { 
    type: "challenge",
    challengeType: "word",
    question: `Necesito abrir la puerta. La adivinanza custodio dice:
    'Soy gordito y colorado. Nunca tomo café, siempre tomo té'. ¿Qué palabra puede ser?`,
    correctAnswer: "tomate",
    correct: "narration_correct_2",
    fail: "narration_fail_2",
    time: 20,
    points: 20
  },
  {
    id: "narration_correct_2",
    type: "narration",
    text: `¡Sí, la puerta se ha abierto!
    <span id="teniente-bald">Teniente Bald:</span> Bien hecho, novato. Mi hijo de cuatro años estaría orgulloso.`
  },
  {
    id: "narration_fail_2",
    type: "narration",
    text: `<span id="teniente-bald">Teniente Bald:</span> ¡Mal, novato! Más vale que espabiles. Venga, te abriré la puerta, mequetrefe.`
  },

  /*ESCENA 3*/
  {
    type: "narration",
    text: `<span id="teniente-bald">Teniente Bald:</span> Como guardián del multiverso, encontrarás desafíos de lo más variados en cada mundo.
    Obtendrás multicréditos si los resuelves. Si consigues suficientes créditos al final de tu misión, la Alianza te concederá el deseo que quieras.
    Eso será… je, je… si vives para pedirlo, claro.`
  },
  {
    type: "narration",
    text: `Llegas a una habitación amplia y oscura.
    Entre la oscuridad, distingues varios muebles hechos trizas, como si hubieran sido cortados a pedazos.
    De pronto, un robot armado con una motosierra se lanza sobre ti.
    ¡Por poco! Logras hacerte a un lado. La sierra del robot se incrusta en la pared.
    Desde tu posición, ves el panel del procesador del robot, abierto, en la parte de atrás de su cabeza.
    Sacas el Calibrador de tu equipo y agarras al robot de la cabeza para intentar manipular su procesador.`,
    img: "/storyImages1/scene3.png"
  },
  {
    type: "challenge",
    challengeType: "math",
    prompt: "¡Resuelve estas operaciones para recalibrar el procesador del robot y desactivarlo!",
    correct: "narration_correct_3",
    fail: "narration_fail_3",
    time: 20,
    points: 50
  },
  {
    id: "narration_correct_3",
    type: "narration",
    text: `Procesador recalibrado. ¡Robot desactivado!
    Con la amenaza fuera de combate, escuchas una voz temblorosa a tu espalda.
    <span id="camila">Desconocido:</span> Menos mal que has aparecido. Si llego a quedarme un minuto más con esa cosa me habría hecho puré.
    Tienes buena mano con el calibrador. Seguro que te dan unos cuantos créditos por esto.`
  },
  {
    id: "narration_fail_3",
    type: "narration",
    text: `No consigues desactivar el procesador. El robot desincrusta la sierra de la pared y se gira hacia ti para liquidarte.
    De repente, una figura propina al robot un fuerte golpe en la cabeza. La máquina vomita unas chispas y cae al suelo.
    <span id="camila">Desconocido:</span> Uf, ha faltado poco. Esto no ha sido muy profesional. No creo que nos den multicréditos por esta chapuza.`
  },

  /*ESCENA 4*/
  {
    type: "narration",
    text: `<span id="camila">Desconocido:</span> Ah, no me he presentado. Me llamo Camila. Soy una recluta, como tú.
    <span id="camila">Camila:</span> Me he quedado atrapada en esta habitación. Parece que no hay energía, y no puedo manipular la puerta de salida.
    ¿Qué te parece si unimos fuerzas? Seguro que juntos conseguimos darle una lección al teniente Bald.`
  },
  {
    type: "challenge",
    challengeType: "multiple-choice",
    question: "Camila te propone formar equipo para el entrenamiento.",
    options: ["Pues claro. Es una buena idea. Soy {{name}}, encantado de conocerte", "Si no queda más remedio… En fin, soy {{name}}."],
    correctAnswer: "Pues claro. Es una buena idea. Soy {{name}}, encantado de conocerte",
    correct: "narration_correct_4",
    fail: "narration_fail_4",
    time: 15,
    points: 10
  },
  {
    id: "narration_correct_4",
    type: "narration",
    text: `<span id="camila">Camila:</span> ¡Lo mismo digo, {{name}}! Seguro que juntos lo vamos a bordar.
    Venga, ahora que nos hemos librado de esa lata con patas, busquemos una forma de salir de aquí.`
  },
  {
    id: "narration_fail_4",
    type: "narration",
    text: `<span id="camila">Camila:</span> Em… sí, vale. Encantada, {{name}}.
    Bueno… ¿te parece si buscamos una forma de salir de aquí?`
  },

  /*ESCENA 5*/
  {
    type: "narration",
    text: `Tras buscar unos minutos en la densa oscuridad, encuentras un generador.
    <span id="camila">Camila:</span> Bien hecho, {{name}}. Hum… parece un viejo generador del universo Pokemon.
    Sus componentes están fuera de sitio. Si pudiéramos volver a colocarlos, conseguiríamos que la energía volviera.`,
    img: "/storyImages1/scene5.png"
  },
  {
    type: "challenge",
    challengeType: "drag-and-drop",
    instructions: "Coloca las piezas del generador correctamente para hacerlo funcionar.",
    pairs: [
      { id: 1, concept: "Color Azul", definition: "Squirtle" },
      { id: 2, concept: "Color Rojo", definition: "Charmander" },
      { id: 3, concept: "Color Verde", definition: "Bulbasaur" },
      { id: 4, concept: "color amarillo", definition: "Pikachu"},
      { id: 5, concept: "color morado", definition: "Ekans"}
    ],
    points: 50,
    correct: "narration_correct_5",
    fail: "narration_fail_5",
    time: 30
  },
  {
    id: "narration_correct_5",
    type: "narration",
    text: `El generador vuelve a funcionar y la sala se ilumina.
    <span id="camila">Camila:</span> ¡Sí, lo has conseguido!`
  },
  {
    id: "narration_fail_5",
    type: "narration",
    text: `<span id="camila">Camila:</span> creo que los has colocado mal. Deja que pruebe yo.
    Tu compañera coloca los componentes en su sitio. El generador se reactiva y la habitación se ilumina.`
  },

  /*ESCENA 6*/
  {
    type: "narration",
    text: `<span id="teniente-bald">Teniente Bald:</span> Bien hecho con la energía, reclutas.
    Espero que Nintendo, marca registrada, no nos ponga una demanda por usar sus generadores pokemon.
    <span id="camila">Camila:</span> Ha sido trabajo de ambos, teniente. Lo que nos ha dado la idea de continuar el resto del entrenamiento juntos, si no tiene inconveniente.
    <span id="teniente-bald">Teniente Bald:</span> ¡Ja, qué monadas! Hay algo que me divierte más que ver fracasar a un recluta… ¡y es ver fracasar a DOS reclutas!
    Haced lo que queráis. Veamos si sumando vuestros cerebros podéis completar el resto del entrenamiento.
    (La comunicación de los altavoces se corta).`,
    img: "/storyImages1/teniente-bald.png"
  },
  {
    type: "narration",
    text: `<span id="camila">Camila:</span> {{name}}, tenemos que demostrar al teniente que somos los mejores candidatos para el trabajo.
    Es eso, o convertirnos en la comida de algún monstruo...
    ¡No, vamos a lograrlo, estoy segura! ¡Vamos, pasemos a la siguiente sala!`
  },
  {type: "narration",
    text: `El espacio cambia por completo.
    Os encontráis en un frondoso bosque, con árboles que llegan hasta el techo y cascadas susurrantes.
    <span id="trundle">¡GHRAAAAAAA!</span>
    Un trol gigantesco se lanza sobre vosotros, maza de hielo en mano.
    <span id="camila">Camila:</span> ¡{{name}}, va directo a por ti! ¡Cuidado!`,
    img: "/storyImages1/scene6-9.png"
  },
  { 
    type: "challenge",
    challengeType: "multiple-choice",
    question: "¡El trol te ataca! ¡Haz algo!",
    options: ["¡Las piernas no me responden! ¡Mamáaaa! (quedarse quieto)", "¡Salto de salvación! (esquivar el ataque)", "¿Qué dijiste sobre lo de comida para monstruos? (ser sarcástico)"],
    correctAnswer: "¡Salto de salvación! (esquivar el ataque)",
    correct: "narration_correct_6",
    fail: "narration_fail_6",
    time: 12,
    points: 40
  },
  {id: "narration_correct_6",
    type: "narration",
    text: `Con una elegante voltereta, logras esquivar el ataque del trol.
    El monstruo pasa de largo, con tanta velocidad que se golpea en la cabeza con un árbol y cae al suelo.
    <span id="camila">Camila:</span> ¡Eso ha sido una pasada, {{name}}! ¡Buen trabajo!`
  },
  {
    id: "narration_fail_6",
    type: "narration",
    text: `Te quedas quieto en el sitio. Por suerte, Camila te empuja para hacerte a un lado en el último momento.
    El trol pasa de largo, a tanta velocidad que se golpea la cabeza con un árbol y cae al suelo.
    <span id="camila">Camila:</span> Por los pelos. Tienes que estar más atento, {{name}}.`
  },

  /*ESCENA 7*/
  {
    type: "narration",
    text: `El trol empieza a patear el suelo y a gritar, dolorido por el chichón que le está saliendo en la frente.`
  },
  { 
    type: "challenge",
    challengeType: "multiple-choice",
    question: "¿Qué vas a hacer con el trol?",
    options: ["¡Te lo tienes merecido, bestia!", "Siento lo del golpe. ¿Estás bien, amigo?"],
    correctAnswer: "Siento lo del golpe. ¿Estás bien, amigo?",
    correct: "narration_correct_7",
    fail: "narration_fail_7",
    time: 15,
    points: 15
  },
  {
    id: "narration_correct_7",
    type: "narration",
    text: `¡Trundle no amigo! ¡Trundle rey de los trols! ¡Rey!`,
    img: "/storyImages1/trundle.png"
  },
  {
    id: "narration_fail_7",
    type: "narration",
    text: `¡Trundle no bestia! ¡Trundle rey de los trols! ¡Rey!`,
    img: "/storyImages1/trundle.png"
  },

  /*ESCENA 8*/
  { 
    type: "challenge",
    challengeType: "multiple-choice",
    question: "¡Trundle no amigo! ¡Trundle rey de los trols! ¡Rey!",
    options: ["Lo siento, rey de los trols. ¿Te ayudo a levantarte?", "¿Tú, un rey? ¡Ja! Anda, déjame que te levante."],
    correctAnswer: "Lo siento, rey de los trols. ¿Te ayudo a levantarte?",
    correct: "narration_correct_8",
    fail: "narration_fail_8",
    time: 15,
    points: 20
  },
  {
    id: "narration_correct_8",
    type: "narration",
    text: `Haces una breve reverencia, y el trol, siguiendo el protocolo, te la devuelve.
    Un poco más calmado, acepta tu ayuda para levantarse.`
  },
  {
    id: "narration_fail_8",
    type: "narration",
    text: `El trol suelta un gruñido, pero acepta tu ayuda para ponerse en pie.`
  },

  /*ESCENA 9*/
  {
    type: "narration",
    text: `Camila y tú lleváis a Trundle hasta un estanque, donde Camila le moja el chichón con agua fría.
    El trol se sonroja mientras rasca con timidez su maza de hielo.
    <span id="trundle">Trundle:</span> Trundle siente atacar. Trundle lleva aquí mucho tiempo, desde que fue desterrado por tiranos de Riot, marca registrada.
    Se hace un breve silencio.
    <span id="camila">Camila:</span> ¿Por qué todos decís eso de 'marca registrada'?
    <span id="trundle">Trundle:</span> Para no sufrir demandas de empresas. Demandas ser peor que enfrentarse a Nasus ap.
    <span id="camila">Camila:</span> Eh… vale. Bueno, tal vez podamos ayudarte a salir de aquí. Si tú nos ayudas a completar nuestro entrenamiento. ¿Qué me dices?
    <span id="trundle">Trundle:</span> Umm… Si poder aplastar cosas, Trundle apuntarse.`,
    img: "/storyImages1/trundle.png"
  },
  { 
    type: "challenge",
    challengeType: "text",
    prompt: `Firmada la alianza con el rey de los trols, os ponéis en marcha para salir de ese bosque.
    Escribe a continuación cómo lo lográis. Sé creativo, ¡la historia es tuya!`,
    correct: "narration_player_text",
    fail: "narration_fail_9",
    time: 999,
    points: 140
  },

  {
    id: "narration_player_text",
    type: "narration",
    text: ""
  },

  {
    id: "narration_fail_9",
    type: "narration",
    text: "¿No has querido escribir tu propia historia? Es una lástima..."
  },

  /*ESCENA 10*/

  {
    type: "narration",
    text: `Tras salir del bosque (y daros un abrazo de trol), Trundle sigue su camino en otra dirección.
    Camila y tú llegáis a una gran puerta blindada. A su lado hay una consola.
    <span id="camila">Camila:</span> Necesitamos usar el Escáner de Claves para abrirla. ¿Sabes cómo se utiliza, verdad?
    Tienes que introducir números del 1 al 9 en la consola hasta dar con la combinación adecuada.
    Cuando introduzcas un número correcto, el escáner lo marcará de color azul. Inténtalo. ¡Tú puedes!`,
    img: "/storyImages1/scene10.png"
  },
  { 
    type: "challenge",
    challengeType: "number-guess",
    prompt: `Descifra la clave para abrir la puerta.
    Pista: El dígito se iluminará de azul cuando sea el correcto.`,
    correct: "narration_correct_10",
    fail: "narration_fail_10",
    time: 40,
    points: 120
  },
  {
    id: "narration_correct_10",
    type: "narration",
    text: `La consola se ilumina en verde y la puerta se abre.
    <span id="camila">Camila:</span> ¡Bien hecho, {{name}}!`
  },
  {
    id: "narration_fail_10",
    type: "narration",
    text: `<span id="camila">Camila:</span> hum… no has introducido bien el código. Déjame probar a mí. A ver… ¡ya está!
    La consola se ilumina en verde y la puerta se abre.`
  },

  /*ESCENA 11*/
  {
    type: "narration",
    text: `Entráis en una sala oscura. Podéis escuchar el eco de vuestras pisadas en las paredes metálicas.
    De pronto, la cámara se ilumina con una siniestra luz azulada.
    <span id="chat-gepetto">Desconocido:</span> Bienvenidos, usuarios.
    Aguzáis la vista, y alcanzáis a ver, en el fondo de la sala, un monitor que brilla con un patrón de colores saltarines.
    <span id="chat-gepetto">Desconocido:</span> Mi nombre es Chat Gepetto. Soy la inteligencia artificial encargada de evaluaros en esta última prueba.
    <span id="camila">Camila:</span> Querrás decir 'Chat Gepetto, marca registrada', ¿verdad?
    Se hace un breve silencio.
    <span id="chat-gepetto">Chat Gepetto:</span> No sé de qué me hablas, tronca. Yo soy una IA cien por cien original, ¿lo captas?
    <span id="camila">Camila:</span> Lo siento, yo…
    <span id="chat-gepetto">Chat Gepetto:</span> Mira, mejor no me interrumpas, humana.
    Como iba diciendo, voy a poneros a prueba para ver si sois dignos de ser patrouilles du multivers.
    <span id="camila">Camila:</span> ¿Qué? {{name}}, creo que la IA está estropeada.
    <span id="chat-gepetto">Chat Gepetto:</span> ¡Qué empiecen las pruebas! ¡Arigato! ¡Dar cera, pulir cera!`,
    img: "/storyImages1/scene11.png"
  },
  {
    type: "narration",
    text: `Una bomba asciende por una trampilla. ¡Está programada con una cuenta atrás!`,
    img: "/storyImages1/scene11_2.png"
  },
  {
    type: "challenge",
    challengeType: "drag-and-drop",
    instructions: `Empareja los componentes correctamente para desactivar la bomba, ¡rápido!`,
    pairs: [
      { id: 1, concept: "Alex Gil", definition: "Programador y sex appeal" },
      { id: 2, concept: "Greymon", definition: "Digimon" },
      { id: 3, concept: "Obi wan", definition: "I have the high ground!" },
      { id: 4, concept: "Pixar", definition: "Lámpara"},
      { id: 5, concept: "Ferrari", definition: "Fuera de tu presupuesto, colega"}
    ],
    points: 80,
    correct: "narration_correct_11",
    fail: "narration_fail_11",
    time: 35
  },
  {
    id: "narration_correct_11",
    type: "narration",
    text: `¡Bravo! La cuenta atrás de la bomba se detiene.
    <span id="chat-gepetto">Chat Gepetto:</span> Bomba desactivada. Recuerda: tus datos nunca serán compartidos con terceros. Tan solo con Tencent y el gobierno de Wakanda.
    <span id="camila">Camila:</span> ¡Grrr, estoy empezando a calentarme!`
  },
  {
    id: "narration_fail_11",
    type: "narration",
    text: `¡No, {{name}}, esta pieza no va así! ¡Déjame a mí!
    La cuenta atrás de la bomba se detiene.
    <span id="chat-gepetto">Chat Gepetto:</span> Bomba desactivada. Recordad comer muchas verduras, niños. ¡Son buenas para la salud!
    <span id="camila">Camila:</span> ¡Grrr, estoy empezando a calentarme!`
  },

  /*ESCENA 12*/
  {
    type: "narration",
    text: `<span id="chat-gepetto">Chat Gepetto:</span> Entendido. Activando el sistema de calcinación. Espero que eso te ayude a calentarte. Si necesitas más ayuda, avísame. 🔥😊
    Las paredes de la sala se abren y empieza a salir fuego.
    Tienes que recalibrar el sistema de suministro, o te convertirás en recluta asado. ¡Deprisa!`,
    img: "/storyImages1/scene12.png"
  },
  { 
    type: "challenge",
    challengeType: "math",
    prompt: "¡Resuelve estas operaciones para recalibrar el sistema de suministro y apagar las llamas!",
    correct: "narration_correct_12",
    fail: "narration_fail_12",
    time: 35,
    points: 90
  },
  {
    id: "narration_correct_12",
    type: "narration",
    text: `¡Por poco! Las llamas de las paredes se apagan.
    <span id="chat-gepetto">Chat Gepetto:</span> Sistema de calcinación desactivado.
    Tu opinión es importante para mí. Si crees que el servicio es excelente, valórame con cinco estrellas. 😉⭐`
  },
  {
    id: "narration_fail_12",
    type: "narration",
    text: `<span id="camila">Camila:</span> Parece que no está del todo bien, déjame ayudarte.
    Las llamas de las paredes se apagan.
    <span id="chat-gepetto">Chat Gepetto:</span> Sistema de calcinación desactivado.
    Recuerda no aparcar frente a las bocas de incendios. ¡Son importantes para los bomberos! 😉🚒`
  },

  /*ESCENA 13*/
  {
    type: "narration",
    text: `<span id="camila">Camila:</span> Tenemos que hacer algo, {{name}}. Intentemos acceder al núcleo del procesador.
    Os lanzáis sobre la terminal de la IA para abrir el compartimento del procesador.
    <span id="camila">Camila:</span> ¡Maldita sea, está protegida con clave! ¡Rápido, {{name}}, tenemos que descifrarla!`,
  },
  { 
    type: "challenge",
    challengeType: "number-guess",
    prompt: `Descifra la clave para abrir el compartimento.`,
    correct: "narration_correct_13",
    fail: "narration_fail_13",
    time: 25,
    points: 120
  },
  {
    id: "narration_correct_13",
    type: "narration",
    text: `Logras abrir el compartimento del procesador.
    ¿Cómo? ¡El compartimento está vacío!
    <span id="camila">Camila:</span> ¿No hay procesador? ¿Qué significa esto? ¿Dónde está el núcleo de la IA?
    <span id="chat-gepetto">Chat Gepetto:</span> Vuestros esfuerzos son inútiles, reclutas. Ahora vais a enfrentaros a la prueba final,
    ¡y seré testigo de vuestro fracaso!`,
  },
  {
    id: "narration_fail_13",
    type: "narration",
    text: `No eres capaz de descifrar la clave, pero Camila te echa una mano.
    Lográis abrir el compartimento del procesador.
    ¿Cómo? ¡El compartimento está vacío!
    <span id="camila">Camila:</span> ¿No hay procesador? ¿Qué significa esto? ¿Dónde está el núcleo de la IA?
    <span id="chat-gepetto">Chat Gepetto:</span> Vuestros esfuerzos son inútiles, reclutas. Ahora vais a enfrentaros a la prueba final,
    ¡y seré testigo de vuestro fracaso!`,
  },

  /*ESCENA 14*/
  { 
    type: "challenge",
    challengeType: "word",
    question: "Siempre estoy cerca, pero nunca llego. Exclamación típica de José Mota.",
    correctAnswer: "mañana",
    correct: "narration_correct_14",
    fail: "narration_fail_14",
    time: 20,
    points: 25
  },
  {
    id: "narration_correct_14",
    type: "narration",
    text: `<span id="chat-gepetto">Chat Gepetto:</span> Has respondido correctamente, y has ganado 20 multicréditos. Pero… hoy no. ¡MAÑANA!`,
    img: "/storyImages1/scene14.png"
  },
  {
    id: "narration_fail_14",
    type: "narration",
    text: `<span id="chat-gepetto">Chat Gepetto:</span> ¡Tonto! ¡Que eres tonto, del tó! No pá un rato, no, ¡pá siempre! ¡Puerco tordo! ¡Hocicoperro!`,
    img: "/storyImages1/scene14.png"
  },

  /*ESCENA 15*/
  { 
    type: "challenge",
    challengeType: "word",
    question: "Puedes cocinarlos de muchas formas, y también te harán falta para superar este desafío.",
    correctAnswer: "huevos",
    correct: "narration_correct_15",
    fail: "narration_fail_15",
    time: 20,
    points: 30
  },
  {
    id: "narration_correct_15",
    type: "narration",
    text: `<span id="chat-gepetto">Chat Gepetto:</span> Te has pasado un huevo, pero tu respuesta es correcta. 😊🍳`,
    img: "/storyImages1/scene15.png"
  },
  {
    id: "narration_fail_15",
    type: "narration",
    text: `<span id="chat-gepetto">Chat Gepetto:</span> La respuesta correcta era 'huevos'. Si necesitas ayuda para escribirlo, puedo ayudarte. 😊🍳`,
    img: "/storyImages1/scene15.png"
  },

  /*ESCENA 16*/
  { 
    type: "challenge",
    challengeType: "word",
    question: "Es un bravo guerrero y un sabio filósofo. Su frase más conocida es: '¡DEMACIA!'",
    correctAnswer: "Garen",
    correct: "narration_correct_16",
    fail: "narration_fail_16",
    time: 20,
    points: 25
  },
  {
    id: "narration_correct_16",
    type: "narration",
    text: `<span id="chat-gepetto">Chat Gepetto:</span> Si has respondido bien esta pregunta, eres un Friki de League of Legends, marca registrada, y deberías tocar un poco de césped.`,
    img: "/storyImages1/scene16.png"
  },
  {
    id: "narration_fail_16",
    type: "narration",
    text: `<span id="chat-gepetto">Chat Gepetto:</span> La frase '¡DEMACIA!' es proclamada por Garen, un guerrero de League of Legends, marca registrada.
    Por desgracia, su gran sabiduría no llegó a la serie de Arcane, y los directores tuvieron que declararse en bancarrota.`,
    img: "/storyImages1/scene16.png"
  },

  /*ESCENA 17*/
  {
    type: "narration",
    text: `Camila y tú jadeáis del esfuerzo.
    <span id="chat-gepetto">Chat Gepetto:</span> Da igual lo que os esforcéis, reclutas. No podréis resolver la última y más difícil de las preguntas. ¡Allá va!`
  },
  { 
    type: "challenge",
    challengeType: "multiple-choice",
    question: "¿Cuáles son las dos cosas que os ayudarán a sobrevivir en el multiverso?",
    options: ["¡El honor y el valor! O eso creo…", "La tecnología y el ingenio", "La suerte y… ¿más suerte?", "Los fideos y la tarta (madre, qué hambre)"],
    correctAnswer: "La tecnología y el ingenio",
    correct: "narration_correct_17",
    fail: "narration_fail_17",
    time: 10,
    points: 100
  },
  {
    id: "narration_correct_17",
    type: "narration",
    text: `<span id="camila">Camila:</span> ¿La tecnología y el ingenio? Un momento… esa frase me suena. ¿Teniente Bald?`
  },
  {
    id: "narration_fail_17",
    type: "narration",
    text: `<span id="camila">Camila:</span> No, no es eso. Es la tecnología y el ingenio. Un momento… esa frase me suena. ¿Teniente Bald?`
  },

  /*ESCENA 18*/
  {
    type: "narration",
    text: `Tras responder a la última pregunta, un gigantesco robot asciende de una plataforma.
    Justo cuando el robot levanta su enorme brazo para espachurraros, escucháis una voz retumbar en la sala.
    <span id="trundle">¡Aaaaaplastandoooo!</span>
    Trundle pega un gran salto y, con su maza de hielo puro, hace trizas la cabeza del robot.
    La siniestra máquina cae, haciendo temblar el suelo.
    <span id="camila">Camila:</span> ¡Trundle, has venido a ayudarnos!
    <span id="trundle">Trundle:</span> (sonríe) ¡Nadie hace daño a amigos del rey de los trols!`,
    img: "/storyImages1/scene18.png"
  },
  {
    type: "narration",
    text: `Entre los restos del robot, se escucha una voz despavorida.
    <span id="teniente-bald">Desconocido:</span> ¡Que alguien me saque de aquí!
    Junto a Camila y Trundle os dirigís al cuerpo abollado del robot.
    Trundle arranca la placa del pecho, revelando a un humano en el interior de la máquina.
    <span id="camila">Camila:</span> ¡¿Teniente Bald?!
    El hombre se apresura a salir de ahí y ponerse firme, como si nada hubiera pasado.
    <span id="teniente-bald">Teniente Bald:</span> ¡Sí! El entrenamiento ha salido a la perfección.
    Espero que no os importe que probásemos nuestra nueva súper IA con vosotros. Al parecer, es realmente asombrosa.`
  },
  { 
    type: "challenge",
    challengeType: "multiple-choice",
    question: "¿Qué respondes?",
    options: ["Sí, señor, ciértamente magnífica (seguirle la corriente)", "Con asombrosa se refiere a que le ha secuestrado a usted en el interior de ese robot y ha tratado de matarnos a Camila y a mí, ¿no? (decir la verdad)"],
    correctAnswer: "Con asombrosa se refiere a que le ha secuestrado a usted en el interior de ese robot y ha tratado de matarnos a Camila y a mí, ¿no? (decir la verdad)",
    correct: "narration_correct_18",
    fail: "narration_fail_18",
    time: 30,
    points: 50
  },
  {
    id: "narration_correct_18",
    type: "narration",
    text: `<span id="teniente-bald">Teniente Bald:</span> Em… Bueno, sí es cierto que la situación se ha torcido un poco, pero...
    (...)
    ¡Habéis estado realmente fantásticos, reclutas! Incluido tú, jefe de los trols.`,
    img: "/storyImages1/teniente-bald.png"
  },
  {
    id: "narration_fail_18",
    type: "narration",
    text: `<span id="teniente-bald">Teniente Bald:</span> Por supuesto, absolutamente magnífica. Tan magnífica que no vale la pena informar a mis superiores de estos sucesos.
    Y cambiando de tema, habéis estado realmente fantásticos, reclutas. Incluido tú, jefe de los trols.`,
    img: "/storyImages1/teniente-bald.png"
  },

  /*ESCENA FINAL*/
  {
    type: "narration",
    text: `Trundle da un mazazo al aire y por poco decapita al teniente.
    <span id="trundle">Trundle:</span> ¡No es jefe de los trols! ¡Es REY de los trols! ¡REY!
    <span id="teniente-bald">Teniente Bald:</span> Lo siento, lo siento. En fin… los tres formáis un equipo fantástico.
    Con efecto inmediato, ya formáis parte de los Multiverse Patrols. ¡Enhorabuena!`,
  },
  {
    type: "narration",
    text: `Y así, {{name}} y Camila completaron su entrenamiento y se convirtieron en patrullas del multiverso.
    Trundle también se unió a ellos, con la promesa de poder machacar muchas cosas con su maza.
    Chat Gepetto logró escapar de las instalaciones, y ahora planea su conquista del multiverso,
    mientras trata de resolver la compleja ecuación matemática de '5 + 2'.`,
  }
];