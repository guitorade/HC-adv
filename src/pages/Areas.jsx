import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Scale, Briefcase, Shield, Landmark, CheckCircle2 } from 'lucide-react'
import { areas } from '../data/areas'
import Button from '../components/ui/Button'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const icons = { Scale, Briefcase, Shield, Landmark }

export default function Areas() {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <Helmet>
        <title>Áreas de Atuação | Henrique e Castro Advogados</title>
        <meta name="description" content="Tributário, Empresarial, Penal e Agronegócios. Assessoria jurídica especializada." />
        <meta property="og:title" content="Áreas de Atuação | Henrique e Castro Advogados" />
        <meta property="og:description" content="Tributário, Empresarial, Penal e Agronegócios. Assessoria jurídica especializada." />
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

      {/* Areas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {areas.map((area, i) => {
            const Icon = icons[area.icon]
            const isEven = i % 2 === 0
            return (
              <motion.section
                key={area.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                {/* Icon + title block */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-navy rounded-sm mb-6">
                    {Icon && <Icon size={30} className="text-gold" />}
                  </div>
                  <h2 className="font-playfair font-bold text-black text-3xl mb-4">{area.title}</h2>
                  <p className="font-inter text-graphite text-base leading-relaxed mb-6">{area.description}</p>
                  <div className="h-px bg-gold/30 mb-6" />
                  <p className="font-inter font-semibold text-black text-sm uppercase tracking-wider mb-4">
                    Serviços prestados
                  </p>
                  <ul className="space-y-3">
                    {area.services.map((service) => (
                      <li key={service} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                        <span className="font-inter text-graphite text-sm leading-relaxed">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative panel */}
                <div className={`${!isEven ? 'lg:order-1' : ''} hidden lg:block`}>
                  <div className="relative h-80 bg-navy rounded-sm flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      {Icon && <Icon size={64} className="text-gold/20 mx-auto mb-4" />}
                      <p className="font-playfair text-white/10 text-5xl font-bold">{area.title}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold/40" />
                  </div>
                </div>
              </motion.section>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-playfair font-bold text-white text-3xl mb-6">
            Encontrou a área que precisa?
          </h2>
          <p className="font-inter text-gray-300 mb-8">
            Entre em contato e agende uma consulta. Nossa equipe está pronta para atender você.
          </p>
          <Button to="/contato" variant="primary" size="lg">
            Fale conosco
          </Button>
        </div>
      </section>
    </motion.main>
  )
}
