import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '../ui/SectionTitle'
import { areas } from '../../data/areas'

export default function AreasGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="bg-white py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle eyebrow="Especialidades" center />
        </motion.div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area, i) => (
            <motion.div
              key={area.id}
              className="w-full sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)] xl:w-[calc(20%-10px)]"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                to="/areas-de-atuacao"
                className="relative group block overflow-hidden rounded-sm h-80"
              >
                <img
                  src={area.photo}
                  alt={area.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="font-playfair font-bold text-white text-xl md:text-2xl">
                    {area.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
