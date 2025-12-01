# Exo WebSocket

Projet d'exercice utilisant WebSocket pour la communication en temps réel entre un client React et un serveur Node.js.

## 📋 Description

Ce projet est une application de démonstration utilisant Socket.IO pour établir une connexion WebSocket bidirectionnelle entre un frontend React et un backend Node.js. Il permet de gérer des connexions en temps réel et de communiquer entre le client et le serveur.

L'application comprend :
- Un serveur Node.js/Express avec Socket.IO qui gère les connexions WebSocket
- Une interface React permettant d'envoyer des messages et de recevoir des réponses en temps réel
- Un système de chat où les messages sont diffusés à tous les clients connectés
- Un bouton de test pour vérifier la connexion WebSocket

## 🛠️ Technologies utilisées

### Backend
- **Node.js** - Environnement d'exécution JavaScript
- **Express** (v5.1.0) - Framework web pour Node.js
- **Socket.IO** (v4.8.1) - Bibliothèque pour la communication en temps réel via WebSocket
- **Nodemon** (v3.1.11) - Outil de développement pour redémarrer automatiquement le serveur

### Frontend
- **React** (v19.2.0) - Bibliothèque JavaScript pour construire des interfaces utilisateur
- **React DOM** (v19.2.0) - Rendu React pour le navigateur
- **Vite** (v7.2.4) - Outil de build et serveur de développement ultra-rapide
- **Socket.IO Client** (v4.8.1) - Client Socket.IO pour React
- **ESLint** (v9.39.1) - Linter pour maintenir la qualité du code

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
  - **Données** : `"Hello World"` (string)
  - **Action serveur** : Log dans la console et broadcast à tous les autres clients
  
- `message` : Envoie un message de chat au serveur
  - **Données** : Le texte saisi par l'utilisateur (string)
  - **Action serveur** : Log dans la console et broadcast à tous les autres clients

### Événements côté serveur → client
- `bouton_reponse` : Réception d'une réponse suite à un clic sur le bouton de test
  - **Données** : `"Hello World"` (string)
  - **Action client** : Affichage dans la console
  
- `message_reponse` : Réception d'un message de chat d'un autre utilisateur
  - **Données** : Le message envoyé par un autre client (string)
  - **Action client** : Ajout du message à la liste avec le préfixe "Serveur: "

## 🔄 Architecture et flux de données

```
┌─────────────┐                    ┌─────────────┐
│   Client 1  │                    │   Client 2  │
│   (React)   │                    │   (React)   │
└──────┬──────┘                    └──────┬──────┘
       │                                   │
       │  Socket.IO Connection             │
       │                                   │
       └──────────────┬────────────────────┘
                      │
                      ▼
              ┌───────────────┐
              │  Node.js      │
              │  Server       │
              │  (Express +   │
              │   Socket.IO)  │
              └───────────────┘
```

**Flux de communication :**
1. Les clients se connectent au serveur via Socket.IO
2. Quand un client envoie un message (`message` ou `bouton`), le serveur le reçoit
3. Le serveur diffuse le message à tous les autres clients connectés (broadcast)
4. Les autres clients reçoivent le message via les événements `message_reponse` ou `bouton_reponse`
5. L'émetteur original ne reçoit pas son propre message (grâce à `socket.broadcast.emit`)

## 🔮 Améliorations possibles

- ✅ ~~Envoi et réception de messages en temps réel~~ (Implémenté)
- ✅ ~~Chat en temps réel~~ (Implémenté)
- Notifications push pour les nouveaux messages
- Gestion de plusieurs utilisateurs avec liste des utilisateurs connectés
- Affichage du nombre de clients connectés
- Rooms/Canaux pour organiser les connexions par groupes
- Authentification des utilisateurs avec noms d'utilisateur
- Historique des messages persisté en base de données (MongoDB, PostgreSQL, etc.)
- Interface utilisateur améliorée avec meilleur design et UX
- Gestion des erreurs de connexion et reconnexion automatique
- Indicateur de statut de connexion (connecté/déconnecté)
- Support des emojis et fichiers dans les messages
- Messages privés entre utilisateurs spécifiques

## 🐛 Dépannage

### Le serveur ne démarre pas
- Vérifiez que le port 3000 n'est pas déjà utilisé par une autre application
- Assurez-vous que toutes les dépendances sont installées : `npm install` dans le dossier `backend`

### Le frontend ne se connecte pas au serveur
- Vérifiez que le serveur backend est bien démarré et accessible sur `http://localhost:3000`
- Vérifiez la console du navigateur pour les erreurs CORS
- Assurez-vous que l'URL dans `App.jsx` correspond au port du serveur backend

### Les messages ne s'affichent pas
- Ouvrez plusieurs onglets/fenêtres pour tester le broadcast
- Vérifiez la console du navigateur (F12) pour voir les événements Socket.IO
- Vérifiez la console du serveur pour voir si les messages sont bien reçus

### Erreurs de dépendances
- Supprimez les dossiers `node_modules` et les fichiers `package-lock.json`
- Réinstallez les dépendances : `npm install` dans chaque dossier (`backend` et `frontend`)

### Port déjà utilisé
- Pour le backend : Modifiez le port dans `server.js` (ligne 49) et mettez à jour l'URL dans `App.jsx`
- Pour le frontend : Vite utilisera automatiquement le prochain port disponible

## 💡 Notes de développement

### Structure du code

**Backend (`server.js`)** :
- Utilise Express pour créer le serveur HTTP
- Socket.IO est attaché au serveur HTTP
- Gère les événements de connexion et les événements personnalisés
- Utilise `socket.broadcast.emit()` pour envoyer des messages à tous sauf l'émetteur

**Frontend (`App.jsx`)** :
- Crée une instance Socket.IO client connectée au serveur
- Utilise les hooks React (`useState`, `useEffect`) pour gérer l'état
- Nettoie les écouteurs d'événements dans le `useEffect` pour éviter les fuites mémoire
- Affiche les messages dans une liste avec distinction entre "Moi" et "Serveur"

### Bonnes pratiques implémentées

- ✅ Nettoyage des écouteurs d'événements Socket.IO dans `useEffect`
- ✅ Utilisation de `StrictMode` dans React pour détecter les problèmes
- ✅ Configuration CORS appropriée pour la sécurité
- ✅ Séparation backend/frontend pour une architecture claire

### Points d'attention

- Le message de l'utilisateur est ajouté localement avant l'envoi (pas de confirmation serveur)
- Les messages ne sont pas persistés (disparaissent au rechargement de la page)
- Pas de gestion d'erreur de connexion Socket.IO côté client
- Pas de validation des messages vides côté serveur

## 📄 Licence

ISC

## 👤 Auteur

Projet d'exercice - React & Node.js

---

**Dernière mise à jour** : 2024

