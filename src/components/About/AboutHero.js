"use client";

export default function AboutHero() {
    return (
        <section className="relative py-20 bg-orange-50 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                    A propos d'<span className="text-orange-900">Africa New Mindset</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Découvrez notre histoire, notre mission et les visages qui portent notre engagement pour un avenir meilleur.
                </p>
            </div>
        </section>
    );
}
