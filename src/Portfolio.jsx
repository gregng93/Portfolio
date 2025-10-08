import React from 'react'

// NOTE: To keep this file build-safe, long instructions and code samples were moved to README.md.
// Replace the placeholders below with your real links before deploying.
const LIVE_SITE = 'https://example.com' // replace with your live site
const ADMIN_DEMO = 'https://example.com/admin' // replace or leave blank
const REPO = 'https://github.com/yourusername/your-repo' // replace
const EMAIL = 'you@example.com' // replace

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">Gregory Ng — Frontend + .NET Developer</h1>
          <p className="mt-2 text-slate-600">I build production-ready web apps with React (frontend) and .NET (backend). Featured: a full e‑commerce platform with customer site and admin panel.</p>
        </div>
        <div className="flex gap-3">
          <a href={LIVE_SITE} target="_blank" rel="noreferrer" className="inline-block bg-slate-900 text-white px-4 py-2 rounded-lg shadow hover:opacity-95">View Live Site</a>
          <a href={REPO} target="_blank" rel="noreferrer" className="inline-block border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50">View Repo</a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        <section className="bg-gradient-to-r from-white to-slate-50 rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="sm:flex sm:gap-6">
            <div className="sm:flex-1">
              <h2 className="text-2xl font-semibold">E-Commerce Platform (Featured)</h2>
              <p className="mt-2 text-slate-600">Full-stack e-commerce with public storefront, shopping cart, checkout, and admin dashboard for product & order management.</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-slate-100 rounded">React</span>
                <span className="text-xs px-2 py-1 bg-slate-100 rounded">.NET Core</span>
                <span className="text-xs px-2 py-1 bg-slate-100 rounded">REST API</span>
                <span className="text-xs px-2 py-1 bg-slate-100 rounded">SQL</span>
                <span className="text-xs px-2 py-1 bg-slate-100 rounded">Tailwind</span>
                <span className="text-xs px-2 py-1 bg-slate-100 rounded">Docker</span>
              </div>

              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                <li><strong>Role:</strong> Full-stack developer (frontend + backend)</li>
                <li><strong>Scope:</strong> Customer storefront + Admin panel</li>
                <li><strong>Highlights:</strong> SKU-based product variants, hierarchical categories, pre-order logic</li>
                <li><strong>APIs:</strong> /product (public), /admin/* (admin CRUD)</li>
              </ul>

              <div className="mt-6 flex gap-3">
                <a href={LIVE_SITE} target="_blank" rel="noreferrer" className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg">Open Storefront</a>
                <a href={ADMIN_DEMO} target="_blank" rel="noreferrer" className="inline-block border border-slate-200 px-4 py-2 rounded-lg">Open Admin</a>
              </div>
            </div>

            <div className="sm:w-80 mt-6 sm:mt-0">
              <div className="rounded-lg overflow-hidden border border-slate-100">
                <img src="https://via.placeholder.com/720x420?text=Storefront+Screenshot" alt="storefront" className="w-full h-44 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">Storefront & Product Page</h3>
                  <p className="text-sm text-slate-600 mt-1">Product listing, SKU selector, add-to-cart and checkout flows.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-semibold">Case study — Problem & Approach</h3>
          <div className="mt-3 text-slate-700">
            <p><strong>Problem:</strong> A vendor needed a maintainable e-commerce platform with flexible SKUs, easy product management for non-technical admins, and a fast storefront for customers.</p>
            <p className="mt-2"><strong>Approach:</strong> Built a React frontend that consumes a .NET REST API. Admin endpoints sit under <code className="bg-slate-100 px-1 rounded">/admin</code>. Data models include Product, SKU, Category (hierarchical). Implemented server-side validation for product pre-order logic.</p>
            <p className="mt-2"><strong>Challenges:</strong> SKU combinations, ensuring frontend and backend validation match, and graceful handling of pre-order items. Solved by canonical SKU mapping on backend and defensive UI that prevents invalid selections.</p>
          </div>

          <div className="mt-4 bg-slate-50 p-4 rounded">
            <h4 className="font-semibold">Quick architecture</h4>
            <ul className="mt-2 text-sm text-slate-700">
              <li>Frontend: React (Vite) + Tailwind</li>
              <li>Backend: .NET Web API, Entity Framework Core, SQL Server / Postgres</li>
              <li>Auth: JWT for API, cookie/auth flow for admin</li>
              <li>Hosting: Frontend on Vercel, Backend on Azure / DigitalOcean / Docker container</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-semibold">Screenshots</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="rounded-lg overflow-hidden border border-slate-100 bg-white">
                <img src={`https://via.placeholder.com/800x450?text=Screenshot+${i}`} alt={`screenshot-${i}`} className="w-full h-44 object-cover" />
                <div className="p-3 text-sm text-slate-700">Screenshot {i} — caption about this view (e.g., admin product list, product edit, checkout, order page)</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 bg-slate-50 p-4 rounded">
          <h3 className="text-lg font-semibold">Demo & How to try</h3>
          <p className="mt-2 text-slate-700">Open the storefront link above. For admin access (demo), you can add temporary credentials here or request access. Example (replace with real demo creds if you want):</p>
          <pre className="mt-3 p-3 bg-white rounded text-sm text-slate-700 border">Admin: demo@demo.com
Password: DemoPass123</pre>
        </section>

        <section className="mt-8 flex flex-col sm:flex-row gap-6 items-start justify-between p-6 border border-slate-100 rounded">
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <p className="mt-2 text-slate-700">Email: <a href={`mailto:${EMAIL}`} className="text-emerald-600">{EMAIL}</a></p>
            <p className="mt-1 text-slate-700">GitHub: <a href={REPO} target="_blank" rel="noreferrer" className="text-emerald-600">{REPO}</a></p>
          </div>

          <div className="text-right">
            <a href="/resume.pdf" className="inline-block bg-slate-900 text-white px-4 py-2 rounded-lg">Download Resume</a>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-100 mt-12 py-6">
        <div className="max-w-5xl mx-auto px-6 text-sm text-slate-500">© {new Date().getFullYear()} Gregory Ng. Built with React &amp; .NET.</div>
      </footer>
    </div>
  )
}
