# Spotify Web Player

Ce projet est un lecteur multimédia en ligne exploitant une API REST pour afficher et gérer des albums, artistes et genres. Développé en React, il permet aux utilisateurs de parcourir et d'écouter des albums via un lecteur audio intégré.

## Équipe

Projet réalisé par un groupe de deux étudiants.

## Technologies utilisées

- React (JavaScript)
- HTML / CSS
- API REST
- JSON
- Docker (pour l'API)

## Fonctionnalités

- Liste des albums (avec pagination)
- Détails d’un album (pistes avec lecteur audio)
- Liste des artistes
- Recherche d’albums, genres et artistes
- Page d’accueil avec albums aléatoires
- Page de connexion/login
- Page de profil utilisateur

## Installation

### 1. Lancer l’API via Docker
 docker-compose up --build
### 2. Installer les dépendances du backend
- npm install express
- npm install mysql2
- npm install cors
- npm install bcrypt

### 3. Lancer le backend
 npm start

### 4. Lancer le projet frontend
 npm run dev
