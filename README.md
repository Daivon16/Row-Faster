# Row-Faster – AI Rowing Coach

This project is a small Express server powered by OpenAI. The `/coach` endpoint accepts an array of split times and returns training tips.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in the values.
3. Start the server in development mode:
   ```bash
   npm run dev
   ```

### Environment Variables

- `OPENAI_API_KEY` – your OpenAI API key for generating advice.
- `PORT` – port for the Express server. Defaults to `3000` if not set.
