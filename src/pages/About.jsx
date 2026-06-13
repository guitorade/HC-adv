import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Heart, Star, Users } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const values = [
  {
    icon: Heart,
    title: 'Ética',
    desc: 'Integridade em todas as relações profissionais',
  },
  {
    icon: Star,
    title: 'Excelência',
    desc: 'Busca contínua pelo mais alto padrão de qualidade',
  },
  {
    icon: Users,
    title: 'Proximidade',
    desc: 'Atendimento humanizado e acessível',
  },
]

export default function About() {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <Helmet>
        <title>O Escritório | Henrique e Castro Advogados</title>
        <meta name="description" content="Conheça a Henrique e Castro Advogados. Compromisso com ética, excelência e resultados." />
        <meta property="og:title" content="O Escritório | Henrique e Castro Advogados" />
        <meta property="og:description" content="Conheça a Henrique e Castro Advogados. Compromisso com ética, excelência e resultados." />
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

      {/* História */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Nossa Trajetória" title="Nossa História" />
          <div className="mt-8 space-y-6 font-inter text-graphite text-base leading-relaxed">
            <p>
              A Henrique e Castro Advogados nasceu da convergência de duas trajetórias complementares
              no Direito. Unimos a expertise em Direito Tributário e Empresarial com a solidez na
              atuação Penal e em Agronegócios para oferecer uma assessoria jurídica completa,
              estratégica e personalizada.
            </p>
            <p>
              Acreditamos que cada cliente é único e merece uma abordagem sob medida. Nosso
              compromisso vai além da técnica jurídica — construímos relações de confiança
              duradouras, pautadas pela ética, transparência e pela busca incansável pelos
              melhores resultados.
            </p>
            <p>
              Atuando 100% de forma digital, estamos presentes em todo o território nacional,
              oferecendo a mesma qualidade de atendimento independente da localização do cliente.
              A tecnologia nos permite ser ágeis, eficientes e sempre acessíveis.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionTitle title="Nossos Valores" center />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Missão */}
      <section className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-gold text-sm uppercase tracking-widest font-semibold mb-4">Nossa Missão</p>
            <blockquote className="font-playfair text-white text-xl md:text-2xl leading-relaxed italic">
              "Prestar assessoria jurídica de excelência, contribuindo para a segurança e o crescimento
              sustentável dos negócios de nossos clientes, com atuação ética, estratégica e personalizada."
            </blockquote>
          </motion.div>
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
