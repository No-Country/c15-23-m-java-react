# Transaction Service TODOs

## Overview

This document lists the pending tasks for the transaction-service module. Team members should update this file as tasks are picked up or completed.

## Tasks

### Combine Duplicate Products in Request

- [ ] Implement logic to merge duplicate `productId` entries in the shopping cart.

### Validate Shopping Cart Payload on Server

- [ ] Ensure the `montoTotal` is correctly calculated on the server side.

### Ensure Frontend Sends Correct Payload Format

- [ ] Adjust frontend logic to accumulate product quantities correctly.

### Secure Checkout Process

- [ ] Validate the final `montoTotal` at checkout to prevent tampering.

### Update API Documentation

- [ ] Update the API documentation to reflect new payload handling.

### Handle Product Availability

- [ ] Check and enforce product availability during cart processing.

### Review and Refactor

- [ ] Review the implemented logic for potential refactoring.

## Notes

- Team members are encouraged to add comments or suggestions next to each task.
- Please mark tasks with a check (`[x]`) when completed.
