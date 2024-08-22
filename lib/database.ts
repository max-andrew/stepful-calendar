import { DB } from "@/types/types";
import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";

const connectionString =
  process.env.DATABASE_URL ||
  "postgres://postgres:@localhost:5434/stepful_calendar";

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: connectionString,
    max: 10,
  }),
});

export const db = new Kysely<DB>({
  dialect,
});
