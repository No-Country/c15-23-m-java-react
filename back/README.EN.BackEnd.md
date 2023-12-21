# ShopSwiftly SaaS Platform

- [Introduction and Overview](#introduction-and-overview)
- [What is a SaaS Platform?](#what-is-a-saas-platform)
- [Unique Selling Points](#unique-selling-points)
  - [API Gateway](#api-gateway)
  - [Auth Service](#auth-service)
  - [Config Server](#config-server)
  - [Eureka Server](#eureka-server)
  - [Core Business Logic Services](#core-business-logic-services)
- [Database Design](#database-design)
- [Containerization and Environment Configuration](#containerization-and-environment-configuration)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
  - [Local Setup](#local-setup)
  - [Prerequisites](#prerequisites)
- [CI/CD Pipeline](#cicd-pipeline)
  - [Specific Checks](#specific-checks)
- [Error Handling](#error-handling)
- [Initialization Script: init-db.sh](#initialization-script-init-dbsh)
  - [Executing on Linux](#executing-on-linux)
  - [Executing with WSL](#executing-with-wsl)
- [Additional Resources](#additional-resources)
- [Deployed Microservices](#deployed-microservices)
- [Contact the Devs](#contact-the-devs)

  To read this document in Spanish, click [here](README.ESP.BackEnd.md).

## Introduction and Overview

## What is a SaaS Platform?

SaaS, or Software as a Service, is a delivery model for software applications where the software is hosted in the cloud and accessed via the internet. It's a subscription-based model where users pay to use the software without the need for installation, maintenance, or high upfront costs. SaaS platforms are highly scalable, which means they can grow with a business, and they're accessible from anywhere with an internet connection.

The key advantages of a SaaS platform include:

- **Accessibility**: Users can access the software from any device with an internet connection.
- **Cost-Effectiveness**: Reduces the need for heavy upfront investments in IT infrastructure and ongoing maintenance.
- **Scalability**: Easily scales to accommodate growing user numbers and changing business needs.
- **Automatic Updates**: The software provider manages updates and upgrades, ensuring users always have access to the latest features and security updates.

In the context of ShopSwiftly, our SaaS platform provides a customizable e-commerce solution, enabling clients to deploy and manage their online stores with ease and efficiency.

## Unique Selling Points

Scalable Monorepo: Simplifies scaling through a Docker-compose administered monorepo.
Agile and Cost-Effective: Facilitates agile development practices and minimizes long-term costs.
SSL Termination and Request Aggregation: Enhances security and performance through the API Gateway.

### Microservices Description

API Gateway
The API Gateway is the primary entry point for all client requests, directing them to the appropriate service and managing SSL termination, request aggregation, circuit breaking, and rollbacks.

### Auth Service

This service handles authentication across the platform, issuing and validating JWT tokens to ensure secure access to business logic services.

### Config Server

A centralized configuration manager, the Config Server provides microservices with necessary configurations without hard-coded settings.

### Eureka Server

Serving as the service discovery registry, it enables microservices to locate and communicate with one another dynamically, while also taking care of load balancing.

## Core Business Logic Services

- Product Service: Manages product information and inventory.
- User Service: Handles user profiles and authentication details.
- Transaction Service: Processes and records transactions.

## Database Design

Each microservice operates with its own PostgreSQL schema, ensuring data encapsulation and independence.

## Containerization and Environment Configuration

Docker containers encapsulate microservices, streamlining deployment, scaling, and environment management. Different .env files (dev and prod) allow for flexible environment-specific configurations.

## Repository Structure

The repository adopts a monorepo strategy, with all microservices housed within a single repository. This approach simplifies version control and inter-service coordination.

## Getting Started

### Local Setup

Navigate to the root directory containing the Docker-compose files and the parent POM.
Set the .env.dev and .env.prod files according to the required environment.
Compile the project using Maven with the command:

```bash
 mvn clean package
```

Build and start the services with Docker-compose:

```bash
docker-compose up --build
```

For individual microservices, use:

```bash
docker-compose build <service-name>
```

```bash
docker-compose up <service-name>
```

## Prerequisites

- Maven
- Linux environment with Docker or Docker on WSL

## CI/CD Pipeline

Our CI/CD pipeline is managed via GitHub Actions and oversees the integrity of deployments to DockerHub. Any push to your branch triggers automatic checks that determine the permissibility of merging into the main branch. Once merged, the DockerHub image is updated. Manual deployment from DockerHub to Render is then required.

### Specific Checks

1. Java Maven compilation and package building are successful.
2. Docker-compose correctly generates images.
3. Secrets are appropriately applied.
4. Services are deployed in the correct sequence.

## Error Handling

The pipeline is equipped with error management protocols that halt the process at the first detected error. Logs are made available immediately for quick troubleshooting.

## Initialization Script: init-db.sh

The `init-db.sh` script sets up the initial database schemas necessary for the microservices to function. It runs the following actions:

1. Authenticates as the PostgreSQL user.
2. Creates separate schemas for user, product, and transaction data within the PostgreSQL database.

### Executing on Linux

To execute the script on a Linux environment, navigate to the script's directory and run:

```bash
bash init-db.sh
```

### Executing with WSL

For execution within Windows Subsystem for Linux (WSL), open your WSL terminal, navigate to the script's directory, and execute:

```bash
bash init-db.sh
```

Ensure that PostgreSQL is installed and running in your environment before executing the script.

## Additional Resources

To read the documentation of a specific microservice, select one:

- [User Service Documentation (English)](user-service/README.EN.User-Service.md)
- [Product Service Documentation (English)](product-service/README.EN.Product-service.md)
- [Transaction Service Documentation (English)](transaction-service/Readme.EN.Transaction-service.md)

## Deployed Microservices

Here are the links to all our deployed microservices:

- [Transaction Service](https://transaction-service-y71o.onrender.com)
- [Product Service](https://product-service-uvfl.onrender.com)
- [API Gateway](https://api-gateway-c1y5.onrender.com)
- [User Service](https://shopswiftly-user-service-com.onrender.com)
- [Eureka Server](https://eureka-server-2wjn.onrender.com)

## Contact the Devs:

### Teach Lead, Architect and DevOps: Juan Pablo Godoy

- Contact: Godoypablojuan@gmail.com
- GitHub: @DocisJP
- Linkedin: [Juan Pablo Godoy](https://www.linkedin.com/in/godoypablojuan/)

### Developer: Lucas Von Elm

- Contact: lucasvonelm@gmail.com
- GitHub: @xlucasve
- Linkedin: [Lucas Von Elm](https://www.linkedin.com/in/lucasvonelm/)

### Developer: Leon Asturizaga

- Contact: leonasturizaga@gmail.com
- Github: @leonasturizaga
- Linkedin: [Leon Asturizaga](https://www.linkedin.com/in/leon-asturizaga-94a80377/)
