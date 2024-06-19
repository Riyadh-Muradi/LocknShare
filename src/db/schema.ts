import { pgTable, serial } from "drizzle-orm/pg-core";

export const bids = pgTable("lns_bids", {
  id: serial("id").primaryKey(),
});
