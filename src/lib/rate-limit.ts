import { LIMITS } from "./guard";

const WINDOW_MS = 60 * 60 * 1000;

interface Bucket {
	count: number;
	resetAt: number;
}

/**
 * Compteur en mémoire, par adresse IP. Suffisant tant que le site tourne dans
 * un seul conteneur ; à déplacer dans Redis s'il y en a un jour plusieurs.
 */
const buckets = new Map<string, Bucket>();

function sweep(now: number) {
	for (const [ip, bucket] of buckets) {
		if (bucket.resetAt <= now) buckets.delete(ip);
	}
}

export function allow(ip: string): boolean {
	const now = Date.now();
	if (buckets.size > 5000) sweep(now);

	const bucket = buckets.get(ip);
	if (!bucket || bucket.resetAt <= now) {
		buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
		return true;
	}
	if (bucket.count >= LIMITS.perHour) return false;
	bucket.count += 1;
	return true;
}

/**
 * L'adresse du visiteur, telle que la voit le proxy devant le conteneur.
 *
 * `X-Real-IP` est posé par le proxy et prime. À défaut on lit la DERNIÈRE adresse
 * de `X-Forwarded-For` : c'est celle qu'ajoute le proxy. Les premières viennent du
 * visiteur, qui peut y écrire ce qu'il veut pour échapper à la limite.
 */
export function clientIp(headers: Headers): string {
	const real = headers.get("x-real-ip")?.trim();
	if (real) return real;
	const forwarded = headers.get("x-forwarded-for");
	const last = forwarded?.split(",").at(-1)?.trim();
	return last || "unknown";
}
