# Learner Space frontend

This folder contains the React side of Learner Space. It has the pages for browsing videos, creating an account, signing in, uploading a video, and viewing your own uploads.

## Run it

Make sure the Django API is running first (see the main [project README](../../README.md)). Then, from this folder, install the JavaScript packages and start React:

```bash
npm ci
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000). It expects the API at `http://127.0.0.1:8000/api` by default. If you are running Django at a different address, create a `.env` file here and set `REACT_APP_API_URL` to the API URL. For example:

```text
REACT_APP_API_URL=http://127.0.0.1:8000/api
```

## A few useful details

- The API calls are made with Axios.
- Sign-in tokens are saved in browser storage so you stay signed in after reloading.
- Video uploads include the video file and can include a thumbnail.
- The `npm run build` command creates a production build in `build/`.

This is still a learning project, so the development server and local API settings are intended for running it on your own machine.
