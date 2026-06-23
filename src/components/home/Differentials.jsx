import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Fingerprint, Layers } from 'lucide-react'

const items = [
  {
    icon: MapPin,
    title: 'Atendimento Nacional',
    desc: 'Atuação em todo o território brasileiro, com atendimento presencial e digital, sem barreiras geográficas.',
  },
  {
    icon: Fingerprint,
    title: 'Soluções Personalizadas',
    desc: 'Cada cliente possui necessidades únicas. Nossas estratégias são desenvolvidas de forma individualizada, considerando o contexto, os objetivos e os riscos específicos de cada situação.',
  },
  {
    icon: Layers,
    title: 'Visão Multidisciplinar',
    desc: 'Integramos diferentes áreas do Direito para oferecer soluções completas, coerentes e estrategicamente alinhadas às demandas de cada caso.',
  },
]

export default function Differentials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="bg-navy py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gold/30">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="flex flex-col items-center text-center px-8 py-10"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Icon size={36} className="text-gold mb-5" />
              <h3 className="font-playfair font-bold text-white text-xl mb-3">{title}</h3>
              <p className="font-inter text-gray-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
