# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Run in Docker (no host Node upgrade required)

The repository includes a `docker-compose.yml` that runs Vite inside a Node 22 container.

From the project root run:

```powershell
# build and start in background
docker compose up --build -d

# follow container logs
docker compose logs -f web

# stop
docker compose down
```

Notes:
- If `package-lock.json` is missing `npm ci` will fall back to `npm install` in the container.
- Vite will be available at `http://localhost:5173`.
- If file changes don't reflect, ensure Docker Desktop / WSL file sharing is enabled; `CHOKIDAR_USEPOLLING=true` is set to help on Windows.
