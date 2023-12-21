# Transaction Service

- [Introduction](#introduction)
- [Key Features and Functionalities](#key-features-and-functionalities)
- [Setup and Local Development](#setup-and-local-development)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Understanding TransactionService](#understanding-transactionservice)
  - [Core Responsibilities](#core-responsibilities)
  - [Key Methods](#key-methods)
  - [Methodology](#methodology)
  - [Logging](#logging)
  - [Transactional Integrity](#transactional-integrity)
- [The Script wait-for-it.sh](#the-script-wait-for-itsh)
- [Back to Main English README](../README.EN.BackEnd.md)
- [Deployed Transaction Service](https://transaction-service-y71o.onrender.com)

## Introduction

The transaction-service microservice is responsible for handling transactions within our application. It ensures that products and users are accurately linked with each purchase, managing the acquisition of multiple products in a single transaction.

## Key Features and Functionalities

- CRUD operations for transactions: Create, Read, Update, and Delete transactions.
- Linking users and products with transactions.
- Recording and handling purchases of multiple products.
- Creating tickets of your buy (currently in development)

## Setup and Local Development

To set up and run transaction-service locally:

Ensure you have Maven and Docker installed on your system, or Docker running with WSL on Windows.

Navigate to the directory containing the service's pom.xml and run:

```bash
 mvn clean package
```

This will create the necessary JAR package. Then, return to the directory where the Docker compose file is located and execute:

```bash
docker-compose build user-service
docker-compose up user-service
```

For custom configurations:

Create application.transaction-service.properties or application.transaction-service.yml.

Set up a PostgreSQL database with a schema named transactions_db.

Configure environmental variables to point to the database and run:

```bash
mvn spring-boot:run
```

## API Endpoints

All API endpoints are documented and can be explored via our Swagger UI:
[Transaction Service Swagger Documentation.](https://transaction-service-y71o.onrender.com/swagger-ui/index.html)

## Error Handling

Errors are managed by a GlobalExceptionHandler that includes:

TransactionNotFoundException: Thrown when a requested transaction cannot be found.
TransactionNotFoundException: Thrown when a requested product cannot be found.
UserNotFoundException: Thrown when a requested user cannot be found.

# Understanding TransactionService

The TransactionService class plays a pivotal role in managing transactional data within our application. It encapsulates the logic for creating, updating, and maintaining the lifecycle of transactions.

## Core Responsibilities

- Creation of Transactions: It handles the instantiation of new transactions, ensuring all the necessary details like user information and transaction items are accurately associated.
- Updating Transaction Details: It is responsible for updating existing transactions, such as changing transaction status or updating the list of items included in a transaction.
- Data Integrity and Validation: The service verifies that each transaction has a valid user ID and that the user exists within the system before proceeding to update transaction details.
- Integration with Other Services: TransactionService integrates with UserService and ProductService to fetch detailed user information and product details required for transactions.

## Key Methods

- createTransaction(): Accepts a TransactionDto object, converts it to a TransactionEntity, updates transaction details with user and item data, and persists it in the database.
- updateTransaction(): Updates the transaction details and persists the changes in the database.
- changeTransactionStatus(): Changes the status of an existing transaction and saves the updated transaction.
- deleteTransaction(): Removes a transaction from the database using its ID.

## Methodology

When a transaction is created or updated, the following steps are performed:

1. User Validation: The service first validates the existence of the user associated with the transaction using the UserService.
2. User Detailing: Upon validation, it then populates the transaction with the user's username and email.
3. Item Association: Each item DTO is converted into a TransactionItem entity, which involves:
   - Fetching the latest product details from ProductService.
   - Setting the product ID, quantity, and price into the TransactionItem.
4. Data Persistence: The transaction, along with its items, is then saved to the database.

## Logging

TransactionService uses Logger to log important information and errors throughout the transaction processing phases. This aids in monitoring the health of the service and debugging issues when they arise.

## Transactional Integrity

The @Transactional annotation ensures that the entire process of creating a transaction is done atomically. If any step fails, all changes are rolled back to maintain data consistency.

# The Script wait-for-it.sh

The wait-for-it.sh script is utilized to ensure that dependent services are fully operational before starting the main application. This is particularly useful in this type of orchestrated environments where services may start up at different times.

Here's a step-by-step explanation of the script:

- Environment Check: It first determines the running environment. By default, it sets the environment to 'local' if not specified.
- Render Check: If the application is running on Render, it bypasses the wait checks and starts the Java application immediately.
- Service URLs and Parameters: It sets up the URLs for the Eureka server and the database host, along with the port number.
- Service Availability Loop: It then enters a loop to check the availability of the Eureka server and the PostgreSQL database.
- HTTP Service Check: For HTTP services like Eureka, it makes a health check request and waits until a 200 OK response is received.
- Database Service Check: For the PostgreSQL database, it attempts to connect to the specified host and port. It retries several times (as defined by max_attempts) before giving up.
- Service Wait Logic: The script waits a specific interval between each attempt to connect to the services.
- Application Start: Once all services are confirmed to be up and running, it executes the command to start the Java application.
