"use client";

import { useState } from "react";
import { 
  Building2, User, Globe, MapPin, 
  Handshake, Phone 
} from "lucide-react";

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    raisonSociale: "",
    nomFocal: "",
    prenomFocal: "",
    paysSiege: "",
    villeSiege: "",
    typePartenariat: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Données Partenaire :", formData);
    alert("Votre demande de partenariat a été envoyée avec succès !");
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* --- HEADER SECTION --- */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Devenir partenaire d'<span className="text-orange-900">Africa New Mindset</span>
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Pour continuer à mener des actions toujours plus impactantes, ANM noue des partenariats 
            privilégiés avec des entreprises, des fondations et des associations. 
            Les partenaires apportent des ressources financières, un soutien matériel et technique, 
            ainsi que leur expertise technique.
          </p>
        </div>
      </section>

      {/* --- FORMULAIRE --- */}
      <section className="py-16 container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white border border-gray-100 shadow-2xl rounded-3xl overflow-hidden">
          
          <div className="bg-orange-100 p-8 text-center">
            <h2 className="text-2xl font-bold mb-2 text-orange-900">1000 Mercis !!!</h2>
            <p className="opacity-90">
              Merci pour cette décision ! Remplissez ce formulaire et notre équipe relations 
              extérieures vous contactera au plus vite.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            
            {/* Infos Entreprise */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-orange-900 flex items-center gap-2">
                <Building2 size={16} /> Informations de l'organisation
              </h3>
              
              <PartnerInput 
                label="Raison sociale de l'entreprise" 
                placeholder="Ex: Entreprise Durable CI" 
                icon={<Building2 size={18} />}
                onChange={(v) => setFormData({...formData, raisonSociale: v})}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <PartnerInput 
                  label="Pays du siège social" 
                  placeholder="Ex: Côte d'Ivoire" 
                  icon={<Globe size={18} />}
                  onChange={(v) => setFormData({...formData, paysSiege: v})}
                />
                <PartnerInput 
                  label="Ville du siège social" 
                  placeholder="Ex: Abidjan" 
                  icon={<MapPin size={18} />}
                  onChange={(v) => setFormData({...formData, villeSiege: v})}
                />
              </div>
            </div>

            {/* Point Focal */}
            <div className="space-y-6 pt-6 border-t border-gray-100">
              <h3 className="text-sm font-bold uppercase tracking-widest text-orange-900 flex items-center gap-2">
                <User size={16} /> Point focal (Contact)
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <PartnerInput 
                  label="Nom" 
                  placeholder="Ex: Traoré" 
                  icon={<User size={18} />}
                  onChange={(v) => setFormData({...formData, nomFocal: v})}
                />
                <PartnerInput 
                  label="Prénom" 
                  placeholder="Ex: Moussa" 
                  icon={<User size={18} />}
                  onChange={(v) => setFormData({...formData, prenomFocal: v})}
                />
              </div>
              <PartnerInput 
                  label="Contact" 
                  placeholder="Ex: 07 07 XX XX XX"
                  icon={<Phone size={18} />}
                  onChange={(v) => setFormData({...formData, prenomFocal: v})}
                />
            </div>

            {/* Type de Partenariat */}
            <div className="space-y-4 pt-6 border-t border-gray-100">
              <label className="block text-sm font-bold text-gray-700">Type de partenariat proposé</label>
              <select 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 outline-none focus:ring-1 focus:ring-orange-900 transition appearance-none text-gray-600"
                onChange={(e) => setFormData({...formData, typePartenariat: e.target.value})}
                required
              >
                <option value="">Sélectionnez une option...</option>
                <option value="financier">Soutien Financier</option>
                <option value="materiel">Soutien Matériel (Dons de produits)</option>
                <option value="technique">Expertise Technique / Compétences</option>
                <option value="communication">Partenariat Média / Visibilité</option>
              </select>
            </div>

            {/* Bouton Validation */}
            <button 
              type="submit" 
              className="w-full bg-orange-100 text-orange-900 font-bold text-lg py-4 rounded-xl hover:text-orange-100 hover:bg-orange-900 transition transform hover:-translate-y-1 shadow-lg shadow-orange-900/30 flex items-center justify-center gap-3"
            >
              <Handshake size={24} />
              Devenir partenaire
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}

// --- SOUS-COMPOSANT INPUT ---
type PartnerInputProps = {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  onChange: (value: string) => void;
};

function PartnerInput({ label, placeholder, icon, onChange }: PartnerInputProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
          {icon}
        </div>
        <input 
          type="text"
          required
          className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-1 focus:ring-orange-900 transition text-gray-800 placeholder-gray-400"
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}