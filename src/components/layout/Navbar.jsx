import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MessageCircle, Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/areas-de-atuacao', label: 'Áreas de Atuação' },
  { to: '/equipe', label: 'Equipe' },
  { to: '/blog', label: 'Publicações' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dzgvyu921/image/upload/c_fit,h_44,q_auto,f_auto/v1781917658/PROJETOS/HC-ADVOGADOS/branding%20logo.png"
              alt="HC"
              className="h-11 w-auto"
              loading="eager"
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-playfair font-bold text-white text-lg tracking-wide">
                HENRIQUE E CASTRO
              </span>
              <span className="font-inter font-medium text-gold text-xs tracking-widest uppercase text-right">
                Advogados
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-inter text-sm transition-colors duration-200 ${
                    isActive ? 'text-gold' : 'text-white hover:text-gold'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/5531984995968"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold text-navy font-inter font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-sm hover:bg-amber-600 transition-all duration-200 ml-2"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-navy shadow-2xl flex flex-col pt-24 pb-8 px-6 transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-inter text-base py-2 border-b border-navy-light transition-colors ${
                    isActive ? 'text-gold' : 'text-white hover:text-gold'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <a
            href="https://wa.me/5531984995968"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center gap-2 bg-gold text-navy font-inter font-semibold text-sm uppercase tracking-wider px-4 py-3 rounded-sm hover:bg-amber-600 transition-all"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
