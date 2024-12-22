import Skills from "@/components/Skills";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-primary/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-accent">
            VN
          </Link>
          <div className="hidden md:flex gap-8">
            <Link
              href="#projets"
              className="hover:text-accent transition-colors"
            >
              Projets
            </Link>
            <Link
              href="#apropos"
              className="hover:text-accent transition-colors"
            >
              À propos
            </Link>
            <Link
              href="#contact"
              className="hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-text-primary">Développeur</span>
            <br />
            <span className="text-accent">Full Stack</span>
          </h1>
          <p className="text-text-secondary max-w-xl text-lg mb-8">
            Je crée des applications web modernes et performantes
          </p>
          <Link
            href="#contact"
            className="bg-accent text-primary px-8 py-3 rounded-full 
                     hover:bg-accent/90 transition-colors"
          >
            Me contacter
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projets" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Projets sélectionnés</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card */}
            <div className="bg-secondary p-6 rounded-lg">
              <div className="aspect-video bg-gray-800 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Nom du projet</h3>
              <p className="text-text-secondary mb-4">Description du projet</p>
              <div className="flex gap-4">
                <span className="text-accent text-sm">React</span>
                <span className="text-accent text-sm">Node.js</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#ccd6f6] mb-2">
              Nom du Projet
            </h3>
            <p className="text-[#8892b0]">
              Description du projet. Expliquez brièvement ce que vous avez
              construit et les technologies utilisées.
            </p>
            <ul className="flex gap-3 mt-4 text-sm text-[#8892b0]">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
            </ul>
          </div>
        </div>
      </section>

      <Skills />

      {/* About Section */}
      <section id="apropos" className="py-20 px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">À propos</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-text-secondary mb-6">
                Développeur passionné par la création d'expériences web
                innovantes
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-accent">▹</span>
                  Next.js
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">▹</span>
                  React
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">▹</span>
                  TypeScript
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">▹</span>
                  Node.js
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets
          </p>
          <a
            href="mailto:votre@email.com"
            className="inline-block border-2 border-accent text-accent px-8 py-3 
                     rounded-full hover:bg-accent hover:text-primary transition-colors"
          >
            Envoyer un message
          </a>
        </div>
      </section>
    </main>
  );
}
