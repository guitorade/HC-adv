import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'

export default function GoogleRating() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="bg-white py-16" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <p className="font-playfair font-bold text-black text-xl mb-1">
          Avaliação 5.0 no Google
        </p>
        <p className="font-inter text-gray-light text-sm">
          Baseado nas avaliações dos nossos clientes
        </p>
      </motion.div>
    </section>
  )
}
