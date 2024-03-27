import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import env from "../env";

const doMigrate = async (): Promise<void> => {
  const connectionString = env.POSTGRES_URL;
  const sql = postgres(connectionString, { max: 1 });
  const db = drizzle(sql);

  await migrate(db, { migrationsFolder: "drizzle" });

  await sql.end();
};

// The trailing space is important for correct unicode formatting in some shells
doMigrate()
  .then(() => {
    console.log("Migration: ✅ "); // eslint-disable-line no-console -- CLI
  })
  .catch((error: unknown) => {
    console.error("Migration: ❌ ", error);
  });
