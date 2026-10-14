/**
 * Le formulaire de contact passe par EmailJS, comme sur l'ancien site : le message
 * part du navigateur vers le modèle « portofolio_template », qui l'envoie à Tudor.
 *
 * Ces identifiants sont publics par nature (ils finissent dans le navigateur).
 * Pour éviter qu'un autre site s'en serve, restreindre les domaines autorisés
 * dans les réglages de sécurité du compte EmailJS.
 */
export const EMAILJS = {
	serviceId: "service_ofooa6q",
	templateId: "portofolio_template",
	publicKey: "ZopuUuvhXuBw-wEhC",
} as const;

export const CONTACT_LIMITS = {
	messageChars: 2000,
	/** Un humain met plus de quelques secondes à écrire un message. */
	minFillMs: 3000,
	/** Un envoi par minute et par navigateur. */
	throttleMs: 60_000,
} as const;
