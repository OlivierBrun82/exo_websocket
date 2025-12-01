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
│                           # Gère les événements "bouton" et "message"
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── App.jsx        # Composant principal React avec gestion Socket.IO
│   │   ├── App.css        # Styles du composant App
│   │   ├── main.jsx       # Point d'entrée de l'application React
│   │   ├── index.css      # Styles globaux
│   │   └── assets/
│   │       └── react.svg
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js     # Configuration Vite
│   └── eslint.config.js   # Configuration ESLint
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
cd backend
npm run dev
```

Le serveur sera accessible sur `http://localhost:3000` et affichera "serveur lancé" dans la console.

### Démarrer le serveur frontend

Dans un nouveau terminal, dans le dossier `frontend` :
```bash
cd frontend
npm run dev
```

L'application sera accessible sur `http://localhost:5173` (ou un autre port si 5173 est occupé).

> **Note** : Les deux serveurs doivent être démarrés simultanément pour que l'application fonctionne correctement.

### Utilisation de l'application

1. Ouvrez votre navigateur à l'adresse indiquée par Vite (généralement `http://localhost:5173`)
2. Cliquez sur le bouton "Test" pour envoyer un message de test au serveur
3. Utilisez le champ de texte et le bouton "Envoyer" pour envoyer des messages de chat
4. Les messages envoyés par d'autres utilisateurs connectés apparaîtront automatiquement en temps réel

## 🔧 Configuration

### Backend
- **Port** : 3000
- **CORS** : Configuré pour accepter les requêtes depuis `http://localhost:5173`

### Frontend
- **Port** : 5173 (par défaut avec Vite)
- **URL du serveur Socket.IO** : `http://localhost:3000`

## 📜 Scripts disponibles

### Backend
- `npm run dev` : Démarre le serveur avec Nodemon (redémarrage automatique lors des modifications)

### Frontend
- `npm run dev` : Démarre le serveur de développement Vite
- `npm run build` : Compile l'application pour la production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie le code avec ESLint

## 📝 Fonctionnalités actuelles

- ✅ Connexion WebSocket entre le client et le serveur via Socket.IO
- ✅ Gestion des événements de connexion
- ✅ Bouton de test pour envoyer un message "Hello World" au serveur
- ✅ Système de chat en temps réel :
  - Envoi de messages depuis le client
  - Réception et affichage des messages en temps réel
  - Différenciation entre vos messages et ceux des autres utilisateurs
- ✅ Broadcast des messages à tous les clients connectés (sauf l'émetteur)

## 📡 Événements Socket.IO

### Événements côté client → serveur
- `bouton` : Envoie un message de test "Hello World" au serveur
- `message` : Envoie un message de chat au serveur

### Événements côté serveur → client
- `bouton_reponse` : Réception d'une réponse suite à un clic sur le bouton de test
- `message_reponse` : Réception d'un message de chat d'un autre utilisateur

## 🔮 Améliorations possibles

- ✅ ~~Envoi et réception de messages en temps réel~~ (Implémenté)
- ✅ ~~Chat en temps réel~~ (Implémenté)
- Notifications push
- Gestion de plusieurs utilisateurs avec liste des utilisateurs connectés
- Rooms/Canaux pour organiser les connexions
- Authentification des utilisateurs
- Historique des messages persisté en base de données
- Interface utilisateur améliorée avec meilleur design

## 📄 Licence

ISC

## 👤 Auteur

Projet d'exercice - React & Node.js

