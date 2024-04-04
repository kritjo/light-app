import { pgEnum, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";


/*eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars -- This is a schema file and we want to provide unused exports */

// All timestamps are stored in UTC, postgres DOES NOT care about timezone specifications.

const DEFAULT_COLUMNS = {
  id: serial("id").primaryKey(),

  // These types should not have a default value, but be handled by the application.
  createdAt: timestamp("timestamp with time zone").notNull(),
  updatedAt: timestamp("timestamp with time zone").notNull()
};

// BEGIN OF SCHEMA

const roles = ["admin", "authorized", "unAuthorized"] as const;
export type Role = (typeof roles)[number];

export const roleEnum = pgEnum("roles", roles);

export const users = pgTable("users", {
  ...DEFAULT_COLUMNS,

  username: varchar("username", { length: 25 }).unique(),
  name: varchar("name", { length: 50 }),
  email: varchar("email", { length: 256 }).unique(),
  role: roleEnum("role").default("unAuthorized")
});

export type SelectUser = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);


// END OF SCHEMA
/* eslint-enable @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars -- enable linting again */