import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import BlogCard from '../components/blog/BlogCard'
import { blogPosts } from '../data/blog-posts'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Blog() {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <Helmet>
        <title>Blog | Henrique e Castro Advogados</title>
        <meta name="description" content="Artigos e conteúdos sobre Direito Tributário, Empresarial, Agronegócio, Penal e Penal Econômico." />
        <meta property="og:title" content="Blog | Henrique e Castro Advogados" />
        <meta property="og:description" content="Artigos e conteúdos sobre Direito Tributário, Empresarial, Agronegócio, Penal e Penal Econômico." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://henriquecastro.adv.br/blog" />
      </Helmet>

      {/* Mini Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-inter text-gold text-sm uppercase tracking-widest font-semibold mb-3">Publicações</p>
            <h1 className="font-playfair font-bold text-white text-4xl md:text-5xl">Conteúdo & Artigos</h1>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}
