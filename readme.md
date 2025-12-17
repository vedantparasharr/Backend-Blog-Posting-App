# Relm 🌀

A minimal backend-powered social blogging app built with Node.js, Express, MongoDB and EJS templates. Built as a learning project to practice authentication, data association (users/posts/likes), image uploads, and simple UX patterns.

---

## Features ✨

- JWT auth stored in HTTP-only cookies (user and guest flows)
- Register / Sign in / Sign out
- Profile pages with edit, about and settings
- Create, edit, delete posts
- Like system with optimistic UI updates
- Image uploads for avatars (Multer + local filesystem)
- Simple, responsive UI using Tailwind via CDN

---

## Tech stack 🧰

- Node.js + Express
- MongoDB / Mongoose
- EJS view templates
- Tailwind CSS (via CDN)
- Multer for file uploads
- bcrypt for password hashing
- jsonwebtoken for authentication

---

## Getting started ⚙️

### Prerequisites

- Node.js (v16 or newer recommended)
- MongoDB (local or Atlas)

### Install

```bash
git clone <repo-url>
cd relm
npm install
```

### Environment variables

Create a `.env` file in the project root with at least:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/relm
JWT_SECRET=your_secret_here
```

If you use MongoDB Atlas, use the provided connection string from Atlas.

### Run

```bash
# start
node app.js
# or with nodemon
npx nodemon app.js
```

Open `http://localhost:3000` and create an account or try the guest flow.

---

## File structure (key files) 📁

- `app.js` - main Express server and routes
- `views/` - EJS templates for pages (index, signin, home, profile, about, settings, create/edit post, post detail)
- `public/images/uploads` - uploaded avatars
- `models/` - mongoose models (User, Post)
- `configs/multer.js` - multer configuration

---

## Notes & gotchas ⚠️

- Uploaded avatars are stored on the local filesystem. Old images are removed when replaced. For production, use S3 or Cloudflare R2 for storage.
- Guest accounts use a short-lived token and intentionally do not include a `userId`. Guests cannot access `/profile`.
- Password changes happen in `/profile/settings` and are validated server-side.
- `editPost.ejs` had an extra quote in the textarea which could affect rendering. Check templates before deploying.

---

## Security recommendations 🔒

- Use HTTPS in production and set `secure: true` on cookies.
- Set `SameSite` on cookies based on your deployment needs.
- Move secrets to a secrets manager and rotate `JWT_SECRET` periodically.
- Rate-limit auth endpoints to reduce brute force risk.

---

## Deployment tips 🚀

- Replace local file storage with object storage (S3, Cloudflare R2) for images.
- Use a process manager (PM2) or containerize the app with Docker and set environment variables securely.
- In production, set `NODE_ENV=production` and configure structured logging.

---

## Known issues (tracked) 📝

- Header markup is duplicated across EJS templates. Consider extracting header and footer into partials.
- Some templates assume `user` always exists; add guards where guest flow is allowed.
- `editPost.ejs` contains an extra stray quote in the textarea; remove it to avoid rendering errors.

---

## Contributing 🤝

Pull requests are welcome. For bigger changes, open an issue first to discuss the plan.

---

## License 📜

MIT

<br/>

<div align="center">
Made with patience, ❤️ and curiosity by <strong>Vedant Parashar</strong>
</div>

