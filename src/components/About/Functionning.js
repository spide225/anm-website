'use client';

import Image from "next/image";
import organigramme from "@/public/img/organigramme.png"
import regiment from "@/public/img/regiment.png"

export default function FunctioningSection() {
    return (
        <section id="organization" className="py-20 flex flex-col bg-orange-50 bg-opacity-10">
            <div className="container mx-auto px-6">
                {/* Titre */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-orange-900 mb-2">
                        Comment nous sommes organisés ?
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        L’ANM est structurée autour de deux niveaux complémentaires pour garantir à la fois une vision claire et une action de terrain efficace.
                    </p>
                </div>

                {/* La Direction */}
                <div className="mb-16">
                    <h3 className="text-xl font-semibold text-orange-800 mb-4">La Direction de l’ANM</h3>
                    <p className="text-gray-700 mb-8">
                        La Direction assure la conduite stratégique, administrative et financière de l’association. Elle est composée des postes suivants :
                    </p>

                    <Image alt="Organigramme ANM" className="w-[1280px] h-auto mx-auto" src={organigramme} />
                </div>
                {/* Les régiments */}
                <div className="mb-16 flex flex-col md:flex-row">
                    <div className="flex flex-col my-auto">
                        <h3 className="text-xl font-semibold text-orange-800 mb-4">Les régiments</h3>
                        {/* Texte */}
                        <div className="flex flex-col">
                            <p className="text-gray-700 mb-4">
                                L’ANM est composée de plusieurs régiments, qui constituent les unités de base de l’association.
                                Chaque régiment regroupe des membres qui :
                            </p>

                            {/* Liste */}
                            <ul className="text-gray-700 list-disc list-inside mb-8 inline-block text-left">
                                <li>participent aux activités de terrain,</li>
                                <li>contribuent aux projets, et</li>
                                <li>représentent l’ANM dans leurs zones ou domaines.</li>
                            </ul>
                            <p className="mt-8 text-gray-700 italic">
                                <strong>N.B. :</strong>Tous les membres de la Direction (Président, Secrétaire Général, etc.) sont également membres d’un régiment.
                            </p>
                        </div>

                    </div>
                    {/* Cercle des régiments */}
                    <div className="mt-16 mx-auto">
                        <Image
                            alt="Fonctionnement des Regiments"
                            className="w-[400px] h-auto mx-auto"
                            src={regiment}
                        />
                    </div>

                </div>

            </div>


        </section >
    );
}