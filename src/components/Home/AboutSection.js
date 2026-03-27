'use client'

import { Heart, Users, HandCoins } from "lucide-react";
import React from "react";

// Composant IdentityCard
function IdentityCard({ Icon, title, description, iconBg, iconColor }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition duration-300">
      <div className={`${iconBg} ${iconColor} w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto`}>
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
      <p className="text-gray-600 text-center text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function AboutSection() {
  const cards = [
    {
      Icon: Users,
      title: "Un vaste réseau de bénévoles",
      description: "Notre force étant le capital humain, Africa New Mindset se positionne comme un réseau de jeunes amis, animé par la joie et l'envie de faire le bien autour de soi.",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-900",
    },
    {
      Icon: HandCoins,
      title: "Un incubateur de levée de fonds",
      description: "Africa New Mindset utilise son réseau comme un espace sûr pour lever des fonds et agir concrètement sur le terrain.",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-900",
    },
    {
      Icon: Heart,
      title: "Partenariat & Engagement",
      description: "ANM est pour l'engagement sociétal de la jeunesse. Le partenariat est son partage en mettant à disposition son capital humain ou ses capacités de levée de fonds.",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-900",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Qui sommes-nous ?</h2>
          <div className="w-20 h-1 bg-orange-900 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <IdentityCard
              key={index}
              Icon={card.Icon}
              title={card.title}
              description={card.description}
              iconBg={card.iconBg}
              iconColor={card.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}