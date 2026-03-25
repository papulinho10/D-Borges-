import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Instagram, Droplet, Wrench, ShieldCheck, Clock, CheckCircle, MapPin, Mail, Menu, X, ArrowRight, Leaf, Droplets, Camera, Truck, DoorClosed } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFabMenuOpen, setIsFabMenuOpen] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);

  const carouselBanners = [
    "https://i.postimg.cc/5N2yttLv/1.png",
    "https://i.postimg.cc/15RdY8Nw/Camera-de-Inspecao-(1350-x-1080-px).png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev === 1 ? 0 : 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const whatsappNumber1 = "5554981303611";
  const whatsappLink1 = `https://wa.me/${whatsappNumber1}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.`;
  const whatsappNumber2 = "5554981267121";
  const whatsappLink2 = `https://wa.me/${whatsappNumber2}?text=Ol%C3%A1%2C%20preciso%20de%20atendimento%20de%20plant%C3%A3o.`;
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
    <div className="min-h-screen bg-sky-50 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-2'
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
              className={`w-auto object-contain transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'h-16 md:h-20' : 'h-12 md:h-14'
              }`}
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
              href={whatsappLink1}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition-all shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              <div className="flex flex-col text-left leading-none">
                <span className="font-bold text-sm">WhatsApp</span>
                <span className="text-[11px] font-medium opacity-90">Plantão</span>
              </div>
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
              href={whatsappLink1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl mt-2 shadow-lg shadow-green-500/30"
            >
              <MessageCircle className="w-6 h-6" />
              <div className="flex flex-col text-left leading-none">
                <span className="font-bold text-base">WhatsApp</span>
                <span className="text-xs font-medium opacity-90">Plantão</span>
              </div>
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-[64px] md:pt-[72px] bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 relative overflow-hidden">
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
        <div className="w-full relative z-0 flex justify-center">
          <img 
            src="https://i.postimg.cc/0NwKmg7y/Camera-de-Inspecao-(1350-x-1080-px)-(1500-x-1350-px).png" 
            alt="Câmera de Inspeção D'Borges" 
            className="w-full max-w-6xl h-auto object-contain"
            referrerPolicy="no-referrer"
          />
          {/* Gradient overlay to seamlessly blend the bottom of the image into the dark background */}
          <div className="absolute inset-x-0 bottom-0 h-32 md:h-64 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-8 pb-24 md:pt-12 md:pb-32">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] max-w-3xl bg-blue-500/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 drop-shadow-xl">
              Problemas com Entupimento na <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Serra Gaúcha?</span>
              <br className="hidden md:block" />
              <span className="block md:hidden"> </span>
              Resolvemos Rápido e Sem Sujeira!
            </h2>
            
            <p className="text-lg md:text-2xl text-blue-100/90 mb-10 max-w-3xl mx-auto leading-relaxed text-balance font-medium drop-shadow-md">
              Atendimento 24 horas em Gramado, Canela e região. Orçamento totalmente gratuito e serviço com garantia de qualidade.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappLink1}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-display font-bold text-lg transition-all shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" />
                Solicitar Orçamento
              </a>
              
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-cyan-400/50 hover:border-cyan-300 hover:bg-white/20 text-white px-8 py-4 rounded-full font-display font-bold text-lg transition-all shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 hover:-translate-y-1"
              >
                <Instagram className="w-6 h-6" />
                Conheça nosso Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,192.27,101.5,238.16,87.9,280.91,71.4,321.39,56.44Z" className="fill-sky-50"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gradient-to-b from-sky-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl mix-blend-multiply"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-4 relative group cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 blur-xl rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
              <h3 className="relative bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-100 shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 font-display font-extrabold tracking-widest uppercase text-sm">
                Nossas Especialidades
              </h3>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">Serviços Completos para sua Necessidade</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-6 rounded-full shadow-md shadow-blue-500/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-bl-full -z-10 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-blue-400 rounded-2xl animate-ping opacity-20 group-hover:opacity-40" style={{ animationDuration: '3s' }}></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-500 shadow-md group-hover:shadow-blue-500/50 group-hover:rotate-6">
                  <DoorClosed className="w-8 h-8 text-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                </div>
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Aluguel Banheiro Químico</h4>
              <p className="text-slate-600 leading-relaxed">
                Locação de banheiros químicos higienizados para obras, eventos e festas, com manutenção periódica e total praticidade.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-bl-full -z-10 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-blue-400 rounded-2xl animate-ping opacity-20 group-hover:opacity-40" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-500 shadow-md group-hover:shadow-blue-500/50 group-hover:-rotate-6">
                  <Droplets className="w-8 h-8 text-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                </div>
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Limpeza Caixa de Gordura</h4>
              <p className="text-slate-600 leading-relaxed">
                Limpeza preventiva e corretiva de caixas de gordura residenciais e comerciais, evitando entupimentos e mau cheiro.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-bl-full -z-10 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-blue-400 rounded-2xl animate-ping opacity-20 group-hover:opacity-40" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-500 shadow-md group-hover:shadow-blue-500/50 group-hover:rotate-6">
                  <Camera className="w-8 h-8 text-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                </div>
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Câmera de Inspeção</h4>
              <p className="text-slate-600 leading-relaxed">
                Inspeção de tubulações por vídeo de alta resolução para identificar entupimentos, rachaduras e vazamentos com precisão.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-bl-full -z-10 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-blue-400 rounded-2xl animate-ping opacity-20 group-hover:opacity-40" style={{ animationDuration: '3s', animationDelay: '1.5s' }}></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-500 shadow-md group-hover:shadow-blue-500/50 group-hover:-rotate-6">
                  <Truck className="w-8 h-8 text-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                </div>
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Caminhão Pipa</h4>
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
              <h3 className="text-3xl md:text-4xl font-display font-extrabold mb-4 leading-tight">
                Orgulho em servir nossa comunidade
              </h3>
              <p className="text-red-100 text-lg leading-relaxed mb-6">
                Temos uma forte parceria com o Corpo de Bombeiros de Canela. Nosso caminhão pipa fica à disposição da corporação para ser utilizado sempre que necessário em emergências na região. Como forma de celebrar essa união, oferecemos um <strong className="text-white">desconto especial</strong> no seu primeiro orçamento!
              </p>
            </div>

            <div className="relative z-10 lg:w-1/3 flex justify-center lg:justify-end w-full">
              <a
                href={`https://wa.me/${whatsappNumber1}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20o%20desconto%20especial%20da%20parceria%20com%20os%20bombeiros.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-red-700 hover:bg-red-50 px-8 py-4 rounded-full font-display font-bold text-lg transition-all shadow-xl hover:shadow-white/20 hover:-translate-y-1 text-center"
              >
                <MessageCircle className="w-6 h-6 flex-shrink-0" />
                <span>Solicitar Orçamento</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="sobre" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-100 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl mix-blend-multiply translate-x-1/3"></div>
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-cyan-300/20 rounded-full blur-3xl mix-blend-multiply -translate-y-1/4"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col gap-12 items-center max-w-5xl mx-auto">
            <div className="w-full">
              <div className="relative animate-float">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
                  <div className="grid">
                    {carouselBanners.map((banner, index) => (
                      <img 
                        key={index}
                        src={banner} 
                        alt={`Banner ${index + 1}`} 
                        className={`col-start-1 row-start-1 w-full h-auto object-contain transition-opacity duration-1000 ${
                          index === currentBanner ? 'opacity-100' : 'opacity-0'
                        }`}
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  
                  {/* Carousel Indicators */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                    {carouselBanners.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentBanner(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          index === currentBanner ? 'bg-blue-600 w-8' : 'bg-white/70 hover:bg-white'
                        }`}
                        aria-label={`Ir para slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block z-20">
                  <div className="text-4xl font-display font-bold mb-1">24/7</div>
                  <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">Atendimento</div>
                </div>
              </div>
            </div>
            
            <div className="w-full text-center">
              <h3 className="text-blue-600 font-display font-bold tracking-wider uppercase text-sm mb-2">Por que nos escolher?</h3>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Compromisso com a Qualidade e o Meio Ambiente</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
                A D'Borges Desentupidora é referência na Serra Gaúcha. Unimos agilidade no atendimento de emergências com a responsabilidade ambiental exigida pelos órgãos competentes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <Clock className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-slate-900 mb-1">Plantão 24h / 7 dias</h4>
                    <p className="text-slate-600">Emergências não têm hora para acontecer. Estamos sempre prontos para atender Gramado, Canela e São Francisco de Paula.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <CheckCircle className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-slate-900 mb-1">Orçamento Grátis</h4>
                    <p className="text-slate-600">Avaliamos o seu problema no local sem custo algum. Preço justo e transparência total antes de iniciar o serviço.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-700 relative overflow-hidden">
        {/* Wave Divider Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
          <svg className="relative block w-full h-[30px] md:h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,192.27,101.5,238.16,87.9,280.91,71.4,321.39,56.44Z" className="fill-sky-100"></path>
          </svg>
        </div>
        
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&q=80&w=2000')] opacity-15 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Precisa de ajuda agora mesmo?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Nossa equipe está de prontidão para resolver seu problema de forma rápida, limpa e eficiente.
          </p>
          <a
            href={whatsappLink1}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-display font-bold text-lg transition-all shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1"
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
                  href={whatsappLink1} 
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
              <h3 className="text-white font-display font-bold mb-6 uppercase tracking-wider text-sm">Navegação</h3>
              <ul className="space-y-4">
                <li><button onClick={() => scrollToSection('home')} className="text-slate-400 hover:text-white transition-colors">Início</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="text-slate-400 hover:text-white transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="text-slate-400 hover:text-white transition-colors">Serviços</button></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-display font-bold mb-6 uppercase tracking-wider text-sm">Serviços</h3>
              <ul className="space-y-4">
                <li className="text-slate-400">Aluguel Banheiro Químico</li>
                <li className="text-slate-400">Limpeza Caixa de Gordura</li>
                <li className="text-slate-400">Câmera de Inspeção</li>
                <li className="text-slate-400">Caminhão Pipa</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-display font-bold mb-6 uppercase tracking-wider text-sm">Contato</h3>
              <ul className="space-y-4">
                <li>
                  <a href={whatsappLink1} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors">
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
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {/* Menu Options */}
        <div className={`flex flex-col gap-3 transition-all duration-300 origin-bottom-right ${isFabMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
          <a
            href={whatsappLink1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-slate-800 px-5 py-3 rounded-full shadow-xl hover:bg-slate-50 transition-colors border border-slate-100 group"
          >
            <span className="font-semibold">Whatsapp - (54) 98130-3611</span>
            <div className="bg-green-500 text-white p-2 rounded-full group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
          </a>
          <a
            href={whatsappLink2}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-slate-800 px-5 py-3 rounded-full shadow-xl hover:bg-slate-50 transition-colors border border-slate-100 group"
          >
            <span className="font-semibold">Plantão - (54) 98126-7121</span>
            <div className="bg-red-500 text-white p-2 rounded-full group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
          </a>
        </div>

        {/* Main FAB */}
        <button
          onClick={() => setIsFabMenuOpen(!isFabMenuOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300 flex items-center justify-center relative z-10"
          aria-label="Fale conosco no WhatsApp"
        >
          {isFabMenuOpen ? (
            <X className="w-8 h-8 animate-in spin-in-90" />
          ) : (
            <MessageCircle className="w-8 h-8 animate-in spin-in-90" />
          )}
          
          {/* Tooltip */}
          {!isFabMenuOpen && (
            <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-display font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block">
              Orçamento Grátis!
              {/* Triangle pointer */}
              <span className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white"></span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

