import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'

function GoogleIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

const testimonials = [
  {
    name: 'Cliente A',
    text: 'Atendimento excepcional. Profissionais atenciosos e comprometidos com o resultado.',
    date: '2026',
  },
  {
    name: 'Cliente B',
    text: 'Escritório muito competente. Resolveram minha questão com agilidade e profissionalismo.',
    date: '2026',
  },
]

export default function GoogleRating() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="bg-white py-16" ref={ref}>
      <motion.div
        className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
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
        <p className="font-inter text-gray-light text-sm mb-10">
          Baseado nas avaliações dos nossos clientes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-off-white border border-gray-200 rounded-sm p-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <GoogleIcon size={16} />
              </div>
              <p className="font-inter text-graphite text-sm leading-relaxed mb-4">
                "{t.text}"
              </p>
              <p className="font-inter font-semibold text-black text-xs">
                {t.name} <span className="text-gray-light font-normal">· {t.date}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
