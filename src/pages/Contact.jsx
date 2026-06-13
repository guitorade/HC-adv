import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { MessageCircle, Mail, Clock, MapPin, CheckCircle2 } from 'lucide-react'

function InstagramIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

// IMPORTANTE: Substituir pelo ID real do Formspree do cliente
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || 'xpwrjqzk'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <Helmet>
        <title>Contato | Henrique e Castro Advogados</title>
        <meta name="description" content="Entre em contato com a Henrique e Castro Advogados. Atendimento em todo o Brasil." />
        <meta property="og:title" content="Contato | Henrique e Castro Advogados" />
        <meta property="og:description" content="Entre em contato com a Henrique e Castro Advogados. Atendimento em todo o Brasil." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://henriquecastro.adv.br/contato" />
      </Helmet>

      {/* Mini Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-inter text-gold text-sm uppercase tracking-widest font-semibold mb-3">Fale conosco</p>
            <h1 className="font-playfair font-bold text-white text-4xl md:text-5xl">Contato</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-playfair font-bold text-black text-2xl mb-8">Informações de contato</h2>

              <div className="space-y-6">
                <a
                  href="https://wa.me/5531984995968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-navy rounded-sm flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                    <MessageCircle size={18} className="text-gold group-hover:text-navy transition-colors" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-black text-sm">WhatsApp</p>
                    <p className="font-inter text-graphite text-sm group-hover:text-gold transition-colors">(31) 98499-5968</p>
                  </div>
                </a>

                <a
                  href="mailto:advthaleshenrique@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-navy rounded-sm flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                    <Mail size={18} className="text-gold group-hover:text-navy transition-colors" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-black text-sm">E-mail</p>
                    <p className="font-inter text-graphite text-sm group-hover:text-gold transition-colors">advthaleshenrique@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/adv.thaleshenrique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-navy rounded-sm flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                    <InstagramIcon size={18} className="text-gold group-hover:text-navy transition-colors" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-black text-sm">Instagram</p>
                    <p className="font-inter text-graphite text-sm group-hover:text-gold transition-colors">@adv.thaleshenrique</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy rounded-sm flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-black text-sm">Horário de atendimento</p>
                    <p className="font-inter text-graphite text-sm">Segunda a Sexta, 8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy rounded-sm flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-black text-sm">Abrangência</p>
                    <p className="font-inter text-graphite text-sm">Atuação em todo o território nacional</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10 p-6 bg-navy rounded-sm">
                <p className="font-inter font-semibold text-white text-sm mb-4">Prefere falar agora?</p>
                <a
                  href="https://wa.me/5531984995968?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20jur%C3%ADdicos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-inter font-semibold text-sm py-3 rounded-sm hover:brightness-90 transition-all"
                >
                  <MessageCircle size={16} />
                  Abrir WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-playfair font-bold text-black text-2xl mb-8">Envie uma mensagem</h2>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 size={48} className="text-green-500 mb-4" />
                  <h3 className="font-playfair font-bold text-black text-xl mb-2">Mensagem enviada!</h3>
                  <p className="font-inter text-graphite text-sm">
                    Recebemos sua mensagem e entraremos em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-inter text-sm font-semibold text-black mb-1.5 block">
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome completo"
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 font-inter text-sm text-graphite placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-inter text-sm font-semibold text-black mb-1.5 block">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 font-inter text-sm text-graphite placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-inter text-sm font-semibold text-black mb-1.5 block">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 font-inter text-sm text-graphite placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-sm font-semibold text-black mb-1.5 block">
                      Assunto *
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 font-inter text-sm text-graphite focus:outline-none focus:border-gold transition-colors bg-white"
                    >
                      <option value="">Selecione uma área</option>
                      <option value="Tributário">Tributário</option>
                      <option value="Empresarial">Empresarial</option>
                      <option value="Penal">Penal</option>
                      <option value="Agronegócios">Agronegócios</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-inter text-sm font-semibold text-black mb-1.5 block">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Descreva brevemente sua necessidade..."
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 font-inter text-sm text-graphite placeholder-gray-400 focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="font-inter text-sm text-red-600">
                      Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-navy text-white font-inter font-semibold text-sm uppercase tracking-wider py-4 rounded-sm hover:bg-navy-light transition-colors disabled:opacity-60"
                  >
                    {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
