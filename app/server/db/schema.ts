import { pgTableCreator, text } from "drizzle-orm/pg-core";
import { getEnv } from "~/lib/utils";

export const createTable = pgTableCreator(
	(name) => `${getEnv("NEXT_PUBLIC_APP_NAME")}_${name}`,
);

export const someTable = createTable("some-table", {
	id: text("id").primaryKey(),
});
