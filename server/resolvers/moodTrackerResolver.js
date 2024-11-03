import db from "../db.js";

const moodTrackerResolver = {
  Query: {
    moods: async (_, { user_id }) => {
      const res = await db.query(
        "SELECT * FROM graphql.mood_tracker WHERE user_id = $1",
        [user_id]
      );
      return res.rows;
    },
  },
  Mutation: {
    addMoodEntry: async (_, { user_id, mood, entry_date, notes }) => {
      const res = await db.query(
        "INSERT INTO graphql.mood_tracker (user_id, mood, entry_date, notes) VALUES ($1, $2, $3, $4) RETURNING *",
        [user_id, mood, entry_date, notes]
      );
      return res.rows[0];
    },
  },
};

export default moodTrackerResolver;
