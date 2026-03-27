'use client'

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import logo from "../../public/img/logo.png"

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* LOGO */}
          <div className="text-2xl font-bold text-orange-900 uppercase tracking-tighter">
            <Image src={logo} alt="logo-ANM" loading="eager" className="h-20 w-auto"/>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-4 text-sm font-medium uppercase text-gray-600">
            <Link href="/" className="hover:text-orange-900 transition">Accueil</Link>
            {/* DROPDOWN A PROPOS */}
            <div className="relative group">
              <span className="cursor-pointer hover:text-orange-900 transition">A propos</span>

              <div className="absolute left-0 mt-4 w-56 bg-white shadow-lg rounded-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                <div className="flex flex-col text-gray-700 text-sm normal-case">
                  <Link href="/about" className="px-4 py-3 hover:bg-gray-100 rounded-t-xl">
                    Africa New Mindset
                  </Link>
                  <Link href="/about/galerie" className="px-4 py-3 hover:bg-gray-100 rounded-b-xl">
                    Galerie
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/fundraising" className="hover:text-orange-900 transition">Collectes</Link>
            {/* DROPDOWN NOUS REJOINDRE */}
            <div className="relative group">
              <span className="cursor-pointer hover:text-orange-900 transition">Nous rejoindre</span>

              <div className="absolute left-0 mt-4 w-56 bg-white shadow-lg rounded-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                <div className="flex flex-col text-gray-700 text-sm normal-case">
                  <Link href="/adhesion/benevole" className="px-4 py-3 hover:bg-gray-100 rounded-t-xl">
                    Devenir bénévole
                  </Link>
                  <Link href="/adhesion/partenaire" className="px-4 py-3 hover:bg-gray-100 rounded-b-xl">
                    Devenir partenaire
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/contact" className="hover:text-orange-900 transition">Contact</Link>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={toggleMenu} className="md:hidden text-gray-800">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-white border-t shadow-md">
            <div className="flex flex-col space-y-4 px-6 py-6 text-sm font-medium uppercase text-gray-700">
              <Link href="/" onClick={toggleMenu}>Accueil</Link>

              {/* A PROPOS */}
              <div className="flex flex-col">
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
                  className="text-left uppercase"
                >
                  A propos
                </button>
                {openDropdown === 'about' && (
                  <div className="flex flex-col space-y-2 mt-2">
                    <Link href="/about" onClick={toggleMenu} className="pl-4">Africa New Mindset</Link>
                    <Link href="/about/galerie" onClick={toggleMenu} className="pl-4">Galerie</Link>
                  </div>
                )}
              </div>

              <Link href="/fundraising" onClick={toggleMenu} >Collectes</Link>

              {/* NOUS REJOINDRE */}
              <div className="flex flex-col">
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'join' ? null : 'join')}
                  className="text-left uppercase"
                >
                  Nous rejoindre
                </button>
                {openDropdown === 'join' && (
                  <div className="flex flex-col space-y-2 mt-2">
                    <Link href="/adhesion/benevole" onClick={toggleMenu} className="pl-4">Devenir bénévole</Link>
                    <Link href="/adhesion/partenaire" onClick={toggleMenu} className="pl-4">Devenir partenaire</Link>
                  </div>
                )}
              </div>

              <Link href="/contact" onClick={toggleMenu}>Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* SPACER (to avoid content being hidden under fixed navbar) */}
      <div className="h-20"></div>
    </header>
  );
}
