# Exo WebSocket

Projet d'exercice utilisant WebSocket pour la communication en temps réel entre un client React et un serveur Node.js.

## 📋 Description

Ce projet est une application de démonstration utilisant Socket.IO pour établir une connexion WebSocket bidirectionnelle entre un frontend React et un backend Node.js. Il permet de gérer des connexions en temps réel et de communiquer entre le client et le serveur.

## 🛠️ Technologies utilisées

### Backend
- **Node.js** - Environnement d'exécution JavaScript
- **Express** - Framework web pour Node.js
- **Socket.IO** - Bibliothèque pour la communication en temps réel via WebSocket
- **Nodemon** - Outil de développement pour redémarrer automatiquement le serveur

### Frontend
- **React** - Bibliothèque JavaScript pour construire des interfaces utilisateur
- **Vite** - Outil de build et serveur de développement
- **Socket.IO Client** - Client Socket.IO pour React
- **ESLint** - Linter pour maintenir la qualité du code

## 📁 Structure du projet

```
exo_websocket/
├── backend/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js          # Serveur Express avec Socket.IO
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx        # Composant principal React
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
├── .gitignore
└── README.md
```

## 🚀 Installation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm (généralement inclus avec Node.js)

### Étapes d'installation

1. **Cloner ou télécharger le projet**

2. **Installer les dépendances du backend**
   ```bash
   cd backend
   npm install
   ```

3. **Installer les dépendances du frontend**
   ```bash
   cd ../frontend
   npm install
   ```

## 💻 Utilisation

### Démarrer le serveur backend

Dans le dossier `backend` :
```bash
npm run dev
```

Le serveur sera accessible sur `http://localhost:3000`

### Démarrer le serveur frontend

Dans le dossier `frontend` :
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

> **Note** : Les deux serveurs doivent être démarrés simultanément pour que l'application fonctionne correctement.

## 🔧 Configuration

### Backend
- **Port** : 3000
- **CORS** : Configuré pour accepter les requêtes depuis `http://localhost:5173`

### Frontend
- **Port** : 5173 (par défaut avec Vite)
- **URL du serveur Socket.IO** : `http://localhost:3000`

## 📝 Fonctionnalités actuelles

- ✅ Connexion WebSocket entre le client et le serveur
- ✅ Gestion des événements de connexion
- ✅ Affichage de l'ID de socket dans la console

## 🔮 Améliorations possibles

- Envoi et réception de messages en temps réel
- Chat en temps réel
- Notifications push
- Gestion de plusieurs utilisateurs
- Rooms/Canaux pour organiser les connexions

## 📄 Licence

ISC

## 👤 Auteur

Projet d'exercice - React & Node.js

