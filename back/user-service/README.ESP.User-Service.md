# Servicio de Usuarios

- [Introducción](#introducción)
- [Características y Funcionalidades Clave](#características-y-funcionalidades-clave)
- [Instrucciones de Configuración Local](#instrucciones-de-configuración-local)
- [Puntos de Extremo de API](#puntos-de-extremo-de-api)
- [Manejo de Errores](#manejo-de-errores)
- [Script de Inicialización: wait-for-it.sh](#script-de-inicialización-wait-for-itsh)
- [Contribución](#contribución)
- [Contacto](#contacto)
- [Volver al README Principal en Español](../README.ESP.BackEnd.md)
- [Servicio de Usuarios Desplegado](https://shopswiftly-user-service-com.onrender.com)

## Introducción

El user-service es un componente esencial de nuestra arquitectura de aplicación, encargado de toda la lógica de negocio relacionada con la gestión de usuarios. Este servicio facilita la creación de usuarios y maneja los estados de inicio de sesión a través de la generación de tokens. Utiliza Spring Security para encriptar contraseñas y asignar roles, específicamente 'USER' y 'ADMIN'. El rol 'ADMIN' proporciona acceso a un panel administrativo capaz de realizar operaciones CRUD en todos los microservicios relacionados con la lógica de negocio.

## Características y Funcionalidades Clave

Operaciones CRUD de Usuario completas.
Asignación y gestión de roles.
Integración de inicio de sesión social (actualmente en desarrollo).

## Instrucciones de Configuración Local

Los requisitos previos incluyen Maven, Linux con Docker o Docker ejecutándose en WSL.

Para configurar user-service localmente:

Navega al directorio que contiene el pom.xml hijo y ejecuta:

```bash
 mvn clean package
```

Este comando construye el paquete .jar.

Regresa al directorio raíz (donde se encuentra el pom.xml padre) y ejecuta:

```bash
docker-compose build user-service
docker-compose up user-service
```

Alternativamente:

- Crea archivos application.users-service.properties o application.user-service.yml. Asegúrate de que no entren en conflicto con la configuración del padre o con el application.yml perteneciente a la aplicación.
- Configura una base de datos PostgreSQL local con un esquema users_db.
- Configura las variables de entorno para apuntar a la base de datos.
- Ejecuta el servicio utilizando:

```bash
mvn spring-boot:run
```

## Puntos de Extremo de API

Los puntos de extremo de la API están documentados y se pueden explorar a través de nuestro Swagger UI:
[Documentación Swagger del User Service](https://shopswiftly-user-service-com.onrender.com/swagger-ui/index.html)

Manejo de Errores
Se ha implementado un GlobalExceptionHandler para manejar las excepciones de manera elegante, incluyendo UserNotFoundException para registros de usuarios faltantes.

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
