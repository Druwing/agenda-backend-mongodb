#!/bin/bash

# Wrong password
curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "wrongPassword"
}'

# Invalid email
curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "invalid-email",
  "password": "securePassword123"
}'

# Missing fields
curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com"
}'