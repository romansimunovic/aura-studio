import React, { useState } from 'react';
import { MapPin, Clock, Palette, Brush, Sparkles } from "lucide-react";
import NailsMakeupBooking from './NailsMakeupBooking';

const SALON_CONFIG = {
  name: "AT Makeup",
  owner: "Tea Andrašić",
  subtitle: "Obrt za šminkanje & edukacije",
  address: "Ul. Ljudevita Gaja 72, 35400, Nova Gradiška",
  hours: "PON-NED: 07:00 - 22:00",
  social: { instagram: "https://www.instagram.com/a.t___makeup/", facebook: "https://www.facebook.com/p/AT-Makeup-obrt-za-%C5%A1minkanje-100094690771689/" },
  
  trust: { rating: 5.0, reviews: 28, items: ["Individualan pristup", "Profesionalni proizvodi", "Dugotrajnost"] },
  
  services: [
    { id: 'mladenke', title: "Šminkanje za mladenke", desc: "Besprijekoran look za vaš najvažniji dan.", price: "Na upit" },
    { id: 'vecernji', title: "Večernji makeup", desc: "Glamur koji traje cijelu noć.", price: "50 €" },
    { id: 'dnevni', title: "Dnevni makeup", desc: "Svježina i naglašena prirodna ljepota.", price: "35 €" },
    { id: 'edukacija', title: "Individualne edukacije", desc: "Naučite tehnike prilagođene vašem licu.", price: "Na upit" }
  ],

  education_points: [
    "Pravilna priprema kože", "Odabir proizvoda prema tipu kože", "Konturiranje prema obliku lica", 
    "Tehnike sjenčanja", "Dnevni i večernji makeup", "Higijena alata"
  ]
};

const GalleryData = [
  { id: 1, cat: 'night out', src: '/images/makeup1.jpg' },
  { id: 2, cat: 'casual', src: '/images/makeup2.jpg' },
  { id: 3, cat: 'ljetni', src: '/images/makeup3.jpg' },
  { id: 4, cat: 'night out', src: '/images/makeup4.jpg' }
];

export default function App() {
  const [activeCat, setActiveCat] = useState('Sve');
  const [selectedImage, setSelectedImage] = useState(null);
  const filteredImages = activeCat === 'Sve' ? GalleryData : GalleryData.filter(i => i.cat === activeCat);

  return (
    <div className="min-h-screen bg-[#FFFDFE] text-[#4A3E3F] font-sans scroll-smooth">
      
      {/* HEADER */}
      <nav className="fixed w-full z-50 bg-[#FFFDFE]/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-[#FDF5F6]">
        <h1 className="font-serif text-lg tracking-widest">{SALON_CONFIG.name}</h1>
        <div className="flex gap-4">
          <a 
  href={SALON_CONFIG.social.instagram}
  target="_blank"
  rel="noreferrer"
  className="text-xs font-bold hover:text-[#C98B94]"
>
  IG
</a>

<a 
  href={SALON_CONFIG.social.facebook}
  target="_blank"
  rel="noreferrer"
  className="text-xs font-bold hover:text-[#C98B94]"
>
  FB
</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="h-[90vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#FDF5F6] to-transparent">
        <h2 className="text-[10px] uppercase tracking-[0.4em] mb-4 text-[#C98B94]">Profesionalno šminkanje & edukacije</h2>
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">Istakni svoju<br/>prirodnu ljepotu</h1>
        <div className="flex gap-4">
          <a href="#booking" className="bg-[#4A3E3F] text-white px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:scale-105 transition-transform">Rezerviraj</a>
          <a href="#gallery" className="border border-[#4A3E3F] px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-[#FDF5F6] transition-colors">Radovi</a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-24">
        
        {/* TRUST BAR */}
        <div className="flex flex-wrap justify-center gap-8 py-8 border-y border-[#FDF5F6]">
          <div className="text-center"><p className="text-2xl font-serif">5.0★</p><p className="text-[10px] uppercase opacity-60">Google ocjena</p></div>
          <div className="text-center"><p className="text-2xl font-serif">28+</p><p className="text-[10px] uppercase opacity-60">Recenzija</p></div>
          <div className="text-center"><p className="text-2xl font-serif">1-na-1</p><p className="text-[10px] uppercase opacity-60">Individualan pristup</p></div>
        </div>

        {/* SERVICES */}
        <section id="services">
          <h2 className="font-serif text-3xl mb-12 text-center">Usluge</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {SALON_CONFIG.services.map((s, i) => (
              <div key={i} className="p-6 border border-[#FDF5F6] rounded-2xl hover:shadow-lg transition-all hover:scale-[1.02]">
                <h3 className="font-serif text-xl mb-2">{s.title}</h3>
                <p className="text-xs opacity-70 mb-4">{s.desc}</p>
                <span className="text-[10px] font-bold text-[#C98B94]">{s.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY W/ FILTER */}
        <section id="gallery">
          <h2 className="font-serif text-3xl mb-8 text-center">Galerija radova</h2>
          <div className="flex justify-center gap-4 mb-8 text-[10px] uppercase tracking-widest">
            {['Sve', 'casual', 'night out', 'ljetni'].map(cat => (
              <button key={cat} onClick={() => setActiveCat(cat)} className={`px-4 py-2 rounded-full ${activeCat === cat ? 'bg-[#4A3E3F] text-white' : 'bg-[#FDF5F6]'}`}>{cat}</button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {filteredImages.map(img => (
    <img 
      key={img.id} 
      src={img.src} 
      onClick={() => setSelectedImage(img.src)} // <--- DODAJ OVO
      className="aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity cursor-pointer" 
      alt="Makeup" 
    />
  ))}

  {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Uveličani rad" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    
</div>
        </section>

        {/* WHY AT MAKEUP */}
        <section>
          <h2 className="font-serif text-3xl mb-12 text-center">Zašto AT Makeup?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Palette />, title: "Individualnost", text: "Ne radim kopije trendova. Svako lice ima svoju priču koju ističemo." },
              { icon: <Brush />, title: "Pedantnost", text: "Svaka linija je precizna, svaki detalj pomno planiran." },
              { icon: <Sparkles />, title: "Kvaliteta", text: "Koristim premium proizvode koji traju i njeguju kožu." }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="text-[#C98B94] flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-sm uppercase tracking-widest">{item.title}</h3>
                <p className="text-xs opacity-70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-[#FDF5F6] p-10 rounded-3xl">
          <h2 className="font-serif text-2xl mb-10 text-center">Kako izgleda termin?</h2>
          <div className="space-y-6">
            {[
              "Konzultacije o željama", "Analiza kože i oblika lica", "Odabir stila", "Profesionalno šminkanje", "Savjeti za održavanje"
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-center">
                <div className="bg-[#4A3E3F] text-white w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold">0{i+1}</div>
                <p className="text-sm">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING */}
        <section id="booking"><NailsMakeupBooking /></section>

        {/* LOCATION & INFO */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h2 className="font-serif text-3xl">Posjetite nas</h2>
                <div className="flex gap-2 items-center text-xs opacity-70"><MapPin size={16}/> {SALON_CONFIG.address}</div>
                <div className="flex gap-2 items-center text-xs opacity-70"><Clock size={16}/> {SALON_CONFIG.hours}</div>
            </div>
            <div className="h-64 rounded-3xl overflow-hidden shadow-lg border border-[#FDF5F6]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.0123!2d17.545!3d45.247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476763ed130c5ef5%3A0x4e9251d7b039f44e!2sUl.+Ljudevita+Gaja+72%2C+35400%2C+Nova+Gradi%C5%A1ka!5e0!3m2!1shr!2shr!4v1700000000000" className="w-full h-full" allowFullScreen loading="lazy"></iframe>
            </div>
        </section>
      </main>

      <footer className="bg-[#4A3E3F] text-white py-12 text-center text-[10px] uppercase tracking-widest mt-20">
        © 2026 {SALON_CONFIG.name} • {SALON_CONFIG.owner}
      </footer>

      
    </div>
  );
}