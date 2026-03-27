"use client";

import { Star, HandHeart, ShieldCheck } from "lucide-react";

export default function Values() {
    return (
        <section className="py-20 container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900">Nos Valeurs</h2>
                <p className="text-gray-500 mt-2">Ce qui nous définit et nous unit</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <ValueCard
                    icon={<HandHeart size={40} />}
                    title="Solidarité"
                    desc="Agir ensemble pour soutenir la femme, l'enfant et la communauté, dans un esprit d'entraide sincère."
                    color="bg-red-50 text-red-600"
                />
                <ValueCard
                    icon={<Star size={40} />}
                    title="Camaraderie"
                    desc="Des liens forts, une bonne ambiance et le plaisir de faire le bien ensemble."
                    color="bg-yellow-50 text-yellow-600"
                />
                <ValueCard
                    icon={<ShieldCheck size={40} />}
                    title="Engagement"
                    desc="Chaque membre s'implique avec sérieux, responsabilité et constance."
                    color="bg-blue-50 text-blue-600"
                />
            </div>
        </section>
    );
}

// --- COMPOSANT CARTE VALEUR ---
function ValueCard({ icon, title, desc, color }) {
    return (
        <div className="flex flex-col items-center text-center group">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${color}`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                {desc}
            </p>
        </div>
    );
}