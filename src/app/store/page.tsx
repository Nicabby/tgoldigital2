'use client'

import Link from 'next/link'
import TGOLBrandLogo from '@/components/TGOLBrandLogo'

// Styling mirrors the shop page on gameoflifestyle.com:
// flat cream cards, large product photos, centred heavy titles, green prices.
const HEAVY = 'Avenir, "Avenir Next", Nunito, sans-serif'
const RED = '#B9340B'
const GREEN = '#498379'
const GREY = '#555555'
const CARD_BG = '#FCF9EB'
const SHOP_URL = 'https://www.gameoflifestyle.com/shop'

const wixImage = (id: string) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_600,h_600,al_c,q_85,enc_auto/${id}`

const products = [
  {
    id: 'ice-breaker-edition',
    name: 'Ice Breaker Edition | Card Game for Swingers to Break the Ice',
    price: 'US$24.95',
    image: wixImage('9c36da_ec54bc7803714da8b9a1ca284273e1e4~mv2.webp'),
    ribbon: null as string | null,
    url: 'https://www.gameoflifestyle.com/product-page/ice-breaker-edition',
  },
  {
    id: 'hot-n-heavy-edition',
    name: 'Hot ’n Heavy Edition | Sizzling Action Game for Swingers',
    price: 'US$24.95',
    image: wixImage('9c36da_92b49355092449ad9c86f898e8a65fdf~mv2.webp'),
    ribbon: null as string | null,
    url: 'https://www.gameoflifestyle.com/product-page/hot-n-heavy-edition',
  },
  {
    id: 'extra-hot-vol-1',
    name: 'Extra Hot Expansion Pack Vol 1 | Sizzling Add-On for Hot ’n Heavy Edition',
    price: 'US$12.95',
    image: wixImage('9c36da_28d14934be5c460d8bc452a911db549d~mv2.webp'),
    ribbon: 'Expansion Pack',
    url: 'https://www.gameoflifestyle.com/product-page/hot-n-heavy-extra-hot-expansion-pack',
  },
  {
    id: 'extra-hot-vol-2',
    name: 'Extra Hot Expansion Pack Vol 2 | Blazing Hot Add-On for Hot ’n Heavy Edition',
    price: 'US$12.95',
    image: wixImage('9c36da_2f754481cefb49c7acc1515a40138e5d~mv2.webp'),
    ribbon: 'Expansion Pack',
    url: 'https://www.gameoflifestyle.com/product-page/hot-n-heavy-extra-hot-expansion-pack-vol-2',
  },
]

const perks = [
  { title: 'Discreet Packaging', text: 'Plain brown boxes' },
  { title: 'US Shipping', text: '3-6 business days' },
  { title: 'International Shipping', text: '10-14 business days' },
  { title: 'Secure Checkout', text: 'SSL encrypted' },
]

const whyPhysical = [
  { title: 'Premium Quality', text: 'Luxurious card stock with beautiful Gil Elvgren-inspired artwork' },
  { title: 'No Screens', text: 'Keep devices away for intimate, focused connection' },
  { title: 'Perfect Gift', text: 'Surprise your partner or friends with a unique experience' },
  { title: 'Romantic Ambiance', text: 'Candlelit evenings without screen glare' },
]

const testimonials = [
  { quote: 'TGOL brought so much fun and intimacy back to our relationship. The cards are beautifully designed!', who: 'Sarah & Mike, married 7 years' },
  { quote: "Perfect for our couples' game night. Everyone had a blast and it broke the ice beautifully.", who: 'The Johnsons & friends' },
  { quote: "High quality cards with tasteful, artistic design. Much better than similar games we've tried.", who: 'Alex & Jordan' },
]

const faqs = [
  { q: 'How discreet is the packaging?', a: 'All orders ship in plain brown boxes with no external branding or product descriptions. The return address is generic.' },
  { q: 'What age range is this appropriate for?', a: 'TGOL is designed for adults 18+ only. The content ranges from flirty and romantic to more intimate, depending on the spice level.' },
  { q: 'Can we play with just two people?', a: "Absolutely! While TGOL works great for groups, it's equally fun and intimate for couples." },
  { q: "What if we don't like a particular card or category?", a: "The golden rule is that anyone can skip any card without explanation. You're also free to remove cards from the deck that don't suit your preferences." },
  { q: 'Do you offer international shipping?', a: 'Yes! US orders arrive in 3-6 business days, and international orders arrive in 10-14 business days.' },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center mb-8"
      style={{ color: RED, fontFamily: HEAVY, fontWeight: 800, fontSize: 'clamp(24px, 4vw, 30px)' }}>
      {children}
    </h2>
  )
}

export default function Store() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F3E2', fontFamily: HEAVY }}>
      <header className="w-full pt-6 pb-2">
        <TGOLBrandLogo />
      </header>

      <main className="mx-auto px-4 sm:px-6 pb-20" style={{ maxWidth: 1200 }}>
        {/* Intro */}
        <div className="text-center mb-10">
          <Link href="/"
            className="inline-block text-sm tracking-wider mb-6 hover:opacity-70 transition-opacity"
            style={{ color: GREY, fontWeight: 600 }}>
            ← BACK TO HOME
          </Link>
          <h1 style={{ color: RED, fontWeight: 800, fontSize: 'clamp(30px, 5vw, 36px)', lineHeight: 1.3 }}>
            Shop Games
          </h1>
          <p className="mx-auto mt-3"
            style={{ color: GREY, fontWeight: 700, fontSize: 'clamp(18px, 3vw, 24px)', lineHeight: 1.4, maxWidth: 760 }}>
            For more information and sample cards, or to purchase, simply click below.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {products.map(product => (
            <a key={product.id} href={product.url} target="_blank" rel="noopener noreferrer"
              className="group block relative" style={{ backgroundColor: CARD_BG }}>
              {product.ribbon && (
                <span className="absolute top-3 left-3 z-10 text-white text-sm"
                  style={{ backgroundColor: GREY, borderRadius: 10, padding: '2px 12px', fontWeight: 300 }}>
                  {product.ribbon}
                </span>
              )}
              <div className="aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.image} alt={product.name.split(' | ')[0]} loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="px-5 pt-2 pb-7 text-center">
                <h3 className="group-hover:opacity-75 transition-opacity"
                  style={{ color: GREY, fontWeight: 800, fontSize: 15, lineHeight: '20px' }}>
                  {product.name}
                </h3>
                <p className="mt-2" style={{ color: GREEN, fontWeight: 300, fontSize: 16 }}>
                  {product.price}
                </p>
              </div>
            </a>
          ))}
        </div>

        <p className="text-center mb-16" style={{ color: GREY, fontSize: 17, lineHeight: 1.6 }}>
          For more products, including our <strong>Threesome</strong> and <strong>Wet &apos;n Wild</strong> decks, visit{' '}
          <a href={SHOP_URL} target="_blank" rel="noopener noreferrer"
            className="underline hover:opacity-70 transition-opacity" style={{ color: RED, fontWeight: 700 }}>
            gameoflifestyle.com/shop
          </a>
        </p>

        {/* Shipping & checkout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {perks.map(p => (
            <div key={p.title} className="text-center py-6 px-3" style={{ backgroundColor: CARD_BG }}>
              <h3 style={{ color: GREY, fontWeight: 800, fontSize: 15 }}>{p.title}</h3>
              <p className="mt-1" style={{ color: GREEN, fontWeight: 300, fontSize: 15 }}>{p.text}</p>
            </div>
          ))}
        </div>

        {/* Why physical cards */}
        <section className="mb-20">
          <SectionTitle>Why Choose Physical Cards?</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyPhysical.map(w => (
              <div key={w.title} className="text-center py-8 px-5" style={{ backgroundColor: CARD_BG }}>
                <h3 className="mb-2" style={{ color: GREY, fontWeight: 800, fontSize: 16 }}>{w.title}</h3>
                <p style={{ color: GREY, fontWeight: 300, fontSize: 15, lineHeight: 1.5 }}>{w.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <SectionTitle>What Our Players Say</SectionTitle>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map(t => (
              <figure key={t.who} className="py-8 px-6 text-center" style={{ backgroundColor: CARD_BG }}>
                <div className="mb-3 tracking-widest" style={{ color: RED, fontSize: 14 }} aria-label="5 stars">★★★★★</div>
                <blockquote className="italic mb-4" style={{ color: GREY, fontWeight: 300, fontSize: 16, lineHeight: 1.6 }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption style={{ color: GREEN, fontWeight: 700, fontSize: 14 }}>{t.who}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto" style={{ maxWidth: 800 }}>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <div style={{ borderTop: '1px solid #e2dcc4' }}>
            {faqs.map(f => (
              <div key={f.q} className="py-5" style={{ borderBottom: '1px solid #e2dcc4' }}>
                <h3 className="mb-2" style={{ color: GREY, fontWeight: 800, fontSize: 17 }}>{f.q}</h3>
                <p style={{ color: GREY, fontWeight: 300, fontSize: 16, lineHeight: 1.6 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
