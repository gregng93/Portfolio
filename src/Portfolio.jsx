import React from 'react'
</ul>


<h4 className="font-semibold mt-3">Cart & Checkout</h4>
<ul className="list-disc pl-5">
<li>Persistent cart using CartContext, add/remove/update quantities.</li>
<li>Checkout flow with order creation, order item mapping and server-side validation.</li>
<li>Pre-order handling when price/quantity fields are intentionally omitted.</li>
</ul>
</div>


<div className="space-y-3">
<h4 className="font-semibold">Admin & Operations</h4>
<ul className="list-disc pl-5">
<li>Admin product management (create/edit/delete), including SKU / variant editors.</li>
<li>Admin order management, order detail view and status updates.</li>
<li>Image manager for uploads and media maintenance.</li>
<li>Admin dashboards & analytics for sales, vouchers and redeemable items.</li>
</ul>


<h4 className="font-semibold mt-3">Marketing & Loyalty</h4>
<ul className="list-disc pl-5">
<li>Vouchers and voucher templates with analytics & redemption tracking.</li>
<li>Points system: points transactions, expiry services and user voucher mapping.</li>
<li>Wishlist, user vouchers and redeem flows for loyalty-driven purchases.</li>
</ul>
</div>
</div>
</section>


{/* CASE STUDY */}
<section className="bg-slate-50 p-4 rounded">
<h3 className="text-lg font-semibold">Case study — Technical approach</h3>
<div className="mt-2 text-slate-700 space-y-2">
<p><strong>Architecture:</strong> React frontend served separately (Vercel) and a .NET Web API backend (Entity Framework Core) hosting all business logic and data persistence. Media stored in Backblaze and served via signed URLs.</p>
<p><strong>Security:</strong> JWT-based auth for API access, CSRF protection for admin actions, server-side validation to ensure SKU integrity and order correctness.</p>
<p><strong>Operational concerns:</strong> Background services for voucher expiry notifications, points expiry, log rotation, and queued email sending.</p>
<p><strong>Challenges:</strong> Mapping UI variant selections to canonical SKU entries, keeping frontend validation in sync with backend, and maintaining a usable admin UX for non-technical product managers. Implemented canonical SKU mapping on the backend and defensive UI controls on the frontend.</p>
</div>
</section>


{/* SCREENSHOTS GRID */}
<section>
<h3 className="text-xl font-semibold">Screenshots</h3>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{screenshots.map((s, idx) => (
<div key={idx} className="rounded-lg overflow-hidden border border-slate-100 bg-white">
<img src={s} alt={`screenshot-${idx}`} className="w-full h-44 object-cover" />
<div className="p-3 text-sm text-slate-700">{idx === 0 ? 'Storefront' : idx === 1 ? 'Product detail' : idx === 2 ? 'Admin products' : idx === 3 ? 'Admin orders' : idx === 4 ? 'Image manager' : 'Analytics'}</div>
</div>
))}
</div>
</section>


{/* TECH STACK & ARCHITECTURE */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white p-4 rounded border">
<h4 className="font-semibold">Tech stack</h4>
<ul className="mt-3 text-slate-700 list-disc pl-5">
<li>Frontend: React (create-react-app / Vite adaptable), Context (Auth/Cart/Loading), CSS modules & componentized UI.</li>
<li>Backend: .NET Core Web API, Entity Framework Core, SQL Server / Postgres.</li>
<li>Auth & Security: JWT, CSRF protection, server-side validation.</li>
<li>Media: Backblaze (image service & signed uploads), image manager in admin.</li>
<li>Operations: Background hosted services for points/voucher expiry and log rotation.</li>
</ul>
</div>


<div className="bg-white p-4 rounded border">
<h4 className="font-semibold">API surface & models</h4>
<ul className="mt-3 text-slate-700 list-disc pl-5">
<li><code>/product</code> (public) — product listing, details, search.</li>
<li><code>/cart</code> — cart operations.</li>
<li><code>/checkout</code> / <code>/orders</code> — order creation & management.</li>
<li><code>/admin/*</code> — admin CRUD for products, categories, vouchers, images, orders, reviews.</li>
</ul>
</div>
</section>


{/* DEMO & CONTACT */}
<section className="bg-slate-50 p-4 rounded flex flex-col md:flex-row items-start justify-between gap-4">
<div>
<h4 className="font-semibold">Demo & How to try</h4>
<p className="mt-2 text-slate-700">Open the storefront and admin links above. If you want me to include a temporary admin demo account in the live portfolio, paste the credentials and I will add them into the demo section.</p>
</div>


<div className="text-right">
<p className="text-slate-700">Email: <a href={`mailto:${EMAIL}`} className="text-emerald-600">{EMAIL}</a></p>
<a href={REPO} target="_blank" rel="noreferrer" className="inline-block mt-3 bg-slate-900 text-white px-4 py-2 rounded">View Source</a>
</div>
</section>
</main>


<footer className="border-t border-slate-100 mt-12 py-6">
<div className="max-w-6xl mx-auto px-6 text-sm text-slate-500">© {new Date().getFullYear()} Gregory Ng. Built with React &amp; .NET.</div>
</footer>
</div>
)
}