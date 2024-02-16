import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const API_LINK = "https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev";

const httpLink = createHttpLink({
  uri: API_LINK,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
