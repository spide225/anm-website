import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Africa New Mindset | Ensemble pour illuminer des vies",
  description: "Association de jeunes engagés à apporter sourire et espoir aux enfants et aux femmes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <main className="min-h-screen bg-white text-gray-800">
          {/* --- NAVIGATION --- */}
          <Header />
          {children}
          <Footer/>
        </main>

      </body>
    </html>
  );
}