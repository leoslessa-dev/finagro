import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send,
  CheckCircle2
} from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    
    // Configurações recomendadas pelo FormSubmit
    formData.append('_captcha', 'false');
    formData.append('_subject', 'Novo contato via Site Finagro');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/finagro.consultoria@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const result = await response.json();
      
      // O FormSubmit retorna success: true ou success: "true"
      if (response.ok && (result.success === true || result.success === "true")) {
        setIsSubmitted(true);
      } else {
        throw new Error(result.message || "Erro no servidor");
      }
    } catch (error: any) {
      console.error("Erro no envio:", error);
      if (error.message && error.message.includes("Activation")) {
        alert("O formulário ainda não foi ativado. Por favor, verifique o e-mail finagro.consultoria@gmail.com e clique no link de ativação enviado pelo FormSubmit.");
      } else {
        alert("Ocorreu um erro ao enviar. Por favor, tente novamente mais tarde ou entre em contato via WhatsApp.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-md w-full border border-gray-100"
        >
          <div className="bg-finagro-accent/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-finagro-accent w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-finagro-green-dark mb-4">Mensagem Enviada!</h2>
          <p className="text-gray-600 mb-8">
            Obrigado pelo seu contato. Nossa equipe analisará sua dúvida e retornará o mais breve possível para o seu e-mail.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-finagro-green-dark text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
          >
            Enviar nova mensagem
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-finagro-green-light font-bold uppercase tracking-widest text-sm mb-2 block">Fale Conosco</span>
          <h1 className="text-4xl md:text-5xl font-bold text-finagro-green-dark mb-6">Consultoria Agrícola em Caratinga e Região</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tem alguma dúvida sobre crédito rural, financiamento PRONAF ou assistência técnica? Entre em contato com a Finagro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-finagro-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-finagro-accent">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-finagro-green-dark mb-2">Telefone</h3>
              <p className="text-gray-600 mb-4">Atendimento direto via Whatsapp ou ligação.</p>
              <a href="tel:+5533991771097" className="text-finagro-green-dark font-bold hover:underline">
                (33) 99177-1097
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-finagro-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-finagro-accent">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-finagro-green-dark mb-2">E-mail</h3>
              <p className="text-gray-600 mb-4">Envie sua proposta ou dúvida técnica.</p>
              <a href="mailto:finagro.consultoria@gmail.com" className="text-finagro-green-dark font-bold hover:underline break-all">
                finagro.consultoria@gmail.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-finagro-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-finagro-accent">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-finagro-green-dark mb-2">Escritório</h3>
              <p className="text-gray-600">
                Av. Benedito Valadares, 09 Sala 102<br />
                Caratinga - MG
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-finagro-green-dark uppercase tracking-wider">Nome Completo</label>
                    <input 
                      required
                      type="text" 
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-finagro-accent focus:ring-2 focus:ring-finagro-accent/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-finagro-green-dark uppercase tracking-wider">E-mail</label>
                    <input 
                      required
                      type="email" 
                      id="email"
                      name="email"
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-finagro-accent focus:ring-2 focus:ring-finagro-accent/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-finagro-green-dark uppercase tracking-wider">Telefone / WhatsApp</label>
                    <input 
                      required
                      type="tel" 
                      id="phone"
                      name="phone"
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-finagro-accent focus:ring-2 focus:ring-finagro-accent/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-finagro-green-dark uppercase tracking-wider">Assunto</label>
                    <select 
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-finagro-accent focus:ring-2 focus:ring-finagro-accent/20 outline-none transition-all bg-white"
                    >
                      <option>Crédito Rural</option>
                      <option>Assistência Técnica</option>
                      <option>Projetos para Prefeituras</option>
                      <option>Dúvidas Gerais</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-finagro-green-dark uppercase tracking-wider">Sua Mensagem</label>
                  <textarea 
                    required
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Como podemos te ajudar?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-finagro-accent focus:ring-2 focus:ring-finagro-accent/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-finagro-green-dark text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg disabled:opacity-70"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
                
                <p className="text-center text-gray-400 text-xs mt-4">
                  Ao enviar, você concorda em ser contatado pela nossa equipe técnica.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
