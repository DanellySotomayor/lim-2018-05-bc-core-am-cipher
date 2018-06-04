# Proyecto 1: EL SECRETO DE CÉSAR
### Preámbulo
Para poder intercambiar mensajes secretos, dos personas usan "El Secreto de César" de manera sencilla: el primero cifra el mensaje con la aplicación y le envía el mensaje copiado por WhatsApp a la segunda persona. 
La segunda persona ingresa a la aplicación y, con el número de posiciones que le dio la primera persona, logra descifrar el mensaje y conocer el secreto.

![interfaz](https://raw.githubusercontent.com/DanellySotomayor/lim-2018-05-bc-core-am-cipher/master/src/img/interfaz-secreto-cesar.jpg "Interfaz")

### Introducción

El primer proyecto solicitado en Laboratoria es una aplicación para poder cifrar y descifrar mensajes utilizando el conocido [Cifrado César](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar "conoce más sobre el Cifrado César"), método de cifrado por sustitución en que una letra de un texto es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

### Objetivos
* Diseñar un producto pensando en los usuarios.
* Construir una interfaz.
* Escuchar eventos básicos del DOM.
* Escribir lógica para llevar a cabo el cifado/descifrado.
* Tests unitarios básicos para comprobar (y documentar) dicha lógica.
* Manipulación del DOM para mostrar (escribir) los resultados.

### Conociendo al usuario
* Se realizó una lluvia de ideas en el squad para poder conocer más detalles de los usuarios de la aplicación. Adicional a ello, se consultó con posibles usuarios del rango de edades 24 a 28 años sobre sus preferencias en colores, diseño y uso.
* El usuario a utilizar la aplicación se caracteriza por ser un usuario joven, entre 16 a 28 años, que comparte sus experiencias con sus amigos y le gusta la tecnología.

### Planteando la interfaz
* Al ser un usuario joven, busca acceder a sus aplicaciones de manera rápida, por lo que se planteó una  interfaz sencilla e intuitiva.
* Cuenta con un cuadro para colocar el número de espacios a usar para cifrar el mensaje, un cuadro de texto para ingresar los textos a cifrar y descifrar, tres botones (Cifrar, Descifrar y Limpiar) y un espacio donde muestra el resultado.
* Asimismo, cuenta con 3 botones que se usarán según el objetivo del usuario: Codificar, Decodificar y Resetear.
* El color oscuro del fondo se utilizó debido a la consulta previa que se realizó, en donde posibles usuarios indicaron que usarían con mayor frecuencia esta aplicación en horarios nocturnos. Asimismo, se utilizó el color Violeta, por ser el color del año 2018 según Pantone.

### Modo de uso
**Cifrado:**
* Se ingresa a la página https://danellysotomayor.github.io/lim-2018-05-bc-core-am-cipher/src
* El usuario escribe o pega el mensaje en el cuadro de texto.
* Escribe el número de posiciones que desea mover para cifrar el mensaje (offset).
* Presiona el botón "Cifrar" y podrá ver su resultado en la parte inferior. Luego de ello, puede copiarlo y compartirlo con su amigos.
**Descifrado:**
* Se ingresa a la página https://danellysotomayor.github.io/lim-2018-05-bc-core-am-cipher/src
* El usuario pega el mensaje cifrado en el cuadro de texto.
* Escribe el número de posiciones (offset) que previamente le ha indicado la persona que le mandó el mensaje cifrado.
* Presiona el botón "Descifrar" y podrá descubrir el mensaje original.
**Limpiar:**
* En caso se cometa algún error o se quiera borrar el texto ingresado en un solo paso, se debe presionar el botón "Limpiar".

