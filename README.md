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
- [Node.js] - Para el entorno de construcción de Javascript.
- [Bcrypt] - Encriptación potente para proteger a los usuarios.
- [Cloudinary] - Servidor para almacenar nuestras imágenes.
- [Dotenv] - Para la carga de variables .env.
- [Express] - Nuestro framework de trabajo de backend.
- [Jsonwebtoken] - Clave en la identificación de nuestros usuarios.
- [Mongoose] - Para crear nuestros modelos en la base de datos.
- [Multer] - Para habilitar peticiones con multipart y la carga de archivos adjuntos.


## Instalación

Ice Dream requiere [Node.js](https://nodejs.org/) v18+ para ejecutarse correctamente.

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
  *Ruta:* [http://localhost:3000/end-game(id)]

### COMPONENTES

El juego utiliza una serie de componentes para hacer funcionar los niveles:
