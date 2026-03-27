"use client";

import Link from "next/link";
import { ArrowLeft, Heart, CheckCircle, Smartphone, CreditCard, Share2 } from "lucide-react";
import { useState } from "react";
import img1000s from "@/public/img/collecte-1000s.jpg"
import Image from "next/image";

// Données simulées (À remplacer plus tard par une base de données)
const campaigns = [
  {
    id: 1,
    title: "1000 Sourires pour Noël",
    description: "Un arbre de Noël géant pour offrir cadeaux et magie à 1000 enfants des quartiers défavorisés de Wassakara.",
    targetAmount: 5000000, // Objectif en FCFA
    currentAmount: 3250000, // Montant actuel
    image: img1000s,
    category: "Enfance",
    deadline: "20 Déc 2025"
  },
  {
    id: 2,
    title: "Campagne TBFA",
    description: "Soutenez le programme 'Tu es Belle, Forte et Aimée'. Ateliers, écoute et accompagnement pour l'autonomisation des femmes.",
    targetAmount: 2000000,
    currentAmount: 450000,
    image: img1000s, // Remplacer par image Femmes
    category: "Femmes",
    deadline: "Permanent"
  },
];

export default function FundraisingPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* --- HERO SECTION --- */}
      <section className="bg-orange-50 py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-100 opacity-10 pattern-dots"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Investissez dans <span className="text-orange-900">l'Humain</span></h1>
          <p className="text-gray-900 max-w-2xl mx-auto text-lg mb-8">
            Africa New Mindset utilise son réseau comme un espace sûr pour lever des fonds et agir.
            Suivez nos campagnes en temps réel et voyez l'impact direct de votre générosité.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full border border-white/20">
            <Heart className="text-red-700 fill-red-700" size={20} />
            <span className="font-semibold">Déjà X XXX XXX FCFA récoltés cette année !</span>
          </div>
        </div>
      </section>

      {/* --- LISTE DES CAMPAGNES (GRID) --- */}
      <section className="container mx-auto px-6 py-16 -mt-10">
        <div className="flex flex-wrap justify-center gap-8">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="w-full md:w-[45%] lg:w-[30%]">
              <CampaignCard data={campaign} />
            </div>
          ))}
        </div>
      </section>

      {/* --- COMMENT DONNER --- */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Moyens de paiement acceptés</h2>
            <p className="text-gray-500">Nous facilitons vos dons via les solutions locales et internationales.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mobile Money */}
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <Smartphone size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Mobile Money</h3>
              <p className="text-sm text-gray-600 mb-6">Orange Money, MTN Money, Wave</p>
              <div className="bg-white px-4 py-3 rounded-lg border border-gray-200 w-full font-mono text-lg font-bold text-gray-800">
                +225 XX XX XX XX XX
              </div>
              <p className="text-xs text-gray-500 mt-2">Nom : Africa New Mindset Tresorerie</p>
            </div>

            {/* Virement / Carte */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center mb-4">
                <CreditCard size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Carte Bancaire / PayPal</h3>
              <p className="text-sm text-gray-600 mb-6">Pour nos donateurs à l'international</p>
              <button className="bg-gray-900 text-white w-full py-3 rounded-lg font-bold hover:bg-gray-800 transition">
                Faire un don en ligne
              </button>
              <p className="text-xs text-gray-500 mt-2">Sécurisé via Stripe/PayPal</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRANSPARENCE --- */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-8">Pourquoi nous faire confiance ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <CheckCircle className="text-green-500 mb-3" size={32} />
              <h4 className="font-bold">Traçabilité</h4>
              <p className="text-sm text-gray-600">Rapports financiers publiés après chaque grande activité.</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="text-green-500 mb-3" size={32} />
              <h4 className="font-bold">Impact Direct</h4>
              <p className="text-sm text-gray-600">Vos dons vont directement aux bénéficiaires (Wassakara, etc.).</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="text-green-500 mb-3" size={32} />
              <h4 className="font-bold">Communauté</h4>
              <p className="text-sm text-gray-600">Un réseau de bénévoles engagés qui réduisent les coûts opérationnels.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

// --- COMPOSANT CARTE DE CAMPAGNE ---
function CampaignCard({ data }: { data: any }) {
  // Calcul du pourcentage
  const percentage = Math.min(100, Math.round((data.currentAmount / data.targetAmount) * 100));

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        <Image loading="eager" src={data.image} alt={data.title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide text-gray-800">
          {data.category}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{data.title}</h3>
        </div>

        <p className="text-gray-500 text-sm mb-6 flex-1">{data.description}</p>

        {/* JAUGE DE PROGRESSION */}
        <div className="mb-6">
          <div className="flex justify-between text-sm font-bold mb-2">
            <span className="text-orange-900">{percentage}% financé</span>
            <span className="text-gray-400">Obj: {data.targetAmount.toLocaleString()} F</span>
          </div>

          <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
            <div
              className="bg-orange-900 h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>

          <div className="mt-2 text-xs text-gray-500 text-right">
            <span className="font-bold text-gray-800">{data.currentAmount.toLocaleString()} FCFA</span> récoltés
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex gap-3 mt-auto">
          <button className="flex-1 bg-orange-100 text-orange-900 py-3 rounded-lg font-bold hover:bg-orange-200  0 transition shadow-lg shadow-orange-600/20">
            Soutenir
          </button>
        </div>
      </div>
    </div>
  );
}