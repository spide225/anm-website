"use client";

import Link from "next/link";
import { Users, Heart, Target, Quote, Star, HandHeart, ShieldCheck } from "lucide-react";
import Image from "next/image";
import imgMission from "@/public/img/mission.jpg"
import imgStory from "@/public/img/benevole-2.jpg"

export default function About() {
    return (
        <section className="py-20 container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                {/* Texte Histoire */}
                <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                            <Users size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Notre histoire</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                            Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                        </p>
                        <p>
                            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Proin pharetra nonummy pede. Mauris et orci.
                        </p>
                        <p>
                            Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                        </p>
                    </div>
                </div>
                {/* Image Histoire */}
                <div className="order-1 lg:order-2 relative group">
                    <div className="absolute inset-0 bg-orange-600 rounded-2xl rotate-3 group-hover:rotate-1 transition duration-500 opacity-20"></div>
                    <Image
                        src={imgStory}
                        alt="Histoire de ANM"
                        className="relative rounded-2xl shadow-xl w-full object-cover h-80 z-10"
                    />
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Image Mission */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gray-900 rounded-2xl -rotate-3 group-hover:-rotate-1 transition duration-500 opacity-10"></div>
                    <Image
                        src={imgMission}
                        alt="Mission de ANM"
                        className="relative rounded-2xl shadow-xl w-full object-cover h-80 z-10"
                    />
                </div>
                {/* Texte Mission */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                            <Target size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Notre mission</h2>
                    </div>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                            Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero.
                        </p>
                        <p>
                            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        </p>
                        <div className="pl-4 border-l-4 border-orange-600 italic text-gray-700 bg-gray-50 py-2 pr-2 rounded-r">
                            "Proin pharetra nonummy pede. Mauris et orci."
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}