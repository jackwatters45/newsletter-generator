import { drizzle } from "drizzle-orm/postgres-js";

import pg from "pg";

import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
	pool: pg.Pool | undefined;
};

const pool = new pg.Pool({
	connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });

globalForDb.pool = pool;
