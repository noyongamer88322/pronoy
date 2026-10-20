import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle2,
  Send,
  Loader2,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { FloatingCircles } from './ui/FloatingCircles';
import {
  validateContactForm,
  ValidationErrors,
  ContactFormData,
} from '../utils/validation';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: '',
    telephone: '',
    codePostal: '',
    besoin: '',
    consent: false,
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { isValid, errors: validationErrors } = validateContactForm(formData);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Mock API post or server callback with realistic timeout
      await new Promise((resolve) => setTimeout(resolve, 900));
      setIsSuccess(true);
      setFormData({
        nom: '',
        telephone: '',
        codePostal: '',
        besoin: '',
        consent: false,
      });
      setErrors({});
    } catch {
      setErrors({ consent: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous appeler directement." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#F9F9F7] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
        <FloatingCircles position="left" />

        <SectionHeading
          eyebrow="CONTACT"
          title="Parlons de Votre Projet"
          subtitle="Recevez un devis gratuit sous 24h. Sans engagement."
        />

        {/* Social proof banner with avatar stack */}
        <div className="flex items-center justify-center gap-3 mb-14 -mt-6">
          <div className="flex -space-x-2 overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-[#0A0A0A] text-white text-[12px] font-bold flex items-center justify-center ring-2 ring-[#F9F9F7]">
              J
            </div>
            <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white text-[12px] font-bold flex items-center justify-center ring-2 ring-[#F9F9F7]">
              S
            </div>
            <div className="w-8 h-8 rounded-full bg-[#2A2A2A] text-white text-[12px] font-bold flex items-center justify-center ring-2 ring-[#F9F9F7]">
              M
            </div>
          </div>
          <span className="text-[13px] sm:text-[14px] text-[#6B6B66]">
            <strong className="text-[#0A0A0A] font-bold">12 personnes</strong> ont demandé un devis ce mois
          </span>
        </div>

        {/* 2 Columns: Left (Call card + Info + Mini Testimonial) / Right (Form card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* 1. Black Call Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="bg-[#0A0A0A] text-white p-7 sm:p-8 rounded-[24px] shadow-xl relative overflow-hidden group"
            >
              <div className="relative z-10">
                <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#E97230] mb-3">
                  VOUS PRÉFÉREZ APPELER ?
                </span>

                <a
                  href="tel:+33623838816"
                  className="flex items-center gap-3 group-hover:text-[#E97230] transition-colors mb-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#E97230]/20 flex items-center justify-center text-[#E97230] shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-[24px] sm:text-[28px] font-extrabold font-display tracking-tight text-white group-hover:text-[#E97230] transition-colors">
                    06 23 83 88 16
                  </span>
                </a>

                <p className="text-[13px] text-[#8A8A85] flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#E97230]" />
                  <span>Lun - Sam : 8h00 - 19h00</span>
                </p>
              </div>

              {/* Decorative subtle dark gradient */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#E97230]/10 blur-2xl pointer-events-none" />
            </motion.div>

            {/* 2. Light Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#F2F3EE] border border-black/[0.06] p-7 rounded-[24px] shadow-xs space-y-5"
            >
              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#6B6B66]">
                    EMAIL
                  </span>
                  <a
                    href="mailto:protectoiture74@gmail.com"
                    className="text-[14px] sm:text-[15px] font-bold text-[#0A0A0A] hover:text-[#E97230] transition-colors"
                  >
                    protectoiture74@gmail.com
                  </a>
                </div>
              </div>

              {/* ADRESSE */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#E97230]" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#6B6B66]">
                    ADRESSE
                  </span>
                  <p className="text-[14px] sm:text-[15px] font-bold text-[#0A0A0A]">
                    07170 Lavilledieu, Ardèche
                  </p>
                </div>
              </div>

              {/* HORAIRES */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] text-white flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#E97230]" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#6B6B66]">
                    HORAIRES
                  </span>
                  <p className="text-[14px] sm:text-[15px] font-bold text-[#0A0A0A]">
                    Lun - Sam : 8h00 - 19h00
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 3. Mini Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="bg-white border border-black/[0.06] p-6 rounded-[22px] shadow-xs"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0A0A0A] text-white font-bold text-[13px] flex items-center justify-center">
                    M
                  </div>
                  <span className="text-[13px] font-bold text-[#0A0A0A] font-display">
                    Marc D. — Vallon-Pont-d'Arc
                  </span>
                </div>
                <div className="flex items-center text-[#FACC15]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[13px] text-[#6B6B66] italic leading-relaxed">
                « J'ai demandé un devis le lundi, rappelé dans l'heure. Chantier impeccable terminé en 3 jours. »
              </p>
            </motion.div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7 relative">
            {/* Decorative subtle blue dot floating near form */}
            <div className="absolute -top-3 -right-3 w-3 h-3 rounded-full bg-blue-500/80 shadow-md shadow-blue-500/50 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="bg-[#F2F3EE] border border-black/[0.06] rounded-[28px] p-7 sm:p-10 shadow-lg relative"
            >
              {/* Header row: title + "Disponible" pill */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                <h3 className="text-[22px] sm:text-[26px] font-bold font-display text-[#0A0A0A]">
                  Être Rappelé Gratuitement
                </h3>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-[12px] font-medium text-[#15803D]">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] pulse-green-dot" />
                  <span>Disponible</span>
                </div>
              </div>

              {/* Success Notification */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="mb-8 p-6 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#15803D] flex items-start gap-4"
                  >
                    <ShieldCheck className="w-6 h-6 text-[#22C55E] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold font-display text-[16px] text-[#0A0A0A]">
                        Merci pour votre demande !
                      </h4>
                      <p className="text-[14px] text-[#15803D] mt-1">
                        Nous avons bien reçu vos coordonnées et nous vous rappelons sous 24h ouvrées.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Field: Nom */}
                <div>
                  <label
                    htmlFor="nom"
                    className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#0A0A0A] mb-2"
                  >
                    VOTRE NOM <span className="text-[#E97230]">*</span>
                  </label>
                  <input
                    id="nom"
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className={`w-full px-4 py-3.5 rounded-xl custom-input text-[15px] text-[#0A0A0A] placeholder-[#A8A8A3] ${
                      errors.nom ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.nom && (
                    <p className="mt-1.5 text-[12px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.nom}
                    </p>
                  )}
                </div>

                {/* Grid row: Téléphone & Code Postal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#0A0A0A] mb-2"
                    >
                      VOTRE TÉLÉPHONE <span className="text-[#E97230]">*</span>
                    </label>
                    <input
                      id="telephone"
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="06 12 34 56 78"
                      className={`w-full px-4 py-3.5 rounded-xl custom-input text-[15px] text-[#0A0A0A] placeholder-[#A8A8A3] ${
                        errors.telephone ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      required
                    />
                    {errors.telephone && (
                      <p className="mt-1.5 text-[12px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.telephone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="codePostal"
                      className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#0A0A0A] mb-2"
                    >
                      CODE POSTAL <span className="text-[#E97230]">*</span>
                    </label>
                    <input
                      id="codePostal"
                      type="text"
                      name="codePostal"
                      value={formData.codePostal}
                      onChange={handleChange}
                      placeholder="07170"
                      maxLength={5}
                      className={`w-full px-4 py-3.5 rounded-xl custom-input text-[15px] text-[#0A0A0A] placeholder-[#A8A8A3] ${
                        errors.codePostal ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      required
                    />
                    {errors.codePostal && (
                      <p className="mt-1.5 text-[12px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.codePostal}
                      </p>
                    )}
                  </div>
                </div>

                {/* Field: Votre Besoin (optionnel) */}
                <div>
                  <label
                    htmlFor="besoin"
                    className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#0A0A0A] mb-2"
                  >
                    VOTRE BESOIN <span className="text-[#6B6B66] font-normal">(optionnel)</span>
                  </label>
                  <textarea
                    id="besoin"
                    name="besoin"
                    rows={3}
                    value={formData.besoin}
                    onChange={handleChange}
                    placeholder="Décrivez brièvement votre besoin (rénovation, démoussage, fuite...)"
                    className="w-full px-4 py-3.5 rounded-xl custom-input text-[15px] text-[#0A0A0A] placeholder-[#A8A8A3] resize-none"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded text-[#E97230] focus:ring-[#E97230] border-gray-300 cursor-pointer"
                      required
                    />
                    <span className="text-[12px] sm:text-[13px] text-[#6B6B66] leading-snug">
                      J'accepte que mes données soient traitées pour me recontacter. Consultez notre{' '}
                      <a href="#footer" className="text-[#E97230] hover:underline font-medium">
                        politique de confidentialité
                      </a>
                      . <span className="text-[#E97230]">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1.5 text-[12px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.consent}
                    </p>
                  )}
                </div>

                {/* Full-width Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-[#E97230] hover:bg-[#D4601F] text-white font-display font-bold text-[15px] sm:text-[16px] btn-orange-glow flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.99] disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Phone className="w-4 h-4 fill-current" />
                      <span>Être Rappelé Gratuitement</span>
                    </>
                  )}
                </button>

                {/* Under button: 3 trust items */}
                <div className="flex items-center justify-center gap-4 sm:gap-6 pt-3 text-[12px] text-[#6B6B66]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E97230]" />
                    <span>Réponse 24h</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E97230]" />
                    <span>100% gratuit</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E97230]" />
                    <span>Sans engagement</span>
                  </div>
                </div>

                {/* Bottom avatar stack */}
                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-center gap-2.5 text-[12px] text-[#6B6B66] text-center">
                  <div className="flex -space-x-1.5 overflow-hidden shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#0A0A0A] text-white text-[10px] font-bold flex items-center justify-center">
                      C
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white text-[10px] font-bold flex items-center justify-center">
                      P
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#2A2A2A] text-white text-[10px] font-bold flex items-center justify-center">
                      S
                    </div>
                  </div>
                  <span>
                    <strong>Catherine, Philippe</strong> et <strong>Sophie</strong> ont demandé un devis récemment
                  </span>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
