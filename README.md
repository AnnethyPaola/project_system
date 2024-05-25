¡Hola! Adjunto la entrega de mi prueba técnica, un sistema de gestión de tareas que emplea servicios y JWT para la autenticación.

# Pasos Iniciales:

Asegúrate de clonar el repositorio desde la rama principal y, luego, ejecuta npm i para instalar todas las dependencias necesarias.
Procedimiento para Compilar el Proyecto:
Como usuario de Mac o Windows, estos son los comandos que uso para ejecutar el proyecto:
* Desarrollo (Dev): Utilizo ng s (o sudo ng s en Mac) para lanzar el proyecto en el entorno de desarrollo.
* Entorno QA: Para ejecutar el proyecto en el entorno de QA, empleo npm run start:qa.
* Producción: Para compilar el proyecto en una versión lista para producción, utilizo ng build --configuration=production.

## Organización de la aplicación:

En cuanto a la estructura del proyecto, lo organicé en tres módulos principales: core, features y shared.
El módulo core es como el corazón de la aplicación. Ahí es donde coloqué los componentes que se usan en varios lugares de la app. Por ejemplo, el navbar (la barra de navegación) y la página de excepciones (que muestra errores) están aquí.
En la carpeta shared, es donde guardé todo lo que necesitamos para hacer funcionar la lógica de la aplicación. Es decir, los pipes (filtros), los enums (enumeraciones), los servicios, las interfaces, guards y otros elementos que se usan en toda la app.
Por último, en el módulo features, es donde se encuentran las vistas específicas de la aplicación. Aquí es donde manejamos la autenticación del sistema, la gestión de usuarios y la gestión de tareas. Cada una de estas secciones tiene su propio módulo y su propio sistema de navegación para que los usuarios puedan moverse fácilmente entre ellas.
## Code scaffolding

## Usuarios para iniciar sesión en la aplicación:

* Usuario 1:
    * Correo electrónico: juan.perez@gmail.com
    * Contraseña: Juan2024!
* Usuario 2:
    * Correo electrónico: maria.gomez@gmail.com
    * Contraseña: Maria@123
      
Si necesitas probar con más usuarios, puedes encontrar una lista adicional en la carpeta assets/data dentro del proyecto. Con estos usuarios, podrás ingresar al sistema y explorar todas las funcionalidades de la aplicación.

## Test: 

Para asegurarnos de que nuestra aplicación funcione correctamente, hemos implementado una sólida estructura de pruebas. Vamos a echar un vistazo a cómo están organizadas estas pruebas:
Core:
* exception.component.spec.ts
* navbar.component.spec.ts
Features:
* Pages:
    * users-list.component.spec.ts
    * tasks-list.component.spec.ts
    * home.component.spec.ts
    * pages.component.spec.ts
    * login.component.spec.ts
Shared:
* Pipes:
    * tasks-level.pipe.spec.ts
    * tasks-status.pipe.spec.ts
    * users-status.pipe.spec.ts

* Services:
    * users.service.spec.ts
    * tasks.service.spec.ts
    * auth.service.spec.ts

Para ejecutar todas las pruebas a la vez, simplemente usamos el comando npm run test. Si necesitas ejecutar una prueba específica, solo agrega el nombre del archivo después del comando. Con esta estructura organizada y pruebas detalladas, estamos seguros de la calidad de nuestro código y la funcionalidad de nuestra aplicación. (En total son 14 archivos de pruebas y 33 pruebas unitarias).
