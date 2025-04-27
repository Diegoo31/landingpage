import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'Email é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Here you would typically send the form data to your backend
        // For now, we'll simulate a successful submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#1a237e]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Entre em Contato</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a237e] ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  disabled={isSubmitting}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a237e] ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a237e] ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  disabled={isSubmitting}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-[#1a237e] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-500 text-center mt-4">Mensagem enviada com sucesso!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center mt-4">Erro ao enviar mensagem. Tente novamente.</p>
              )}
            </form>
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-semibold mb-6">Conecte-se Comigo</h3>
            <div className="space-y-4">
              <a
                href="mailto:diegocorreapereira82@gmail.com"
                className="flex items-center gap-4 hover:text-blue-300 transition-colors"
              >
                <Mail size={24} />
                <span>diegocorreapereira82@gmail.com</span>
              </a>
              <a
                href="https://github.com/Diegoo31"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-blue-300 transition-colors"
              >
                <Github size={24} />
                <span>Perfil no GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/diego-c-pereira-49070232b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-blue-300 transition-colors"
              >
                <Linkedin size={24} />
                <span>Perfil no LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}