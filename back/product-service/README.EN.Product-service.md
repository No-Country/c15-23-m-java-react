# Product Service

- [Introduction](#introduction)
- [Features](#features)
- [Local Setup](#local-setup)
  - [Prerequisites](#prerequisites)
  - [Running Locally](#running-locally)
- [API Documentation](#api-documentation)
- [Error Handling](#error-handling)
- [Initialization Script: wait-for-it.sh](#initialization-script-wait-for-itsh)
- [Contribution](#contribution)
- [Contact](#contact)
- [Back to Main English README](../README.EN.BackEnd.md)
- [Deployed Product Service](https://product-service-uvfl.onrender.com)

## Introduction

The Product Service is a microservice designed to handle all aspects related to product management in our application. This service is responsible for creating, updating, retrieving, and deleting product information, ensuring that the product catalog is up-to-date and accurately reflects our offerings.

## Features

- **CRUD Operations**: Full create, read, update, and delete capabilities for product entries.
- **Category Management**: Ability to categorize products for better organization and retrieval.
- **Price and Stock Management**: Manage prices and stock levels of products to reflect current availability and pricing strategy.
- **Search Functionality**: Provide search capabilities to locate products quickly by various criteria like name, category, etc.

## Local Setup

### Prerequisites

- Maven
- Java JDK 11 or newer
- Docker
- PostgreSQL

### Running Locally

To set up and run the Product Service locally, follow these steps:

1. Navigate to the service's directory where the `pom.xml` file is located.
2. Run `mvn clean package` to build the application.
3. Move to the root directory where the Docker Compose file is located.
4. Execute `docker-compose build product-service` to build the Docker image.
5. Launch the service using `docker-compose up product-service`.

Alternatively, you can configure the application using a `application.product-service.properties` or `application.product-service.yml` file and connect to a local PostgreSQL database with the appropriate schema.

## API Documentation

The API endpoints for the Product Service are documented and can be accessed through our Swagger UI interface. Please refer to the following link for detailed API usage:

[Swagger Documentation for Product Service](https://product-service-uvfl.onrender.com)

## Error Handling(in development)

The Product Service includes comprehensive error handling to ensure reliability and ease of debugging. It features a global exception handler that covers potential issues such as:

- `ProductNotFoundException`
- `InvalidProductException`
- `StockLevelException`
- `PriceUpdateException`

For detailed logs and troubleshooting, please refer to the application logs or contact the support team.

## Initialization Script: wait-for-it.sh

The `wait-for-it.sh` script is a utility that ensures the Product Service does not start before its dependencies (Eureka server and PostgreSQL) are available. Here's what it does:

1. Checks if the service is running on Render and, if so, bypasses the checks and starts the service.
2. If not on Render, it uses `curl` to check the health of the Eureka server at regular intervals, retrying until it's available or a maximum number of attempts is reached.
3. It waits for the PostgreSQL database to be ready using `nc` (netcat), ensuring that the database is accepting connections before starting the service.
4. After both Eureka and PostgreSQL are confirmed to be up, it executes the Java command to start the Product Service with specified memory parameters.

## Contribution

Currently, the Product Service is not open for external contribution. However, internal team members can contribute by following the standard pull request process. Please ensure to adhere to the coding standards and include unit tests with your submissions.

## Contact

For any queries or support related to the Product Service, please reach out to us.
