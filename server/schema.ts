import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    user_id: ID!
    email: String
    created_at: String
  }

  type JobApplication {
    application_id: ID!
    user_id: ID!
    job_title: String
    company: String
    status: String
    notes: String
    date_applied: String
  }

  type Mood {
    entry_id: ID!
    user_id: ID!
    mood: Int
    entry_date: String
    notes: String
  }

  type Query {
    users: [User]
    jobApplications(user_id: ID!): [JobApplication]
    moods(user_id: ID!): [Mood]
  }

  type Mutation {
    addJobApplication(
      user_id: ID!
      job_title: String!
      company: String!
    ): JobApplication
    addMoodEntry(
      user_id: ID!
      mood: Int!
      entry_date: String!
      notes: String
    ): Mood
  }
`;

export default typeDefs;
