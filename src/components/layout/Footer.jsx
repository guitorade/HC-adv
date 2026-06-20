import { Link } from 'react-router-dom'
import { MessageCircle, Mail } from 'lucide-react'

function InstagramIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Logo + tagline */}
          <div>
            <div className="mb-4">
              <img
                src="https://res.cloudinary.com/dzgvyu921/image/upload/c_fit,h_80,q_auto,f_auto/v1781917659/PROJETOS/HC-ADVOGADOS/branding%20logo-nome.png"
                alt="Henrique e Castro Advogados"
                className="h-20 w-auto"
                loading="lazy"
              />
            </div>
            <p className="font-inter text-sm text-gray-400 leading-relaxed">
              Proteção de patrimônios, negócios, reputações e liberdades em todo o território nacional.
            </p>
          </div>

          {/* Col 2 — Menu rápido */}
          <div>
            <h4 className="font-inter font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Menu Rápido
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/sobre', label: 'Sobre Nós' },
                { to: '/areas-de-atuacao', label: 'Áreas de Atuação' },
                { to: '/equipe', label: 'Equipe' },
                { to: '/blog', label: 'Publicações' },
                { to: '/contato', label: 'Contato' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-inter text-sm text-gray-400 hover:text-gold transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Áreas */}
          <div>
            <h4 className="font-inter font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Áreas de Atuação
            </h4>
            <nav className="flex flex-col gap-2">
              {['Tributário', 'Empresarial', 'Agronegócio', 'Penal', 'Penal Econômico'].map((area) => (
                <Link
                  key={area}
                  to="/areas-de-atuacao"
                  className="font-inter text-sm text-gray-400 hover:text-gold transition-colors"
                >
                  {area}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4 — Contato */}
          <div>
            <h4 className="font-inter font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5531984995968"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-inter text-sm text-gray-400 hover:text-gold transition-colors"
              >
                <MessageCircle size={16} className="text-gold shrink-0" />
                (31) 98499-5968
              </a>
              <a
                href="mailto:henriqueecastroadvogados@gmail.com"
                className="flex items-center gap-3 font-inter text-sm text-gray-400 hover:text-gold transition-colors"
              >
                <Mail size={16} className="text-gold shrink-0" />
                henriqueecastroadvogados@gmail.com
              </a>
              <a
                href="https://instagram.com/henriqueecastroadvogados"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-inter text-sm text-gray-400 hover:text-gold transition-colors"
              >
                <InstagramIcon size={16} className="text-gold shrink-0" />
                @henriqueecastroadvogados
              </a>
              <p className="font-inter text-xs text-gray-500 mt-4">
                De segunda a sexta-feira, das 9h às 18h.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gold/30 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-gray-500">
            © 2026 Henrique e Castro Advogados. Todos os direitos reservados.
          </p>
          <p className="font-inter text-xs text-gray-600">
            Desenvolvido por TUCtech
          </p>
        </div>
      </div>
    </footer>
  )
}
