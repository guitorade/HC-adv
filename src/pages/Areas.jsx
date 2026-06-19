import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ChevronDown, CheckCircle2 } from 'lucide-react'
import { areas } from '../data/areas'
import Button from '../components/ui/Button'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Areas() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

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
            <p className="font-inter text-gold text-sm uppercase tracking-widest font-semibold mb-3">Especialidades</p>
            <h1 className="font-playfair font-bold text-white text-4xl md:text-5xl">Áreas de Atuação</h1>
          </motion.div>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {areas.map((area, i) => {
              const isOpen = openIndex === i
              return (
                <div key={area.id}>
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between py-6 px-2 text-left group"
                  >
                    <h2 className={`font-playfair font-bold text-2xl md:text-3xl transition-colors duration-300 ${
                      isOpen ? 'text-gold' : 'text-black group-hover:text-gold'
                    }`}>
                      {area.title}
                    </h2>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 ml-4"
                    >
                      <ChevronDown size={24} className={`transition-colors duration-300 ${
                        isOpen ? 'text-gold' : 'text-gray-400 group-hover:text-gold'
                      }`} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 px-2">
                          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                            {area.photo && !area.photo.startsWith('{{') && (
                              <div className="lg:col-span-2">
                                <img
                                  src={area.photo}
                                  alt={area.title}
                                  className="w-full h-64 lg:h-80 object-cover rounded-sm"
                                  loading="lazy"
                                />
                              </div>
                            )}

                            <div className={area.photo && !area.photo.startsWith('{{') ? 'lg:col-span-3' : 'lg:col-span-5'}>
                              <div className="space-y-4 font-inter text-graphite text-base leading-relaxed mb-8">
                                {area.description.split('\n\n').map((paragraph, pi) => (
                                  <p key={pi}>{paragraph}</p>
                                ))}
                              </div>

                              <div className="h-px bg-gold/30 mb-6" />
                              <p className="font-inter font-semibold text-black text-sm uppercase tracking-wider mb-4">
                                Principais áreas de atuação
                              </p>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {area.services.map((service) => (
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
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
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
