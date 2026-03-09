# 🚂 Railway Express Demo

A simple Express.js app ready to deploy on Railway.

## Project Structure

```
railway-express-demo/
├── index.js          # Main app entry point
├── package.json      # Dependencies & scripts
├── Procfile          # Tells Railway how to run the app
├── railway.json      # Railway config
├── Dockerfile        # For Docker-based deployment
├── .env.example      # Example environment variables
└── .gitignore
```

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home - app status |
| GET | `/health` | Health check |
| GET | `/api/greet/:name` | Greet by name |
| POST | `/api/echo` | Echo back JSON body |

## Run Locally

```bash
# Install dependencies
npm install

# Start in development mode (with auto-reload)
npm run dev

# Start in production mode
npm start
```

Visit: http://localhost:3000

## Deploy to Railway

### Option 1: Via GitHub (Recommended)
1. Push this project to a GitHub repo
2. Go to https://railway.app → New Project
3. Click "Deploy from GitHub repo"
4. Select your repo → Railway auto-deploys ✅

### Option 2: Via CLI
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize & deploy
railway init
railway up
```

### Option 3: Via Docker
Railway will auto-detect the Dockerfile and use it.

## Environment Variables
Set these in Railway dashboard under **Variables**:
- `PORT` — Railway sets this automatically
- `NODE_ENV` — set to `production`
# Railway-test
