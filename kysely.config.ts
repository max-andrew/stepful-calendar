import { CodegenConfig } from "kysely-codegen";

const config: CodegenConfig = {
  dialect: "postgres", // or 'mysql' or 'sqlite'
  connectionString:
    process.env.POSTGRES_URL ||
    "postgres://postgres:@localhost:5432/stepful_calendar",
  outputFile: "./src/types/generated-db.ts",
};

export default config;
