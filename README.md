# Row-Faster – AI Rowing Coach


This project is an Express API that provides rowing coaching tips using OpenAI.
=======

This project is a small Express server powered by OpenAI. The `/coach` endpoint accepts an array of split times and returns training tips.


## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and add your OpenAI key.
   ```bash
   cp .env.example .env
   # then edit .env and fill in your key
   ```
   You can also change the `PORT` value here if you don't want to use 3000.
3. Start the server:
   ```bash
   npm run dev
   ```

The API will run on `http://localhost:3000` by default. Set `PORT` in `.env` to use a different port.
=======
2. Copy `.env.example` to `.env` and fill in the values.
3. Start the server in development mode:
   ```bash
   npm run dev
   ```

### Environment Variables

- `OPENAI_API_KEY` – your OpenAI API key for generating advice.
- `PORT` – port for the Express server. Defaults to `3000` if not set.
=======
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


