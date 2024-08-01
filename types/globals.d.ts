export type {};

declare global {
	interface CustomJwtSessionClaims {
		email?: string;
		// username?: string;
	}
}
