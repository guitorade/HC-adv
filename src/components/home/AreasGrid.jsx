import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../ui/SectionTitle'
import { areas } from '../../data/areas'

export default function AreasGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="bg-white py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Especialidades"
            title="Áreas de Atuação"
            subtitle="Expertise jurídica especializada para cada necessidade"
            center
          />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.id}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to="/areas-de-atuacao"
                className="group block bg-white border border-gray-200 rounded-sm p-8 hover:border-gold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <div className="w-10 h-1 bg-gold mb-5" />
                <h3 className="font-playfair font-bold text-black text-xl mb-3">
                  {area.title}
                </h3>
                <p className="font-inter text-gray-light text-sm leading-relaxed mb-5">
                  {area.shortDescription}
                </p>
                <span className="inline-flex items-center gap-2 font-inter font-semibold text-gold text-sm group-hover:gap-3 transition-all duration-200">
                  Saiba mais <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
