# c15-23-m-java-react

# ShopSwiftly Ecommerce

- [Introduction and Overview](#introduction-and-overview)
- [What is a SaaS Platform?](#what-is-a-saas-platform)
  - [Accessibility](#accessibility)
  - [Cost-Effectiveness](#cost-effectiveness)
  - [Scalability](#scalability)
  - [Automatic Updates](#automatic-updates)
- [Unique Selling Points](#unique-selling-points)
- [Demo](#demo)
- [Status](#status)
- [Technologies](#technologies)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [QA](#qa)
- [Frontend Dependencies](#frontend-dependencies)
- [Backend Dependencies](#backend-dependencies)
- [Web App Usage](#web-app-usage)
- [Team Members](#team-members)
- [Additional Documentation](#additional-documentation)

Para leer este documento en Español, haga clic [aquí](README.md).

## Introduction and Overview

## What is a SaaS Platform?

SaaS, or Software as a Service, is a software application delivery model where software is hosted in the cloud and accessed via the internet. It's a subscription-based model where users pay to use the software without needing installation, maintenance, or high initial costs. SaaS platforms are highly scalable, meaning they can grow with a business and are accessible from anywhere with an internet connection.

Key advantages of a SaaS platform include:

- **Accessibility**: Users can access the software from any device with an internet connection.
- **Cost-Effectiveness**: Reduces the need for large initial investments in IT infrastructure and ongoing maintenance.
- **Scalability**: Easily scales to accommodate user growth and changing business needs.
- **Automatic Updates**: The software provider manages updates and improvements, ensuring users always have access to the latest features and security updates.

In the context of ShopSwiftly, our SaaS platform provides a customizable e-commerce solution, enabling clients to deploy and manage their online stores with ease and efficiency.

## Unique Selling Points

Scalable Monorepo: Simplifies scaling through a Docker-compose managed monorepo.

Agile and Cost-Effective: Facilitates agile development practices and minimizes long-term costs.

SSL Termination and Request Aggregation: Enhances security and performance through the API Gateway.

## Demo

[ShopSwiftly Demo](https://c15-23-m-java-react.vercel.app/home)

## Status

The project is currently in a robust MVP stage, supporting use on mobile devices, tablets, laptops, and PCs.
It features a Microservices Architecture, allowing agile development and easy deployment of new functionalities.

## Technologies

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
  ***

## Frontend Dependencies:

- "bootstrap" - Mostly used for styling certain components.
- "react-bootstrap" - Various predefined components are used.
- "styled-components" - Used extensively for custom styles of components.
- "sweetalert2" - For delivering user messages with more detailed styles, improving UX.
- "swiper" - Used for the categories carousel.
- "react-loader-spinner" - For loading effects when connecting to the DB, enhancing UX.
- "react-router-dom" and "react-dom" - For routing and navigation.
- "react-icons" - Library where all icons are obtained.

## Backend Dependencies:

- "Maven" - As a dependency manager

  - Eureka Client
  - Spring Cloud Config Server
  - Spring Boot Starter Web, includes Tomcat and spring-webmvc
  - Spring Boot Actuator, to confirm health of endpoints
  - Spring Boot Starter Data JPA
  - Spring Boot Starter Security
  - Open API, to document APIs
  - JUnit, for unit testing
  - Spring Boot Starter Test for testing
  - PostgreSQL connector

- "Docker" - As a container with its plugin

## Web App Usage

1. Clone the repository from GitHub.

```bash
   git clone https://github.com/No-Country/c15-23-m-java-react
```

2. Make sure you are in the correct folder to install dependencies.

```bash
    npm install
```

3. Run the project.

```bash
    npm run dev
```

## Team Members:

- Alan Rios Front-end developer Tech Leader
- Diego Herrera Prado Front-end developer
- Mariana Rausch Front-end developer
- Federico Blanco Front-end developer
- Kevin Joel Noviello Front-end developer
- Juan Pablo Godoy Back-end developer Tech Leader
- Lucas Von Elm Back-end developer
- Leon Asturizaga Back-end developer
- Diego Persi QA Analyst

## Additional Documentation

To read more detailed information about the Backend, please follow one of these links:

- [Backend Documentation in English](back/README.EN.BackEnd.md)
- [Backend Documentation in Spanish](back/README.ESP.BackEnd.md)

To read more detailed information about the Frontend, please follow this link:

- [Frontend Documentation](front/README.ESP.FrontEnd.md)
