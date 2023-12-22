# c15-23-m-java-react

# ShopSwiftly Ecommerce

- [Introducción y Visión General](#introducción-y-visión-general)
- [¿Qué es una Plataforma SaaS?](#qué-es-una-plataforma-saas)
  - [Accesibilidad](#accesibilidad)
  - [Costo-Efectividad](#costo-efectividad)
  - [Escalabilidad](#escalabilidad)
  - [Actualizaciones Automáticas](#actualizaciones-automáticas)
- [Puntos de Venta Únicos](#puntos-de-venta-únicos)
- [Demo](#demo)
- [Estado](#estado)
- [Tecnologías](#tecnologias)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [QA](#qa)
- [Dependencias Frontend](#dependencias-frontend)
- [Dependencias Backend](#dependencias-backend)
- [Uso de la App-Web](#uso-de-la-app-web)
- [Integrantes](#integrantes)
- [Documentación Adicional](#documentación-adicional)

To read this document in English, click [here](README.EN.md).

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

## Demo

[Demo ShopSwiftly](https://c15-23-m-java-react.vercel.app/home)

## Estado

El estado del proyecto se encuentra como un MVP robusto. Actualmente soporta el uso desde dispositivos móviles, tablets, laptops y PCs.
Contiene una Arquitectura de microservicios, que permite el desarrollo ágil y fácil despliegue de nuevas funcionalidades.

## Tecnologias

- Frontend:
  **HTML + CSS**
  **Javascript**
  **React.Js**
  **Vite Js**

- Backend:
  **Java**
  **Spring Boot**
  **Postgres SQL**

- QA:
  **Google Sheets**
  **Google Docs**

## Dependencias Frontend:

- "bootstrap" - Utilizado en su mayoría para dar estilos a ciertos componentes.
- "react-bootstrap" - Se utilizan varios componentes ya predefinidos.
- "styled-components" - Se uso en la gran mayoría para los estilos personalizados de los componentes.
- "sweetalert2" - Para dar mensajes a los usuarios con estilos mas detallados mejorando la UX.
- "swiper" - Utilizado para el carousel de categorías.
- "react-loader-spinner" - Para efectos de loading al conectar a la BD y dar un mejora de UX.
- "react-router-dom" y "react-dom" - Para establecer el enrutamiento y la navegación.
- "react-icons" - Libreria de donde se obtienen todos los iconos.

## Dependencias Backend:

- "Maven" - Como gestor de dependencias

  - Eureka Client
  - Spring Cloud Config Server
  - Spring Boot Starter Web, incluye Tomcat y spring-webmvc
  - Spring Boot Actuator, para confirmar la salud de los endpoints
  - Spring Boot Starter Data JPA
  - Spring Boot Starter Security
  - Open API, para documentar las APIs

  - JUnit, para realizar test unit
  - Spring Boot Starter Test para hacer las pruebas
  - PostgreSQL connector

- "Docker" - Como container con su plugin

## Uso de la app-web

1. Clonar el repositorio desde GitHub.

```bash
   git clone https://github.com/No-Country/c15-23-m-java-react
```

2. Asegurarse que se está en la carpeta correcta para instala las dependencias.

```bash
    npm install
```

3. Ejecuta el proyecto.

```bash
    npm run dev
```

## Integrantes:

- Alan Rios Front-end developer Tech Leader
- Diego Herrera Prado Front-end developer
- Mariana Rausch Front-end developer
- Federico Blanco Front-end developer
- Kevin Joel Noviello Front-end developer
- Juan Pablo Godoy Back-end developer Tech Leader
- Lucas Von Elm Back-end developer
- Leon Asturizaga Back-end developer
- Diego Persi Analista QA

## Documentación Adicional

Si desea leer con mas detalle información del Backend, lo invitamos a seguir uno de estos links:

- [Documentación Backend en Inglés](back/README.EN.BackEnd.md)
- [Documentación Backend en Español](back/README.ESP.BackEnd.md)

Si desea leer con mas detalle información del Frontend, lo invitamos a seguir uno de estos links:

- [Documentación del Frontend](front/README.ESP.FrontEnd.md)
