import React, { useState } from 'react';
import { MapPin, Mail, MessageCircle, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-64">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Contactos</h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">PARA CONSULTAR PREGUNTAS</p>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Nuestra información de contactos</h2>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-red-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Dirección:</h3>
                  <p className="text-gray-600">Milagro/ Parroquia Roberto Astudillo</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-red-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Correo Electrónico:</h3>
                  <p className="text-gray-600">@gmail.com</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-green-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">WhatsApp:</h3>
                  <p className="text-gray-600">0969322989</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Teléfono:</h3>
                  <p className="text-gray-600">96 932 2989</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">INFORMACIÓN SOBRE NOSOTROS</p>
              <h2 className="text-3xl font-bold text-gray-800">PÓNGASE EN CONTACTO CON NOSOTROS</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Su nombre"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Su Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Número de teléfono"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Su Mensaje"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300 transform hover:scale-105"
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden relative">
            {/* Placeholder for map - in a real implementation, you would integrate with Google Maps or similar */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100">
              <div className="text-center">
                <MapPin size={48} className="text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Nuestra Ubicación</h3>
                <p className="text-gray-600">Milagro/ Parroquia Roberto Astudillo</p>
                <p className="text-sm text-gray-500 mt-2">Mapa interactivo disponible próximamente</p>
              </div>
            </div>
            
            {/* Map overlay with location marker */}
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-3">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-red-500" />
                <span className="text-sm font-medium">Roberto Astudillo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-orange-500 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>Creado por AlucinaMKT 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;