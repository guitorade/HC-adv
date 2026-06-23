import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section className="bg-navy py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-playfair font-bold text-white text-2xl mb-2">
          Receba nossos conteúdos
        </h3>
        <p className="font-inter text-gray-300 text-sm mb-6">
          Inscreva-se para receber artigos e análises jurídicas diretamente no seu e-mail.
        </p>
        <form
          className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative flex-1 w-full">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="w-full pl-10 pr-4 py-3 rounded-sm font-inter text-sm text-graphite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-gold text-navy font-inter font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded-sm hover:bg-amber-600 transition-colors"
          >
            Inscrever-se
          </button>
        </form>
      </div>
    </section>
  )
}
