'use client'

import Image from "next/image";
import benevole1 from "../../public/img/benevole-1.jpg"
import Link from "next/link";

export default function JoinSection() {
  return (
    <section id="benevole" className="py-24 relative overflow-hidden bg-[#F9F4EE] text-gray-900">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[#A86832] rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Texte */}
        <div className="md:w-1/2">
          <span className="text-[#A86832] font-bold uppercase tracking-widest text-sm mb-2 block">Devenir Bénévole</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Rejoignez notre Armée du Sourire</h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Envie de mettre votre énergie au service du bonheur des enfants et des femmes ?
            Devenez bénévole et participez à nos activités pour illuminer des vies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/adhesion/benevole" className="bg-[#A86832] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition shadow-lg shadow-[#A86832]/30">
              Nous Rejoindre
            </Link>
            <Link href="fundraising" className="border border-gray-900 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-[#A86832] hover:text-white transition">
              Faire un don
            </Link>
          </div>
        </div>

        {/* Image bloc droite */}
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition duration-500">
            <Image
              src={benevole1} // Remplacer par la photo du groupe de bénévoles
              alt="Groupe de bénévoles ANM"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}