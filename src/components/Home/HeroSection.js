'use client'

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* BACKGROUND GRADIENT + GLOW */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-orange-50 via-orange-200 to-orange-400"></div>

        {/* Animated Glow Effects */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-300 opacity-30 blur-3xl rounded-full"
        />

        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-200 opacity-30 blur-3xl rounded-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6 text-center text-gray-900 mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Ensemble pour <br />
          <span className="text-[#5C3A21]">illuminer des vies</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light"
        >
          Nous sommes une association de jeunes engagés à apporter sourire et espoir aux enfants et aux femmes.
          Chaque action compte, chaque sourire est précieux.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Link
            href="#benevole"
            className="bg-[#5C3A21] text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition shadow-lg"
          >
            Rejoignez-nous
          </Link>

          <Link
            href="#contact"
            className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow"
          >
            Contactez-nous
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
