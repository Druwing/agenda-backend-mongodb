ssh usuario@servidor_remoto "curl -X POST http://localhost:3000/agenda \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer SEU_JWT_TOKEN_AQUI' \
  -d '{\"title\": \"Reunião importante\", \"description\": \"Discutir projeto novo\", \"date\": \"2023-12-15T14:00:00Z\", \"location\": \"Sala de reuniões 1\"}'"