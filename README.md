# Amigo Secreto - Desafío ONE

Este proyecto es una aplicación web diseñada para sortear aleatoriamente un "Amigo Secreto" de una lista de participantes. Es una herramienta sencilla y divertida para organizar intercambios de regalos u otras actividades de amigo secreto. Este proyecto fue desarrollado como un desafío para el programa Oracle Next Education (ONE) con el objetivo de mejorar mis habilidades en lógica de programación.

## Características

*   **Añadir Amigos:** Permite agregar fácilmente nombres a la lista de participantes.
*   **Prevención de Duplicados:** Evita que se agregue el mismo nombre varias veces.
*   **Validación de Entrada:** Asegura que el usuario ingrese un nombre válido (no vacío, no un número).
*   **Sorteo Aleatorio:** Selecciona aleatoriamente un amigo secreto de la lista.
*   **Actualización Dinámica:** La lista de amigos se actualiza dinámicamente y el campo de entrada se limpia después de cada adición.
*   **Manejo de Lista Vacía:** Muestra una alerta si el usuario intenta sortear un amigo secreto con la lista vacía.
*   **Retroalimentación Visual:** El resultado del sorteo se muestra al usuario de manera clara.
*   **Diseño Atractivo:** Posee un diseño cuidado que facilita su uso.

## Cómo Usar

1.  **Abre el archivo `index.html`** en tu navegador web.
2.  **Ingresa los nombres:** En el campo de entrada, escribe el nombre de un participante y haz clic en el botón "Añadir".
3.  **Repite:** Repite el paso 2 para cada participante que desees incluir.
4.  **Sortear:** Una vez que hayas añadido todos los nombres, haz clic en el botón "Sortear amigo".
5.  **Ver el resultado:** El "amigo secreto" seleccionado aleatoriamente se mostrará en la pantalla.

## Estructura del Proyecto

*   `index.html`: El archivo HTML principal que proporciona la estructura y la interfaz de usuario de la aplicación.
*   `app.js`: El archivo JavaScript que contiene la lógica para agregar nombres, validar la entrada y realizar el sorteo aleatorio.
*   `style.css`: Contiene las reglas CSS para el diseño y la presentación de la aplicación web.
*   `assets/amigo-secreto.png`: Imagen del logotipo del proyecto.
*   `assets/play_circle_outline.png`: Icono para el botón "Sortear amigo".

## Desglose del Código

### `app.js`

*   **`listaAmigos`:** Un array que almacena los nombres de los participantes.
*   **`contenedorResultado`:** Una referencia al elemento HTML donde se muestra el resultado del sorteo.
*   **`agregarAmigo()`:** Esta función:
    *   Obtiene el nombre del campo de entrada.
    *   Valida la entrada (no vacío, no un duplicado, no un número).
    *   Añade el nombre al array `listaAmigos`.
    *   Limpia el campo de entrada.
    *   Añade el nombre a la lista que se muestra en la página.
    * Limpia el contenedor de resultado.
*   **`sortearAmigo()`:** Esta función:
    *   Comprueba si el array `listaAmigos` está vacío.
    *   Si no está vacío, selecciona aleatoriamente un nombre del array.
    *   Muestra el resultado en el elemento `contenedorResultado`.

### `index.html`

*   **Campo de Entrada (input):** Permite al usuario ingresar el nombre de un participante.
*   **Botón "Añadir":** Activa la función `agregarAmigo()`.
*   **Lista de Nombres:** Muestra la lista de nombres añadidos.
* **Lista de resultado**: Muestra el nombre sorteado.
*   **Botón "Sortear amigo":** Activa la función `sortearAmigo()`.

## Mejoras Potenciales

*   **Sorteo de Pares:** En lugar de sortear un único "amigo secreto", sortear pares de "quien da" y "quien recibe".
*   **Persistencia de Datos:** Almacenar la lista de nombres en `localStorage` para que se mantenga entre sesiones.
*   **Envío por Correo Electrónico:** Permitir a los usuarios ingresar direcciones de correo electrónico y enviar los resultados a cada participante por email.
*   **Diseño Responsivo:** Adaptar la aplicación al tamaño de la pantalla, para que se vea bien en dispositivos móviles y de escritorio.
*   **Mejoras de Estilo:**  Mejorar la parte estética del proyecto, con nuevos colores y tipografias.
* **Accesibilidad**: Adaptar el proyecto a las mejores practicas de accesibilidad.

## Instalación

¡No se requiere instalación! Simplemente abre el archivo `index.html` en tu navegador.

## Créditos

*   Este proyecto fue creado por [Tu Nombre/Usuario de GitHub] como un desafío para el programa Oracle Next Education (ONE).
* He usado imágenes de icones8 para ilustrar el proyecto.

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia [Especificar Licencia, p. ej., Licencia MIT].

## Contacto

Si tienes alguna pregunta o sugerencia, puedes contactarme en: [Tu correo electrónico/Tu perfil de GitHub]
