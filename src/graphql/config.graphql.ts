import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
import { MockLink } from "@apollo/client/testing";
import MockGetArticles from "../data/mock/Articles/GetArticles.mock";
import MockGetArticleById from "../data/mock/Articles/GetArticleById.mock";

// const httpLink = createHttpLink({ uri: import.meta.env.VITE_API_URL + "/graphql" });

// Use setContext to set the Authorization header with the token
/* const authLink = setContext(async (_, { headers }) => {
  // Get the token from wherever it's stored (e.g., localStorage, state, etc.)
  const token = import.meta.env.VITE_API_AUTHORIZATION_TOKEN;

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
}); */

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: new MockLink([...MockGetArticles, ...MockGetArticleById]),
  // link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
  name: "new-west-app",
  version: "1.0",
});
