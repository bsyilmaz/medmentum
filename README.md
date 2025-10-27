# Medmentum - Professional Healthcare Technology Platform

A modern, professional website built with React, Vite, Tailwind CSS, Framer Motion, and Supabase for Medmentum healthcare startup.

## 🚀 Features

- **Modern UI/UX**: Beautiful, professional design with smooth animations
- **React Bits Animations**: Particles, Sparkles, Magnetic buttons, Hover cards
- **Responsive Design**: Mobile-first, fully responsive layout
- **Admin Panel**: Protected admin routes for managing content
- **Blog System**: Create, edit, and publish blog posts
- **Product Updates**: Timeline-based product update system
- **Supabase Integration**: Backend database and authentication
- **Performance Optimized**: Fast loading, smooth animations

## 📦 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + Custom React Bits components
- **Backend**: Supabase (Auth, Database, Storage)
- **Routing**: React Router v6
- **Icons**: Lucide React

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd medmentum
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Copy the project URL and anon key
   - Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

4. **Setup Database**
   - Go to your Supabase SQL Editor
   - Run the SQL commands from `supabase-setup.sql` file

5. **Run the development server**
```bash
npm run dev
```

6. **Build for production**
```bash
npm run build
```

## 📁 Project Structure

```
medmentum/
├── src/
│   ├── components/
│   │   ├── animations/     # Animation components
│   │   ├── layout/         # Header, Footer, Layout
│   │   ├── ui/            # Reusable UI components
│   │   └── admin/         # Admin-specific components
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogDetail.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   └── admin/         # Admin pages
│   ├── contexts/
│   │   └── AuthContext.jsx
│   ├── lib/
│   │   └── supabase.js    # Supabase client
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },
  secondary: { ... },
  accent: { ... },
}
```

### Content
- **Home Page**: Edit `src/pages/Home.jsx`
- **Products**: Edit `src/pages/Products.jsx`
- **Blog**: Managed through admin panel
- **Team**: Edit `src/pages/Team.jsx`

## 🔐 Admin Panel

Access the admin panel at `/admin/login`

**Demo credentials:**
- Email: `admin@medmentum.com`
- Password: `admin123`

### Admin Features:
- Blog management (Create, Edit, Delete)
- Product update timeline management
- Protected routes with authentication

## 🗄️ Database Schema

### Tables:
- **blogs**: Blog posts
- **products**: Product information
- **product_updates**: Timeline updates for products

See `supabase-setup.sql` for complete schema.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Connect your GitHub repo to Vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Environment Variables
Don't forget to add your environment variables in your deployment platform:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any questions or support, contact us at info@medmentum.com
