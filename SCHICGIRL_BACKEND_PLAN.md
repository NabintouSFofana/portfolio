# Schicgirl Backend Plan

## Overview
Add a lightweight Node.js + Express backend to Supabase for server-side business logic, auth validation, and real-time features. GitHub Pages frontend stays the same.

---

## Architecture

```
┌─────────────────┐
│  GitHub Pages   │  (Frontend - no changes)
│  Static HTML/JS │
└────────┬────────┘
         │
         │ API calls
         ▼
┌──────────────────────┐
│  Node.js Backend     │  (NEW - deployed to Render)
│  Express + Supabase  │
└────────┬─────────────┘
         │
         ▼
┌──────────────────────┐
│  Supabase           │
│  PostgreSQL + Auth  │
└─────────────────────┘
```

---

## What Moves Server-Side

### 1. Points Ledger (PRIORITY)
**Current problem:** Client can edit points in browser console
```javascript
// Move this validation to backend
POST /api/points/redeem
- Verify user subscription is active
- Check available points
- Validate product exists
- Update points atomically in Postgres
- Return success/failure
```

### 2. Subscription Validation
**Current:** Checked on page load only
```javascript
POST /api/auth/validate-subscription
- Re-verify access_until is valid
- Handle token refresh
- Return fresh subscription status
```

### 3. Bilingual Pre-render
**Current:** Python script runs locally
```javascript
GET /api/build/generate-urls
- Regenerate 38+ static FR/EN URLs with canonical tags
- Push to GitHub Pages automatically
- Or: serve dynamic routing for SEO
```

### 4. Admin Moderation
```javascript
POST /api/admin/approve-post
POST /api/admin/remove-post
POST /api/admin/ban-member
- Verify admin role server-side
- Update moderation state
- Log changes
```

### 5. Real-Time Notifications (Future)
```javascript
// Enable WebSocket for digest emails, live updates
```

---

## Tech Stack

```
Node.js 20 LTS
├── Express (REST API)
├── Supabase Client (auth + database)
├── dotenv (env config)
└── cors (for cross-origin)

Deployment:
├── Render (free tier, auto-deploys from GitHub)
├── Environment variables for secrets
└── Scheduled jobs for digests
```

---

## File Structure

```
schicgirl-backend/
├── src/
│   ├── index.js                 (Express app setup)
│   ├── middleware/
│   │   ├── auth.js              (verify JWT from Supabase)
│   │   └── errorHandler.js
│   ├── routes/
│   │   ├── points.js            (redeem, check balance)
│   │   ├── auth.js              (subscription validation)
│   │   ├── admin.js             (moderation)
│   │   └── health.js            (status check)
│   └── services/
│       ├── supabase.js          (client setup)
│       ├── points.js            (points logic)
│       └── subscription.js      (subscription logic)
├── .env.example
├── package.json
└── README.md
```

---

## Implementation Plan (Phased)

### Phase 1: Setup (1-2 hours)
- [ ] Create Node.js repo (or folder in existing schicgirl repo)
- [ ] Set up Express server
- [ ] Connect to Supabase
- [ ] Deploy to Render
- [ ] Update CORS on GitHub Pages URL

### Phase 2: Points Ledger (2-3 hours)
- [ ] Create `/api/points/check` endpoint
- [ ] Create `/api/points/redeem` endpoint
- [ ] Verify user has active subscription
- [ ] Atomic transaction: deduct points + update rewards
- [ ] Test thoroughly

### Phase 3: Subscription Validation (1-2 hours)
- [ ] Create `/api/auth/validate` endpoint
- [ ] Verify Supabase token
- [ ] Check subscription status server-side
- [ ] Return fresh auth state
- [ ] Update frontend to call on app boot

### Phase 4: Admin Safety (1-2 hours)
- [ ] Verify admin role for moderation endpoints
- [ ] Add audit logging
- [ ] Test permission checks

---

## Quick Start Code

### `src/index.js`
```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({ origin: 'https://nabintousf ofana.github.io' }));
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => res.json({ ok: true }));

app.post('/api/points/check', async (req, res) => {
  // TODO: verify JWT
  // TODO: query points from Supabase
  // TODO: return balance
});

app.post('/api/points/redeem', async (req, res) => {
  // TODO: verify JWT + subscription
  // TODO: atomic transaction
  // TODO: deduct points + award product
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Schicgirl backend running');
});
```

### `package.json`
```json
{
  "name": "schicgirl-backend",
  "version": "1.0.0",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "@supabase/supabase-js": "^2.38.0",
    "dotenv": "^16.3.1"
  }
}
```

---

## Deployment to Render

1. Create GitHub repo: `schicgirl-backend`
2. Push code
3. Sign up at render.com (free tier)
4. Create "Web Service"
5. Connect GitHub repo
6. Set environment variables:
   ```
   SUPABASE_URL=your_url
   SUPABASE_KEY=your_key
   NODE_ENV=production
   ```
7. Deploy (auto-deploys on push)
8. Get URL: `https://schicgirl-backend.onrender.com`

---

## Frontend Changes (Minimal)

Update your JavaScript to call the backend instead of doing auth/points client-side:

```javascript
// Before (client-side, unsafe)
const points = localStorage.getItem('points');

// After (server-side, safe)
const response = await fetch('https://schicgirl-backend.onrender.com/api/points/check', {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${authToken}` }
});
const { points } = await response.json();
```

---

## Safety Checks (Built-in)

✓ JWT validation on every endpoint  
✓ Subscription verified server-side  
✓ Points updated atomically (no race conditions)  
✓ Admin role checked before moderation  
✓ Error logging for debugging  
✓ CORS restricted to your domain  

---

## Cost Breakdown

| Service | Cost |
|---------|------|
| GitHub Pages | Free |
| Supabase (current) | ~$0-25/mo (database) |
| Render (backend) | Free tier (with limitations) or $7/mo |
| **Total** | **~$7-25/month** |

Free tier works for ~1000 requests/day. If you hit limits, $7/month removes them.

---

## Next Steps

1. **Decide:** Want to build this now or after you land a job?
2. **If now:** I can help you set it up step-by-step
3. **Bonus for resume:** Having a real backend makes this a complete full-stack project

---

## Why This Matters for Hiring

Shows:
- ✓ You can identify architectural limitations
- ✓ You know how to fix them safely
- ✓ You understand auth + security
- ✓ You can deploy real systems
- ✓ You iterate on production code

That's senior-level thinking on a side project.

