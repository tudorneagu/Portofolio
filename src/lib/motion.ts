/** Le visiteur a-t-il demandé à son système de réduire les animations ? */
export function prefersReducedMotion(): boolean {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Comportement de défilement à utiliser : doux, sauf si le visiteur l'a refusé. */
export function scrollBehavior(): ScrollBehavior {
	return prefersReducedMotion() ? "auto" : "smooth";
}
