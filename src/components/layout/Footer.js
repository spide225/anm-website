import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FiFacebook, FiInstagram, FiLinkedin, } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

export default function Home() {
  return (
    <main>
      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            
            {/* Col 1: Logo & Intro */}
            <div className="md:col-span-1">
              <div className="text-xl font-bold text-orange-900 uppercase mb-4">
                Africa New Mindset
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Chaque sourire compte et chaque geste a un impact. En soutenant notre association, vous contribuez à apporter joie, espoir et opportunités.
              </p>
            </div>

            {/* Col 2: Liens Utiles */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Liens utiles</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li><Link href="/about" className="hover:text-orange-900">A propos</Link></li>
                <li><Link href="/about/galerie" className="hover:text-orange-900">Galerie</Link></li>
                <li><Link href="/adhesion/benevole" className="hover:text-orange-900">Devenir bénévole</Link></li>
                <li><Link href="/adhesion/partenaire" className="hover:text-orange-900">Devenir partenaire</Link></li>
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div className="md:col-span-2">
              <h4 className="font-bold text-gray-900 mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-600 text-sm">
                {/* <li className="flex items-start gap-3">
                  <MapPin className="text-orange-900 shrink-0" size={20} />
                  <span>xxxxxx, xxxxxx</span>
                </li> */}
                <li className="flex items-center gap-3">
                  <Phone className="text-orange-900 shrink-0" size={20} />
                  <span>+225 07 47 81 04 90</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-orange-900 shrink-0" size={20} />
                  <span>contact@africanewmindset.org</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AFRICA NEW MINDSET. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
               <a href="https://www.instagram.com/africanewmindset/" className="text-gray-400 hover:text-pink-600"><FiInstagram size={20}/></a>
               <a href="https://web.facebook.com/AfricaNewMindset/" className="text-gray-400 hover:text-blue-600"><FiFacebook size={20}/></a>
               <a href="https://x.com/africamillenium" className="text-gray-400 hover:text-gray-900"><BsTwitterX  size={20}/></a>
               <a href="https://www.linkedin.com/company/africa-new-mindset/" className="text-gray-400 hover:text-sky-900"><FiLinkedin size={20}/></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}