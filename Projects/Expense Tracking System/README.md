# Expense Tracking Backend

## Overview

Expense Tracking Backend is a full-featured backend system that provides secure user management, budget request workflows, expense tracking with receipt image support, and liquidation reporting. The API implements JWT-based authentication, role-based access control, and a complete OTP-based password recovery system.

## Features

### Secure Authentication & Authorization

JWT token-based authentication with 5-hour token validity
Role-based access control (Admin/User roles)
OTP-based password reset via email
Stateless session management


### User Management

Admin-controlled user creation and deletion
User profile management with profile picture upload
Password reset workflows for both admins and users
Comprehensive user details with related expense and budget data

### Budget Request System

Submit budget requests with detailed expense item breakdowns
Multi-category budget planning with quantity and unit pricing
Admin approval/denial workflow with remarks
Automatic total calculation from expense items
Status tracking (Pending, Approved, Denied)


### Expense Tracking

Create, update, and delete expense records
Support for receipt image uploads (up to 500MB)
Category-based expense organization
Transaction date tracking with timezone support (Asia/Manila)
Expense distribution analytics by category


### Liquidation Reports

Comprehensive expense summaries linked to approved budgets
Detailed expense breakdowns with receipt images
Status management (Pending, Liquidated, Denied)
Remaining balance calculations


### Data Analytics

Total expense amount calculations
Expense distribution by category
Recent transaction retrieval
Top expenses ranking

## Tech Stack

### Backend Framework

Spring Boot 3.4.0 - Core application framework
Java 17 - Programming language
Maven - Dependency management

### Database

PostgreSQL - Relational database for persistent storage
Spring Data JPA - Database abstraction and ORM
Hibernate - JPA implementation

### Security

Spring Security - Authentication and authorization
JWT (JSON Web Tokens) - Token-based authentication
BCrypt - Password encryption

### Email Services

Spring Boot Mail - Email functionality for OTP delivery
Gmail SMTP - Email server integration

### Documentation

Springdoc OpenAPI 2.8.13 - Swagger/OpenAPI documentation
Swagger UI - Interactive API documentation interface

### Additional Libraries

Lombok - Reduce boilerplate code
Jackson - JSON processing
iText7 - PDF generation capabilities

## Installation
### Prerequisites

Java Development Kit (JDK) 17 or higher
PostgreSQL 13 or higher
Maven 3.6 or higher
Git


Git: For cloning the repository



Server Access: For deployment (e.g., AWS, DigitalOcean, or local server with public IP)

### Installation

### Clone the Repository
git clone <repository-url>
cd Expense Tracking Backend

### Database Setup

Install and start PostgreSQL
Create a new database:
CREATE DATABASE expense_tracker;

## Swagger Documentation
http://127.0.0.1:8080/swagger-ui.html

## API Architecture
### Security Flow

User authenticates via /api/auth/sign-in
Server validates credentials and generates JWT token
Client includes JWT in Authorization: Bearer <token> header for subsequent requests
JwtFilter intercepts requests and validates tokens
Spring Security enforces role-based access control

### Role-Based Access Control

ROLE_ADMIN: Full access to user management, budget approvals, expense oversight
ROLE_USER: Access to personal expenses, budget requests, profile management

### Database Schema
Key entities:

User: Core user information with relationships to expenses, budgets, and password resets
Expense: Individual expense records with category, amount, and receipt images
SubmittedBudget: Budget requests with status and associated expense items
ExpenseItem: Detailed line items within budget requests
ForgotPassword: OTP-based password reset tracking

### Code Quality

Clean Architecture: Separation of concerns with distinct controller, service, and repository layers
RESTful Design: Follows REST principles with proper HTTP methods and status codes
Error Handling: Comprehensive exception handling with meaningful error messages
Input Validation: Bean validation and manual checks for data integrity
Security First: JWT authentication, password encryption, role-based access control

### Scalability Considerations

Stateless Authentication: JWT tokens enable horizontal scaling
Database Optimization: JPA query optimization with fetch strategies
File Upload Support: Handles large files (up to 500MB) for receipt images
Configurable Properties: Externalized configuration for easy deployment

### Documentation

Swagger Integration: Self-documenting API with interactive testing
Clear Endpoint Structure: Logical resource organization
Detailed Comments: Well-commented code for maintainability