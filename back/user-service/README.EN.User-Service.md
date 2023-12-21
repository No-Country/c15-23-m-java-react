# User Service

- [Introduction](#introduction)
- [Key Features and Functionalities](#key-features-and-functionalities)
- [Local Setup Instructions](#local-setup-instructions)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Initialization Script: wait-for-it.sh](#initialization-script-wait-for-itsh)
- [Contribution](#contribution)
- [Contact](#contact)
- [Back to Main English README](../README.EN.BackEnd.md)
- [Deployed User Service](https://shopswiftly-user-service-com.onrender.com)

## Introduction

The user-service is a critical component of our application architecture, handling all business logic related to user management. This service facilitates user creation and manages login states through token generation. It employs Spring Security to encrypt passwords and assign roles, specifically 'USER' and 'ADMIN'. The 'ADMIN' role provides access to an administrative panel capable of performing any CRUD operations across all business logic-related microservices.

## Key Features and Functionalities

Complete User CRUD (Create, Read, Update, Delete) operations.
Role assignment and management.
Social Login integration (currently under development).

## Local Setup Instructions

Prerequisites include Maven, Linux with Docker, or Docker running on WSL.

To set up user-service locally:

Navigate to the directory containing the child pom.xml and run:

```bash
 mvn clean package
```

This command builds the .jar package.

Return to the root directory (where the parent pom.xml is located) and run:

```bash
docker-compose build user-service
docker-compose up user-service
```

Alternatively:

- Create application.users-service.properties or application.user-service.yml files. Ensure they do not conflict with the parent configuration or the application.yml in the resource file.
- Set up a local PostgreSQL database with a users_db schema.
- Configure the environment variables to point to the database.
- Execute the service using:

```bash
mvn spring-boot:run
```

## API Endpoints

The API endpoints are documented and can be explored through our Swagger UI:
[User Service Swagger Documentation](https://shopswiftly-user-service-com.onrender.com/swagger-ui/index.html)

## Error Handling

A GlobalExceptionHandler is in place to handle exceptions gracefully, including UserNotFoundException for missing user records.

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
