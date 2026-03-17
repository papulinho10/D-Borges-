import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Instagram, Droplet, Wrench, ShieldCheck, Clock, CheckCircle, MapPin, Mail, Menu, X, ArrowRight, Leaf, Droplets, Camera, Truck, DoorClosed } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappNumber = "5554999999999"; // Placeholder, replace with real number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.`;
  const instagramLink = "https://www.instagram.com/dborgesdesentupidora/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img 
              src="https://i.postimg.cc/pd0Gy9PB/d61220ee-11fa-471e-bb57-c9e74762c349.png" 
              alt="D'Borges Desentupidora" 
              className="h-16 md:h-20 w-auto object-contain transition-transform hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Início</button>
            <button onClick={() => scrollToSection('sobre')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('servicos')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Serviços</button>
            <button onClick={() => scrollToSection('contato')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Contato</button>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-pink-600 transition-colors p-2"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Plantão 24h - WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle & Instagram */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <button
              className="p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('home')} className="text-left py-2 text-slate-600 font-medium">Início</button>
            <button onClick={() => scrollToSection('sobre')} className="text-left py-2 text-slate-600 font-medium">Sobre</button>
            <button onClick={() => scrollToSection('servicos')} className="text-left py-2 text-slate-600 font-medium">Serviços</button>
            <button onClick={() => scrollToSection('contato')} className="text-left py-2 text-slate-600 font-medium">Contato</button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-xl font-semibold mt-2 shadow-lg shadow-green-500/30"
            >
              <MessageCircle className="w-5 h-5" />
              Plantão 24h - WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 md:pt-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Top Banner Image */}
        <div className="w-full relative z-10 flex justify-center bg-slate-900/40 border-b border-blue-800/50">
          {/* Desktop Banner */}
          <img 
            src="https://i.postimg.cc/qqhXF9GM/Camera-de-Inspecao.png" 
            alt="Câmera de Inspeção D'Borges" 
            className="hidden md:block w-full max-w-6xl h-auto object-contain"
            referrerPolicy="no-referrer"
          />
          {/* Mobile Banner */}
          <img 
            src="https://i.postimg.cc/g0c8wNJd/Camera-de-Inspecao-(Post-para-Instagram-(45)).png" 
            alt="Câmera de Inspeção D'Borges" 
            className="block md:hidden w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-800/50 border border-blue-700 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              Empresa Licenciada FEPAM
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Problemas com Entupimento na <span className="text-blue-400 whitespace-nowrap">Serra Gaúcha?</span>
              <br className="hidden md:block" />
              <span className="block md:hidden"> </span>
              Resolvemos Rápido e Sem Sujeira!
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed text-balance">
              Atendimento 24 horas em Gramado, Canela e região. Orçamento totalmente gratuito e serviço com garantia de qualidade.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-300 hover:to-emerald-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" />
                Solicitar Orçamento
              </a>
              
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-cyan-400/50 hover:border-cyan-300 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 hover:-translate-y-1"
              >
                <Instagram className="w-6 h-6" />
                Conheça nosso Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-4 relative group cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 blur-xl rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
              <h3 className="relative bg-white px-6 py-2 rounded-full border border-blue-100 shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 font-extrabold tracking-widest uppercase text-sm">
                Nossas Especialidades
              </h3>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Serviços Completos para sua Necessidade</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-6 rounded-full shadow-md shadow-blue-500/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-bl-full -z-10 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-blue-400 rounded-2xl animate-ping opacity-20 group-hover:opacity-40" style={{ animationDuration: '3s' }}></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-500 shadow-md group-hover:shadow-blue-500/50 group-hover:rotate-6">
                  <DoorClosed className="w-8 h-8 text-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Aluguel Banheiro Químico</h4>
              <p className="text-slate-600 leading-relaxed">
                Locação de banheiros químicos higienizados para obras, eventos e festas, com manutenção periódica e total praticidade.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-bl-full -z-10 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-blue-400 rounded-2xl animate-ping opacity-20 group-hover:opacity-40" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-500 shadow-md group-hover:shadow-blue-500/50 group-hover:-rotate-6">
                  <Droplets className="w-8 h-8 text-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Limpeza Caixa de Gordura</h4>
              <p className="text-slate-600 leading-relaxed">
                Limpeza preventiva e corretiva de caixas de gordura residenciais e comerciais, evitando entupimentos e mau cheiro.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-bl-full -z-10 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-blue-400 rounded-2xl animate-ping opacity-20 group-hover:opacity-40" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-500 shadow-md group-hover:shadow-blue-500/50 group-hover:rotate-6">
                  <Camera className="w-8 h-8 text-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Câmera de Inspeção</h4>
              <p className="text-slate-600 leading-relaxed">
                Inspeção de tubulações por vídeo de alta resolução para identificar entupimentos, rachaduras e vazamentos com precisão.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-bl-full -z-10 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-blue-400 rounded-2xl animate-ping opacity-20 group-hover:opacity-40" style={{ animationDuration: '3s', animationDelay: '1.5s' }}></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-500 shadow-md group-hover:shadow-blue-500/50 group-hover:-rotate-6">
                  <Truck className="w-8 h-8 text-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Caminhão Pipa</h4>
              <p className="text-slate-600 leading-relaxed">
                Fornecimento de água potável e lavagem de ruas, pátios e fachadas com caminhão pipa de alta capacidade e pressão.
              </p>
            </div>
          </div>

          {/* Banner Bombeiros */}
          <div className="mt-16 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
            
            <div className="relative z-10 lg:w-2/3">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-6 border border-white/30 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4" />
                Parceria Oficial - Bombeiros de Canela
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                Orgulho em servir nossa comunidade
              </h3>
              <p className="text-red-100 text-lg leading-relaxed mb-6">
                Temos uma forte parceria com o Corpo de Bombeiros de Canela. Nosso caminhão pipa fica à disposição da corporação para ser utilizado sempre que necessário em emergências na região. 
                <br className="hidden md:block" />
                Como forma de celebrar essa união, oferecemos um <strong className="text-white">desconto especial</strong> no seu primeiro orçamento!
              </p>
            </div>

            <div className="relative z-10 lg:w-1/3 flex justify-center lg:justify-end w-full">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20o%20desconto%20especial%20da%20parceria%20com%20os%20bombeiros.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-red-700 hover:bg-red-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-white/20 hover:-translate-y-1 text-center"
              >
                <MessageCircle className="w-6 h-6 flex-shrink-0" />
                <span>Solicitar Orçamento com Desconto</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="sobre" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800" 
                  alt="Profissional realizando serviço" 
                  className="rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-4xl font-bold mb-1">24/7</div>
                  <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">Atendimento</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h3 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">Por que nos escolher?</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Compromisso com a Qualidade e o Meio Ambiente</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                A D'Borges Desentupidora é referência na Serra Gaúcha. Unimos agilidade no atendimento de emergências com a responsabilidade ambiental exigida pelos órgãos competentes.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <Clock className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Plantão 24h / 7 dias</h4>
                    <p className="text-slate-600">Emergências não têm hora para acontecer. Estamos sempre prontos para atender Gramado, Canela e São Francisco de Paula.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <CheckCircle className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Orçamento Grátis</h4>
                    <p className="text-slate-600">Avaliamos o seu problema no local sem custo algum. Preço justo e transparência total antes de iniciar o serviço.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Precisa de ajuda agora mesmo?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Nossa equipe está de prontidão para resolver seu problema de forma rápida, limpa e eficiente.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-300 hover:to-emerald-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            Chamar Plantão WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-slate-900 pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="https://i.postimg.cc/pd0Gy9PB/d61220ee-11fa-471e-bb57-c9e74762c349.png" 
                  alt="D'Borges Desentupidora" 
                  className="h-20 md:h-24 w-auto object-contain bg-white/90 p-3 rounded-2xl shadow-lg shadow-blue-900/20"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-slate-400 mb-6">
                Soluções rápidas e eficientes em desentupimento e limpa-fossa na Serra Gaúcha. Qualidade e respeito ao meio ambiente.
              </p>
              <div className="flex gap-4">
                <a 
                  href={instagramLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 hover:bg-green-500 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navegação</h3>
              <ul className="space-y-4">
                <li><button onClick={() => scrollToSection('home')} className="text-slate-400 hover:text-white transition-colors">Início</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="text-slate-400 hover:text-white transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="text-slate-400 hover:text-white transition-colors">Serviços</button></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Serviços</h3>
              <ul className="space-y-4">
                <li className="text-slate-400">Aluguel Banheiro Químico</li>
                <li className="text-slate-400">Limpeza Caixa de Gordura</li>
                <li className="text-slate-400">Câmera de Inspeção</li>
                <li className="text-slate-400">Caminhão Pipa</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h3>
              <ul className="space-y-4">
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors">
                    <MessageCircle className="w-5 h-5 flex-shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-pink-500 transition-colors">
                    <Instagram className="w-5 h-5 flex-shrink-0" />
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} D'Borges Desentupidora. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Licenciada FEPAM</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-110 transition-all duration-300 group flex items-center justify-center"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Orçamento Grátis!
          {/* Triangle pointer */}
          <span className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white"></span>
        </span>
      </a>
    </div>
  );
}

