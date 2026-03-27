"use client";

import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin, } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { Phone, MapPin, Send, Clock, } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message envoyé :", formData);
    alert("Votre message a été transmis à l'équipe ANM. Merci !");
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <section className="py-16 px-6 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* --- COLONNE GAUCHE : INFOS --- */}
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Restons en <span className="text-orange-900">contact !</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vous souhaitez en savoir plus, devenir bénévole ou collaborer avec nous ?
                L'équipe d'Africa New Mindset est à votre écoute ! Laissez-nous un message
                ou contactez-nous via nos canaux officiels.
              </p>
            </div>

            {/* Cartes de contact rapides */}
            <div className="grid sm:grid-cols-2 gap-6">

              {/* Téléphone */}
              <div className="flex items-center gap-4 p-6 bg-orange-50 rounded-2xl border border-orange-100">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-orange-200">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-orange-600 font-bold uppercase tracking-wider">Téléphone</p>
                  <p className="font-bold text-gray-900">+225 07 47 81 04 90</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4 p-6 bg-pink-50 rounded-2xl border border-pink-100">
                <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-pink-200">
                  <FiInstagram size={24} />
                </div>
                <div>
                  <p className="text-xs text-pink-600 font-bold uppercase tracking-wider">Instagram</p>
                  <p className="font-bold text-gray-900">@africanewmindset</p>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-200">
                  <FiFacebook size={24} />
                </div>
                <div>
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">Facebook</p>
                  <p className="font-bold text-gray-900">Africanewmindset</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 p-6 bg-sky-50 rounded-2xl border border-sky-100">
                <div className="w-12 h-12 bg-sky-700 text-white rounded-full flex items-center justify-center shadow-lg shadow-sky-200">
                  <FiLinkedin size={24} />
                </div>
                <div>
                  <p className="text-xs text-sky-700 font-bold uppercase tracking-wider">LinkedIn</p>
                  <p className="font-bold text-gray-900">africa-new-mindset</p>
                </div>
              </div>

              {/* X */}
              <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-2xl border border-gray-200">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg shadow-gray-300">
                  <BsTwitterX size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-700 font-bold uppercase tracking-wider">X (Twitter)</p>
                  <p className="font-bold text-gray-900">@africamillenium</p>
                </div>
              </div>
            </div>

            {/* Disponibilité & Localisation */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-gray-100 rounded-lg text-gray-600">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Disponibilité</h4>
                  <p className="text-gray-500">Notre équipe répond à vos préoccupations 7 jours / 7.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-gray-100 rounded-lg text-gray-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Adresse</h4>
                  <p className="text-gray-500">xxxxxxxxx, xxxxxxx - Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- COLONNE DROITE : FORMULAIRE --- */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
            {/* Décoration subtile */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 opacity-50"></div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                Écrivez-nous <Send size={20} className="text-orange-900" />
              </h2>
              <div className="w-12 h-1 bg-orange-900 mt-2 rounded"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <ContactInput
                label="Votre nom"
                placeholder="Entrez votre nom complet"
                value={formData.nom}
                onChange={(v) => setFormData({ ...formData, nom: v })}
              />

              <ContactInput
                label="Votre e-mail"
                type="email"
                placeholder="adresse@email.com"
                value={formData.email}
                onChange={(v) => setFormData({ ...formData, email: v })}
              />

              <ContactInput
                label="Sujet"
                placeholder="De quoi souhaitez-vous discuter ?"
                value={formData.sujet}
                onChange={(v) => setFormData({ ...formData, sujet: v })}
              />

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Votre message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-1 focus:ring-orange-900 transition resize-none text-gray-800 placeholder-gray-400"
                  placeholder="Expliquez-nous votre projet ou posez votre question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-100 text-orange-900 font-bold py-4 rounded-2xl hover:bg-orange-900 hover:text-orange-100 transition transform hover:-translate-y-1 shadow-lg shadow-orange-900/20"
              >
                Envoyer le message
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}

// --- SOUS-COMPOSANT INPUT ---
type ContactInputProps = {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
};

function ContactInput({ label, placeholder, type = "text", value, onChange }: ContactInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-gray-700 ml-1">{label}</label>
      <input
        type={type}
        required
        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-1 focus:ring-orange-900 transition text-gray-800 placeholder-gray-400"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}