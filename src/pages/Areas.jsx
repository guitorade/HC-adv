import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { CheckCircle2 } from 'lucide-react'
import { areas } from '../data/areas'
import Button from '../components/ui/Button'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Areas() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <Helmet>
        <title>Áreas de Atuação | Henrique e Castro Advogados</title>
        <meta name="description" content="Tributário, Empresarial, Agronegócio, Penal e Penal Econômico. Assessoria jurídica estratégica para proteção de patrimônios, negócios e liberdades." />
        <meta property="og:title" content="Áreas de Atuação | Henrique e Castro Advogados" />
        <meta property="og:description" content="Tributário, Empresarial, Agronegócio, Penal e Penal Econômico. Assessoria jurídica estratégica." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://henriquecastro.adv.br/areas-de-atuacao" />
      </Helmet>

      {/* Mini Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-inter text-gold text-sm uppercase tracking-widest font-semibold">Especialidades</p>
          </motion.div>
        </div>
      </section>

      {/* Grid de cards com foto */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {areas.map((area, i) => (
              <motion.button
                key={area.id}
                onClick={() => setOpenIndex(i)}
                className={`relative group overflow-hidden rounded-sm h-64 w-full max-w-sm ${
                  openIndex === i ? 'ring-2 ring-gold' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <img
                  src={area.photo}
                  alt={area.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="font-playfair font-bold text-white text-xl md:text-2xl text-left">{area.title}</h3>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Painel de detalhes */}
          <AnimatePresence mode="wait">
            {openIndex !== null && (
              <motion.div
                key={areas[openIndex].id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden mt-14"
              >
                <div className="border-t border-gray-200 pt-12">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    <div className="lg:col-span-2">
                      <img
                        src={areas[openIndex].photo}
                        alt={areas[openIndex].title}
                        className="w-full h-64 lg:h-80 object-cover rounded-sm"
                        loading="lazy"
                      />
                    </div>

                    <div className="lg:col-span-3">
                      <h2 className="font-playfair font-bold text-black text-2xl md:text-3xl mb-6">
                        {areas[openIndex].title}
                      </h2>
                      <div className="space-y-4 font-inter text-graphite text-base leading-relaxed mb-8">
                        {areas[openIndex].description.split('\n\n').map((paragraph, pi) => (
                          <p key={pi}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="h-px bg-gold/30 mb-6" />
                      <p className="font-inter font-semibold text-black text-sm uppercase tracking-wider mb-4">
                        Principais áreas de atuação
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {areas[openIndex].services.map((service) => (
                          <li key={service} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                            <span className="font-inter text-graphite text-sm leading-relaxed">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-playfair font-bold text-white text-3xl mb-6">
            Encontrou a área que precisa?
          </h2>
          <p className="font-inter text-gray-300 mb-8">
            Entre em contato e converse com nossa equipe.
          </p>
          <Button to="/contato" variant="primary" size="lg">
            Fale conosco
          </Button>
        </div>
      </section>
    </motion.main>
  )
}
