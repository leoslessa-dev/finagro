import { 
  Leaf, 
  Instagram,
  MessageCircle,
  Menu,
  X,
  Globe,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="relative">
                  <img 
                    src="/logo.png" 
                    alt="Finagro Consultoria & Projetos" 
                    className="h-16 w-auto relative z-10"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback');
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="logo-fallback hidden flex items-center gap-2">
                    <div className="bg-finagro-green-dark p-2 rounded">
                      <Leaf className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-finagro-green-dark block leading-none">Finagro</span>
                      <span className="text-[10px] uppercase tracking-widest text-finagro-green-light font-semibold">Consultoria & Projetos</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-600 hover:text-finagro-green-dark font-medium transition-colors">Início</Link>
              {isHome ? (
                <>
                  <a href="#sobre" className="text-gray-600 hover:text-finagro-green-dark font-medium transition-colors">Sobre</a>
                  <a href="#servicos" className="text-gray-600 hover:text-finagro-green-dark font-medium transition-colors">Serviços</a>
                </>
              ) : (
                <>
                  <Link to="/#sobre" className="text-gray-600 hover:text-finagro-green-dark font-medium transition-colors">Sobre</Link>
                  <Link to="/#servicos" className="text-gray-600 hover:text-finagro-green-dark font-medium transition-colors">Serviços</Link>
                </>
              )}
              <Link to="/contato" className="text-gray-600 hover:text-finagro-green-dark font-medium transition-colors">Contato</Link>
              <Link 
                to="/contato" 
                className="bg-finagro-green-dark text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all"
              >
                <Mail className="w-4 h-4" />
                Fale Conosco
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-100 pb-4"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-600 font-medium">Início</Link>
              <Link to="/contato" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-600 font-medium">Contato</Link>
              <Link 
                to="/contato" 
                onClick={() => setIsMenuOpen(false)}
                className="w-full mt-2 bg-finagro-green-dark text-white px-6 py-3 rounded-full flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Fale Conosco
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="flex flex-col gap-4">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="Finagro Logo" 
                  className="h-14 w-auto relative z-10 transition-all"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback-footer');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="logo-fallback-footer hidden flex items-center gap-2">
                  <div className="bg-finagro-green-dark p-1.5 rounded">
                    <Leaf className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xl font-bold text-finagro-green-dark block leading-none">Finagro</span>
                    <span className="text-[8px] uppercase tracking-widest text-finagro-green-light font-semibold">Consultoria & Projetos</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-sm max-w-xs">
                Transformando o agronegócio com técnica, gestão e acesso estratégico ao crédito rural.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-finagro-green-dark font-bold uppercase tracking-widest text-sm mb-6">Contatos</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600 group">
                  <Globe className="w-5 h-5 text-finagro-accent shrink-0 mt-0.5" />
                  <a href="https://www.finagro.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-finagro-green-dark transition-colors">
                    www.finagro.netlify.app
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-600 group">
                  <Mail className="w-5 h-5 text-finagro-accent shrink-0 mt-0.5" />
                  <a href="mailto:finagro.consultoria@gmail.com" className="hover:text-finagro-green-dark transition-colors">
                    finagro.consultoria@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-600 group">
                  <Phone className="w-5 h-5 text-finagro-accent shrink-0 mt-0.5" />
                  <a href="tel:+5533991771097" className="hover:text-finagro-green-dark transition-colors">
                    (33) 99177-1097
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-finagro-accent shrink-0 mt-0.5" />
                  <span>Av. Benedito Valadares, 09 Sala 102 - Caratinga - MG</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex flex-col md:items-end">
              <h4 className="text-finagro-green-dark font-bold uppercase tracking-widest text-sm mb-6">Redes Sociais</h4>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/finagro.consultoria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-50 p-3 rounded-full text-gray-400 hover:text-white hover:bg-finagro-green-dark transition-all shadow-sm"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://wa.me/5533991771097" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-50 p-3 rounded-full text-gray-400 hover:text-white hover:bg-finagro-green-dark transition-all shadow-sm"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs text-center">
              © 2026 Finagro Consultoria & Projetos. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-xs text-gray-400">
              <a href="#" className="hover:text-finagro-green-dark">Política de Privacidade</a>
              <a href="#" className="hover:text-finagro-green-dark">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}
