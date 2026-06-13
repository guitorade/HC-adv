import { Link } from 'react-router-dom'

export default function Button({ children, to, href, variant = 'primary', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-inter font-semibold uppercase tracking-wider transition-all duration-200 rounded-sm'

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-sm',
  }

  const variants = {
    primary: 'bg-gold text-navy hover:bg-amber-600 hover:scale-[1.02]',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-navy hover:scale-[1.02]',
    'outline-dark': 'border-2 border-navy text-navy hover:bg-navy hover:text-white hover:scale-[1.02]',
    ghost: 'text-gold hover:text-amber-500',
  }

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}
