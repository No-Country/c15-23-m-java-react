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

**ShopSwiftly** is an e-commerce system specifically designed for small and medium-sized businesses. It provides merchants with an intuitive and attractive platform to expand their reach, allowing them to sell their products online. The application is offered as a Software as a Service (SaaS) through a subscription model.

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

![App Screenshot](/shop-swiftly-demo.gif)

## Proyect Status

The project is currently in a robust MVP stage, supporting use on mobile devices, tablets, laptops, and PCs.
It features a Microservices Architecture, allowing agile development and easy deployment of new functionalities.

## Technologies

- Frontend:

  - **Javascript**
  - **React.Js**
  - **Styled components**
  - **Vite Js**

- Backend:

  - **Java**
  - **Spring Boot**
  - **Postgres SQL**

- QA:
  - **Google Sheets**
  - **Google Docs**
  - [Link to the folder that contains the tests made to the project](https://drive.google.com/drive/folders/1kILhvs33RAEJF1ffFSXsqXbweCiu95Ct?usp=drive_link)

## Frontend Dependencies:

- "bootstrap": Used mostly to style certain components.
- "react-bootstrap": Several pre-defined components are used.
- "styled-components": Used for the majority of custom component styling.
- "sweetalert2": Provides users with styled messages, enhancing UX.
- "swiper": Used for the category carousel.
- "react-loader-spinner": For loading effects when connecting to the database, improving UX.
- "react-router-dom" and "react-dom": For setting up routing and navigation.
- "react-icons": Library from which all icons are obtained.

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

## Contributors:

- [Alan Rios](https://www.linkedin.com/in/alan-rios/) : Front-end developer Tech Leader
- [Diego Herrera](https://www.linkedin.com/in/diego-hp/) : Front-end developer
- [Kevin Joel Noviello](https://www.linkedin.com/in/kevinjoelnoviello/) : Front-end developer
- [Mariana Rausch](https://www.linkedin.com/in/marianarausch/) : Front-end developer
- Federico Blanco: Front-end developer
- Juan Pablo Godoy: Back-end developer Tech Leader
- Lucas Von Elm: Back-end developer
- Leon Asturizaga: Back-end developer
- Diego Persi: Analista QA

## Additional Documentation

To read more detailed information about the Backend, please follow one of these links:

- [Backend Documentation in English](back/README.EN.BackEnd.md)
- [Backend Documentation in Spanish](back/README.ESP.BackEnd.md)

To read more detailed information about the Frontend, please follow this link:

- [Frontend Documentation (Spanish)](front/front-ecommerce/README.ESP.front.md)

- [Frontend Documentation (English)](front/front-ecommerce/README.EN.front.md)
