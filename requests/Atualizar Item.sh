ssh usuario@servidor_remoto "curl -X PUT http://localhost:3000/agenda/507f1f77bcf86cd799439011 \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer SEU_JWT_TOKEN_AQUI' \
  -d '{\"title\": \"Reunião atualizada\", \"isCompleted\": true}'"