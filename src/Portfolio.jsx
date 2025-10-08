import React , { useState } from 'react'

const EMAIL = 'gregng93@gmail.com'

const screenshots = [
  '/screenshot_storefront.png',
  '/screenshot_storefront_2.png',
  '/screenshot_productdetail.png',
  '/screenshot_review.png',
  '/screenshot_login.png',
  '/screenshot_catalogue.png',
  '/screenshot_rewards.png',
  '/screenshot_admin.png',
  '/screenshot_admin_inquiry.png',
  '/screenshot_admin_management.png',
  '/screenshot_admin_orderdetail.png',
  '/screenshot_vouchermanagement.png',
]

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [zoom, setZoom] = useState(1)
  const [initialDistance, setInitialDistance] = useState(null)

  const handleImageClick = (src) => setSelectedImage(src)
  const handleCloseModal = (e) => {
    if (e.target.id === 'modal-bg') setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">Gregory Ng — Full Stack Developer</h1>
		  <p className="mt-2 text-slate-600">Email: {EMAIL}</p>
          <p className="mt-2 text-slate-600">Built production-ready e‑commerce platforms with inventory management systems.</p>
		  <p className="mt-2 text-slate-600">Featured Project: Ardency — a full storefront + admin system with rich integrated features.</p>
        </div>

        <div className="flex gap-3"></div>

      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20 space-y-8">
        {/* HERO + QUICK STATS */}
        <section className="bg-gradient-to-r from-white to-slate-50 rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="sm:flex sm:gap-6 items-center">
            <div className="sm:flex-1">
              <h2 className="text-2xl font-semibold">E‑commerce Platform</h2>
              <p className="mt-2 text-slate-600">A robust e-commerce solution, including a backend inventory management system, designed to provide a seamless shopping experience for customers and powerful management tools for administrators. Built with a modern frontend and a scalable backend, it supports a wide array of functionalities from product browsing to order fulfillment and advanced analytics.</p>

              <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-700">
                <span className="px-2 py-1 bg-slate-100 rounded">React JS</span>
                <span className="px-2 py-1 bg-slate-100 rounded">.NET Core / EF Core</span>
                <span className="px-2 py-1 bg-slate-100 rounded">SQL</span>
                <span className="px-2 py-1 bg-slate-100 rounded">JWT / CSRF</span>
                <span className="px-2 py-1 bg-slate-100 rounded">Backblaze</span>
              </div>

              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                <li><strong>Role:</strong> Full-stack (frontend + backend)</li>
                <li><strong>Components:</strong> Storefront, Admin dashboard, API</li>
              </ul>
            </div>

            <div className="sm:w-96 mt-6 sm:mt-0">
              <div className="rounded-lg overflow-hidden border border-slate-100 bg-white">
                <img src={screenshots[0]} alt="storefront" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">Storefront & Homepage</h3>
                  <p className="text-sm text-slate-600 mt-1">Fast product browsing, search, category navigation and promotional banners.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED FEATURES */}
        <section>
          <h3 className="text-xl font-semibold">I. Core E-commerce & Customer Experience</h3>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
            <div className="space-y-3">
              <h4 className="font-semibold mt-3">Intuitive Product Catalog & Browsing:</h4>
              <ul className="list-disc pl-5">
                <li>Hierarchical categories (Categories → Subcategories → Products).</li>
                <li>SKU & Variant system — Specification, VariantValue, SKU mapping and stock/price per SKU.</li>
                <li>Product images, gallery, and server-side image handling (Backblaze integration).</li>
                <li>Redeemable products and voucher-aware product flows.</li>
				<li>Dynamic product listings with categories and search capabilities.</li>
				<li>Responsive design for a consistent experience across devices.</li>
              </ul>

              <h4 className="font-semibold mt-3">Cart & Checkout</h4>
              <ul className="list-disc pl-5">
                <li>Effortless addition and management of items in the shopping cart.</li>
                <li>Secure and guided checkout process for a smooth purchase journey.</li>
                <li>Pre-order handling for items.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold mt-3">Personalized User Accounts</h4>
              <ul className="list-disc pl-5">
                <li>Secure user registration, login, and password management (forgot/reset).</li>
                <li>Personalized dashboards for order history, profile management, and loyalty points module.</li>
              </ul>
			  
			  <h4 className="font-semibold mt-3">Customer Engagement & Support</h4>
              <ul className="list-disc pl-5">
                <li>Integrated customer review system for product feedback.</li>
                <li>"Contact Us" forms and direct WhatsApp integration for immediate support.</li>
              </ul>
			  
			  <h4 className="font-semibold mt-3">Loyalty & Rewards Program</h4>
              <ul className="list-disc pl-5">
                <li>Points system to reward customer loyalty and encourage repeat purchases.</li>
                <li>Voucher redemption functionality for discounts and promotions.</li>
              </ul>
            </div>
          </div>
        </section>
		<section>
		  <h3 className="text-xl font-semibold">II. Powerful Administrator & Business Management Tools</h3>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
            <div className="space-y-3">
              <h4 className="font-semibold mt-3">Comprehensive Dashboard & Analytics</h4>
              <ul className="list-disc pl-5">
                <li>Centralized admin dashboard for an overview of business operations.</li>
                <li>Sales analytics to track performance and identify trends.</li>
                <li>Voucher analytics for monitoring promotional campaign effectiveness.</li>
                <li>Role-based access for admin-related modules.</li>
              </ul>

              <h4 className="font-semibold mt-3">Product & Inventory Control</h4>
              <ul className="list-disc pl-5">
                <li>Full CRUD (Create, Read, Update, Delete) capabilities for products and categories.</li>
                <li>Management of product variants and specifications.</li>
                <li>Dedicated functionality for managing deleted products and categories.</li>
				<li>Stock management designed to increaase efficiency.</li>
              </ul>
			  </div>
			  <div className="space-y-3">
			  <h4 className="font-semibold mt-3">Order & Customer Relationship Management (CRM)</h4>
              <ul className="list-disc pl-5">
                <li>Detailed order listing and individual order detail views.</li>
                <li>Review management to moderate and respond to customer feedback.</li>
                <li>Inquiry management system to handle customer queries efficiently.</li>
              </ul>
			  
			  <h4 className="font-semibold mt-3">Promotional & Marketing Tools</h4>
              <ul className="list-disc pl-5">
                <li>Robust voucher creation and management system.</li>
                <li>Tools for redeeming vouchers and tracking their usage</li>
                <li>Content & Asset Management with image manager for uploading, organizing, and linking product images.</li>
              </ul>
            </div>
          </div>
		</section>

        {/* CASE STUDY */}
        <section className="bg-slate-50 p-4 rounded">
          <h3 className="text-lg font-semibold">Technical approach</h3>
          <div className="mt-2 text-slate-700 space-y-2">
            <p><strong>Architecture:</strong> React frontend and a .NET Web API backend (Entity Framework Core) hosting all business logic and data persistence. Media stored in Backblaze.</p>
            <p><strong>Security:</strong> JWT-based auth for API access, CSRF protection for admin actions, server-side validation to ensure SKU integrity and order correctness.</p>
            <p><strong>Operational:</strong> Background services for voucher expiry notifications, points expiry, log rotation, and queued email sending.</p>
          </div>
        </section>

        {/* SCREENSHOTS GRID */}
        <section>
          <h3 className="text-xl font-semibold">Screenshots</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {screenshots.map((s, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden border border-slate-100 bg-white" onClick={() => handleImageClick(s)}>
                <img src={s} alt={`screenshot-${idx}`} className="w-full h-44 object-cover" />
                <div className="p-3 text-sm text-slate-700">{idx === 0 ? 'Storefront' : idx === 1 ? 'Storefront 2' : idx === 2 ? 'Product details' : idx === 3 ? 'Reviews' : idx === 4 ? 'Login' : idx === 5 ? 'Public Catalogues' : idx === 6 ? 'Rewards' : idx === 7 ? 'Admin - Dashboard' : idx === 8 ? 'Admin - Inquiries' : idx === 9 ? 'Admin - Management' : idx === 10 ? 'Admin - Order Details' : 'Admin - Voucher Management'}</div>
              </div>
            ))}
          </div>
        </section>
		
        {/* TECH STACK & ARCHITECTURE */}
        <section className="bg-slate-50 p-4 rounded">
          <div className="bg-white p-4 rounded border">
            <h4 className="font-semibold">Technicals</h4>
            <ul className="mt-3 text-slate-700 list-disc pl-5">
              <li>Frontend: React JS, Context (Auth/Cart/Loading), CSS modules & componentized UI.</li>
              <li>Backend: .NET Core Web API, Entity Framework Core, SQL Server / Postgres.</li>
              <li>Auth & Security: JWT, CSRF protection, server-side validation.</li>
              <li>Media: Backblaze (image service & signed uploads), image manager in admin.</li>
              <li>Operations: Background hosted services for points/voucher expiry and log rotation.</li>
            </ul>
          </div>
        </section>
      </main>
	  
	  {selectedImage && (
  <div
    id="modal-bg"
    onClick={handleCloseModal}
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
  >
    <div
      onClick={(e) => e.stopPropagation()} // prevent close when clicking image
      className="relative overflow-hidden"
    >
      <img
        src={selectedImage}
        alt="screenshot enlarged"
        className="max-w-4xl w-full max-h-[90vh] object-contain rounded-lg shadow-lg cursor-zoom-in transition-transform duration-200 ease-in-out"
        style={{
          transform: `scale(${zoom})`,
          touchAction: 'none',
        }}
        onWheel={(e) => {
          e.preventDefault()
          setZoom((z) => Math.min(Math.max(z + e.deltaY * -0.001, 1), 3))
        }}
        onTouchStart={(e) => {
          if (e.touches.length === 2) {
            const dx = e.touches[0].pageX - e.touches[1].pageX
            const dy = e.touches[0].pageY - e.touches[1].pageY
            setInitialDistance(Math.sqrt(dx * dx + dy * dy))
          }
        }}
        onTouchMove={(e) => {
          if (e.touches.length === 2 && initialDistance) {
            const dx = e.touches[0].pageX - e.touches[1].pageX
            const dy = e.touches[0].pageY - e.touches[1].pageY
            const newDist = Math.sqrt(dx * dx + dy * dy)
            const scaleChange = newDist / initialDistance
            setZoom((z) => Math.min(Math.max(z * scaleChange, 1), 3))
          }
        }}
        onTouchEnd={() => setInitialDistance(null)}
        onDoubleClick={() =>
          setZoom((z) => (z === 1 ? 2 : 1))
        } // double-tap zoom toggle
      />
      <button
        onClick={() => setZoom(1)}
        className="absolute top-3 right-3 bg-white/80 text-black px-3 py-1 rounded-md text-sm hover:bg-white"
      >
        Reset Zoom
      </button>
    </div>
  </div>
)}

	  
      <footer className="border-t border-slate-100 mt-12 py-6">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500">© {new Date().getFullYear()} Gregory Ng. {EMAIL}</div>
      </footer>
    </div>
  )
}