# 🛍️ Twisell App

**Twisell** is a multi-tenant e-commerce SaaS platform built with **Next.js**, **Payload CMS**, **tRPC**, and **Stripe Connect**. It enables anyone to launch and manage their own digital storefronts – with complete control over products, branding, and payments.

🌐 **Live Demo:** [https://twisell.store](https://twisell.store)

---

## 🚀 Features

### 🎨 Frontend (Next.js + TailwindCSS)
- Tenant-specific storefronts via subdomains
- Dynamic homepage with product search & category filters
- Product pages with reviews, protected content, and purchase status
- Multi-tenant shopping cart & checkout system
- Library for purchased products
- Responsive mobile-first UI
- Authentication (Sign in, Sign up, Sessions)

### 🧠 Backend (Payload CMS + tRPC)
- Role-based access: `super-admin` & `user`
- Admin dashboard to manage tenants, products, categories, and orders
- Category & tag hierarchy support
- Protected product fields (shown only after purchase)
- Stripe Connect with platform fees
- API routes (REST, GraphQL Playground, tRPC)

### 📦 Infrastructure
- Subdomain-based tenant routing (via middleware)
- Dynamic SSR rendering for real-time content
- Media storage via Vercel Blob
- Admin seeding via environment variables
- Rich text + media support for product descriptions

---

## 🧪 Tech Stack

| Layer        | Tech Stack                                                  |
|--------------|-------------------------------------------------------------|
| Frontend     | Next.js, TypeScript, TailwindCSS, React Query, tRPC        |
| Backend      | Payload CMS, Node.js, Express, Stripe Connect              |
| Database     | MongoDB (via Payload)                                       |
| Auth         | Payload Auth with cookie-based session management          |
| Media        | Vercel Blob Storage                                         |
| Deployment   | Vercel (fully supported) or Docker-ready setup              |

---

## 🛠 Local Development

```bash
# 1. Clone the repository
git clone https://github.com/quetrea/twisell-app.git
cd twisell-app

# 2. Install dependencies
bun install

# 3. Create environment file
cp .env.example .env

# 4. Fill in required credentials in the .env file
# - Stripe API keys
# - MongoDB URI
# - Admin user credentials
# - Application domain (e.g., twisell.store)

# 5. Run development server
bun run dev

# 6. (Optional) Seed the database
bun run db:seed


🙏 Special Thanks
This project was inspired by the brilliant work of
  ,
and supported by the incredible open-source community. 💙

