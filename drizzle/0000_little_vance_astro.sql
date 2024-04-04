DO $$ BEGIN
 CREATE TYPE "roles" AS ENUM('admin', 'authorized', 'unAuthorized');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"timestamp with time zone" timestamp NOT NULL,
	"username" varchar(25),
	"name" varchar(50),
	"email" varchar(256),
	"role" "roles" DEFAULT 'unAuthorized',
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
