import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { User } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { team } from '../../data/team'

export default function TeamPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="bg-off-white py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="Nossa Equipe" center />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col sm:flex-row gap-6 items-start"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Avatar */}
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 shrink-0 rounded-sm object-cover border-2 border-gold/30"
                  loading="lazy"
                />
              ) : (
                <div className="w-32 h-32 shrink-0 rounded-sm bg-navy-light flex items-center justify-center">
                  <User size={36} className="text-gold/50" />
                </div>
              )}
              <div>
                <h3 className="font-playfair font-bold text-black text-lg mb-1">{member.name}</h3>
                <p className="font-inter text-gold text-sm font-semibold mb-1">{member.role}</p>
                <p className="font-inter text-gray-light text-xs mb-3">{member.oab}</p>
                <p className="font-inter text-graphite text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button to="/equipe" variant="outline-dark">
            Conheça a equipe completa
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
