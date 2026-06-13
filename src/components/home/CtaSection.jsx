import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Button from '../ui/Button'

export default function CtaSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="bg-navy py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#152238_0%,_#0A1628_70%)]" />
      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-playfair font-bold text-white text-3xl md:text-4xl leading-tight mb-6">
          Precisa de assessoria jurídica?
        </h2>
        <p className="font-inter text-gray-300 text-lg mb-10">
          Entre em contato e agende uma consulta. Atendemos em todo o Brasil.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="https://wa.me/5531984995968?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20jur%C3%ADdicos."
            variant="primary"
            size="lg"
          >
            Fale conosco pelo WhatsApp
          </Button>
          <Button to="/contato" variant="outline" size="lg">
            Envie uma mensagem
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
