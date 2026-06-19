import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

export default function AboutPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="bg-off-white py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text — 60% */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <SectionTitle
              eyebrow="Quem somos"
              title="Assessoria jurídica estratégica e personalizada"
            />
            <p className="font-inter text-graphite text-base leading-relaxed mt-6 mb-8">
              O escritório Henrique e Castro Advogados foi estruturado para atuar além da resolução de conflitos. Assessoramos empresas, empresários, produtores rurais e pessoas físicas na proteção de patrimônios, negócios, reputações e liberdades, com atuação em todo o território nacional.
            </p>
            <Button to="/sobre" variant="outline-dark">
              Conheça o escritório
            </Button>
          </motion.div>

          {/* Image — 40% */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="relative">
              <div className="aspect-[4/5] bg-navy rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-navy-light">
                  <div className="text-center">
                    <p className="font-playfair text-white/20 text-6xl font-bold">H&C</p>
                    <p className="font-inter text-gold/40 text-sm tracking-widest uppercase mt-2">Advogados</p>
                  </div>
                </div>
              </div>
              {/* Gold border accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gold/40 rounded-sm pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
