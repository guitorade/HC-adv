import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Shield, Target, Eye, Users } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const values = [
  {
    icon: Shield,
    title: 'Excelência Técnica',
    desc: 'Rigor jurídico e atualização constante para entregar as melhores soluções.',
  },
  {
    icon: Target,
    title: 'Visão Estratégica',
    desc: 'Antecipação de riscos e identificação de oportunidades para proteção dos seus interesses.',
  },
  {
    icon: Eye,
    title: 'Transparência',
    desc: 'Comunicação clara e honesta em todas as etapas da relação profissional.',
  },
  {
    icon: Users,
    title: 'Compromisso',
    desc: 'Atendimento personalizado e condução responsável de cada demanda.',
  },
]

export default function About() {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <Helmet>
        <title>O Escritório | Henrique e Castro Advogados</title>
        <meta name="description" content="Advocacia moderna, estratégica e comprometida com a proteção dos interesses de seus clientes. Atuação em Direito Tributário, Empresarial, Agronegócio, Penal e Penal Econômico." />
        <meta property="og:title" content="O Escritório | Henrique e Castro Advogados" />
        <meta property="og:description" content="Advocacia moderna, estratégica e comprometida com a proteção dos interesses de seus clientes." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://henriquecastro.adv.br/sobre" />
      </Helmet>

      {/* Mini Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-inter text-gold text-sm uppercase tracking-widest font-semibold mb-3">Quem somos</p>
            <h1 className="font-playfair font-bold text-white text-4xl md:text-5xl">O Escritório</h1>
          </motion.div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Sobre Nós" title="Henrique e Castro Advogados" />
          <div className="mt-8 space-y-6 font-inter text-graphite text-base leading-relaxed">
            <p>
              O Henrique e Castro Advogados nasceu com o propósito de oferecer uma advocacia moderna, estratégica e comprometida com a proteção dos interesses de seus clientes em um ambiente jurídico cada vez mais complexo e desafiador.
            </p>
            <p>
              Atuamos nas áreas de Direito Tributário, Empresarial, Agronegócio e Penal, prestando assessoria jurídica a empresários, produtores rurais, empresas e pessoas físicas que buscam não apenas soluções para conflitos já existentes, mas também segurança para tomar decisões e construir o futuro com confiança e com proteção.
            </p>
            <p>
              Combinamos conhecimento técnico, visão multidisciplinar e atuação personalizada para desenvolver soluções jurídicas alinhadas às particularidades de cada cliente e à realidade de seus negócios. Entendemos que questões jurídicas frequentemente envolvem patrimônio, reputação, liberdade e a continuidade de projetos construídos ao longo de anos de dedicação, suor e trabalho.
            </p>
          </div>
        </div>
      </section>

      {/* Bloco de destaque */}
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <blockquote className="font-playfair text-white text-lg md:text-xl leading-relaxed italic">
              "Compreendemos a advocacia como uma atividade essencialmente estratégica, voltada não apenas à resolução de conflitos, mas também à antecipação de riscos, proteção de interesses e identificação de oportunidades capazes de fortalecer a segurança jurídica, preservar patrimônios e proporcionar maior estabilidade para a tomada de decisões em cenários de elevada complexidade."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Continuação do texto */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 font-inter text-graphite text-base leading-relaxed">
            <p>
              Nossa atuação é pautada pela excelência técnica, ética profissional, transparência e compromisso com resultados, sempre buscando oferecer um atendimento personalizado e uma condução responsável de cada demanda confiada ao escritório.
            </p>
            <p>
              Mais do que prestar serviços jurídicos, buscamos construir relações de confiança duradouras, baseadas na credibilidade, na proximidade e na defesa firme dos interesses de nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-off-white py-20">
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
      <section className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-playfair font-bold text-black text-3xl mb-6">Entre em contato</h2>
          <p className="font-inter text-gray-light mb-8">
            Estamos prontos para atender você e encontrar a melhor solução jurídica para o seu caso.
          </p>
          <Button to="/contato" variant="primary" size="lg">
            Fale conosco
          </Button>
        </div>
      </section>
    </motion.main>
  )
}
