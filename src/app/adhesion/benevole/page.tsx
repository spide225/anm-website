"use client";

import { useState } from "react";
import { 
  User, Phone, Mail, Flag, Globe, MapPin, 
  Building2, Briefcase, CheckCircle, HeartHandshake, Star 
} from "lucide-react";
import Image from "next/image";

import armee from "@/public/img/armee-du-sourire.png"

export default function VolunteerPage() {
  // Gestion simple de l'état du formulaire (pour l'exemple)
  const [formData, setFormData] = useState({
    nom: "",
    contact: "",
    email: "",
    nationalite: "",
    pays: "",
    ville: "",
    commune: "",
    profession: "",
    reglesAcceptees: false
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Formulaire envoyé :", formData);
    alert("Merci ! Votre demande a bien été enregistrée.");
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={armee} // Remplacer par la photo du groupe de bénévoles (t-shirts blancs)
            alt="Groupe bénévoles ANM" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center mt-10">
          {/* Onglets simulés comme sur la maquette */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-md">
            Rejoins <span className="text-orange-200">l'aventure !!</span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light leading-relaxed">
            Rejoins une équipe de jeunes engagés qui œuvrent pour offrir du sourire et du soutien autour d'eux.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-orange-100 font-medium animate-pulse">
            <Star size={20} fill="currentColor" />
            <span>Bienvenue dans l'Armée du Sourire !!</span>
            <Star size={20} fill="currentColor" />
          </div>
        </div>
      </section>

      {/* --- SECTION FORMULAIRE --- */}
      <section className="relative z-20 -mt-20 container mx-auto px-6 pb-20">
        <div className="bg-white rounded-2xl shadow-xl max-w-4xl mx-auto overflow-hidden">
          
          {/* En-tête du formulaire */}
          <div className="bg-orange-50 p-8 border-b border-orange-100 text-center">
            <h2 className="text-3xl font-bold text-orange-900 mb-2">1000 Mercis !!!</h2>
            <p className="text-gray-600">
              Merci pour cette décision ! Remplissez ce formulaire et nous vous contacterons au plus vite.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Colonne Gauche */}
              <div className="space-y-6">
                <InputField 
                  icon={<User size={18} />} 
                  label="Votre nom" 
                  name="nom" 
                  placeholder="Ex: Kouassi Jean" 
                  value={formData.nom} 
                  onChange={handleChange} 
                />
                <InputField 
                  icon={<Mail size={18} />} 
                  label="Votre e-mail" 
                  name="email" 
                  type="email"
                  placeholder="Ex: jean@email.com" 
                  value={formData.email} 
                  onChange={handleChange} 
                />
                <InputField 
                  icon={<Globe size={18} />} 
                  label="Pays de résidence" 
                  name="pays" 
                  placeholder="Ex: Côte d'Ivoire" 
                  value={formData.pays} 
                  onChange={handleChange} 
                />
                <InputField 
                  icon={<Building2 size={18} />} 
                  label="Votre commune" 
                  name="commune" 
                  placeholder="Ex: Yopougon" 
                  value={formData.commune} 
                  onChange={handleChange} 
                />
              </div>

              {/* Colonne Droite */}
              <div className="space-y-6">
                <InputField 
                  icon={<Phone size={18} />} 
                  label="Votre contact" 
                  name="contact" 
                  type="tel"
                  placeholder="Ex: 07 07 XX XX XX" 
                  value={formData.contact} 
                  onChange={handleChange} 
                />
                <InputField 
                  icon={<Flag size={18} />} 
                  label="Votre nationalité" 
                  name="nationalite" 
                  placeholder="Ex: Ivoirienne" 
                  value={formData.nationalite} 
                  onChange={handleChange} 
                />
                <InputField 
                  icon={<MapPin size={18} />} 
                  label="Votre ville" 
                  name="ville" 
                  placeholder="Ex: Abidjan" 
                  value={formData.ville} 
                  onChange={handleChange} 
                />
                <InputField 
                  icon={<Briefcase size={18} />} 
                  label="Votre profession" 
                  name="profession" 
                  placeholder="Ex: Étudiant, Comptable..." 
                  value={formData.profession} 
                  onChange={handleChange} 
                />
              </div>
            </div>

            {/* Checkbox Conditions */}
            <div className="mt-10 mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input 
                    type="checkbox" 
                    name="reglesAcceptees"
                    checked={formData.reglesAcceptees}
                    onChange={handleChange}
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-white checked:border-orange-900 checked:bg-orange-900 transition-all"
                  />
                  <CheckCircle size={14} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
                </div>
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition select-none">
                  Je confirme avoir lu et j'accepte <a href="#" className="text-orange-900 hover:underline font-semibold">les règles d'engagement</a> d'Africa New Mindset.
                </span>
              </label>
            </div>

            {/* Bouton Submit */}
            <button 
              type="submit" 
              className="w-full bg-orange-100 text-orange-900 font-bold text-lg py-4 rounded-xl hover:text-orange-100 hover:bg-orange-900 transition transform hover:-translate-y-1 shadow-lg shadow-orange-900/30 flex items-center justify-center gap-3"
            >
              <HeartHandshake size={24} />
              Rejoindre ANM
            </button>

            <p className="text-center text-xs text-gray-400 mt-6 italic">
              "Ton envie d'aider suffit : tu participes selon ton temps et ton énergie."
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

// --- COMPOSANT INPUT REUTILISABLE ---
function InputField({ label, icon, name, placeholder, type = "text", value, onChange }: any) {
  return (
    <div className="relative group">
      <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-orange-900 transition">
          {icon}
        </div>
        <input 
          type={type} 
          name={name}
          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-orange-900 transition outline-none text-gray-800 placeholder-gray-400"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}