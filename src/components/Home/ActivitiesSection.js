import Image from "next/image";

import noel from "../../public/img/noel.jpg"
// import camaraderie from "../../public/img/camaraderie.jpg"
// import comptoir from "../../public/img/comptoir.jpg"
// import tbfa from "../../public/img/tbfa.jpg"

export default function ActivitiesSection() {
    const activities = [
        {
            title: "1000 Sourires pour Noël",
            desc: "Un arbre de Noël visant 1000 enfants dans les quartiers défavorisés.",
            color: "bg-red-50",
            borderColor: "border-red-200",
            imageSrc: noel
        },
        {
            title: "Activités de camaraderies",
            desc: "Rencontres, sorties, jeux... pour renforcer les liens et créer un environnement familial.",
            color: "bg-yellow-50",
            borderColor: "border-yellow-200",
            imageSrc: noel
        },
        {
            title: "Le Comptoir",
            desc: "Tribune d'expression sur des thématiques essentielles au bien-être de la société.",
            color: "bg-blue-50",
            borderColor: "border-blue-200",
            imageSrc: noel
        },
        {
            title: "TBFA - Tu es Belle, Forte et Aimée",
            desc: "Campagne dédiée à la valorisation, l'écoute et l'accompagnement des femmes.",
            color: "bg-pink-50",
            borderColor: "border-pink-200",
            imageSrc: noel
        },
    ];

    return (
        <section id="activities" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Nos activités</h2>
                    <p className="text-gray-500">Nos actions phares sur le terrain</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {activities.map((activity, index) => (
                        <ActivityCard key={index} {...activity} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Composant Helper pour les cartes d'activités
function ActivityCard({ title, desc, color, borderColor, imageSrc }) {
    return (
        <div className={`p-6 rounded-xl border-l-4 ${borderColor} ${color} hover:shadow-md transition flex flex-col`}>
            {imageSrc && (
                <div className="mb-4 w-full h-40 relative rounded-lg overflow-hidden">
                    <Image src={imageSrc} alt={title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                </div>
            )}
            <h3 className="font-bold text-lg text-gray-900 mb-3 min-h-[50px] flex items-center">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}