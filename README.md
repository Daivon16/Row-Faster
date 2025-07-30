# Row-Faster – AI Rowing Coach

This project provides a simple Express server with an AI-powered `/coach` endpoint that offers rowing tips based on your workout splits.

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Development mode** – runs the TypeScript source using `nodemon`:
   ```bash
   npm run dev
   ```
3. **Production build** – transpile the code and start the server:
   ```bash
   npm run build && npm start
   ```

## Environment variables

Create a `.env` file and set your OpenAI API key:

```bash
OPENAI_API_KEY=<your key>
```

The server uses this key to call the OpenAI API.

## `/coach` endpoint

Send a POST request with an array of 500m split times. The endpoint returns three AI-generated coaching tips.

Example request body:
```json
{
  "splits": [2.05, 2.07, 2.08]
}
```

---
