import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string, // GraphQL Server endpoint
  cache: new InMemoryCache(),
});

export default client;
