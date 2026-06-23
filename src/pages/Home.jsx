import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import AboutPreview from '../components/home/AboutPreview'
import AreasGrid from '../components/home/AreasGrid'
import Differentials from '../components/home/Differentials'
import TeamPreview from '../components/home/TeamPreview'
import GoogleRating from '../components/home/GoogleRating'
import BlogPreview from '../components/home/BlogPreview'
import CtaSection from '../components/home/CtaSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Home() {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <Helmet>
        <title>Henrique e Castro Advogados | Assessoria Jurídica Estratégica</title>
        <meta name="description" content="Assessoria jurídica estratégica para proteção de patrimônios, negócios, reputações e liberdades. Atuação em Direito Tributário, Empresarial, Agronegócio, Penal e Penal Econômico em todo o Brasil." />
        <meta property="og:title" content="Henrique e Castro Advogados | Assessoria Jurídica Estratégica" />
        <meta property="og:description" content="Proteção de patrimônios, negócios, reputações e liberdades diante de desafios jurídicos complexos." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://henriquecastro.adv.br/" />
      </Helmet>
      <Hero />
      <AboutPreview />
      <AreasGrid />
      <Differentials />
      <TeamPreview />
      <GoogleRating />
      <BlogPreview />
      <CtaSection />
    </motion.main>
  )
}
