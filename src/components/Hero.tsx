import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#000051] z-0" />
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mb-8 animate-float">
            <img
              src="https://github.com/Diegoo31.png"
              alt="Foto de Perfil"
              className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-2xl hover-lift"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-slide-in bg-clip-text">
            Diego Corrêa Pereira
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-blue-200 animate-fade-in">
            Desenvolvedor em constante desenvolvimento
          </h2>
          <div className="flex justify-center gap-8 mb-12 animate-scale-in">
            <a 
              href="https://github.com/Diegoo31" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-300 transition-all transform hover:scale-110"
            >
              <Github size={32} />
            </a>
            <a 
              href="https://www.linkedin.com/in/diego-c-pereira-49070232b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-300 transition-all transform hover:scale-110"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="mailto:diegocorreapereira82@gmail.com" 
              className="text-white hover:text-blue-300 transition-all transform hover:scale-110"
            >
              <Mail size={32} />
            </a>
          </div>
          <a
            href="#contact"
            className="bg-white text-[#1a237e] px-10 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg animate-fade-in inline-block"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}