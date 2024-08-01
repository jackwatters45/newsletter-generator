import type { Config } from "drizzle-kit";

import debug from "debug";
import { getEnv } from "~/lib/utils";

const log = debug("drizzle:config");

const getDbUrl = () => {
	const dbUrl = process.env.DATABASE_URL;
	if (!dbUrl) {
		log("DATABASE_URL is not set", { dbUrl });
		throw new Error("DATABASE_URL is not set");
	}
	return dbUrl;
};

export default {
	schema: "./app/server/db/schema.ts",
	dialect: "postgresql",
	dbCredentials: { url: getDbUrl() },
	tablesFilter: [getEnv("NEXT_PUBLIC_APP_NAME")],
} satisfies Config;
