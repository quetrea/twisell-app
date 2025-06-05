## 🛒 Twisell App
🔗 [View on GitHub](https://github.com/quetrea/twisell-app)

A powerful, fully customizable multi-tenant e-commerce platform. Each store (tenant) operates independently with its own database, admin panel, and branding. Built for scalability and flexibility.

---

### 🚀 Tech Stack Overview

#### 🔧 Backend
- **Payload CMS** – Headless CMS and REST/GraphQL API
- **Payload Multi-Tenant Plugin** – Isolated environments for each tenant
- **tRPC** – End-to-end type-safe API communication
- **Stripe** – Payment gateway integration
- **SuperJSON** – Data serialization for advanced use cases
- **MongoDB** – Database powered by `@payloadcms/db-mongodb`

#### 🎨 Frontend
- **Next.js 15** – Full-stack React framework
- **React 19** – Frontend library
- **Tailwind CSS v4** + `tw-animate-css` – Utility-first styling with animations
- **Radix UI** – Accessible and customizable UI primitives
- **Lucide Icons** – Clean and modern icon library
- **Vaul** – Drawer component system
- **Embla Carousel** – Interactive product sliders
- **Sonner** – Toast notifications

#### ⚙️ State & Form Management
- **Zustand** – Lightweight global state management
- **TanStack React Query** – Data fetching and caching
- **React Hook Form + Zod** – Form control and schema validation

#### 🧩 Additional Tools
- **Dark mode support** via `next-themes`
- **Data visualization** with `Recharts`, `react-resizable-panels`, `date-fns`
- **Advanced UI** features via `cmdk`, `input-otp`, `react-day-picker`, and `nuqs`

---

### 📂 Scripts

```bash
# Start development server
bun run dev

# Reset database & apply fresh migrations
bun run db:fresh

# Seed database
bun run db:seed

# Generate Payload CMS types
bun run generate:types
