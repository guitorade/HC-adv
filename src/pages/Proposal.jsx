import { motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'

const plans = [
  {
    id: 'essencial',
    name: 'Essencial',
    badge: 'Cartão de Visita Digital',
    headerColor: '#3A3A3A',
    price: 490,
    monthly: 39,
    featured: false,
    waMessage: 'Ol%C3%A1!%20Tenho%20interesse%20no%20Plano%20Essencial%20(R%24490).',
    features: [
      'Site institucional de página única',
      'Seções: Quem somos, Áreas de atuação e Contato',
      'Design responsivo (celular, tablet e desktop)',
      'Botão WhatsApp flutuante',
      'Formulário de contato básico',
      'Hospedagem inclusa',
      'Certificado SSL (HTTPS)',
    ],
    maintenance: [
      'Hospedagem e domínio',
      'Suporte técnico básico',
      '1 atualização de conteúdo por mês',
    ],
    note: 'Ideal para quem está começando e precisa de presença digital imediata.',
  },
  {
    id: 'profissional',
    name: 'Profissional',
    badge: 'Recomendado',
    headerColor: '#C9A96E',
    price: 890,
    monthly: 69,
    featured: true,
    waMessage: 'Ol%C3%A1!%20Tenho%20interesse%20no%20Plano%20Profissional%20(R%24890).',
    features: [
      'Tudo do Plano Essencial',
      'Site completo com 6 páginas dedicadas',
      'Blog com artigos jurídicos (3 artigos iniciais inclusos)',
      'SEO otimizado para Google',
      'Animações e transições profissionais',
      'Página de equipe com perfis dos sócios',
      'Formulário com seleção de área jurídica',
      'Design clássico-corporativo sob medida',
      'Integração com Instagram',
    ],
    maintenance: [
      'Tudo do plano Essencial',
      'Até 2 atualizações de conteúdo por mês',
      '1 artigo publicado no blog por mês',
      'Relatório mensal de visitas e métricas',
      'Monitoramento de performance',
    ],
    note: 'O equilíbrio perfeito entre presença profissional e investimento inteligente.',
  },
  {
    id: 'completo',
    name: 'Completo',
    badge: 'Gestão Digital',
    headerColor: '#0A1628',
    price: 1590,
    monthly: 129,
    featured: false,
    waMessage: 'Ol%C3%A1!%20Tenho%20interesse%20no%20Plano%20Completo%20(R%241.590).',
    features: [
      'Tudo do Plano Profissional',
      'Área do Cliente com login seguro',
      'Painel de acompanhamento de processos',
      'Agendamento de consultas online',
      'Seção de FAQ dinâmico por área',
      'Captação de leads com qualificação automática',
      'Newsletter com captura de e-mail',
      'Painel administrativo para gestão',
      'Preparação para integração com ADVBOX / Astrea',
    ],
    maintenance: [
      'Tudo do plano Profissional',
      'Atualizações ilimitadas de conteúdo',
      'Até 4 artigos no blog por mês',
      'Gerenciamento da área do cliente',
      'Suporte prioritário via WhatsApp',
      'Backup semanal',
      'Otimização contínua de SEO',
    ],
    note: 'Para quem quer transformar o site em ferramenta de gestão do escritório.',
  },
]

const tableRows = [
  { feature: 'Site responsivo', essencial: true, profissional: true, completo: true },
  { feature: 'WhatsApp flutuante', essencial: true, profissional: true, completo: true },
  { feature: 'Formulário de contato', essencial: true, profissional: true, completo: true },
  { feature: 'SSL / HTTPS', essencial: true, profissional: true, completo: true },
  { feature: 'Hospedagem inclusa', essencial: true, profissional: true, completo: true },
  { feature: 'Multi-página (6 páginas)', essencial: false, profissional: true, completo: true },
  { feature: 'Blog com artigos', essencial: false, profissional: true, completo: true },
  { feature: 'SEO otimizado', essencial: false, profissional: true, completo: true },
  { feature: 'Animações profissionais', essencial: false, profissional: true, completo: true },
  { feature: 'Página da equipe', essencial: false, profissional: true, completo: true },
  { feature: 'Relatório de métricas', essencial: false, profissional: true, completo: true },
  { feature: 'Área do Cliente', essencial: false, profissional: false, completo: true },
  { feature: 'Acompanhamento de processos', essencial: false, profissional: false, completo: true },
  { feature: 'Agendamento online', essencial: false, profissional: false, completo: true },
  { feature: 'FAQ dinâmico', essencial: false, profissional: false, completo: true },
  { feature: 'Newsletter', essencial: false, profissional: false, completo: true },
  { feature: 'Painel administrativo', essencial: false, profissional: false, completo: true },
]

function formatPrice(n) {
  return n.toLocaleString('pt-BR')
}

export default function Proposal() {
  return (
    <div className="min-h-screen bg-off-white font-inter">
      {/* Header */}
      <header className="bg-navy text-white py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-inter text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-2">
            Henrique e Castro Advogados
          </p>
          <h1 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-4">
            Proposta de Serviços Digitais
          </h1>
          <p className="font-inter text-gray-300 text-base max-w-xl mx-auto leading-relaxed">
            Preparamos três opções para que você escolha a que melhor se encaixa no momento atual
            do escritório. Cada plano foi pensado para crescer junto com o negócio de vocês.
          </p>
        </motion.div>
      </header>

      {/* Plans */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-lg overflow-hidden bg-white shadow-md flex flex-col transition-transform duration-300 ${
                plan.featured
                  ? 'md:-translate-y-4 ring-2 ring-gold shadow-xl'
                  : 'hover:-translate-y-1'
              }`}
            >
              {/* Card header */}
              <div
                className="px-6 pt-8 pb-6 text-center"
                style={{ backgroundColor: plan.headerColor }}
              >
                <span className="inline-block font-inter text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full mb-3">
                  {plan.badge}
                </span>
                <h2 className="font-playfair font-bold text-white text-2xl mb-1">
                  Plano {plan.name}
                </h2>
              </div>

              {/* Price */}
              <div className="px-6 py-6 text-center border-b border-gray-100">
                <p className="font-inter text-gray-light text-xs uppercase tracking-wider mb-1">
                  Implantação
                </p>
                <p className="font-playfair font-bold text-black text-4xl">
                  R$&nbsp;{formatPrice(plan.price)}
                </p>
                <p className="font-inter text-gray-light text-sm mt-2">
                  + R$&nbsp;{plan.monthly}
                  <span className="text-xs">/mês de manutenção</span>
                </p>
              </div>

              {/* Features */}
              <div className="px-6 py-6 flex-1">
                <p className="font-inter font-semibold text-black text-xs uppercase tracking-wider mb-3">
                  Inclui
                </p>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-gold shrink-0 mt-0.5" />
                      <span className="font-inter text-graphite text-sm leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-inter font-semibold text-black text-xs uppercase tracking-wider mb-3">
                  Manutenção mensal inclui
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.maintenance.map((m) => (
                    <li key={m} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-gray-light shrink-0 mt-0.5" />
                      <span className="font-inter text-gray-light text-sm leading-snug">{m}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-inter text-gray-light text-xs italic leading-relaxed border-t border-gray-100 pt-4">
                  {plan.note}
                </p>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <a
                  href={`https://wa.me/5531984995968?text=${plan.waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-full py-3 rounded-sm font-inter font-semibold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-90 ${
                    plan.featured
                      ? 'bg-gold text-navy'
                      : 'bg-navy text-white'
                  }`}
                >
                  Escolher este plano
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair font-bold text-black text-2xl text-center mb-8">
            Comparativo completo
          </h2>
          <div className="overflow-x-auto rounded-lg shadow-sm">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-5 py-4 font-inter font-semibold text-xs uppercase tracking-wider w-1/2">
                    Funcionalidade
                  </th>
                  <th className="text-center px-4 py-4 font-inter font-semibold text-xs uppercase tracking-wider">
                    Essencial
                  </th>
                  <th className="text-center px-4 py-4 font-inter font-semibold text-xs uppercase tracking-wider text-gold">
                    Profissional
                  </th>
                  <th className="text-center px-4 py-4 font-inter font-semibold text-xs uppercase tracking-wider">
                    Completo
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-5 py-3 font-inter text-graphite text-sm">{row.feature}</td>
                    <td className="text-center px-4 py-3">
                      {row.essencial
                        ? <CheckCircle2 size={16} className="text-gold mx-auto" />
                        : <X size={14} className="text-gray-300 mx-auto" />}
                    </td>
                    <td className="text-center px-4 py-3 bg-gold/5">
                      {row.profissional
                        ? <CheckCircle2 size={16} className="text-gold mx-auto" />
                        : <X size={14} className="text-gray-300 mx-auto" />}
                    </td>
                    <td className="text-center px-4 py-3">
                      {row.completo
                        ? <CheckCircle2 size={16} className="text-gold mx-auto" />
                        : <X size={14} className="text-gray-300 mx-auto" />}
                    </td>
                  </tr>
                ))}
                {/* Price row */}
                <tr className="bg-navy text-white font-semibold">
                  <td className="px-5 py-4 font-inter text-sm">Implantação</td>
                  <td className="text-center px-4 py-4 font-inter text-sm">R$ 490</td>
                  <td className="text-center px-4 py-4 font-inter text-sm text-gold">R$ 890</td>
                  <td className="text-center px-4 py-4 font-inter text-sm">R$ 1.590</td>
                </tr>
                <tr className="bg-navy-light text-white">
                  <td className="px-5 py-4 font-inter text-sm font-semibold">Manutenção mensal</td>
                  <td className="text-center px-4 py-4 font-inter text-sm">R$ 39/mês</td>
                  <td className="text-center px-4 py-4 font-inter text-sm text-gold font-semibold">R$ 69/mês</td>
                  <td className="text-center px-4 py-4 font-inter text-sm">R$ 129/mês</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* CTA Final */}
      <section className="bg-navy py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="font-playfair font-bold text-white text-3xl mb-4">
            Pronto para dar o próximo passo?
          </h2>
          <p className="font-inter text-gray-300 text-base leading-relaxed mb-8">
            Escolha o plano ideal e vamos começar. Todos os planos podem ser ajustados
            conforme a necessidade do escritório.
          </p>
          <a
            href="https://wa.me/5531984995968"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-inter font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-sm hover:brightness-90 transition-all"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar pelo WhatsApp
          </a>
          <p className="font-inter text-gray-500 text-xs mt-5">
            Proposta válida por 15 dias. Pagamento em até 3x sem juros.
          </p>
        </motion.div>
      </section>

      {/* Footer simplificado */}
      <footer className="bg-black py-6 px-4 text-center">
        <p className="font-inter text-gray-500 text-sm">
          Henrique e Castro Advogados × TUCtech
        </p>
        <p className="font-inter text-gray-600 text-xs mt-1">
          Proposta elaborada em junho de 2026
        </p>
      </footer>
    </div>
  )
}
