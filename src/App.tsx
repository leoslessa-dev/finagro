/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Leaf, 
  CreditCard, 
  BarChart3, 
  Building2, 
  Users, 
  CheckCircle2, 
  Eye, 
  Trophy,
  Instagram,
  MessageCircle,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-2 group">
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
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-600 hover:text-finagro-green-dark font-medium transition-colors">Início</a>
              <a href="#sobre" className="text-gray-600 hover:text-finagro-green-dark font-medium transition-colors">Sobre</a>
              <a href="#servicos" className="text-gray-600 hover:text-finagro-green-dark font-medium transition-colors">Serviços</a>
              <a href="#contato" className="text-gray-600 hover:text-finagro-green-dark font-medium transition-colors">Contato</a>
              <a 
                href="https://wa.me/5533991771097" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-finagro-green-dark text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Fale Conosco
              </a>
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
              <a href="#" className="block px-3 py-2 text-gray-600 font-medium">Início</a>
              <a href="#sobre" className="block px-3 py-2 text-gray-600 font-medium">Sobre</a>
              <a href="#servicos" className="block px-3 py-2 text-gray-600 font-medium">Serviços</a>
              <a href="#contato" className="block px-3 py-2 text-gray-600 font-medium">Contato</a>
              <a 
                href="https://wa.me/5533991771097" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full mt-2 bg-finagro-green-dark text-white px-6 py-3 rounded-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center bg-hero-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <span className="text-lg font-medium mb-4 block">Desenvolvendo o Agro com</span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Técnica, Gestão e <br />
                <span className="text-finagro-accent">Acesso ao Crédito</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                A Finagro ajuda produtores e os municípios a aumentarem a produtividade e acessarem crédito rural com acompanhamento técnico profissional.
              </p>
              <a 
                href="https://wa.me/5533991771097" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-finagro-accent text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg inline-flex"
              >
                <MessageCircle className="w-5 h-5" />
                Fale com um Especialista
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-finagro-green-light font-bold uppercase tracking-widest text-sm mb-2 block">O que fazemos</span>
            <h2 className="text-4xl font-bold text-finagro-green-dark mb-16">Soluções completas para o Agro</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Leaf className="w-10 h-10" />, title: "Assistência", subtitle: "Técnica Rural" },
                { icon: <CreditCard className="w-10 h-10" />, title: "Projetos de Crédito", subtitle: "(PRONAF e outros)" },
                { icon: <BarChart3 className="w-10 h-10" />, title: "Planejamento", subtitle: "Produtivo" },
                { icon: <Building2 className="w-10 h-10" />, title: "Desenvolvimento Rural", subtitle: "para Municípios" },
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center"
                >
                  <div className="text-finagro-accent mb-6 bg-finagro-accent/10 p-4 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-finagro-green-dark mb-2">{service.title}</h3>
                  <p className="text-gray-500">{service.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-features-pattern text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold uppercase tracking-widest">Diferenciais Finagro</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Consultoria Próxima:</h3>
                <p className="text-gray-300">Visitas técnicas direto na propriedade</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Agilidade:</h3>
                <p className="text-gray-300">Máxima prioridade na liberação do crédito</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Multibancos:</h3>
                <p className="text-gray-300">Acesso às melhores taxas do mercado</p>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-finagro-green-light font-bold uppercase tracking-widest text-sm mb-2 block">Para quem é</span>
              <h2 className="text-4xl font-bold text-finagro-green-dark">Nossas soluções atendem</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800",
                  title: "Produtores Rurais",
                  desc: "Aumente sua Produção e Renda",
                  icon: <Users className="w-6 h-6" />
                },
                { 
                  image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800",
                  title: "Prefeituras",
                  desc: "Desenvolva o Agro do município",
                  icon: <Building2 className="w-6 h-6" />
                },
                { 
                  image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800",
                  title: "Associações e Cooperativas",
                  desc: "Fortaleça seus Associados",
                  icon: <Users className="w-6 h-6" />
                },
              ].map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-finagro-green-dark/90 to-transparent flex flex-col justify-end p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-finagro-accent p-2 rounded-lg text-white">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Consultoria Rural" 
                  className="rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />

              </div>

              <div>
                <span className="text-finagro-green-light font-bold uppercase tracking-widest text-sm mb-2 block">Sobre a Finagro</span>
                <h2 className="text-4xl font-bold text-finagro-green-dark mb-6">Referência em Consultoria Rural</h2>
                <p className="text-lg text-gray-600 mb-10">
                  A Finagro Consultoria & Projetos nasceu para transformar o agro através de técnica, gestão e acesso a oportunidades. Nosso compromisso é com o sucesso sustentável do produtor rural.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="bg-finagro-green-dark/10 p-3 rounded-xl h-fit">
                      <Trophy className="text-finagro-green-dark w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-finagro-green-dark mb-1">Missão</h4>
                      <p className="text-gray-600">Desenvolver o Agro com eficiência e tecnologia de ponta.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-finagro-green-dark/10 p-3 rounded-xl h-fit">
                      <Eye className="text-finagro-green-dark w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-finagro-green-dark mb-1">Visão</h4>
                      <p className="text-gray-600">Ser a maior referência nacional em consultoria para o agronegócio.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-finagro-green-dark/10 p-3 rounded-xl h-fit">
                      <Leaf className="text-finagro-green-dark w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-finagro-green-dark mb-1">Valores</h4>
                      <ul className="text-gray-600 grid grid-cols-2 gap-x-4">
                        <li className="flex items-center gap-2">• Resultados</li>
                        <li className="flex items-center gap-2">• Compromisso</li>
                        <li className="flex items-center gap-2">• Simplicidade</li>
                        <li className="flex items-center gap-2">• Ética</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contato" className="py-16 bg-finagro-green-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Pronto para transformar o Agro?</h2>
              <p className="text-gray-300 text-lg">Fale com um especialista e descubra como podemos ajudar você</p>
            </div>
            <a 
              href="https://wa.me/5533991771097" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-finagro-yellow text-finagro-green-dark px-10 py-4 rounded-full text-lg font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no Whatsapp
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="Finagro Logo" 
                  className="h-12 w-auto relative z-10 transition-all"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback-footer');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="logo-fallback-footer hidden flex items-center gap-2">
                  <div className="bg-finagro-green-dark p-1.5 rounded">
                    <Leaf className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-finagro-green-dark block leading-none">Finagro</span>
                    <span className="text-[7px] uppercase tracking-widest text-finagro-green-light font-semibold">Consultoria & Projetos</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm text-center">
              © 2026 Finagro Consultoria & Projetos. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-finagro-green-dark transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://wa.me/5533991771097" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-finagro-green-dark transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
