echo "API Script initialized..."
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest # Baixando imagem do Redis no Docker
cd nestjs-api # Acessando o diretório da API criada com o Framework NestJS
npm install # Instalação dos pacotes de dependências
npm run start:dev # Inicializando a API
