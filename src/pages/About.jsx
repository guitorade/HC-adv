import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Target, Users, Shield, TrendingUp } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const values = [
  {
    icon: Target,
    title: 'Estratégia',
    desc: 'Transformamos o Direito em um instrumento de proteção, crescimento e tomada de decisões, antecipando riscos e construindo soluções alinhadas aos objetivos de longo prazo de nossos clientes.',
  },
  {
    icon: Users,
    title: 'Proximidade',
    desc: 'Relações de confiança são construídas por meio da presença, da disponibilidade e da compreensão genuína das necessidades de cada cliente.',
  },
  {
    icon: Shield,
    title: 'Segurança',
    desc: 'Atuamos para reduzir incertezas, proteger interesses e oferecer a base jurídica necessária para decisões seguras e sustentáveis.',
  },
  {
    icon: TrendingUp,
    title: 'Resultado',
    desc: 'Cada atuação é conduzida com foco na geração de valor, na proteção de ativos e na obtenção de resultados consistentes e duradouros.',
  },
]

export default function About() {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <Helmet>
        <title>Apresentação | Henrique e Castro Advogados</title>
        <meta name="description" content="Assessoria jurídica estratégica para proteção de patrimônios, negócios, reputações e liberdades. Atuação em Direito Tributário, Empresarial, Agronegócio, Penal e Penal Econômico." />
        <meta property="og:title" content="Apresentação | Henrique e Castro Advogados" />
        <meta property="og:description" content="Assessoria jurídica estratégica para proteção de patrimônios, negócios, reputações e liberdades." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://henriquecastro.adv.br/sobre" />
      </Helmet>

      {/* Mini Hero */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-inter text-gold text-sm uppercase tracking-widest font-semibold mb-3">Quem somos</p>
            <h2 className="font-playfair font-bold text-white text-3xl md:text-4xl">Conheça o escritório</h2>
          </motion.div>
        </div>
      </section>

      {/* Texto principal */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="O Escritório" title="Henrique e Castro Advogados" />
          <div className="mt-8 space-y-6 font-inter text-graphite text-base leading-relaxed">
            <p>
              Patrimônio, reputação, liberdade e continuidade de negócios ou projetos pessoais são interesses que exigem proteção constante. Em um ambiente marcado por constantes transformações regulatórias, aumento da litigiosidade e maior exposição a riscos, decisões jurídicas passaram a ocupar posição estratégica na preservação de interesses e na construção de resultados sustentáveis.
            </p>
            <p>
              O escritório Henrique e Castro Advogados foi estruturado para atuar além da resolução de conflitos. Nossa proposta consiste em oferecer assessoria jurídica estratégica, capaz de antecipar riscos, proteger ativos, fortalecer operações e proporcionar maior segurança para a tomada de decisões.
            </p>
            <p>
              Atuamos ao lado de empresas, empresários, produtores rurais e pessoas físicas na identificação de oportunidades, mitigação de vulnerabilidades e desenvolvimento de soluções jurídicas alinhadas aos objetivos de cada cliente.
            </p>
            <p>
              Combinamos conhecimento técnico, visão de negócios e atuação personalizada para enfrentar desafios complexos com segurança, eficiência e previsibilidade. Nossa abordagem integra prevenção, gestão de riscos, proteção patrimonial e defesa de interesses, sempre orientada pela busca de soluções consistentes e sustentáveis.
            </p>
            <p>
              Entendemos que o Direito não deve ser visto apenas como instrumento de reação a problemas já existentes, mas como uma ferramenta estratégica de proteção, crescimento e continuidade.
            </p>
            <p>
              Mais do que prestar serviços jurídicos, construímos relações de confiança pautadas pela proximidade, excelência técnica e compromisso com os resultados, oferecendo suporte jurídico qualificado para aqueles que buscam segurança, estabilidade e proteção em suas decisões mais relevantes.
            </p>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="bg-off-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionTitle title="Nossos Pilares" center />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="bg-white border border-gray-200 rounded-sm p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-5">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-black text-xl mb-3">{title}</h3>
                <p className="font-inter text-gray-light text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-playfair font-bold text-black text-3xl mb-6">Fale com nossa equipe</h2>
          <p className="font-inter text-gray-light mb-8 md:whitespace-nowrap">
            Estamos prontos para atender você e encontrar a melhor solução jurídica para o seu caso.
          </p>
          <Button to="/contato" variant="primary" size="lg">
            Entrar em contato
          </Button>
        </div>
      </section>
    </motion.main>
  )
}
