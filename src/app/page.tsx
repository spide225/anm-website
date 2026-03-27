import Link from "next/link";
import { Heart, Users, HandCoins, Menu, X, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import HeroSection from "../components/Home/HeroSection"
import AboutSection from "../components/Home/AboutSection"
import ActivitiesSection from "../components/Home/ActivitiesSection"
import JoinSection from "../components/Home/JoinSection"

export default function Home() {
  return (
    <main>
      {/* --- HERO SECTION --- */}
      <HeroSection/>

      {/* --- QUI SOMMES NOUS --- */}
      <AboutSection/>

      {/* --- NOS ACTIVITÉS --- */}
      <ActivitiesSection/>

      {/* --- NOUS SOUTENIR / CTA --- */}
      <JoinSection/>
    </main>
  );
}
