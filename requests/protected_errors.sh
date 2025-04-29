#!/bin/bash

# No token
curl -X GET http://localhost:3000/api/protected

# Invalid token
curl -X GET http://localhost:3000/api/protected \
-H "Authorization: Bearer invalid.token.here"

# Expired token (you'll need to generate an expired token first)
curl -X GET http://localhost:3000/api/protected \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjYwY2Q4YzU0YzQwMDAxODA4YzY4YSIsImlhdCI6MTY5MzgwNzYwMCwiZXhwIjoxNjkzODEwNjAwfQ.2z3z3z3z3z3z3z3z3z3z3z3z3z3z3z3z3z3z3z3"