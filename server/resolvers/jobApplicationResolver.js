import db from "../db.js";

const jobApplicationResolver = {
  Query: {
    jobApplications: async (_, { user_id }) => {
      const res = await db.query(
        "SELECT * FROM graphql.job_applications WHERE user_id = $1",
        [user_id]
      );
      return res.rows;
    },
  },
  Mutation: {
    addJobApplication: async (_, { user_id, job_title, company }) => {
      const res = await db.query(
        "INSERT INTO graphql.job_applications (user_id, job_title, company) VALUES ($1, $2, $3) RETURNING *",
        [user_id, job_title, company]
      );
      return res.rows[0];
    },
  },
};

export default jobApplicationResolver;
