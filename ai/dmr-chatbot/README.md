# README

Three-tier AI chatbot app. 

- Frontend: Remix app
- Backend: FastAPI
- Model server: Docker Model Runner exposing OpenAI-compatible API

This repo only contains the Compose file and `.env` file. 

The Compose file pulls the frontend and backend images from Docker Hub and defines the local DMR instance. 

The `.env` file species the model to use and the lcoation of the OpenAI-compatible model server (Docker Model Runner). 



