/**
 * Validation utilities for Protect Toiture forms and inputs
 */

export interface ContactFormData {
  nom: string;
  telephone: string;
  codePostal: string;
  besoin: string;
  consent: boolean;
}

export interface ValidationErrors {
  nom?: string;
  telephone?: string;
  codePostal?: string;
  consent?: string;
}

/**
 * Validates French phone numbers (mobile or landline, formats like 06 12 34 56 78 or +33 6 12 34 56 78)
 */
export function isValidFrenchPhone(phone: string): boolean {
  if (!phone) return false;
  // Strip spaces, dots, dashes, parentheses
  const cleaned = phone.replace(/[\s.\-()]/g, '');
  // Standard French phone: 0[1-9] followed by 8 digits, or +33[1-9] followed by 8 digits, or 0033[1-9] followed by 8 digits
  const frRegex = /^(?:(?:\+|00)33|0)[1-9]\d{8}$/;
  return frRegex.test(cleaned);
}

/**
 * Validates French 5-digit postal code
 */
export function isValidFrenchPostalCode(code: string): boolean {
  if (!code) return false;
  const cleaned = code.trim();
  return /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/.test(cleaned);
}

/**
 * Validates the contact callback form
 */
export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  if (!data.nom || data.nom.trim().length < 2) {
    errors.nom = 'Veuillez renseigner votre nom complet (au moins 2 caractères).';
  }

  if (!data.telephone || !isValidFrenchPhone(data.telephone)) {
    errors.telephone = 'Veuillez saisir un numéro de téléphone valide (ex: 06 12 34 56 78).';
  }

  if (!data.codePostal || !isValidFrenchPostalCode(data.codePostal)) {
    errors.codePostal = 'Veuillez renseigner un code postal à 5 chiffres (ex: 07170).';
  }

  if (!data.consent) {
    errors.consent = 'Veuillez accepter le traitement de vos données pour être recontacté.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Formats a phone number for display or tel: link
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
  }
  return phone;
}
