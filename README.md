# Vir Engineers — Your Preferred Packaging Partner

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)

> Official web platform and interactive product catalog for **Vir Engineers**, India's leading industrial packaging solutions provider.

---

## 📖 About the Project

Vir Engineers provides end-to-end industrial packaging, corrosion protection, moisture control, cargo load-stabilizing solutions, and turnkey export packaging services. 

This repository contains the complete responsive single-page application (SPA) with dedicated e-commerce style product detail pages, high-resolution photo galleries, interactive technical specifications, turnkey service portfolios, and direct enquiry/quote handling with automated email notifications and Supabase database logging.

---

## ✨ Key Features

- **🛍️ E-Commerce Style Product Catalog & Detail Pages (`/products/:slug`)**:
  - Interactive photo galleries with thumbnail switching and full-screen image lightbox zoom.
  - Tabbed interface for Technical Specifications, Key Features, Real-world Applications, and Related Products.
  - Instant quote modal pre-filled with the active product context.
  
- **🛡️ Authorized Global Partnerships**:
  - **Zerust® Joint Venture**: Advanced Volatile Corrosion Inhibitor (VCI) films, papers, emitters, and rust removers.
  - **Clariant Advanced Protection**: Active moisture control, Container Dri® II container desiccants, and bentonite clay systems.
  - **tesa® Speciality Tapes**: High-performance strapping, ACXplus bonding, and precision masking tapes.

- **📦 Comprehensive Product Lines**:
  - **Corrosion Control Solutions**: VCI Films, 3D Bags, VCI Paper, Rust Removers, VCI Capsules, Aluminium Barrier Foil.
  - **Moisture Control Solutions**: Container Desiccants (Container Dri® II), Silica Gel, Clay Desiccants, Humidity Indicator (HI) Cards & Plugs.
  - **Load Stabilizing Solutions**: PP Woven & Kraft Paper Dunnage Bags, Air Bag Inflators (Regular/Electric/Battery), Pallet Stabilizing Foil, Grip Sheets, Grip Fix.
  - **Protective Packaging Solutions**: Cord Strap & Wire Buckles, PP Strapping (with Size Chart & Strapping Machines), PET Strapping (Straps, Seals, Pneumatic & Battery Tools, Dispensers), Steel Strapping, Stretch & Shrink Films, Edge Boards, Returnable PP Corrugated Boxes, Pallets (Plastic, Wooden & Compressed Wood).
  - **Storage & Material Handling**: Warehouse Racking Systems, Heavy-Duty Racks, Battery/Manual Stackers, HPT, Electric Pallet Trucks, Industrial Forklifts, Dock Levelers.
  - **Speciality Tapes**: TESA Tapes & High-Performance Industrial Adhesives.
  - **Packaging Essentials**: BOPP Tapes, EPE Foam, Scrim Paper, Vacuum Bags, Shock & Tilt Indicators.

- **🛠️ Turnkey Industrial Packaging Services (`/services`)**:
  - Container Lashing Service
  - Export Worthy Packaging on Turnkey Basis
  - Vacuum Packaging of Heavy Machinery
  - Palletization Service
  - Shrink Packaging of Pallets and Heavy Equipment

- **📩 Direct Quote & Contact Flow**:
  - Real-time form validation using **Zod** and **React Hook Form**.
  - Dual delivery: sends automated notification emails via **Resend API** and stores records in **Supabase**.

- **🔐 Admin Portal (`/admin`)**:
  - Secure login and administrative dashboard for managing leads, blog posts, and enquiries.

---

## 🛠️ Technology Stack

- **Frontend**: [React 19](https://react.dev/), [Vite 8](https://vitejs.dev/), [React Router DOM v7](https://reactrouter.com/)
- **Styling & Animation**: [Tailwind CSS v4](https://tailwindcss.com/), Vanilla CSS Design Tokens, [Framer Motion](https://www.framer.com/motion/), [Lucide React](https://lucide.dev/)
- **UI Components**: Radix UI Primitives (`Dialog`, `Select`, `Label`, `Slot`)
- **Backend Server**: [Express 5](https://expressjs.com/) (Node.js)
- **Database**: [Supabase](https://supabase.com/) (`@supabase/supabase-js`)
- **Email Service**: [Resend](https://resend.com/)

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0 or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/vir-engineers.git
   cd vir-engineers
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add the following keys:
   ```env
   # Backend Port
   PORT=5000

   # Resend Email Configuration
   RESEND_API_KEY=your_resend_api_key
   NOTIFICATION_EMAIL=sales@virpackaging.com

   # Supabase Configuration
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   *This concurrently launches both the Vite frontend (`http://localhost:5173`) and the Express API server (`http://localhost:5000`).*

5. **Build for Production**:
   ```bash
   npm run build
   ```

6. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```text
├── public/                  # Static assets (images, logos, catalog PDFs)
├── src/
│   ├── components/          # Reusable components
│   │   ├── ui/              # Radix UI primitives & form controls
│   │   ├── EnquiryFormDialog.tsx
│   │   ├── PageTransition.tsx
│   │   └── AnimatedSection.tsx
│   ├── data/
│   │   └── productsData.js  # Centralized product catalog, specifications, and relations
│   ├── pages/               # Application routes / views
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx     # Dynamic category grid & filter system
│   │   ├── ProductDetail.jsx# E-commerce style product detail page
│   │   ├── Services.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── AdminLogin.jsx
│   │   └── AdminDashboard.jsx
│   ├── App.jsx              # Main routing & layout configuration
│   ├── index.css            # Global design tokens and styling
│   └── main.jsx             # Entry point
├── server.js                # Express backend API for email dispatch & storage
├── package.json
└── vite.config.js
```

---

## 🏢 Corporate Office & Branch Network

- **Global Headquarters**: 
  917, Maple Trade Centre, Maple Tree Garden Homes Rd, Near Surdhara Circle, Sarathi Co-Operative Housing Society, Thaltej, Ahmedabad, Gujarat - 380052
- **Direct Lines**: 
  - [+91 89803 30315](tel:+918980330315)
  - [+91 98244 44481](tel:+919824444481)
- **For Exports**: 
  - [+91 96014 82606](tel:+919601482606)
  - [global@impackaging.com](mailto:global@impackaging.com)
- **Strategic Branches**: 
  - Goa Branch
  - Rajkot Branch
  - Gandhidham Branch

---

## 📄 License

This project is proprietary and confidential to **Vir Engineers**. All rights reserved.
