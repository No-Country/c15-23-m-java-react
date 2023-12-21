# Servicio de Productos

- [Introducción](#introducción)
- [Características](#características)
- [Configuración Local](#configuración-local)
  - [Pre-requisitos](#pre-requisitos)
  - [Ejecución Local](#ejecución-local)
- [Documentación de la API](#documentación-de-la-api)
- [Manejo de Errores](#manejo-de-errores)
- [Script de Inicialización: wait-for-it.sh](#script-de-inicialización-wait-for-itsh)
- [Contribución](#contribución)
- [Contacto](#contacto)
- [Volver al README Principal en Español](../README.ESP.BackEnd.md)
- [Servicio de Productos Desplegado](https://product-service-uvfl.onrender.com)

## Introducción

El Servicio de Productos es un microservicio diseñado para manejar todos los aspectos relacionados con la gestión de productos en nuestra aplicación. Este servicio es responsable de crear, actualizar, recuperar y eliminar información de productos, asegurando que el catálogo de productos esté actualizado y refleje con precisión nuestra oferta.

## Características

- **Operaciones CRUD**: Capacidad completa para crear, leer, actualizar y eliminar entradas de productos.
- **Gestión de Categorías**: Capacidad de categorizar productos para una mejor organización y recuperación.
- **Gestión de Precios y Stock**: Manejar precios y niveles de stock de los productos para reflejar la disponibilidad y estrategia de precios actual.
- **Funcionalidad de Búsqueda**: Proporcionar capacidades de búsqueda para localizar productos rápidamente por varios criterios como nombre, categoría, etc.

## Configuración Local

### Pre-requisitos

- Maven
- JDK de Java 11 o más reciente
- Docker
- PostgreSQL

### Ejecución Local

Para configurar y ejecutar el Servicio de Productos localmente, sigue estos pasos:

1. Navega al directorio del servicio donde se encuentra el archivo `pom.xml`.
2. Ejecuta `mvn clean package` para construir la aplicación.
3. Muévete al directorio raíz donde se encuentra el archivo Docker Compose.
4. Ejecuta `docker-compose build product-service` para construir la imagen de Docker.
5. Inicia el servicio utilizando `docker-compose up product-service`.

Alternativamente, puedes configurar la aplicación utilizando un archivo `application.product-service.properties` o `application.product-service.yml` y conectar a una base de datos PostgreSQL local con el esquema apropiado.

## Documentación de la API

Los puntos finales de la API para el Servicio de Productos están documentados y se pueden acceder a través de nuestra interfaz de Swagger UI. Consulta el siguiente enlace para un uso detallado de la API:

[Documentación de Swagger para el Servicio de Productos](https://product-service-uvfl.onrender.com)

## Manejo de Errores (En desarrollo)

El Servicio de Productos incluye un manejo de errores integral para garantizar la fiabilidad y facilitar la depuración. Cuenta con un manejador global de excepciones que cubre posibles problemas como:

- `ProductNotFoundException`
- `InvalidProductException`
- `StockLevelException`
- `PriceUpdateException`

Para registros detallados y resolución de problemas, por favor consulta los registros de la aplicación o contacta al equipo de soporte.

## Script de Inicialización: wait-for-it.sh

El script `wait-for-it.sh` es una utilidad que asegura que el Servicio de Productos no inicie antes de que sus dependencias (servidor Eureka y PostgreSQL) estén disponibles. Esto es lo que realiza:

1. Verifica si el servicio se está ejecutando en Render y, de ser así, omite las verificaciones y arranca el servicio.
2. Si no está en Render, utiliza `curl` para comprobar el estado del servidor Eureka en intervalos regulares, reintentando hasta que esté disponible o se alcance un número máximo de intentos.
3. Espera a que la base de datos PostgreSQL esté lista utilizando `nc` (netcat), asegurándose de que la base de datos acepte conexiones antes de iniciar el servicio.
4. Después de confirmar que tanto Eureka como PostgreSQL están operativos, ejecuta el comando de Java para iniciar el Servicio de Productos con los parámetros de memoria especificados.

## Contribución

Actualmente, el Servicio de Productos no está abierto a contribuciones externas. Sin embargo, los miembros internos del equipo pueden contribuir siguiendo el proceso estándar de solicitud de extracción. Asegúrate de adherirte a los estándares de codificación e incluir pruebas unitarias con tus presentaciones.

## Contacto

Para cualquier consulta o soporte relacionado con el Servicio de Productos, por favor contactese con nosotros.
