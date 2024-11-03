import pkg, { QueryResult as PgQueryResult } from "pg";
const { Pool } = pkg;

import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
});

interface QueryResult {
  query: (text: string, params?: unknown[]) => Promise<PgQueryResult>;
}

const db: QueryResult = {
  query: (text, params) => pool.query(text, params),
};

export default db;
