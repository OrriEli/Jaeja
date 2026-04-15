import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import EmailForm from "@/components/EmailForm";
import ShopifyBuyButton from "@/components/ShopifyBuyButton";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* ============================================= */}
      {/* 1 · HERO                                      */}
      {/* ============================================= */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-40 bg-gradient-to-b from-sky-50 via-white to-white">
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[12%] left-[8%] w-40 h-20 bg-sky-100/50 rounded-full blur-3xl animate-float" />
          <div className="absolute top-[22%] right-[12%] w-28 h-14 bg-green-50/50 rounded-full blur-2xl animate-float delay-200" />
          <div className="absolute top-[8%] right-[35%] w-20 h-10 bg-sky-100/40 rounded-full blur-xl animate-float delay-400" />
        </div>

        {/* Soft waves at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 260" className="w-full block" preserveAspectRatio="none">
            <path
              fill="#cfeeff"
              fillOpacity=".35"
              d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,218.7C840,224,960,192,1080,176C1200,160,1320,160,1380,160L1440,160L1440,260L0,260Z"
            />
            <path
              fill="#a8dfff"
              fillOpacity=".25"
              d="M0,208L60,202.7C120,197,240,187,360,192C480,197,600,219,720,224C840,229,960,219,1080,202.7C1200,187,1320,165,1380,154.7L1440,144L1440,260L0,260Z"
            />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* Logo */}
          <div className="mb-6 animate-fade-in-up flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="JÆJA!"
              width={320}
              height={152}
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6 animate-fade-in-up delay-100">
            Gerum bílferðir{" "}
            <span className="text-green-400">skemmtilegri</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted max-w-xl mx-auto mb-10 animate-fade-in-up delay-200">
            Leikir, fróðleikur og samvera – allt í einni bók
          </p>

          <div className="animate-fade-in-up delay-300">
            <a
              href="#skraning"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-400 text-white font-bold text-lg rounded-full
                         hover:bg-green-500 hover:scale-105 active:scale-[0.98]
                         transition-all duration-200 shadow-xl shadow-green-400/30"
            >
              Panta bók
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
          </div>

          {/* Book cover image */}
          <div className="mt-16 animate-fade-in-up delay-500 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full">
              <Image
                src="/book-cover.png"
                alt="JÆJA! - Leikjabók fyrir ferðalög"
                width={2000}
                height={1417}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* 4 · WHAT'S IN THE BOOK                        */}
      {/* ============================================= */}
      <section className="py-20 sm:py-28 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
                Hvað er í bókinni?
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Fjölbreyttir leikir", desc: "Leikir sem halda athyglinni, fá alla til að taka þátt og gera ferðalagið skemmtilegt frá upphafi til enda." },
              { title: "Samskipti & samvera", desc: "Leikir sem fá fjölskylduna til að tala saman, hlæja og kynnast betur á ferðinni." },
              { title: "Fræðandi & forvitnilegt", desc: "Verkefni sem vekja áhuga á Íslandi og fá börn til að spyrja spurninga og læra á skemmtilegan hátt." },
              { title: "Athugun & umhverfi", desc: "Leikir sem fá börn til að líta út um gluggann, taka eftir og tengjast því sem þau sjá." },
              { title: "Tússpenni", desc: "Með hverju eintaki fylgir ókeypis tússpenni með innbyggðum töfluhreinsi á lokinu." },
              { title: "Endurnýtanlegt", desc: "Hægt að nota aftur og aftur, þú bara tússar og strokar eins og þú vilt." },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="bg-sky-50 rounded-3xl p-8 border border-sky-100/40 hover:shadow-lg transition-shadow duration-300 h-full">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* 5 · SIGNUP (primary)                           */}
      {/* ============================================= */}
      <section id="skraning" className="py-20 sm:py-28 px-4 bg-sky-50">
        <div className="max-w-xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
                Skráðu þig á pöntunarlista
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Við höfum samband og klárum kaupin
              </p>
            </div>
            <EmailForm />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============================================= */}
      {/* 6 · PAYPAL / SHOPIFY (secondary)               */}
      {/* ============================================= */}
      <section id="kaupa" className="py-14 sm:py-16 px-4 bg-white border-t border-sky-100">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                Viltu frekar borga strax með PayPal?
              </h3>
              <p className="text-muted text-sm">
                Þegar þú kaupir á netinu verður þú að borga í evrum, það er það eina sem er í boði
              </p>
            </div>
            <ShopifyBuyButton />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============================================= */}
      {/* 7 · ABOUT                                     */}
      {/* ============================================= */}
      <section className="py-20 sm:py-28 px-4 bg-sky-50">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-8">
              Saga Jæja
            </h2>
            <div className="space-y-5 text-muted text-lg leading-relaxed">
              <p>
                Við stofnuðum Jæja af því að okkur fannst foreldrar oft ekki hafa marga heilbrigða valkosti til að gefa börnum sínum í bílferðum. Annað hvort leiðist börnunum alla ferðina, eða þá gefa foreldrar þeim snjalltæki til að drepa tímann, ekki af því að þeim langar það heldur vegna þess að það er ekki margt annað í boði. Okkar markmið er að breyta því.
              </p>
              <p>
                Til að ná því markmiði bjuggum við til bók sem inniheldur 30 blaðsíður með skemmtilegum leikjum og áhugaverðum fróðleik. Áhersla leikjanna er á að auka samskipti í bílnum, vekja forvitni og áhuga á Íslandi, bæta læsi og málkunnáttu, og fá krakkana til að skemmta sér án snjalltækja. Ásamt leikjunum er fróðleikur um Ísland og mismunandi landshluta.
              </p>
              <p>
                Við vonum að þessi bók muni gera sumarið aðeins ánægjulegra.<br />
                Góða ferð!
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============================================= */}
      {/* 8 · FINAL CTA                                 */}
      {/* ============================================= */}
      <section className="py-20 sm:py-28 px-4 bg-gradient-to-br from-green-400 to-green-500">
        <div className="max-w-2xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Tilbúin í ferðalagið?
            </h2>
            <a
              href="#skraning"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-full
                         hover:bg-sky-50 hover:scale-105 active:scale-[0.98]
                         transition-all duration-200 shadow-xl shadow-green-800/20"
            >
              Panta bók
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============================================= */}
      {/* 9 · FOOTER                                    */}
      {/* ============================================= */}
      <footer className="py-12 px-4 bg-green-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="text-xl font-black text-white">JÆJA!</span>
            <p className="text-green-100 text-sm mt-1">Leikjabók fyrir ferðalög</p>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://www.facebook.com/profile.php?id=61573236307655" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-green-100 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/jaeja2026/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-green-100 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@jaeja2026" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-green-100 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.84 4.84 0 01-3.77-1.8v-.02l.04.04V6.69h3.73z" />
              </svg>
            </a>
            <a href="mailto:orri.eliasen@gmail.com" aria-label="Email" className="text-green-100 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>

          <p className="text-green-200 text-xs">
            &copy; {new Date().getFullYear()} JÆJA!
          </p>
        </div>
      </footer>
    </main>
  );
}
