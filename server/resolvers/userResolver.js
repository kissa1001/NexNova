import db from "../db.js";

const userResolver = {
  Query: {
    users: async () => {
      const res = await db.query("SELECT * FROM graphql.users");
      return res.rows;
    },
  },
};

export default userResolver;
