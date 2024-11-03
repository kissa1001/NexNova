import db from "../db";

interface User {
  user_id: string;
  email: string;
  created_at: string;
}

const userResolver = {
  Query: {
    users: async (): Promise<User[]> => {
      const res = await db.query("SELECT * FROM graphql.users", []);
      return (res.rows as unknown as User[]).map((row) => ({
        user_id: row.user_id,
        email: row.email,
        created_at: row.created_at,
      }));
    },
  },
};

export default userResolver;
