"use client";

import AboutHero from "@/components/About/AboutHero";
import StoryMission from "@/components/About/StoryMission";
import ExecutiveBoard from "@/components/About/ExecutiveBoard";
import Values from "@/components/About/Values"
import Functionning from "@/components/About/Functionning"

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* --- HERO SECTION --- */}
      <AboutHero />

      {/* --- NOTRE HISTOIRE & MISSION (Layout Asymétrique) --- */}
      <StoryMission />

      {/* --- LE BUREAU EXÉCUTIF (Président, VP, SG) --- */}
      <ExecutiveBoard />

      {/*--- FONCTIONNEMENT ---*/}
      <Functionning />

      {/* --- NOS VALEURS --- */}
      <Values />
    </main>
  );
}
