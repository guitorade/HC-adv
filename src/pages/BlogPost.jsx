import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Calendar, User, ChevronRight, MessageCircle } from 'lucide-react'
import { blogPosts } from '../data/blog-posts'
import BlogCard from '../components/blog/BlogCard'
import Button from '../components/ui/Button'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const categoryColors = {
  Tributário: 'bg-blue-100 text-blue-800',
  Empresarial: 'bg-emerald-100 text-emerald-800',
  Penal: 'bg-red-100 text-red-800',
  Agronegócio: 'bg-amber-100 text-amber-800',
  'Penal Econômico': 'bg-orange-100 text-orange-800',
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric',
  })
}

function renderContent(markdown) {
  const lines = markdown.split('\n')
  const elements = []
  let key = 0

  for (const line of lines) {
    if (line.startsWith('## ')) {
      elements.push(<h2 key={key++} className="font-playfair font-bold text-black text-2xl mt-10 mb-4">{line.replace('## ', '')}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={key++} className="font-inter font-semibold text-black text-xl mt-8 mb-3">{line.replace('### ', '')}</h3>)
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(<p key={key++} className="font-inter font-semibold text-graphite text-base leading-relaxed mb-3">{line.replace(/\*\*/g, '')}</p>)
    } else if (line.trim() === '') {
      elements.push(<div key={key++} className="mb-1" />)
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={key++} className="font-inter text-graphite text-base leading-relaxed ml-4 list-disc mb-1">
          {line.replace('- ', '')}
        </li>
      )
    } else {
      const bold = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      elements.push(
        <p key={key++} className="font-inter text-graphite text-base leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: bold }}
        />
      )
    }
  }

  return elements
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <Helmet>
        <title>{post.title} | Henrique e Castro Advogados</title>
        <meta name="description" content={post.summary} />
        <meta property="og:title" content={`${post.title} | Henrique e Castro Advogados`} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://henriquecastro.adv.br/blog/${post.slug}`} />
      </Helmet>

      {/* Cover + hero */}
      <section
        className="pt-32 pb-16 relative"
        style={{ backgroundColor: post.coverColor }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-inter text-xs text-white/60 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-white/80 truncate max-w-xs">{post.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className={`font-inter text-xs font-semibold px-2 py-1 rounded ${categoryColors[post.category] || 'bg-gray-100 text-gray-700'}`}>
              {post.category}
            </span>
          </div>
          <h1 className="font-playfair font-bold text-white text-3xl md:text-4xl leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 font-inter text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <User size={14} />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(post.date)}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <div className="prose-custom">
                {renderContent(post.content)}
              </div>

              {/* CTA inside article */}
              <div className="mt-12 p-8 bg-navy rounded-sm text-center">
                <p className="font-playfair font-bold text-white text-xl mb-3">
                  Precisa de assessoria sobre este tema?
                </p>
                <p className="font-inter text-gray-300 text-sm mb-6">
                  Nossa equipe está pronta para orientar você.
                </p>
                <Button to="/contato" variant="primary">
                  Fale conosco
                </Button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Contact card */}
              <div className="bg-off-white border border-gray-200 rounded-sm p-6">
                <h3 className="font-playfair font-bold text-black text-lg mb-3">Fale com um advogado</h3>
                <p className="font-inter text-gray-light text-sm leading-relaxed mb-5">
                  Tem dúvidas sobre este tema? Entre em contato para uma consulta personalizada.
                </p>
                <a
                  href="https://wa.me/5531984995968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-inter font-semibold text-sm py-3 rounded-sm hover:brightness-90 transition-all"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <Link
                  to="/contato"
                  className="flex items-center justify-center w-full mt-3 border border-navy text-navy font-inter font-semibold text-sm py-3 rounded-sm hover:bg-navy hover:text-white transition-all"
                >
                  Enviar mensagem
                </Link>
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div>
                  <h3 className="font-inter font-semibold text-black text-sm uppercase tracking-wider mb-4">
                    Artigos relacionados
                  </h3>
                  <div className="space-y-4">
                    {related.map((rp) => (
                      <Link
                        key={rp.id}
                        to={`/blog/${rp.slug}`}
                        className="block border border-gray-200 rounded-sm overflow-hidden hover:shadow-md transition-shadow group"
                      >
                        <div className="h-24 flex items-center justify-center" style={{ backgroundColor: rp.coverColor }}>
                          <span className="font-playfair text-white/20 text-2xl font-bold">H&C</span>
                        </div>
                        <div className="p-4">
                          <span className={`font-inter text-xs font-semibold px-2 py-0.5 rounded ${categoryColors[rp.category] || ''}`}>
                            {rp.category}
                          </span>
                          <p className="font-inter text-black text-sm font-semibold mt-2 leading-snug group-hover:text-navy transition-colors">
                            {rp.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
