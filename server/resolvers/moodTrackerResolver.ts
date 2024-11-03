import db from "../db";

interface MoodEntry {
  entry_id: string;
  user_id: string;
  mood: number;
  entry_date: string;
  notes?: string;
}

interface QueryArgs {
  user_id: string;
}

interface AddMoodEntryArgs {
  user_id: string;
  mood: number;
  entry_date: string;
  notes?: string;
}

const moodTrackerResolver = {
  Query: {
    moods: async (_: unknown, { user_id }: QueryArgs): Promise<MoodEntry[]> => {
      const res = await db.query(
        "SELECT * FROM graphql.mood_tracker WHERE user_id = $1",
        [user_id]
      );
      return (res.rows as unknown as MoodEntry[]).map((row) => ({
        entry_id: row.entry_id,
        user_id: row.user_id,
        mood: row.mood,
        entry_date: row.entry_date,
        notes: row.notes,
      }));
    },
  },
  Mutation: {
    addMoodEntry: async (
      _: unknown,
      { user_id, mood, entry_date, notes }: AddMoodEntryArgs
    ): Promise<MoodEntry> => {
      const res = await db.query(
        "INSERT INTO graphql.mood_tracker (user_id, mood, entry_date, notes) VALUES ($1, $2, $3, $4) RETURNING *",
        [user_id, mood, entry_date, notes]
      );
      const row = res.rows[0] as unknown as MoodEntry;
      return {
        entry_id: row.entry_id,
        user_id: row.user_id,
        mood: row.mood,
        entry_date: row.entry_date,
        notes: row.notes,
      };
    },
  },
};

export default moodTrackerResolver;
