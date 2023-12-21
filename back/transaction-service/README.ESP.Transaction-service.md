# Servicio de Transacciones

- [Introducción](#introducción)
- [Características y Funcionalidades Clave](#características-y-funcionalidades-clave)
- [Configuración y Desarrollo Local](#configuración-y-desarrollo-local)
- [Puntos de Extremo de la API](#puntos-de-extremo-de-la-api)
- [Manejo de Errores](#manejo-de-errores)
- [Entendiendo TransactionService](#entendiendo-transactionservice)
  - [Responsabilidades Principales](#responsabilidades-principales)
  - [Métodos Clave](#métodos-clave)
  - [Metodología](#metodología)
  - [Registro de Actividades](#registro-de-actividades)
  - [Integridad Transaccional](#integridad-transaccional)
- [El Script wait-for-it.sh](#el-script-wait-for-itsh)
- [Volver al README Principal en Español](../README.ESP.BackEnd.md)
- [Servicio de Transacciones Desplegado](https://transaction-service-y71o.onrender.com)

## Introducción

El microservicio transaction-service se encarga de gestionar las transacciones dentro de nuestra aplicación. Asegura que los productos y los usuarios estén correctamente vinculados con cada compra, administrando la adquisición de múltiples productos en una única transacción.

## Características y Funcionalidades Clave

Operaciones CRUD para transacciones: Crear, Leer, Actualizar y Eliminar transacciones.
Vinculación de usuarios y productos con transacciones.
Registro y manejo de compras de múltiples productos.

## Configuración y Desarrollo Local

Para configurar y ejecutar transaction-service localmente:

Asegúrese de tener Maven y Docker instalados en su sistema, o Docker ejecutándose con WSL en Windows.

Navegue al directorio que contiene el pom.xml del servicio y ejecute:

```bash
 mvn clean package
```

Esto creará el paquete JAR necesario. Luego, regrese al directorio donde se encuentra el archivo Docker compose y ejecute:

```bash
docker-compose build user-service
docker-compose up user-service
```

Para configuraciones personalizadas:

Cree application.transaction-service.properties o application.transaction-service.yml.

Configure una base de datos PostgreSQL con un esquema llamado transactions_db.

Configure las variables de entorno para apuntar a la base de datos y ejecute:

```bash
mvn spring-boot:run
```

## Puntos de Extremo de la API

Todos los puntos de extremo de la API están documentados y se pueden explorar a través de nuestro Swagger UI:
[Documentación Swagger del Transaction Service.](https://transaction-service-y71o.onrender.com/swagger-ui/index.html)

## Manejo de Errores

Los errores son gestionados por un GlobalExceptionHandler que incluye:

TransactionNotFoundException: Se lanza cuando no se puede encontrar una transacción solicitada.
TransactionNotFoundException: Se lanza cuando no se puede encontar el producto solicitado.
UserNotFoundException: Se lanza cuando no se puede encontrar el usuario solicitado.

# Entendiendo TransactionService

La clase TransactionService desempeña un papel crucial en la gestión de datos transaccionales dentro de nuestra aplicación. Encapsula la lógica para la creación, actualización y mantenimiento del ciclo de vida de las transacciones.

## Responsabilidades Principales

- Creación de Transacciones: Maneja la instanciación de nuevas transacciones, asegurando que todos los detalles necesarios como la información del usuario y los artículos de la transacción estén asociados con precisión.
- Actualización de Detalles de la Transacción: Es responsable de actualizar transacciones existentes, como cambiar el estado de la transacción o actualizar la lista de artículos incluidos en una transacción.
- Integridad y Validación de Datos: El servicio verifica que cada transacción tenga un ID de usuario válido y que el usuario exista dentro del sistema antes de proceder a actualizar los detalles de la transacción.
- Integración con Otros Servicios: TransactionService se integra con UserService y ProductService para obtener información detallada del usuario y detalles del producto requeridos para las transacciones.

## Métodos Clave

- createTransaction(): Acepta un objeto TransactionDto, lo convierte en un TransactionEntity, actualiza los detalles de la transacción con datos de usuario y artículos, y lo persiste en la base de datos.
- updateTransaction(): Actualiza los detalles de la transacción y persiste los cambios en la base de datos.
- changeTransactionStatus(): Cambia el estado de una transacción existente y guarda la transacción actualizada.
- deleteTransaction(): Elimina una transacción de la base de datos utilizando su ID.

## Metodología

Cuando se crea o actualiza una transacción, se realizan los siguientes pasos:

1. Validación del Usuario: El servicio primero valida la existencia del usuario asociado con la transacción utilizando el UserService.
2. Detallando al Usuario: Una vez validado, luego llena la transacción con el nombre de usuario y el correo electrónico del usuario.
3. Asociación de Artículos: Cada DTO de artículo se convierte en una entidad TransactionItem, lo que implica:
   - Obtener los detalles más recientes del producto de ProductService.
   - Establecer el ID del producto, la cantidad y el precio en el TransactionItem.
4. Persistencia de Datos: La transacción, junto con sus artículos, se guarda en la base de datos.

## Registro de Actividades

TransactionService utiliza Logger para registrar información importante y errores durante las fases de procesamiento de la transacción. Esto ayuda en el monitoreo de la salud del servicio y la depuración de problemas cuando surgen.

## Integridad Transaccional

La anotación @Transactional asegura que todo el proceso de creación de una transacción se realiza de manera atómica. Si algún paso falla, todos los cambios se revierten para mantener la consistencia de los datos.

# El Script wait-for-it.sh

El script wait-for-it.sh se utiliza para asegurar que los servicios dependientes estén completamente operativos antes de iniciar la aplicación principal. Esto es particularmente útil en este tipo de en entornos orquestados donde los servicios pueden iniciar en diferentes momentos.

He aquí una explicación paso a paso del script:

- Verificación del Entorno: Primero determina el entorno de ejecución. Por defecto, establece el entorno como 'local' si no se especifica.
- Verificación de Render: Si la aplicación se está ejecutando en Render, omite las comprobaciones de espera e inicia la aplicación Java inmediatamente.
- URLs de Servicios y Parámetros: Configura las URLs para el servidor Eureka y el host de la base de datos, junto con el número de puerto.
- Bucle de Disponibilidad de Servicio: Luego entra en un bucle para comprobar la disponibilidad del servidor Eureka y la base de datos PostgreSQL.
- Comprobación de Servicio HTTP: Para servicios HTTP como Eureka, realiza una solicitud de verificación de salud y espera hasta recibir una respuesta 200 OK.
- Comprobación de Servicio de Base de Datos: Para la base de datos PostgreSQL, intenta conectarse al host y puerto especificados. Reintenta varias veces (según lo definido por max_attempts) antes de renunciar.
- Lógica de Espera de Servicio: El script espera un intervalo específico entre cada intento de conexión a los servicios.
- Inicio de la Aplicación: Una vez que se confirma que todos los servicios están en funcionamiento, ejecuta el comando para iniciar la aplicación Java.
