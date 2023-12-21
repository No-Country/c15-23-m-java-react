# Plataforma SaaS ShopSwiftly

- [Introducción y Visión General](#introducción-y-visión-general)
- [¿Qué es una Plataforma SaaS?](#qué-es-una-plataforma-saas)
- [Puntos de Venta Únicos](#puntos-de-venta-únicos)
  - [API Gateway](#api-gateway)
  - [Auth Service](#auth-service)
  - [Config Server](#config-server)
  - [Eureka Server](#eureka-server)
  - [Servicios de Lógica Empresarial Core](#servicios-de-lógica-empresarial-core)
- [Diseño de Bases de Datos](#diseño-de-bases-de-datos)
- [Contenedorización y Configuración del Entorno](#contenedorización-y-configuración-del-entorno)
- [Estructura del Repositorio](#estructura-del-repositorio)
- [Primeros Pasos](#primeros-pasos)
  - [Configuración Local](#configuración-local)
  - [Pre-requisitos](#pre-requisitos)
- [Uso](#uso)
- [Pipeline de CI/CD](#pipeline-de-cicd)
  - [Verificaciones Específicas](#verificaciones-específicas)
- [Manejo de Errores](#manejo-de-errores)
- [Script de Inicialización: init-db.sh](#script-de-inicialización-init-dbsh)
  - [Ejecución en Linux](#ejecución-en-linux)
  - [Ejecución con WSL](#ejecución-con-wsl)
- [Recursos Adicionales](#recursos-adicionales)
- [Microservicios Desplegados](#microservicios-desplegados)
- [Conctacar con los Desarrolladores](#conctacar-con-los-desarrolladores)

Para leer este documento en inglés, haga clic [aquí](README.EN.BackEnd.md).

## Introducción y Visión General

## ¿Qué es una Plataforma SaaS?

SaaS, o Software como Servicio, es un modelo de entrega de aplicaciones de software donde el software se aloja en la nube y se accede a través de internet. Es un modelo basado en suscripción donde los usuarios pagan por usar el software sin necesidad de instalación, mantenimiento ni altos costos iniciales. Las plataformas SaaS son altamente escalables, lo que significa que pueden crecer con un negocio y son accesibles desde cualquier lugar con una conexión a internet.

Las ventajas clave de una plataforma SaaS incluyen:

- **Accesibilidad**: Los usuarios pueden acceder al software desde cualquier dispositivo con conexión a internet.
- **Costo-Efectividad**: Reduce la necesidad de inversiones iniciales grandes en infraestructura de TI y mantenimiento continuo.
- **Escalabilidad**: Se escala fácilmente para acomodar el crecimiento de usuarios y las necesidades cambiantes del negocio.
- **Actualizaciones Automáticas**: El proveedor de software gestiona las actualizaciones y mejoras, asegurando que los usuarios siempre tengan acceso a las últimas funcionalidades y actualizaciones de seguridad.

En el contexto de ShopSwiftly, nuestra plataforma SaaS proporciona una solución de comercio electrónico personalizable, permitiendo a los clientes desplegar y gestionar sus tiendas en línea con facilidad y eficiencia.

## Puntos de Venta Únicos

Monorepo Escalable: Simplifica el escalado a través de un monorepo administrado por Docker-compose.

Ágil y Económico: Facilita las prácticas de desarrollo ágil y minimiza los costos a largo plazo.

Terminación SSL y Agregación de Solicitudes: Mejora la seguridad y el rendimiento a través de la API Gateway.

## Descripción de Microservicios

### API Gateway

La API Gateway es el punto de entrada principal para todas las solicitudes de los clientes, dirigiéndolas al servicio adecuado y gestionando la terminación SSL, la agregación de solicitudes, la interrupción de circuitos y las reversiones.

### Auth Service

Este servicio maneja la autenticación en toda la plataforma, emitiendo y validando tokens JWT para asegurar el acceso seguro a los servicios de lógica empresarial.

### Config Server

Un gestor centralizado de configuración, el Config Server proporciona a los microservicios las configuraciones necesarias sin configuraciones codificadas.

### Eureka Server

Actuando como el registro de descubrimiento de servicios, permite que los microservicios localicen y se comuniquen entre sí de manera dinámica, además maneja el balanceo de carga.

### Servicios de Lógica Empresarial Core

- Product Service: Gestiona la información y el inventario de productos.
- User Service: Maneja los perfiles de usuario y los detalles de autenticación.
- Transaction Service: Procesa y registra las transacciones.

## Diseño de Bases de Datos

Cada microservicio opera con su propio esquema en PostgreSQL, asegurando la encapsulación de datos y la independencia.

## Contenedorización y Configuración del Entorno

Los contenedores Docker encapsulan los microservicios, simplificando la implementación, el escalado y la gestión del entorno. Diferentes archivos .env (dev y prod) permiten configuraciones flexibles específicas del entorno.

## Estructura del Repositorio

El repositorio adopta una estrategia de monorepo, con todos los microservicios alojados dentro de un único repositorio. Este enfoque simplifica el control de versiones y la coordinación entre servicios.

## Primeros Pasos

### Configuración Local

Navega al directorio raíz que contiene los archivos Docker-compose y el POM padre.
Establece los archivos .env.dev y .env.prod de acuerdo con el entorno requerido.
Compila el proyecto utilizando Maven con el comando:

```bash
 mvn clean package
```

Construye e inicia los servicios con Docker-compose:

```bash
docker-compose up --build
```

Para microservicios individuales, usa:

```bash
docker-compose build <service-name>
```

```bash
docker-compose up <service-name>
```

## Pre-requisitos

Maven
Entorno Linux con Docker o Docker sobre WSL

## Uso

Aunque la plataforma no está abierta para colaboración externa, ofrece una API completa documentada dentro de cada microservicio.

### CI/CD Pipeline

Nuestro pipeline de CI/CD es gestionado a través de GitHub Actions y supervisa la integridad de los despliegues a DockerHub. Cualquier cambio en su rama desencadena verificaciones automáticas que determinan la posibilidad de fusionarse con la rama principal. Una vez fusionado, la imagen en DockerHub se actualiza. Luego se requiere un despliegue manual desde DockerHub a Render.

### Verificaciones Específicas

1. La compilación y creación de paquetes de Java Maven son exitosas.
2. Docker-compose genera correctamente las imágenes.
3. Los secretos se aplican de manera adecuada.
4. Los servicios se despliegan en la secuencia correcta.

## Manejo de Errores

El pipeline está equipado con protocolos de gestión de errores que detienen el proceso al detectar el primer error. Los registros están disponibles inmediatamente para una rápida resolución de problemas.

## Script de Inicialización: init-db.sh

El script `init-db.sh` prepara los esquemas de base de datos iniciales necesarios para el funcionamiento de los microservicios. Ejecuta las siguientes acciones:

1. Se autentica como el usuario de PostgreSQL.
2. Crea esquemas separados para los datos de usuarios, productos y transacciones dentro de la base de datos PostgreSQL.

### Ejecución en Linux

Para ejecutar el script en un entorno Linux, navegue al directorio del script y ejecute:

```bash
bash init-db.sh
```

### Ejecución con WSL

Para la ejecución dentro del Subsistema de Windows para Linux (WSL), abra su terminal de WSL, navegue al directorio del script y ejecute:

```bash
bash init-db.sh
```

Asegúrese de que PostgreSQL esté instalado y en funcionamiento en su entorno antes de ejecutar el script.

## Recursos Adicionales

Para leer la documentación especifica de un microservicio, seleccione uno de estos links:

- [Documentación del Servicio de Usuarios (Español)](user-service/README.ESP.User-Service.md)
- [Documentación del Servicio de Productos (Español)](product-service/README.ESP.Product-service.md)
- [Documentación del Servicio de Transacciones (Español)](transaction-service/README.ESP.Transaction-service.md)

## Microservicios Desplegados

Aquí están los enlaces a todos nuestros microservicios desplegados:

- [Servicio de Transacciones](https://transaction-service-y71o.onrender.com)
- [Servicio de Productos](https://product-service-uvfl.onrender.com)
- [API Gateway](https://api-gateway-c1y5.onrender.com)
- [Servicio de Usuarios](https://shopswiftly-user-service-com.onrender.com)
- [Servidor Eureka](https://eureka-server-2wjn.onrender.com)

## Conctacar con los Desarrolladores

### Teach Lead, Arquitecto y DevOps: Juan Pablo Godoy

- Contacto: Godoypablojuan@gmail.com
- GitHub: @DocisJP
- Linkedin: [Juan Pablo Godoy](https://www.linkedin.com/in/godoypablojuan/)

### Developer: Lucas Von Elm

- Contacto: lucasvonelm@gmail.com
- GitHub: @xlucasve
- Linkedin: [Lucas Von Elm](https://www.linkedin.com/in/lucasvonelm/)

### Developer: Leon Asturizaga

- Contacto: leonasturizaga@gmail.com
- Github: @leonasturizaga
- Linkedin: [Leon Asturizaga](https://www.linkedin.com/in/leon-asturizaga-94a80377/)
