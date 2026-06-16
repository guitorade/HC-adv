import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-black/90" />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
      >
        <motion.p
          variants={item}
          className="font-inter text-gold font-semibold text-sm uppercase tracking-[0.3em] mb-6"
        >
          Assessoria Jurídica Estratégica
        </motion.p>

        <motion.h1
          variants={item}
          className="font-playfair font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
        >
          Soluções jurídicas sob medida para pessoas e negócios
        </motion.h1>

        <motion.p
          variants={item}
          className="font-inter text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Atuação especializada em Direito Tributário, Empresarial, Agronegócio, Penal e Penal Econômico
          em todo o território nacional.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/areas-de-atuacao" variant="outline" size="lg">
            Conheça nossas áreas
          </Button>
          <Button to="/contato" variant="primary" size="lg">
            Fale conosco
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
