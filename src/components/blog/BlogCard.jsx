import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Clock } from 'lucide-react'

const categoryColors = {
  Tributário: 'bg-blue-100 text-blue-800',
  Empresarial: 'bg-emerald-100 text-emerald-800',
  Penal: 'bg-red-100 text-red-800',
  Agronegócio: 'bg-amber-100 text-amber-800',
  'Penal Econômico': 'bg-orange-100 text-orange-800',
  Notícias: 'bg-purple-100 text-purple-800',
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric',
  })
}

function getReadingTime(content) {
  if (!content) return 5
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200))
}

export default function BlogCard({ post }) {
  return (
    <article className="border border-gray-200 rounded-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col">
      <div
        className="h-52 shrink-0"
        style={{ backgroundColor: post.coverColor }}
      />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className={`font-inter text-xs font-semibold px-2 py-1 rounded ${categoryColors[post.category] || 'bg-gray-100 text-gray-700'}`}>
            {post.category}
          </span>
          <span className="flex items-center gap-1 font-inter text-xs text-gray-light">
            <Calendar size={12} />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1 font-inter text-xs text-gray-light">
            <Clock size={12} />
            {getReadingTime(post.content)} min
          </span>
        </div>
        <h2 className="font-playfair font-bold text-black text-lg leading-snug mb-3 group-hover:text-navy transition-colors">
          {post.title}
        </h2>
        <p className="font-inter text-gray-light text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
          {post.summary}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="flex items-center gap-1.5 font-inter text-xs text-gray-light">
            <User size={12} />
            {post.author}
          </span>
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 font-inter font-semibold text-gold text-sm hover:gap-3 transition-all duration-200"
          >
            Leia mais <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  )
}
