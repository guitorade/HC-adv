import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Monitor, Users } from 'lucide-react'

const items = [
  {
    icon: MapPin,
    title: 'Atuação Nacional',
    desc: 'Presença em todo o território brasileiro',
  },
  {
    icon: Monitor,
    title: '100% Digital',
    desc: 'Atendimento ágil e sem barreiras geográficas',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    desc: 'Cada cliente, uma estratégia única',
  },
]

export default function Differentials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="bg-navy py-24" ref={ref}>
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
