'use client';

import Image from "next/image";
import imgPr from "@/public/img/pr.png";
import imgVicePr from "@/public/img/vicepr.png";
import imgSG from "@/public/img/sg.png";

export default function About() {
  const executives = [
    {
      name: "Ben SOUMAHORO",
      role: "Président",
      title: "Mot du Président",
      image: imgPr,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies.",
      reverse: false,
    },
    {
      name: "Imrane DIABAGATE",
      role: "Vice-Président",
      title: "Mot du Vice-Président",
      image: imgVicePr,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies.",
      reverse: true,
    },
    {
      name: "Charles Dominique GNIZAKO",
      role: "Secrétaire Général",
      title: "Mot du Secrétaire Général",
      image: imgSG,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies.",
      reverse: false,
    },
  ];

  return (
    <section className="bg-gray-50 py-20 flex flex-col">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">La Direction</h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto rounded"></div>
          <p className="text-gray-500 mt-4">Les leaders qui guident notre vision</p>
        </div>

        <div className="flex flex-col gap-8">
          {executives.map((exec, index) => (
            <ExecutiveCard key={index} {...exec} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- COMPOSANT CARTE DIRIGEANT ---
function ExecutiveCard({ name, role, title, image, text, reverse }) {
  return (
    <div className="py-16">
      <div
        className={`max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="flex justify-center md:flex-1">
          <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-full overflow-hidden">
            <Image
              src={image}
              alt={`${name}, ${role}`}
              className="object-cover"
            />
          </div>
        </div>

        {/* Texte */}
        <div className="md:flex-1">
          <p className="text-orange-900 font-semibold">{title}</p>
          <p className="mt-2 text-gray-700">{text}</p>
          <p className="mt-6 font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}