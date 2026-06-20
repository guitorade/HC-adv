import { motion } from 'framer-motion'
import { CheckCircle2, X, Gift, Star } from 'lucide-react'

const plans = [
  {
    id: 'promocional',
    name: 'Promocional',
    badge: 'VOCÊ GANHOU!',
    headerGradient: 'linear-gradient(135deg, #C9A96E 0%, #D4AF37 100%)',
    originalPrice: 400,
    price: 0,
    priceLabel: 'GRÁTIS',
    isFree: true,
    monthly: 0,
    monthlyAfter: 29,
    featured: false,
    waMessage: 'Ol%C3%A1!%20Quero%20ativar%20meu%20site%20promocional%20gratuito%20que%20ganhei!',
    features: [
      'Site de página única (landing page)',
      'Seções: Quem somos, Áreas de atuação e Contato',
      'Design responsivo (celular, tablet e desktop)',
      'Botão WhatsApp flutuante',
      'Formulário de contato básico',
      'Hospedagem inclusa (Vercel)',
      'Certificado SSL (HTTPS)',
      'Logo profissional exclusiva',
    ],
    notIncluded: ['Domínio personalizado (.adv.br)'],
    maintenance: [
      'Hospedagem',
      'Suporte técnico básico',
      '1 atualização de conteúdo por mês',
    ],
    note: 'Presente exclusivo. Seu escritório na internet sem nenhum custo no primeiro ano.',
  },
  {
    id: 'essencial',
    name: 'Essencial',
    badge: 'Cartão de Visita Digital',
    headerColor: '#3A3A3A',
    originalPrice: 690,
    price: 290,
    monthly: 59,
    monthlyAfter: 59,
    featured: false,
    waMessage: 'Ol%C3%A1!%20Tenho%20interesse%20no%20Plano%20Essencial%20(R%24290%20com%20o%20desconto%20promocional).',
    features: [
      'Tudo do Promocional',
      'Design mais refinado com animações básicas',
      'Integração com Instagram',
      'Página de contato dedicada',
    ],
    notIncluded: ['Domínio personalizado (.adv.br)'],
    maintenance: [
      'Hospedagem',
      'Suporte técnico',
      'Até 2 atualizações de conteúdo por mês',
    ],
    note: 'Para quem quer um visual mais profissional mantendo o investimento enxuto.',
  },
  {
    id: 'profissional',
    name: 'Profissional',
    badge: 'RECOMENDADO',
    headerColor: '#C9A96E',
    originalPrice: 990,
    price: 590,
    monthly: 79,
    monthlyAfter: 79,
    featured: true,
    waMessage: 'Ol%C3%A1!%20Tenho%20interesse%20no%20Plano%20Profissional%20(R%24590%20com%20o%20desconto%20promocional).',
    features: [
      'Tudo do Essencial',
      'Site completo com 6 páginas dedicadas',
      'Blog com artigos jurídicos (3 artigos iniciais)',
      'SEO otimizado para Google',
      'Animações e transições profissionais',
      'Página de equipe com perfis dos sócios',
      'Formulário avançado com seleção de área jurídica',
      'Design clássico-corporativo sob medida',
      'Manual de Identidade Visual (opcional — R$ 190)',
      'Domínio .adv.br incluso no 1º ano',
      'Relatório mensal de visitas',
    ],
    maintenance: [
      'Tudo do Essencial',
      '1 artigo publicado no blog por mês',
      'Relatório mensal de visitas e métricas',
      'Monitoramento de performance',
      'Domínio incluso',
    ],
    note: 'O equilíbrio perfeito. Presença completa, profissional e pronta para crescer.',
  },
  {
    id: 'completo',
    name: 'Completo',
    badge: 'Gestão Digital',
    headerColor: '#0A1628',
    originalPrice: 1890,
    price: 1490,
    monthly: 149,
    monthlyAfter: 149,
    featured: false,
    waMessage: 'Ol%C3%A1!%20Tenho%20interesse%20no%20Plano%20Completo%20(R%241.490%20com%20o%20desconto%20promocional).',
    features: [
      'Tudo do Profissional',
      'Área do Cliente com login seguro',
      'Painel de acompanhamento de processos',
      'Agendamento de consultas online',
      'Seção de FAQ dinâmico por área',
      'Captação de leads com qualificação automática',
      'Newsletter com captura de e-mail',
      'Painel administrativo para gestão',
      'Preparação para integração com ADVBOX / Astrea',
      'Manual de Identidade Visual incluso',
      'Domínio .adv.br incluso no 1º ano',
    ],
    maintenance: [
      'Tudo do Profissional',
      'Atualizações ilimitadas de conteúdo',
      'Até 4 artigos no blog por mês',
      'Gerenciamento da área do cliente',
      'Suporte prioritário via WhatsApp',
      'Backup semanal',
      'Otimização contínua de SEO',
      'Domínio incluso',
    ],
    note: 'Para quem quer o site como ferramenta de gestão completa do escritório.',
  },
]

const tableRows = [
  { feature: 'Site responsivo', promo: true, essencial: true, profissional: true, completo: true },
  { feature: 'WhatsApp flutuante', promo: true, essencial: true, profissional: true, completo: true },
  { feature: 'Formulário de contato', promo: true, essencial: true, profissional: true, completo: true },
  { feature: 'SSL / HTTPS', promo: true, essencial: true, profissional: true, completo: true },
  { feature: 'Hospedagem inclusa', promo: true, essencial: true, profissional: true, completo: true },
  { feature: 'Logo profissional', promo: true, essencial: true, profissional: true, completo: true },
  { feature: 'Manual de Identidade Visual', promo: false, essencial: false, profissional: '+R$ 190', completo: true },
  { feature: 'Domínio .adv.br', promo: false, essencial: false, profissional: true, completo: true },
  { feature: 'Multi-página (6 páginas)', promo: false, essencial: false, profissional: true, completo: true },
  { feature: 'Blog com artigos', promo: false, essencial: false, profissional: true, completo: true },
  { feature: 'SEO otimizado', promo: false, essencial: false, profissional: true, completo: true },
  { feature: 'Animações profissionais', promo: false, essencial: true, profissional: true, completo: true },
  { feature: 'Página da equipe', promo: false, essencial: false, profissional: true, completo: true },
  { feature: 'Relatório de métricas', promo: false, essencial: false, profissional: true, completo: true },
  { feature: 'Área do Cliente', promo: false, essencial: false, profissional: false, completo: true },
  { feature: 'Acompanhamento de processos', promo: false, essencial: false, profissional: false, completo: true },
  { feature: 'Agendamento online', promo: false, essencial: false, profissional: false, completo: true },
  { feature: 'FAQ dinâmico', promo: false, essencial: false, profissional: false, completo: true },
  { feature: 'Newsletter', promo: false, essencial: false, profissional: false, completo: true },
  { feature: 'Painel administrativo', promo: false, essencial: false, profissional: false, completo: true },
]

function fmt(n) {
  return n.toLocaleString('pt-BR')
}

function Check() {
  return <CheckCircle2 size={16} className="text-gold mx-auto" />
}
function Cross() {
  return <X size={14} className="text-gray-300 mx-auto" />
}
function CellValue({ v }) {
  if (typeof v === 'string') return <span className="font-inter text-xs text-gold font-semibold">{v}</span>
  return v ? <Check /> : <Cross />
}

function PlanCard({ plan, index }) {
  const headerStyle = plan.headerGradient
    ? { background: plan.headerGradient }
    : { backgroundColor: plan.headerColor }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-lg overflow-hidden bg-white flex flex-col transition-all duration-300 ${
        plan.featured
          ? 'ring-2 ring-gold shadow-2xl md:-translate-y-6 scale-[1.02]'
          : 'shadow-md hover:-translate-y-1'
      }`}
    >
      {/* Header */}
      <div className="px-5 pt-7 pb-5 text-center" style={headerStyle}>
        <span className="inline-block font-inter text-xs font-bold uppercase tracking-widest bg-white/25 text-white px-3 py-1 rounded-full mb-3">
          {plan.badge}
        </span>
        <h2 className="font-playfair font-bold text-white text-xl">
          Plano {plan.name}
        </h2>
        {plan.isFree && (
          <div className="mt-2 inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-inter font-semibold px-2 py-1 rounded-full">
            <Gift size={12} />
            Presente exclusivo
          </div>
        )}
      </div>

      {/* Price block */}
      <div className="px-5 py-5 text-center border-b border-gray-100">
        {/* Discount badge */}
        {!plan.isFree && (
          <span className="inline-block font-inter text-xs font-bold text-white bg-red-500 px-2 py-0.5 rounded mb-2">
            -R$ 400
          </span>
        )}
        {/* Original price struck */}
        <p className="font-inter text-gray-400 text-sm line-through mb-1">
          R$ {fmt(plan.originalPrice)}
        </p>
        {/* Final price */}
        {plan.isFree ? (
          <p className="font-playfair font-bold text-4xl text-gold">GRÁTIS</p>
        ) : (
          <p className="font-playfair font-bold text-black text-4xl">
            R$&nbsp;{fmt(plan.price)}
          </p>
        )}
        {/* Monthly */}
        {plan.monthly === 0 ? (
          <>
            <p className="font-inter text-sm text-emerald-600 font-semibold mt-2">
              + R$ 0/mês <span className="font-normal text-gray-light">no 1º ano</span>
            </p>
            <p className="font-inter text-xs text-gray-400 mt-1">
              Após 1º ano: R$ {plan.monthlyAfter}/mês
            </p>
          </>
        ) : (
          <p className="font-inter text-sm text-graphite font-semibold mt-2">
            + R$ {fmt(plan.monthly)}/mês
          </p>
        )}
      </div>

      {/* Features */}
      <div className="px-5 py-5 flex-1 flex flex-col gap-4">
        <div>
          <p className="font-inter font-semibold text-black text-xs uppercase tracking-wider mb-2.5">
            Inclui
          </p>
          <ul className="space-y-2">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />
                <span className="font-inter text-graphite text-xs leading-snug">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {plan.notIncluded?.length > 0 && (
          <div>
            <p className="font-inter font-semibold text-gray-400 text-xs uppercase tracking-wider mb-2">
              Não inclui
            </p>
            <ul className="space-y-1.5">
              {plan.notIncluded.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <X size={13} className="text-gray-300 shrink-0 mt-0.5" />
                  <span className="font-inter text-gray-400 text-xs leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <p className="font-inter font-semibold text-black text-xs uppercase tracking-wider mb-2.5">
            Manutenção {plan.isFree ? '(após 1º ano)' : '(após 1º ano)'}
          </p>
          <ul className="space-y-1.5">
            {plan.maintenance.map((m) => (
              <li key={m} className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-gray-light shrink-0 mt-0.5" />
                <span className="font-inter text-gray-light text-xs leading-snug">{m}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-inter text-gray-light text-xs italic border-t border-gray-100 pt-3 mt-auto">
          {plan.note}
        </p>
      </div>

      {/* CTA */}
      <div className="px-5 pb-6">
        <a
          href={`https://wa.me/5531984995968?text=${plan.waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-full py-3 rounded-sm font-inter font-semibold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-90 ${
            plan.featured
              ? 'bg-gold text-navy'
              : plan.isFree
              ? 'bg-gradient-to-r from-[#C9A96E] to-[#D4AF37] text-white'
              : 'bg-navy text-white'
          }`}
        >
          {plan.isFree ? '🎁 Quero este plano!' : 'Escolher este plano'}
        </a>
      </div>
    </motion.div>
  )
}

export default function Proposal() {
  return (
    <div className="min-h-screen bg-off-white font-inter">
      {/* Header */}
      <header className="bg-navy text-white py-14 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-inter text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-2">
            Henrique e Castro Advogados
          </p>
          <h1 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-4">
            Proposta Exclusiva de Serviços Digitais
          </h1>
          <p className="font-inter text-gray-300 text-base max-w-lg mx-auto leading-relaxed">
            Preparamos uma proposta especial para o escritório Henrique e Castro Advogados.
          </p>
        </motion.div>
      </header>

      {/* Promo Banner */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative rounded-xl overflow-hidden border-2 border-gold shadow-xl"
          style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #D4AF37 50%, #C9A96E 100%)' }}
        >
          {/* Dashed inner border for voucher effect */}
          <div className="m-1 rounded-lg border-2 border-dashed border-white/40 p-8 text-center relative">
            {/* Seal */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center shadow-md">
              <span className="font-inter font-black text-[#C9A96E] text-xs leading-none">EX</span>
              <span className="font-inter font-black text-[#C9A96E] text-xs leading-none">CLU</span>
              <span className="font-inter font-black text-[#C9A96E] text-[9px] leading-none">SIVO</span>
            </div>

            <Star size={32} className="text-white mx-auto mb-3 fill-white" />
            <p className="font-inter font-bold text-white text-xs uppercase tracking-[0.3em] mb-1">
              Promoção Exclusiva
            </p>
            <h2 className="font-playfair font-bold text-white text-3xl md:text-4xl mb-4">
              Você foi selecionado!
            </h2>

            {/* R$ 400 OFF highlight */}
            <div className="inline-flex flex-col items-center bg-white rounded-xl px-8 py-4 mb-5 shadow-lg">
              <span className="font-inter text-[#C9A96E] text-xs font-bold uppercase tracking-widest">Desconto de</span>
              <span className="font-playfair font-black text-[#0A1628] text-5xl md:text-6xl leading-none">R$ 400</span>
              <span className="font-inter font-bold text-[#C9A96E] text-sm uppercase tracking-widest">OFF</span>
            </div>

            <p className="font-inter text-white text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-4">
              Parabéns! Você ganhou{' '}
              <strong>R$ 400,00 de desconto na implantação</strong> do seu site.
              Além disso, <strong>o Plano Promocional tem manutenção gratuita no primeiro ano!</strong>
            </p>
            <p className="font-inter text-white/75 text-xs italic">
              Esta promoção é exclusiva e não está disponível para outros clientes. Válida apenas para esta proposta.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Plans grid */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center font-inter text-gray-light text-sm mb-10"
        >
          Escolha o plano ideal para o escritório
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-start">
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-5xl mx-auto px-4 py-16">
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
            <table className="w-full bg-white text-sm min-w-[600px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-4 py-3 font-inter font-semibold text-xs uppercase tracking-wider w-2/5">
                    Funcionalidade
                  </th>
                  <th className="text-center px-3 py-3 font-inter font-semibold text-xs uppercase tracking-wider text-gold">
                    Promo
                  </th>
                  <th className="text-center px-3 py-3 font-inter font-semibold text-xs uppercase tracking-wider">
                    Essencial
                  </th>
                  <th className="text-center px-3 py-3 font-inter font-semibold text-xs uppercase tracking-wider text-gold">
                    Profissional
                  </th>
                  <th className="text-center px-3 py-3 font-inter font-semibold text-xs uppercase tracking-wider">
                    Completo
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2.5 font-inter text-graphite text-xs">{row.feature}</td>
                    <td className="text-center px-3 py-2.5 bg-gold/5"><CellValue v={row.promo} /></td>
                    <td className="text-center px-3 py-2.5"><CellValue v={row.essencial} /></td>
                    <td className="text-center px-3 py-2.5 bg-gold/5"><CellValue v={row.profissional} /></td>
                    <td className="text-center px-3 py-2.5"><CellValue v={row.completo} /></td>
                  </tr>
                ))}

                {/* Price rows */}
                <tr className="bg-navy text-white">
                  <td className="px-4 py-3 font-inter font-semibold text-xs">Implantação</td>
                  <td className="text-center px-3 py-3 text-xs">
                    <span className="line-through text-white/50 block">R$ 400</span>
                    <span className="font-bold text-gold">GRÁTIS</span>
                  </td>
                  <td className="text-center px-3 py-3 text-xs">
                    <span className="line-through text-white/50 block">R$ 690</span>
                    <span className="font-bold">R$ 290</span>
                  </td>
                  <td className="text-center px-3 py-3 text-xs bg-gold/10">
                    <span className="line-through text-white/50 block">R$ 990</span>
                    <span className="font-bold text-gold">R$ 590</span>
                  </td>
                  <td className="text-center px-3 py-3 text-xs">
                    <span className="line-through text-white/50 block">R$ 1.890</span>
                    <span className="font-bold">R$ 1.490</span>
                  </td>
                </tr>
                <tr className="bg-navy-light text-white">
                  <td className="px-4 py-2.5 font-inter text-xs font-semibold">Mensalidade</td>
                  <td className="text-center px-3 py-2.5 font-inter text-xs text-emerald-400 font-bold">R$ 0/mês*</td>
                  <td className="text-center px-3 py-2.5 font-inter text-xs font-bold">R$ 59/mês</td>
                  <td className="text-center px-3 py-2.5 font-inter text-xs text-gold font-bold">R$ 79/mês</td>
                  <td className="text-center px-3 py-2.5 font-inter text-xs font-bold">R$ 149/mês</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-inter text-gray-400 text-xs mt-3 text-center">
            * Plano Promocional: manutenção gratuita no 1º ano, R$ 29/mês a partir do 2º ano.
          </p>
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
          <p className="font-inter text-gray-300 text-base leading-relaxed mb-2">
            Escolha o plano ideal e vamos começar. Todos os planos podem ser ajustados
            conforme a necessidade do escritório.
          </p>
          <p className="font-inter text-emerald-400 text-sm font-semibold mb-8">
            Plano Promocional com manutenção gratuita no primeiro ano.
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
            Promoção exclusiva válida por 7 dias. Pagamento em até 3x sem juros.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 px-4 text-center">
        <p className="font-inter text-gray-500 text-sm">
          Henrique e Castro Advogados × TUCtech
        </p>
        <p className="font-inter text-gray-600 text-xs mt-1">
          Proposta exclusiva elaborada em junho de 2026
        </p>
      </footer>
    </div>
  )
}
