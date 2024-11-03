import db from "../db";

interface JobApplication {
  application_id: string;
  user_id: string;
  job_title: string;
  company: string;
  status?: string;
  notes?: string;
  date_applied?: string;
}

interface QueryArgs {
  user_id: string;
}

interface AddJobApplicationArgs {
  user_id: string;
  job_title: string;
  company: string;
}

const jobApplicationResolver = {
  Query: {
    jobApplications: async (
      _: unknown,
      { user_id }: QueryArgs
    ): Promise<JobApplication[]> => {
      const res = await db.query(
        "SELECT * FROM graphql.job_applications WHERE user_id = $1",
        [user_id]
      );
      return (res.rows as unknown as JobApplication[]).map((row) => ({
        application_id: row.application_id,
        user_id: row.user_id,
        job_title: row.job_title,
        company: row.company,
      }));
    },
  },
  Mutation: {
    addJobApplication: async (
      _: unknown,
      { user_id, job_title, company }: AddJobApplicationArgs
    ): Promise<JobApplication> => {
      const res = await db.query(
        "INSERT INTO graphql.job_applications (user_id, job_title, company) VALUES ($1, $2, $3) RETURNING *",
        [user_id, job_title, company]
      );
      const row = res.rows[0] as unknown as JobApplication;
      return {
        application_id: row.application_id,
        user_id: row.user_id,
        job_title: row.job_title,
        company: row.company,
      };
    },
  },
};

export default jobApplicationResolver;
