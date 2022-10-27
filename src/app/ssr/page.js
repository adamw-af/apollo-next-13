import { gql } from "@apollo/client";
import { initializeApollo } from "../../lib/apollo-client";
import { ApolloProvider } from "../../lib/apollo-provider";

const POSTS_PER_PAGE = 5;
const GET_POSTS = gql`
  query getPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          databaseId
          title
          slug
        }
      }
    }
  }
`;

export default async function AboutPage() {
  const apolloClient = initializeApollo();

  const res = await apolloClient.query({
    query: GET_POSTS,
    variables: {
      first: POSTS_PER_PAGE,
      after: null,
    },
  });

  const posts = res?.data?.posts?.edges?.map((edge) => edge.node) || [];

  const cache = apolloClient.cache.extract();
  return (
    <ApolloProvider cache={JSON.stringify(cache)}>
      {posts.map((post) => {
        return (
          <article
            key={post.databaseId}
            style={{
              border: "2px solid #eee",
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "10px",
            }}
          >
            <h2>{post.title}</h2>
          </article>
        );
      })}
    </ApolloProvider>
  );
}
