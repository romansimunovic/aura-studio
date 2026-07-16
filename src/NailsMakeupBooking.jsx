import React, { useState } from 'react';

const NailsMakeupBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Ime je obavezno";
    if (!formData.email || !formData.email.includes('@')) newErrors.email = "Unesi ispravan email";
    if (!formData.phone) newErrors.phone = "Telefon je obavezan";
    if (!formData.service) newErrors.service = "Odaberi uslugu";
    if (!formData.date) newErrors.date = "Odaberi datum";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    
    // Simulacija API poziva
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Čišćenje greške pri promjeni polja
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  if (status === 'success') {
    return (
      <div className="w-full max-w-lg mx-auto bg-white p-8 md:p-12 rounded-3xl border border-[#FDF5F6] shadow-sm text-center">
        <div className="w-16 h-16 bg-[#FDF5F6] rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">✨</span>
        </div>
        <h3 className="font-serif text-2xl text-[#4A3E3F] mb-2">Upit poslan!</h3>
        <p className="text-sm text-[#4A3E3F]/70">Hvala! Tvoj termin je u obradi. Javit ćemo se uskoro za potvrdu.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-[10px] uppercase tracking-widest text-[#C98B94] hover:underline"
        >
          Pošalji novi upit
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto px-4 md:px-0">
      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl text-[#4A3E3F]">Rezervacija</h2>
        <p className="text-[10px] uppercase tracking-widest text-[#C98B94] mt-2">Osiguraj svoj termin</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Ime */}
        <div>
          <input 
            type="text" name="name" placeholder="Ime i prezime"
            className={`w-full p-4 bg-white border ${errors.name ? 'border-red-300' : 'border-[#EFCACF]/30'} rounded-xl focus:outline-none focus:border-[#C98B94] transition-all text-sm`}
            onChange={handleInputChange}
          />
          {errors.name && <p className="text-[10px] text-red-400 mt-1 pl-2">{errors.name}</p>}
        </div>

        {/* Email i Telefon - Grid na desktopu, stack na mobitelu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <input 
              type="email" name="email" placeholder="E-mail"
              className={`w-full p-4 bg-white border ${errors.email ? 'border-red-300' : 'border-[#EFCACF]/30'} rounded-xl focus:outline-none focus:border-[#C98B94] transition-all text-sm`}
              onChange={handleInputChange}
            />
            {errors.email && <p className="text-[10px] text-red-400 mt-1 pl-2">{errors.email}</p>}
          </div>
          <div>
            <input 
              type="tel" name="phone" placeholder="Telefon"
              className={`w-full p-4 bg-white border ${errors.phone ? 'border-red-300' : 'border-[#EFCACF]/30'} rounded-xl focus:outline-none focus:border-[#C98B94] transition-all text-sm`}
              onChange={handleInputChange}
            />
            {errors.phone && <p className="text-[10px] text-red-400 mt-1 pl-2">{errors.phone}</p>}
          </div>
        </div>

        {/* Usluga */}
        <div>
          <select 
            name="service"
            className={`w-full p-4 bg-white border ${errors.service ? 'border-red-300' : 'border-[#EFCACF]/30'} rounded-xl focus:outline-none focus:border-[#C98B94] transition-all text-sm text-[#4A3E3F]`}
            onChange={handleInputChange}
            defaultValue=""
          >
            <option value="" disabled>Odaberi uslugu</option>
            <option value="dnevni">Dnevni makeup</option>
            <option value="svecani">Svečani / Večernji makeup</option>
            <option value="mladenka">Mladenkin paket</option>
            <option value="lash-lift">Lash Lift & Tint</option>
          </select>
          {errors.service && <p className="text-[10px] text-red-400 mt-1 pl-2">{errors.service}</p>}
        </div>

        {/* Datum */}
        <div>
          <input 
            type="date" name="date"
            className={`w-full p-4 bg-white border ${errors.date ? 'border-red-300' : 'border-[#EFCACF]/30'} rounded-xl focus:outline-none focus:border-[#C98B94] transition-all text-sm text-[#4A3E3F]`}
            onChange={handleInputChange}
          />
          {errors.date && <p className="text-[10px] text-red-400 mt-1 pl-2">{errors.date}</p>}
        </div>

        {/* Poruka */}
        <textarea 
          name="message" placeholder="Dodatna napomena (opcionalno)" rows="3"
          className="w-full p-4 bg-white border border-[#EFCACF]/30 rounded-xl focus:outline-none focus:border-[#C98B94] transition-all text-sm"
          onChange={handleInputChange}
        ></textarea>

        {/* Gumb */}
        <button 
          type="submit"
          disabled={status === 'submitting'}
          className="w-full p-4 bg-[#4A3E3F] text-white rounded-xl uppercase text-[11px] tracking-widest hover:bg-[#C98B94] transition-all disabled:opacity-50"
        >
          {status === 'submitting' ? 'Slanje...' : 'Pošalji upit'}
        </button>
      </form>
    </div>
  );
};

export default NailsMakeupBooking;