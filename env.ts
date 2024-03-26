import { z } from "zod";
import {loadEnvConfig} from "@next/env";

loadEnvConfig(process.cwd());

const envSchema = z.object({
  POSTGRES_URL: z.string(),
});

const env = envSchema.parse(process.env);

export default env;
