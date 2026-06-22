# DKM Blog CMS Studio

Standalone Sanity Studio for managing DKM Chef Blog content.

## Setup

1. **Install dependencies:**

```bash
cd dkm-cms-studio
npm install
```

2. **Set environment variables:**

Copy `.env` to `.env.local` and fill in your Sanity project credentials:

```
SANITY_STUDIO_PROJECT_ID="your-project-id"
SANITY_STUDIO_DATASET="production"
```

3. **Run the studio:**

```bash
npx sanity dev
```

The studio will be available at `http://localhost:3333`.

## Deploy

```bash
npx sanity deploy
```

## Schemas

- `post.ts` — Blog post document (title, slug, image, excerpt, body, author, categories, tags, featured, readingTime, publishedAt)
- `author.ts` — Author document (name, slug, image, bio, role)
- `category.ts` — Category document (title, slug, description)
