# jokes

Single-screen browser app that serves a random joke from a bundled corpus.

## Run locally

```bash
uv sync
uv run jokes
```

Then open `http://localhost:8000`.

## Docker

```bash
cp .env.example .env
docker compose up --build
```

The app reads `HOST` and `PORT` from the environment. The delivered experience stays
intentionally small: one joke request button and one joke display area.
