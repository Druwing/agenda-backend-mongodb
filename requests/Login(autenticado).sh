ssh usuario@servidor_remoto "curl -X POST http://localhost:3000/auth/login \
  -H 'Content-Type: application/json' \
  -d '{\"email\": \"user@example.com\", \"password\": \"password123\"}'"