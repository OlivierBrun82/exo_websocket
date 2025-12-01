# 🚀 Exo WebSocket - Application de Communication Temps Réel

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4.8.1-010101?logo=socket.io&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.1.0-000000?logo=express&logoColor=white)

**Application de démonstration complète utilisant WebSocket pour la communication bidirectionnelle en temps réel entre un client React et un serveur Node.js**

[📖 Documentation](#-documentation-complète) • [🚀 Démarrage rapide](#-démarrage-rapide) • [💡 Fonctionnalités](#-fonctionnalités) • [🔧 Configuration](#-configuration)

</div>

---

## 📋 Table des matières

- [🎯 Vue d'ensemble](#-vue-densemble)
- [✨ Fonctionnalités](#-fonctionnalités)
- [🛠️ Technologies utilisées](#️-technologies-utilisées)
- [📁 Structure du projet](#-structure-du-projet)
- [🚀 Démarrage rapide](#-démarrage-rapide)
- [💻 Guide d'utilisation](#-guide-dutilisation)
- [📡 Architecture et flux de données](#-architecture-et-flux-de-données)
- [🔌 Événements Socket.IO](#-événements-socketio)
- [⚙️ Configuration avancée](#️-configuration-avancée)
- [🧪 Tests et développement](#-tests-et-développement)
- [🐛 Dépannage](#-dépannage)
- [🔮 Améliorations futures](#-améliorations-futures)
- [📚 Ressources et documentation](#-ressources-et-documentation)
- [📄 Licence](#-licence)

---

## 🎯 Vue d'ensemble

**Exo WebSocket** est une application de démonstration complète qui illustre l'utilisation de **Socket.IO** pour établir une communication WebSocket bidirectionnelle en temps réel entre plusieurs clients et un serveur centralisé.

### 🎨 Cas d'usage

Cette application est idéale pour :
- ✨ Apprendre les concepts de WebSocket et Socket.IO
- 💬 Créer des systèmes de chat en temps réel
- 📊 Développer des tableaux de bord collaboratifs
- 🎮 Construire des applications multi-utilisateurs
- 🔄 Synchroniser des données entre plusieurs clients
- 📈 Implémenter des compteurs partagés en temps réel

### 🌟 Points forts

- ⚡ **Temps réel** : Communication instantanée sans rafraîchissement de page
- 🔄 **Bidirectionnel** : Client ↔ Serveur avec échange de données fluide
- 👥 **Multi-utilisateurs** : Support de plusieurs clients simultanés
- 🎯 **Simple** : Architecture claire et code facile à comprendre
- 🚀 **Moderne** : Utilise les dernières versions de React, Node.js et Socket.IO
- 📦 **Modulaire** : Séparation claire entre backend et frontend

---

## ✨ Fonctionnalités

### ✅ Fonctionnalités implémentées

#### 1. 💬 **Système de chat en temps réel**
- Saisie et affichage du nom d'utilisateur
- Envoi de messages instantanés
- Réception automatique des messages des autres utilisateurs
- Différenciation visuelle entre vos messages et ceux des autres
- Broadcast automatique à tous les clients connectés

#### 2. 🔢 **Compteur partagé collaboratif**
- Incrémentation personnalisée par chaque utilisateur
- Synchronisation en temps réel pour tous les clients
- Affichage des actions de chaque utilisateur
- Support des valeurs positives et négatives
- Mise à jour instantanée sans rechargement

#### 3. 🧪 **Bouton de test de connexion**
- Vérification rapide de la connexion WebSocket
- Envoi de messages de test au serveur
- Confirmation de réception côté serveur

#### 4. 🔌 **Gestion des connexions**
- Connexion automatique au démarrage
- Gestion des événements de connexion/déconnexion
- Nettoyage automatique des écouteurs d'événements
- Prévention des fuites mémoire

---

## 🛠️ Technologies utilisées

### Backend

| Technologie | Version | Description |
|------------|---------|-------------|
| **Node.js** | LTS | Environnement d'exécution JavaScript côté serveur |
| **Express** | 5.1.0 | Framework web minimaliste et flexible pour Node.js |
| **Socket.IO** | 4.8.1 | Bibliothèque pour la communication en temps réel via WebSocket |
| **Nodemon** | 3.1.11 | Outil de développement pour redémarrage automatique du serveur |

### Frontend

| Technologie | Version | Description |
|------------|---------|-------------|
| **React** | 19.2.0 | Bibliothèque JavaScript pour construire des interfaces utilisateur |
| **React DOM** | 19.2.0 | Rendu React pour le navigateur |
| **Vite** | 7.2.4 | Outil de build ultra-rapide et serveur de développement |
| **Socket.IO Client** | 4.8.1 | Client Socket.IO pour React |
| **ESLint** | 9.39.1 | Linter pour maintenir la qualité et la cohérence du code |

### Outils de développement

- **Nodemon** : Redémarrage automatique du serveur lors des modifications
- **Vite** : Hot Module Replacement (HMR) pour le développement frontend
- **ESLint** : Détection automatique des erreurs et problèmes de code

---

## 📁 Structure du projet

```
exo_websocket/
│
├── 📂 backend/                    # Serveur Node.js/Express
│   ├── 📄 server.js               # Serveur principal avec Socket.IO
│   ├── 📄 package.json            # Dépendances et scripts backend
│   ├── 📄 package-lock.json       # Verrouillage des versions
│   └── 📂 node_modules/           # Dépendances installées
│
├── 📂 frontend/                   # Application React
│   ├── 📂 public/                 # Fichiers statiques
│   │   └── vite.svg               # Logo Vite
│   │
│   ├── 📂 src/                    # Code source React
│   │   ├── 📄 App.jsx             # Composant principal avec logique Socket.IO
│   │   ├── 📄 App.css             # Styles du composant App
│   │   ├── 📄 main.jsx            # Point d'entrée de l'application
│   │   ├── 📄 index.css           # Styles globaux
│   │   └── 📂 assets/             # Ressources statiques
│   │       └── react.svg          # Logo React
│   │
│   ├── 📄 index.html              # Template HTML principal
│   ├── 📄 package.json            # Dépendances et scripts frontend
│   ├── 📄 package-lock.json       # Verrouillage des versions
│   ├── 📄 vite.config.js          # Configuration Vite
│   └── 📄 eslint.config.js        # Configuration ESLint
│
├── 📄 README.md                   # Documentation complète (ce fichier)
└── 📄 .gitignore                  # Fichiers à ignorer par Git
```

### 📝 Description des fichiers principaux

#### Backend

- **`server.js`** : 
  - Crée le serveur HTTP avec Express
  - Configure Socket.IO avec CORS
  - Gère les événements de connexion
  - Écoute les événements `bouton`, `message`, et `counter`
  - Diffuse les messages aux clients connectés

#### Frontend

- **`App.jsx`** :
  - Composant React principal
  - Gère la connexion Socket.IO
  - Contient toute la logique d'état (messages, compteur, nom)
  - Gère les événements Socket.IO avec `useEffect`
  - Interface utilisateur complète

- **`main.jsx`** :
  - Point d'entrée de l'application React
  - Rend le composant App dans le DOM
  - Configure React StrictMode

---

## 🚀 Démarrage rapide

### 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 14 ou supérieure) - [Télécharger Node.js](https://nodejs.org/)
- **npm** (généralement inclus avec Node.js) ou **yarn**

Vérifiez vos installations :

```bash
node --version
npm --version
```

### 📦 Installation

#### 1. Cloner ou télécharger le projet

```bash
# Si vous utilisez Git
git clone <url-du-repo>
cd exo_websocket

# Ou téléchargez et extrayez l'archive ZIP
```

#### 2. Installer les dépendances du backend

```bash
cd backend
npm install
```

Cette commande installera :
- `express` : Framework web
- `socket.io` : Bibliothèque WebSocket
- `nodemon` : Outil de développement

#### 3. Installer les dépendances du frontend

```bash
cd ../frontend
npm install
```

Cette commande installera :
- `react` et `react-dom` : Bibliothèque React
- `socket.io-client` : Client Socket.IO
- `vite` : Outil de build
- `eslint` : Linter

### ▶️ Lancement de l'application

#### Option 1 : Lancement manuel (recommandé pour le développement)

**Terminal 1 - Backend :**

```bash
cd backend
npm run dev
```

✅ Le serveur démarre sur `http://localhost:3000`
✅ Vous verrez "serveur lancé" dans la console

**Terminal 2 - Frontend :**

```bash
cd frontend
npm run dev
```

✅ L'application démarre sur `http://localhost:5173` (ou un autre port si 5173 est occupé)
✅ Vite affichera l'URL exacte dans la console

#### Option 2 : Scripts personnalisés (à créer)

Vous pouvez créer des scripts npm à la racine pour automatiser le démarrage des deux serveurs.

### 🌐 Accès à l'application

1. Ouvrez votre navigateur
2. Accédez à l'URL affichée par Vite (généralement `http://localhost:5173`)
3. L'application est prête à être utilisée !

> ⚠️ **Important** : Les deux serveurs (backend et frontend) doivent être démarrés simultanément pour que l'application fonctionne correctement.

---

## 💻 Guide d'utilisation

### 🎮 Interface utilisateur

L'application présente une interface simple avec plusieurs sections :

#### 1. **Champ de nom d'utilisateur**
```
┌─────────────────────────┐
│ [Votre nom]            │
└─────────────────────────┘
```
- Saisissez votre nom pour vous identifier dans le chat
- Ce nom apparaîtra dans tous vos messages et actions

#### 2. **Compteur partagé**
```
┌─────────────────────────┐
│ Compteur: 42            │
│ [Valeur] [Incrémenter]  │
└─────────────────────────┘
```
- Affiche la valeur actuelle du compteur partagé
- Saisissez une valeur numérique (positive ou négative)
- Cliquez sur "Incrémenter" pour ajouter cette valeur
- Tous les utilisateurs voient la mise à jour en temps réel

#### 3. **Bouton de test**
```
┌─────────────────────────┐
│ [Test]                  │
└─────────────────────────┘
```
- Envoie un message de test "Hello World" au serveur
- Vérifie que la connexion WebSocket fonctionne

#### 4. **Zone de chat**
```
┌─────────────────────────┐
│ [Message] [Envoyer]     │
│                         │
│ Moi: Bonjour !          │
│ Alice: Salut !          │
│ Bob a incrémenté de 5   │
└─────────────────────────┘
```
- Saisissez un message dans le champ texte
- Cliquez sur "Envoyer" pour diffuser le message
- Les messages des autres utilisateurs apparaissent automatiquement
- Les actions sur le compteur sont également affichées

### 📖 Scénarios d'utilisation

#### Scénario 1 : Test de connexion

1. Ouvrez l'application dans votre navigateur
2. Cliquez sur le bouton "Test"
3. Vérifiez la console du navigateur (F12) pour voir la réponse
4. Vérifiez la console du serveur pour voir le message reçu

#### Scénario 2 : Chat multi-utilisateurs

1. Ouvrez l'application dans **deux onglets ou fenêtres** différentes
2. Dans le premier onglet, saisissez un nom (ex: "Alice")
3. Dans le second onglet, saisissez un autre nom (ex: "Bob")
4. Envoyez un message depuis le premier onglet
5. Le message apparaît instantanément dans le second onglet
6. Envoyez un message depuis le second onglet
7. Le message apparaît dans le premier onglet

#### Scénario 3 : Compteur collaboratif

1. Ouvrez l'application dans **plusieurs onglets**
2. Saisissez des noms différents dans chaque onglet
3. Dans le premier onglet, saisissez "10" et cliquez sur "Incrémenter"
4. Tous les onglets affichent maintenant "10"
5. Dans le second onglet, saisissez "5" et cliquez sur "Incrémenter"
6. Tous les onglets affichent maintenant "15"
7. Chaque action est enregistrée dans le chat

---

## 📡 Architecture et flux de données

### 🏗️ Architecture générale

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT 1 (React)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   App.jsx    │  │ Socket.IO    │  │   Browser    │      │
│  │  Component   │◄─┤   Client     │◄─┤   Window     │      │
│  └──────┬───────┘  └──────┬───────┘  └──────────────┘      │
│         │                  │                                 │
└─────────┼──────────────────┼─────────────────────────────────┘
          │                  │
          │  WebSocket       │
          │  Connection      │
          │                  │
┌─────────┼──────────────────┼─────────────────────────────────┐
│         │                  │                                 │
│         ▼                  ▼                                 │
│  ┌──────────────────────────────────────────────┐           │
│  │         NODE.JS SERVER (Express)             │           │
│  │  ┌────────────────────────────────────────┐  │           │
│  │  │         Socket.IO Server               │  │           │
│  │  │  - Gère les connexions                 │  │           │
│  │  │  - Écoute les événements               │  │           │
│  │  │  - Diffuse les messages                │  │           │
│  │  └────────────────────────────────────────┘  │           │
│  └──────────────────────────────────────────────┘           │
│                                                              │
└──────────────────────────────────────────────────────────────┘
          │                  │
          │  WebSocket       │
          │  Connection      │
          │                  │
┌─────────┼──────────────────┼─────────────────────────────────┐
│         │                  │                                 │
│         ▼                  ▼                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   App.jsx    │  │ Socket.IO    │  │   Browser    │      │
│  │  Component   │◄─┤   Client     │◄─┤   Window     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                              │
│                    CLIENT 2 (React)                         │
└──────────────────────────────────────────────────────────────┘
```

### 🔄 Flux de communication détaillé

#### 1. **Connexion initiale**

```
Client → Serveur : Connexion WebSocket établie
Serveur → Client : Confirmation de connexion
```

#### 2. **Envoi d'un message de chat**

```
┌─────────┐                    ┌─────────┐                    ┌─────────┐
│ Client1 │                    │ Serveur │                    │ Client2 │
└────┬────┘                    └────┬────┘                    └────┬────┘
     │                               │                               │
     │ 1. emit("message", data)     │                               │
     ├──────────────────────────────>│                               │
     │                               │                               │
     │ 2. Ajout local du message     │                               │
     │    "Moi: message"             │                               │
     │                               │                               │
     │                               │ 3. broadcast.emit("message_  │
     │                               │    reponse", data)            │
     │                               ├──────────────────────────────>│
     │                               │                               │
     │                               │                               │ 4. Affichage
     │                               │                               │    "Nom: message"
```

#### 3. **Incrémentation du compteur**

```
┌─────────┐                    ┌─────────┐                    ┌─────────┐
│ Client1 │                    │ Serveur │                    │ Client2 │
└────┬────┘                    └────┬────┘                    └────┬────┘
     │                               │                               │
     │ 1. emit("counter", [nom, val])│                               │
     ├──────────────────────────────>│                               │
     │                               │                               │
     │                               │ 2. io.emit("counter_server",  │
     │                               │    [nom, val])                │
     │                               ├──────────────────────────────>│
     │                               │                               │
     │ 3. Réception et mise à jour   │                               │ 3. Réception et
     │    du compteur local          │                               │    mise à jour
     │                               │                               │    du compteur
```

### 🔐 Sécurité et CORS

Le serveur est configuré avec CORS pour accepter les connexions depuis `http://localhost:5173` :

```javascript
cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: ["*"]
}
```

> ⚠️ **Pour la production** : Modifiez l'origine CORS pour correspondre à votre domaine de production.

---

## 🔌 Événements Socket.IO

### 📤 Événements Client → Serveur

#### `bouton`
**Description** : Envoie un message de test au serveur

**Données** :
```javascript
"Hello World"  // String
```

**Exemple d'utilisation** :
```javascript
socket.emit("bouton", "Hello World");
```

**Action serveur** :
- Log dans la console : `Hello World <socket.id>`
- Broadcast à tous les autres clients via `bouton_reponse`

---

#### `message`
**Description** : Envoie un message de chat au serveur

**Données** :
```javascript
[nom, message]  // Array avec [string, string]
```

**Exemple d'utilisation** :
```javascript
socket.emit("message", ["Alice", "Bonjour tout le monde !"]);
```

**Action serveur** :
- Log dans la console : `["Alice", "Bonjour tout le monde !"]`
- Broadcast à tous les autres clients via `message_reponse`

---

#### `counter`
**Description** : Envoie une valeur pour incrémenter le compteur partagé

**Données** :
```javascript
[nom, valeur]  // Array avec [string, number]
```

**Exemple d'utilisation** :
```javascript
socket.emit("counter", ["Bob", 10]);
```

**Action serveur** :
- Log dans la console : `["Bob", 10]`
- Diffusion à tous les clients (y compris l'émetteur) via `counter_server`

---

### 📥 Événements Serveur → Client

#### `bouton_reponse`
**Description** : Réception d'une réponse suite à un clic sur le bouton de test

**Données** :
```javascript
"Hello World"  // String
```

**Exemple de gestion** :
```javascript
socket.on("bouton_reponse", (data) => {
    console.log(data);  // "Hello World"
});
```

---

#### `message_reponse`
**Description** : Réception d'un message de chat d'un autre utilisateur

**Données** :
```javascript
[nom, message]  // Array avec [string, string]
```

**Exemple de gestion** :
```javascript
socket.on("message_reponse", (data) => {
    const [nom, message] = data;
    setMessages((prev) => [...prev, `${nom}: ${message}`]);
});
```

---

#### `counter_server`
**Description** : Réception de la valeur à ajouter au compteur partagé

**Données** :
```javascript
[nom, valeur]  // Array avec [string, number]
```

**Exemple de gestion** :
```javascript
socket.on("counter_server", (data) => {
    const [nom, valeur] = data;
    setCounter(prev => prev + valeur);
    setMessages((prev) => [...prev, `${nom} a incrémenté de ${valeur}`]);
});
```

---

## ⚙️ Configuration avancée

### 🔧 Configuration du backend

#### Modifier le port du serveur

Dans `backend/server.js`, modifiez la ligne :

```javascript
server.listen(3000, () => {
    console.log('serveur lancé');
});
```

Remplacez `3000` par le port souhaité, puis mettez à jour l'URL dans `frontend/src/App.jsx` :

```javascript
const socket = io("http://localhost:NOUVEAU_PORT");
```

#### Configuration CORS

Pour accepter les connexions depuis d'autres origines, modifiez `backend/server.js` :

```javascript
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173", "http://localhost:3001"],  // Plusieurs origines
        methods: ["GET", "POST"],
        credentials: true,
        allowedHeaders: ["*"]
    }
});
```

#### Variables d'environnement

Créez un fichier `.env` dans le dossier `backend` :

```env
PORT=3000
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

Installez `dotenv` :
```bash
npm install dotenv
```

Modifiez `server.js` :
```javascript
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";
```

### 🎨 Configuration du frontend

#### Modifier le port de développement

Dans `frontend/vite.config.js`, ajoutez :

```javascript
export default {
  plugins: [react()],
  server: {
    port: 5173,  // Changez le port ici
    open: true   // Ouvre automatiquement le navigateur
  }
}
```

#### Configuration Socket.IO

Pour configurer la connexion Socket.IO avec des options avancées, modifiez `frontend/src/App.jsx` :

```javascript
const socket = io("http://localhost:3000", {
    transports: ['websocket', 'polling'],
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionAttempts: 5,
    timeout: 20000
});
```

---

## 🧪 Tests et développement

### 🧹 Nettoyage du code

#### Backend
```bash
cd backend
npm run lint  # Si configuré
```

#### Frontend
```bash
cd frontend
npm run lint
```

### 🔍 Débogage

#### Console du serveur

Le serveur affiche :
- Les messages reçus via `bouton` : `Hello World <socket.id>`
- Les messages reçus via `message` : `[nom, message]`
- Les valeurs reçues via `counter` : `[nom, valeur]`

#### Console du navigateur

Ouvrez les outils de développement (F12) pour voir :
- Les événements Socket.IO reçus
- Les erreurs éventuelles
- Les logs de débogage

#### Vérification de la connexion

Dans la console du navigateur, vous pouvez vérifier l'état de la connexion :

```javascript
// Dans la console du navigateur
socket.connected  // true si connecté
socket.id         // ID unique de la connexion
```

---

## 🐛 Dépannage

### ❌ Problèmes courants et solutions

#### 1. Le serveur ne démarre pas

**Symptômes** :
- Erreur `EADDRINUSE: address already in use`
- Le serveur ne répond pas

**Solutions** :
```bash
# Vérifier quel processus utilise le port 3000
# Windows
netstat -ano | findstr :3000

# Linux/Mac
lsof -i :3000

# Tuer le processus ou changer le port
```

**Alternative** : Modifiez le port dans `server.js`

---

#### 2. Le frontend ne se connecte pas au serveur

**Symptômes** :
- Erreur CORS dans la console
- `WebSocket connection failed`
- `ERR_CONNECTION_REFUSED`

**Solutions** :
1. Vérifiez que le serveur backend est bien démarré
2. Vérifiez l'URL dans `App.jsx` correspond au port du serveur
3. Vérifiez la configuration CORS dans `server.js`
4. Vérifiez que les deux serveurs sont sur la même machine

---

#### 3. Les messages ne s'affichent pas

**Symptômes** :
- Les messages sont envoyés mais ne s'affichent pas
- Pas de réception des messages des autres utilisateurs

**Solutions** :
1. Ouvrez plusieurs onglets pour tester le broadcast
2. Vérifiez la console du navigateur (F12) pour les erreurs
3. Vérifiez la console du serveur pour voir si les messages sont reçus
4. Vérifiez que les écouteurs d'événements sont bien configurés dans `useEffect`

---

#### 4. Le compteur ne se synchronise pas

**Symptômes** :
- Le compteur s'incrémente localement mais pas pour les autres clients
- Les valeurs ne correspondent pas entre les clients

**Solutions** :
1. Vérifiez que l'événement `counter_server` est bien écouté
2. Vérifiez que `io.emit()` est utilisé (et non `socket.broadcast.emit()`)
3. Vérifiez la console pour voir si les événements sont bien reçus

---

#### 5. Erreurs de dépendances

**Symptômes** :
- `Module not found`
- Erreurs lors de `npm install`

**Solutions** :
```bash
# Supprimer les node_modules et package-lock.json
rm -rf node_modules package-lock.json

# Réinstaller les dépendances
npm install

# Si le problème persiste, nettoyer le cache npm
npm cache clean --force
```

---

#### 6. Port déjà utilisé (Vite)

**Symptômes** :
- Vite demande de choisir un autre port
- Le port 5173 est occupé

**Solutions** :
- Acceptez le port suggéré par Vite
- Ou modifiez `vite.config.js` pour spécifier un autre port

---

### 🔍 Vérifications de base

Avant de signaler un problème, vérifiez :

- [ ] Node.js est installé et à jour
- [ ] Toutes les dépendances sont installées (`npm install` dans les deux dossiers)
- [ ] Les deux serveurs sont démarrés
- [ ] Les ports ne sont pas utilisés par d'autres applications
- [ ] Le navigateur est à jour
- [ ] La console du navigateur ne montre pas d'erreurs
- [ ] La console du serveur ne montre pas d'erreurs

---

## 🔮 Améliorations futures

### 🎯 Fonctionnalités prévues

#### Court terme
- [ ] **Notifications push** : Alertes visuelles pour les nouveaux messages
- [ ] **Liste des utilisateurs** : Afficher tous les utilisateurs connectés
- [ ] **Compteur de connexions** : Afficher le nombre de clients connectés
- [ ] **Indicateur de statut** : Afficher si l'utilisateur est connecté/déconnecté
- [ ] **Gestion des erreurs** : Meilleure gestion des erreurs de connexion
- [ ] **Reconnexion automatique** : Reconnexion automatique en cas de perte de connexion

#### Moyen terme
- [ ] **Rooms/Canaux** : Organiser les connexions par groupes ou canaux
- [ ] **Authentification** : Système d'authentification avec noms d'utilisateur uniques
- [ ] **Historique des messages** : Persistance des messages en base de données
- [ ] **Interface améliorée** : Design moderne avec meilleure UX
- [ ] **Support des emojis** : Utilisation d'emojis dans les messages
- [ ] **Messages privés** : Communication directe entre utilisateurs spécifiques

#### Long terme
- [ ] **Base de données** : Intégration MongoDB ou PostgreSQL
- [ ] **Upload de fichiers** : Envoi d'images et fichiers
- [ ] **Notifications desktop** : Notifications système pour les nouveaux messages
- [ ] **Mode sombre** : Thème sombre pour l'interface
- [ ] **Responsive design** : Optimisation pour mobile et tablette
- [ ] **Tests automatisés** : Tests unitaires et d'intégration
- [ ] **Déploiement** : Guide de déploiement sur Heroku, Vercel, etc.

### 💡 Suggestions d'amélioration

Si vous avez des idées d'amélioration, n'hésitez pas à :
1. Ouvrir une issue sur le repository
2. Proposer une pull request
3. Partager vos suggestions

---

## 📚 Ressources et documentation

### 📖 Documentation officielle

- [**Socket.IO Documentation**](https://socket.io/docs/v4/) - Documentation complète de Socket.IO
- [**React Documentation**](https://react.dev/) - Documentation officielle de React
- [**Node.js Documentation**](https://nodejs.org/docs/) - Documentation Node.js
- [**Express Documentation**](https://expressjs.com/) - Documentation Express
- [**Vite Documentation**](https://vitejs.dev/) - Documentation Vite

### 🎓 Tutoriels et guides

- [Socket.IO Getting Started](https://socket.io/get-started/chat) - Tutoriel de démarrage Socket.IO
- [React Hooks](https://react.dev/reference/react) - Guide des hooks React
- [WebSocket Protocol](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) - Documentation MDN sur WebSocket

### 🛠️ Outils utiles

- [Socket.IO Client Tool](https://amritb.github.io/socketio-client-tool/) - Outil de test pour Socket.IO
- [Postman](https://www.postman.com/) - Test d'API REST (si vous ajoutez des endpoints REST)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Outils de développement Chrome

### 📺 Vidéos et cours

- [Socket.IO Tutorial](https://www.youtube.com/results?search_query=socket.io+tutorial) - Tutoriels vidéo sur YouTube
- [React + Socket.IO](https://www.youtube.com/results?search_query=react+socket.io) - Intégration React et Socket.IO

---

## 📄 Licence

Ce projet est sous licence **ISC**.

```
ISC License

Copyright (c) 2025

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```

---

## 👤 Auteur

**Projet d'exercice - React & Node.js**

Ce projet a été créé dans le cadre d'un exercice d'apprentissage des technologies WebSocket, Socket.IO, React et Node.js.

---

## 🙏 Remerciements

- **Socket.IO** pour la bibliothèque de communication en temps réel
- **React** pour le framework UI
- **Vite** pour l'outil de build ultra-rapide
- **Express** pour le framework web Node.js
- La communauté open-source pour tous les outils et ressources

---

<div align="center">

**⭐ Si ce projet vous a aidé, n'hésitez pas à lui donner une étoile ! ⭐**

**Dernière mise à jour** : Janvier 2025

**Version** : 1.0.0

---

Made with ❤️ using React, Node.js, and Socket.IO

</div>
