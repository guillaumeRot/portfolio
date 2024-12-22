"use client";

import { useEffect, useState } from "react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("contact-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Ici, vous pouvez ajouter votre logique d'envoi de formulaire
    // Par exemple, avec une API ou un service d'emails

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Message envoyé avec succès!");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      alert("Une erreur est survenue");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-8">
      <div id="contact-section" className="max-w-3xl mx-auto text-center">
        <h2
          className={`text-3xl font-bold mb-6 transform transition-all duration-700
                       ${
                         isVisible
                           ? "translate-y-0 opacity-100"
                           : "translate-y-10 opacity-0"
                       }`}
        >
          Contact
        </h2>

        <p
          className={`text-text-secondary mb-12 transform transition-all duration-700 delay-200
                      ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
        >
          N&apos;hésitez pas à me contacter pour discuter de vos projets ou
          opportunités de collaboration.
        </p>

        <form
          onSubmit={handleSubmit}
          className={`space-y-6 transform transition-all duration-700 delay-400
                     ${
                       isVisible
                         ? "translate-y-0 opacity-100"
                         : "translate-y-10 opacity-0"
                     }`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                className="w-full px-4 py-3 bg-secondary rounded-lg focus:outline-none focus:ring-2 
                         focus:ring-accent text-text-primary placeholder-text-secondary"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email"
                required
                className="w-full px-4 py-3 bg-secondary rounded-lg focus:outline-none focus:ring-2 
                         focus:ring-accent text-text-primary placeholder-text-secondary"
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              required
              rows={6}
              className="w-full px-4 py-3 bg-secondary rounded-lg focus:outline-none focus:ring-2 
                       focus:ring-accent text-text-primary placeholder-text-secondary resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-accent text-primary px-8 py-3 rounded-full 
                     hover:bg-accent/90 transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transform hover:-translate-y-1`}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
          </button>
        </form>

        {/* Social Links */}
        <div
          className={`mt-12 flex justify-center gap-6 transform transition-all duration-700 delay-600
                        ${
                          isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
