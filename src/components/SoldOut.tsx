import Image from "next/image";

export default function SoldOut() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-sky-50 via-white to-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[12%] left-[8%] w-40 h-20 bg-sky-100/50 rounded-full blur-3xl animate-float" />
        <div className="absolute top-[22%] right-[12%] w-28 h-14 bg-green-50/50 rounded-full blur-2xl animate-float delay-200" />
        <div className="absolute top-[8%] right-[35%] w-20 h-10 bg-sky-100/40 rounded-full blur-xl animate-float delay-400" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="mb-8 flex justify-center animate-fade-in-up">
          <Image
            src="/logo.png"
            alt="JÆJA!"
            width={260}
            height={123}
            priority
          />
        </div>

        <div className="animate-fade-in-up delay-100">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-bold tracking-widest uppercase mb-6">
            Uppselt
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-6">
            Takk fyrir frábærar móttökur!
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed mb-4">
            Fyrsta upplag af JÆJA! er uppselt.
          </p>
          <p className="text-base text-muted leading-relaxed">
            Við opnum kannski aftur síðar ef við látum prenta meira — fylgdu okkur á samfélagsmiðlum til að fá fréttir.
          </p>

          <div className="flex items-center justify-center gap-5 mt-10">
            <a href="https://www.facebook.com/profile.php?id=61573236307655" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-green-600 hover:text-green-700 transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/jaeja2026/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-green-600 hover:text-green-700 transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@jaeja2026" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-green-600 hover:text-green-700 transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.84 4.84 0 01-3.77-1.8v-.02l.04.04V6.69h3.73z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
