# Multiverse Patrols V1.0

Multiverse Patrols es un juego narrativo interactivo creado con React. En él, te sumergirás en el papel de un valiente candidato, que tendrá que superar peligrosos desafíos para salvar el multiverso.
El juego incluye:

- Sistema de niveles elaborados (por ahora, solo está disponible el nivel 1).
- Desafíos variados (utilizando distintos tipo de formularios).
- Llamada a API para las recompensas del juego.

## Futuras funciones

Esta es la versión de lanzamiento, pero estamos trabajando en montones de cosas nuevas para las siguientes versiones.
- Más niveles (toda la temporada 1).
- Más tipos de desafíos.
- Contenido secreto en los niveles.
- Mejoras varias de código.

**Nota:** Si tienes alguna sugerencia de mejora o funciones nuevas que te gustaría que implementásemos, escríbenos a alex.gil95sal@gmail.com. ¡Tus sugerencias son valiosas! :)


## Recursos

Multiverse Patrols utiliza distintas herramientas alucinantes para funcionar:

- [Visual Studio Code] - El mejor editor de código.
- [React] - Para la estructura y los componentes del juego.
- [Framer Motion] - Animación para las transiciones entre páginas.
- [Sass] - Para los estilos del juego.
- [Vite] - Herramienta de apoyo para el desarrollo del juego.

## Instalación

Para iniciar la aplicación, ejecuta los siguientes comandos:

```sh
cd multiversepatrols
npm run dev
```


## ESTRUCTURA

### PÁGINAS

Estas son todas las páginas que puedes navegar en el juego:

#### *Menú Principal (MainMenu)*

  *Descripción*: la home del juego, desde la que puedes iniciarlo o leer las instrucciones.
  *Ruta:* [http://localhost:3000]
  
#### *Cómo Jugar (HowToPlay)*

  *Descripción*: Aquí encontrarás las instrucciones del juego.
  *Ruta:* [http://localhost:3000/how-to-play]
  
#### *Selector de Niveles (LevelSelector)*

  *Descripción*: Aquí podrás seleccionar la temporada y el nivel al que quieres jugar.
  *Ruta:* [http://localhost:3000/level-selector]
  
#### *Crear Personaje (CreatePlayer)*

  *Descripción*: Aquí crearás tu personaje y deseo antes de iniciar el nivel.
  *Ruta:* [http://localhost:3000/create-player]
  
#### *Página de la Historia (StoryPage)*

  *Descripción*: En esta página se cargarán todos los módulos del nivel.
  *Ruta:* [http://localhost:3000/story-page(id)]
  
#### *Fin del Juego (EndGame)*

  *Descripción*: Aquí finaliza cada nivel. Se mostrará tu puntuación y tu deseo (si has conseguido al menos 600 puntos).
  *Ruta:* [http://localhost:3000/end-game]

### COMPONENTES

El juego utiliza una serie de componentes para hacer funcionar los niveles:

- **Narration**  
  *Descripción*: Maneja la lógica de los elementos narrativos del juego.

- **Challenge**  
  *Descripción*: Maneja la lógica y llamada de los desafíos del juego.

- **ScoreBoard**  
  *Descripción*: Maneja la puntuación durante el nivel.

- **Timer**  
  *Descripción*: Maneja el tiempo disponible para cada desafío.

- **Player Context**  
  *Descripción*: Guarda el nombre del jugador y su deseo en cada nivel.

- **Story Data(id)**  
  *Descripción*: Guarda la estructura de cada nivel.

- **Drag Drop Challenge**
  *Descripción*: Maneja la lógica de los desafíos "agarrar y soltar" del juego.

- **Math Challenge**  
  *Descripción*: Maneja la lógica de los desafíos de matemáticas del juego.

- **Multiple Choice Challenge**  
  *Descripción*: Maneja la lógica de los desafíos multi-opción del juego.

- **Number Guess Challenge**  
  *Descripción*: Maneja la lógica de los desafíos de adivinar números del juego.

- **Text Challenge**  
  *Descripción*: Maneja la lógica de los desafíos de escritura libre del juego.

- **Word Challenge**  
  *Descripción*: Maneja la lógica de los desafíos de adivinar palabras del juego.

## FAQ'S

#### Quiero jugarlo en dispositivo móvil ####

¡Genial! En ese caso, te recomendamos que utilices la pantalla en horizontal para jugar los niveles. Nuestro css está optimizado para pantallas horizontales.

#### ¿Qué ocurre si no consigo multicréditos suficientes?

Con independencia de tu desempeño en el nivel, siempre lo superarás. La diferencia está en que, si consigues menos de 600 multicréditos, no se ejecutará la API que convertirá tu deseo en realidad (en una imagen).

#### ¿Puedo diseñar mis propios niveles?

El diseño de niveles es complejo, y requiere de una serie de normas para desarrollarse. Si tienes alguna idea para nuevos niveles, te animamos a escribirnos para que las tengamos en cuenta en futuras actualizaciones :)
Puedes contactarnos en: alex.gil95sal@gmail.com

## Licencias

MIT
Historia y juego creado por Alex Gil {[KingCoder]}.
El autor no posee los derechos de las marcas comerciales utilizadas en el juego.
Multiverse Patrols es un juego sin ánimo de lucro.


   [Visual Studio Code]: <https://code.visualstudio.com>
   [React]: <https://es.react.dev>
   [Framer Motion]: <https://www.npmjs.com/package/framer-motion>
   [Sass]: <https://sass-lang.com>
   [Vite]: <https://vite.dev>
   [KingCoder]: <https://github.com/AlexKingCoder>
