import pkg from "pg";
const { Pool } = pkg;

import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
});

const db = {
  query: (text, params) => pool.query(text, params),
};

export default db;
