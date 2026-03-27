"use client";

import Link from "next/link";
import { ArrowLeft, Camera, Heart, Users, Sparkles, MessageCircle } from "lucide-react";
import { useState } from "react";

import img1 from "@/public/img/armee-du-sourire.png"
import img2 from "@/public/img/benevole-1.jpg"
import img3 from "@/public/img/benevole-2.jpg"
import img4 from "@/public/img/collecte-1000s.jpg"
import img5 from "@/public/img/mission.jpg"
import img6 from "@/public/img/noel.jpg"
import Image from "next/image";

export default function GaleriePage() {
  // Liste des catégories basées sur la maquette
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">

      {/* --- HERO SECTION --- */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-orange-100 text-orange-600 rounded-2xl mb-6">
            <Camera size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Notre Galerie</h1>
          <p className="text-xl text-gray-600 italic max-w-2xl mx-auto">
            "Parce que des images valent mieux que les mots..."
          </p>
        </div>
      </section>

      {/* --- GRILLE DES ALBUMS --- */}
      {/* --- GALERIE UNIQUE (MASONRY) --- */}
      <section className="py-20 container mx-auto px-6">
        {/* Images */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

          {images.map((src, index) => (

            <div
              key={index}
              className="relative overflow-hidden rounded-2xl group break-inside-avoid"
            >
              <Image
                src={src}
                alt={`Galerie ${index}`}
                className={`w-full object-cover transition duration-500 group-hover:scale-105 ${index % 3 === 0 ? "h-[400px]" : "h-[250px]"
                  }`}
              />

              {/* Overlay sombre */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500"></div>

              {/* Bouton hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="bg-white text-black px-4 py-2 rounded-full font-semibold shadow-lg">
                  Voir
                </span>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* --- CTA REJOINDRE (Bas de page) --- */}
      <section className="py-20 bg-orange-100 text-orange-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Pattern décoratif */}
          <div className="grid grid-cols-6 gap-4 transform rotate-12 -translate-y-20">
            {[...Array(24)].map((_, i) => (
              <Camera key={i} size={80} />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Envie de figurer sur nos prochaines photos ?</h2>
          <p className="text-orange-900 text-lg mb-10 max-w-3xl mx-auto">
            Rejoignez notre Armée du Sourire et participez à nos prochaines activités pour illuminer des vies
            et créer des souvenirs inoubliables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/adhesion/benevole" className="bg-white text-orange-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-xl">
              Devenir Bénévole
            </Link>
            <Link href="/levee-de-fonds" className="bg-orange-900 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-800 transition">
              Soutenir nos actions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}