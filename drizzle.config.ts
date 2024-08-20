// @ts-nocheck
import "@/drizzle/envConfig";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  driver: "pg",
  dbCredentials: {
    database: process.env.DATABASE_NAME || "default_db_name",
    secretArn: process.env.DATABASE_SECRET_ARN || "your_secret_arn",
    resourceArn: process.env.DATABASE_RESOURCE_ARN || "your_resource_arn",
    host: process.env.DATABASE_HOST || "localhost",
    port: Number(process.env.DATABASE_PORT) || 5432,
  },
  dialect: "postgresql",
});
