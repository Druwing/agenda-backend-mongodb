#!/bin/bash

# First login to get token
response=$(curl -s -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}')

token=$(echo $response | jq -r '.data.token')

# Access protected route with token
curl -X GET http://localhost:3000/api/protected \
-H "Authorization: Bearer $token"