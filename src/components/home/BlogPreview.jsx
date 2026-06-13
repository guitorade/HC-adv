import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { blogPosts } from '../../data/blog-posts'

const categoryColors = {
  Tributário: 'bg-blue-100 text-blue-800',
  Empresarial: 'bg-emerald-100 text-emerald-800',
  Penal: 'bg-red-100 text-red-800',
  Agronegócios: 'bg-amber-100 text-amber-800',
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric',
  })
}

export default function BlogPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const posts = blogPosts.slice(0, 3)

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
            eyebrow="Blog"
            title="Conteúdo & Artigos"
            subtitle="Análises e orientações sobre as principais questões jurídicas do momento"
            center
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              className="border border-gray-200 rounded-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Cover */}
              <div
                className="h-48 flex items-center justify-center"
                style={{ backgroundColor: post.coverColor }}
              >
                <p className="font-playfair text-white/20 text-5xl font-bold">H&C</p>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`font-inter text-xs font-semibold px-2 py-1 rounded ${categoryColors[post.category] || 'bg-gray-100 text-gray-700'}`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-inter text-xs text-gray-light">
                    <Calendar size={12} />
                    {formatDate(post.date)}
                  </span>
                </div>
                <h3 className="font-playfair font-bold text-black text-base leading-snug mb-3 group-hover:text-navy transition-colors">
                  {post.title}
                </h3>
                <p className="font-inter text-gray-light text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.summary}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-inter font-semibold text-gold text-sm hover:gap-3 transition-all duration-200"
                >
                  Leia mais <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button to="/blog" variant="outline-dark">
            Ver todos os artigos
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
