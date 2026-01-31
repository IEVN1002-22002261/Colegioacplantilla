import { useState } from 'react';
import Slider from 'react-slick';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Phone, Mail, MapPin, Facebook, Instagram, ChevronDown } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from 'figma:asset/1a6acd7c0a19fb8d8fbfdb63dfd7b9c4978ecbd7.png';

export default function App() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1615489548358-46fca22506cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVtZW50YXJ5JTIwc2Nob29sJTIwY2hpbGRyZW4lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY5MjQ0OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Maternal, Preescolar y Kinder",
      subtitle: "Formando el futuro de nuestros niños con amor y dedicación"
    },
    {
      url: "https://images.unsplash.com/photo-1633762348290-33a37f4d7fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBvdXRkb29yJTIwcGxheWdyb3VuZHxlbnwxfHx8fDE3NjkyNDQ5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Aprendizaje a través del Juego",
      subtitle: "Metodología innovadora y espacios seguros"
    },
    {
      url: "https://images.unsplash.com/photo-1758685734030-a31d96462eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjBzY2llbmNlJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2OTI0NDkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Educación Integral",
      subtitle: "Desarrollo académico, social y emocional"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: true,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Colegio Alexis Carrel" className="w-16 h-16" />
              <div>
                <h1 className="text-xl font-bold">COLEGIO ALEXIS CARREL</h1>
                <p className="text-sm text-blue-200">Educación para la vida</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#inicio" className="hover:text-yellow-400 transition-colors font-medium">INICIO</a>
              
              <div className="relative">
                <button 
                  className="hover:text-yellow-400 transition-colors font-medium flex items-center gap-1"
                  onMouseEnter={() => setActiveDropdown('acerca')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  ACERCA DE
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'acerca' && (
                  <div 
                    className="absolute top-full left-0 bg-white text-gray-800 shadow-lg mt-2 py-2 min-w-[200px] rounded"
                    onMouseEnter={() => setActiveDropdown('acerca')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a href="#historia" className="block px-4 py-2 hover:bg-blue-50">Nuestra Historia</a>
                    <a href="#mision" className="block px-4 py-2 hover:bg-blue-50">Misión y Visión</a>
                    <a href="#instalaciones" className="block px-4 py-2 hover:bg-blue-50">Instalaciones</a>
                  </div>
                )}
              </div>

              <div className="relative">
                <button 
                  className="hover:text-yellow-400 transition-colors font-medium flex items-center gap-1"
                  onMouseEnter={() => setActiveDropdown('niveles')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  NIVELES EDUCATIVOS
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'niveles' && (
                  <div 
                    className="absolute top-full left-0 bg-white text-gray-800 shadow-lg mt-2 py-2 min-w-[200px] rounded"
                    onMouseEnter={() => setActiveDropdown('niveles')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a href="#maternal" className="block px-4 py-2 hover:bg-blue-50">Maternal</a>
                    <a href="#preescolar" className="block px-4 py-2 hover:bg-blue-50">Preescolar</a>
                    <a href="#kinder" className="block px-4 py-2 hover:bg-blue-50">Kinder</a>
                  </div>
                )}
              </div>

              <a href="#servicios" className="hover:text-yellow-400 transition-colors font-medium">SERVICIOS</a>
              <a href="#contacto" className="hover:text-yellow-400 transition-colors font-medium">CONTACTO</a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      <section className="relative h-[600px]">
        <Slider {...sliderSettings} className="h-full">
          {carouselImages.map((image, index) => (
            <div key={index} className="relative h-[600px]">
              <div className="relative h-[600px] overflow-hidden">
                <ImageWithFallback 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-2xl">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        {image.title}
                      </h2>
                      <p className="text-xl md:text-2xl text-white/90 mb-8">
                        {image.subtitle}
                      </p>
                      <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                        Conoce Más
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Info Band */}
      <section className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-yellow-400" />
              <span>477 355 0621</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-yellow-400" />
              <span>instituto.calzada@gmail.com</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-400" />
              <span>Calle Francisco I Madero #847, Zona Centro, León, Mexico</span>
            </div>
          </div>
        </div>
      </section>

      {/* Niveles Educativos Section */}
      <section id="niveles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Niveles Educativos</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos programas educativos de calidad adaptados a cada etapa del desarrollo de tus hijos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Maternal",
                age: "1-2 años",
                image: "https://images.unsplash.com/photo-1761891950594-3564c14fe342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2RkbGVyJTIwZGF5Y2FyZSUyMGFjdGl2aXRpZXN8ZW58MXx8fHwxNzY5MjQ0NDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
                description: "Cuidado cariñoso y estimulación temprana para los más pequeños"
              },
              {
                title: "Preescolar",
                age: "3-4 años",
                image: "https://images.unsplash.com/photo-1565425518476-3229123699c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBraWRzJTIwbGVhcm5pbmclMjBwbGF5aW5nfGVufDF8fHx8MTc2OTI0NDQ0OHww&ixlib=rb-4.1.0&q=80&w=1080",
                description: "Desarrollo de habilidades sociales y aprendizaje lúdico"
              },
              {
                title: "Kinder",
                age: "5-6 años",
                image: "https://images.unsplash.com/photo-1633762348290-33a37f4d7fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwa2luZGVyZ2FydGVuJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2OTI0NDQ0OHww&ixlib=rb-4.1.0&q=80&w=1080",
                description: "Preparación integral para la educación primaria"
              }
            ].map((nivel, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback 
                    src={nivel.image}
                    alt={nivel.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white">{nivel.title}</h3>
                    <p className="text-yellow-400 font-semibold">{nivel.age}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{nivel.description}</p>
                  <button className="text-blue-700 font-semibold hover:text-yellow-600 transition-colors">
                    Ver más →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">¿Por Qué Elegirnos?</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                image: "https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdGVhY2hpbmclMjBjaGlsZHJlbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjkyNDY5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080", 
                title: "Maestros Certificados", 
                desc: "Personal altamente capacitado y con vocación" 
              },
              { 
                image: "https://images.unsplash.com/photo-1730106451023-f23ee452b3e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBmYWNpbGl0aWVzfGVufDF8fHx8MTc2OTI0NjkyMnww&ixlib=rb-4.1.0&q=80&w=1080", 
                title: "Instalaciones Modernas", 
                desc: "Espacios seguros y equipados para el aprendizaje" 
              },
              { 
                image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwZW5nbGlzaCUyMGJpbGluZ3VhbHxlbnwxfHx8fDE3NjkyNDY5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080", 
                title: "Programa Bilingüe", 
                desc: "Inglés desde temprana edad de forma natural" 
              },
              { 
                image: "https://images.unsplash.com/photo-1576089073624-b5751a8f4de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMGx1bmNoJTIwa2lkc3xlbnwxfHx8fDE3NjkyNDY5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080", 
                title: "Alimentación Sana", 
                desc: "Menús nutritivos balanceados diariamente" 
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para Inscribir a tu Hijo?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agenda una visita y conoce nuestras instalaciones. Te esperamos con los brazos abiertos.
          </p>
          <button className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors">
            Agendar Visita
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src={logo} alt="Colegio Alexis Carrel" className="w-16 h-16 mb-4" />
              <h3 className="font-bold text-xl mb-2">Colegio Alexis Carrel</h3>
              <p className="text-gray-400">Educación de calidad desde 2010</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Inicio</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Acerca de</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Niveles</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contacto</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>477 355 0621</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>instituto.calzada@gmail.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Calle Francisco I Madero #847, Zona Centro, León, Mexico</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-400">Lunes a Viernes</p>
                <p className="text-white font-semibold">7:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Colegio Alexis Carrel. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}