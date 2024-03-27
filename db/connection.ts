import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

import env from "../env";

const client = new Client({
  connectionString: env.POSTGRES_URL,
});

await client.connect();
const db = drizzle(client);

export default db;
