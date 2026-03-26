import { 
  Leaf, 
  CreditCard, 
  BarChart3, 
  Building2, 
  Users, 
  Eye, 
  Trophy,
  MessageCircle,
  Mail
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
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
            <span className="text-[20px] font-medium mb-4 block">Desenvolvendo o Agro com</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Crédito Rural e <br />
              <span className="text-finagro-accent">Consultoria Agrícola</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              A Finagro ajuda produtores e os municípios a aumentarem a produtividade e acessarem crédito rural com acompanhamento técnico profissional.
            </p>
            <Link 
              to="/contato" 
              className="bg-finagro-accent text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg inline-flex"
            >
              <Mail className="w-5 h-5" />
              Fale com um Especialista
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-finagro-green-light font-bold uppercase tracking-widest text-sm mb-2 block">O que fazemos</span>
          <h2 className="text-4xl font-bold text-finagro-green-dark mb-16">Crédito Rural e Consultoria para o Agronegócio</h2>
          
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
            <h2 className="text-4xl font-bold text-finagro-green-dark">Consultoria em Caratinga e Região</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                image: "/produtores.png",
                title: "Produtores Rurais",
                desc: "Aumente sua Produção e Renda",
                icon: <Users className="w-6 h-6" />
              },
              { 
                image: "/prefeituras.png",
                title: "Prefeituras",
                desc: "Desenvolva o Agro do município",
                icon: <Building2 className="w-6 h-6" />
              },
              { 
                image: "/associacoes.png",
                title: "Associações e Cooperativas",
                desc: "Fortaleça seus Associados",
                icon: <Users className="w-6 h-6" />
              },
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={`Consultoria para ${item.title} - Finagro`} 
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
                src="/sobre.png" 
                alt="Consultoria Agrícola e Projetos de Crédito Rural em Caratinga - Finagro" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <span className="text-finagro-green-light font-bold uppercase tracking-widest text-sm mb-2 block">Sobre a Finagro</span>
              <h2 className="text-4xl font-bold text-finagro-green-dark mb-6">Especialistas em Crédito Rural e PRONAF</h2>
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
      <section className="py-16 bg-finagro-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Pronto para transformar o Agro?</h2>
            <p className="text-gray-300 text-lg">Fale com um especialista e descubra como podemos ajudar você</p>
          </div>
          <Link 
            to="/contato" 
            className="bg-finagro-yellow text-finagro-green-dark px-10 py-4 rounded-full text-lg font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
          >
            <Mail className="w-5 h-5" />
            Entre em Contato
          </Link>
        </div>
      </section>
    </main>
  );
}
