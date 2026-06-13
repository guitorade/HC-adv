import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/layout/WhatsAppButton'
import ScrollToTop from './utils/scrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Areas from './pages/Areas'
import Team from './pages/Team'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Proposal from './pages/Proposal'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/areas-de-atuacao" element={<Areas />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/proposta" element={<Proposal />} />
      </Routes>
    </AnimatePresence>
  )
}

function AppLayout() {
  const location = useLocation()
  const isProposal = location.pathname === '/proposta'

  return (
    <>
      {!isProposal && <Navbar />}
      <AnimatedRoutes />
      {!isProposal && <Footer />}
      {!isProposal && <WhatsAppButton />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  )
}
