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
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-inter text-gold text-sm uppercase tracking-widest font-semibold mb-3">Profissionais</p>
            <h2 className="font-playfair font-bold text-white text-3xl md:text-4xl">Nossa equipe</h2>
          </motion.div>
        </div>
      </section>

      {/* Team members */}
      <section className="bg-white py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                className="bg-white border border-gray-200 rounded-sm overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                {/* Foto grande no topo */}
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-96 object-cover object-top"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-96 bg-navy-light flex items-center justify-center">
                    <User size={80} className="text-gold/40" />
                  </div>
                )}

                {/* Info */}
                <div className="p-8 text-center">
                  <h2 className="font-playfair font-bold text-black text-2xl mb-1">{member.name}</h2>
                  <p className="font-inter font-semibold text-gold text-sm mb-1">{member.role}</p>
                  <p className="font-inter text-gray-light text-xs mb-6">{member.oab}</p>
                  <div className="h-px bg-gold/30 mb-6" />
                  <p className="font-inter text-graphite text-sm leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex items-center justify-center gap-3">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}
