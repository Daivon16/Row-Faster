# Row-Faster – AI Rowing Coach

This project is an Express API that provides rowing coaching tips using OpenAI.

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
