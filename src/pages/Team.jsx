import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { User, Mail } from 'lucide-react'
import { team } from '../data/team'

function LinkedinIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function InstagramIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Team() {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <Helmet>
        <title>Nossa Equipe | Henrique e Castro Advogados</title>
        <meta name="description" content="Conheça os advogados da Henrique e Castro. Expertise e dedicação na proteção dos seus interesses." />
        <meta property="og:title" content="Nossa Equipe | Henrique e Castro Advogados" />
        <meta property="og:description" content="Conheça os advogados da Henrique e Castro. Expertise e dedicação." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://henriquecastro.adv.br/equipe" />
      </Helmet>

      {/* Mini Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-inter text-gold text-sm uppercase tracking-widest font-semibold mb-3">Profissionais</p>
            <h1 className="font-playfair font-bold text-white text-4xl md:text-5xl">Nossa Equipe</h1>
          </motion.div>
        </div>
      </section>

      {/* Team members */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                {/* Photo — retangular vertical */}
                <div className="flex flex-col items-center text-center">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-48 h-64 rounded-sm object-cover mb-5 border-2 border-gold/20"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-48 h-64 rounded-sm bg-navy-light flex items-center justify-center mb-5 border-2 border-gold/20">
                      <User size={64} className="text-gold/40" />
                    </div>
                  )}
                  <h2 className="font-playfair font-bold text-black text-xl mb-1">{member.name}</h2>
                  <p className="font-inter font-semibold text-gold text-sm mb-1">{member.role}</p>
                  <p className="font-inter text-gray-light text-xs mb-4">{member.oab}</p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-light hover:text-gold hover:border-gold transition-colors"
                      aria-label="E-mail"
                    >
                      <Mail size={15} />
                    </a>
                    {member.linkedin && member.linkedin !== '#' && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-light hover:text-gold hover:border-gold transition-colors"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon size={15} />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-light hover:text-gold hover:border-gold transition-colors"
                        aria-label="Instagram"
                      >
                        <InstagramIcon size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Bio */}
                <div className="md:col-span-2">
                  <div className="h-px bg-gold/30 mb-6" />
                  <p className="font-inter text-graphite text-base leading-relaxed mb-6">{member.bio}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="font-inter text-sm text-gray-light hover:text-gold transition-colors"
                  >
                    {member.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}
