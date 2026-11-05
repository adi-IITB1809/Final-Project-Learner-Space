# Learner Space

I made Learner Space as my final project while learning React and Django. The idea is simple: learners can share useful videos, find recent uploads, and watch each other's work.

## What you can do

- Browse the latest videos and open a page to watch one.
- Sign up for an account and sign in.
- Upload a video with a title and description. You can add a thumbnail too.
- See the videos you have uploaded in your library.

The frontend is built with React, React Router, and Axios. The API uses Django and Django REST Framework, with SQLite for the database. Uploaded videos and thumbnails are saved by Django in the backend's media folder.

## Getting it running

You'll need Python 3.12 and Node.js with npm. Run the backend and frontend in separate terminals.

### Django API

In a terminal, go to `ytclone/ytclone` and set up a virtual environment:

```bash
python -m venv .venv
```

Activate it in Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

On macOS or Linux, use:

```bash
source .venv/bin/activate
```

Then install the packages, create the database tables, and start Django:

```bash
python -m pip install Django==5.2.4 djangorestframework==3.16.0 django-cors-headers==4.7.0 Pillow==13.0.0
python manage.py migrate
python manage.py runserver 127.0.0.1:8000
```

The API runs at `http://127.0.0.1:8000/api/`.

### React app

In a second terminal, go to `ytclone/frontend` and run:

```bash
npm ci
npm start
```

The app opens at `http://localhost:3000` and connects to the API at `http://127.0.0.1:8000/api` by default. If your API is somewhere else, add a `.env` file in `ytclone/frontend` and set its URL:

```text
REACT_APP_API_URL=http://127.0.0.1:8000/api
```

## API routes

| Method | Route | What it does |
| --- | --- | --- |
| `GET` | `/api/videos/` | Returns videos, newest first. |
| `POST` | `/api/videos/` | Uploads a video (`multipart/form-data`); requires a token. |
| `GET` | `/api/videos/<id>/` | Returns one video's details. |
| `GET` | `/api/videos/?mine=true` | Returns your uploads when you send a token. |
| `POST` | `/api/register/` | Creates an account. |
| `POST` | `/api/login/` | Checks your login and returns a token. |

For requests that need a token, send `Authorization: Token <token>` in the request headers.

## A couple of notes

This setup is for local development. Django serves uploaded media while debug mode is on, and both servers need to be running for the app to work. Before putting it online, the Django settings and media storage will need production configuration.
