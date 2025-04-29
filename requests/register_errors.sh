#!/bin/bash

# Email already taken
curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123"
}'

# Invalid email
curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "name": "John Doe",
  "email": "invalid-email",
  "password": "securePassword123"
}'

# Short password
curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "name": "John Doe",
  "email": "john.doe2@example.com",
  "password": "short"
}'

# Missing fields
curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "name": "John Doe"
}'