'use client';

import { ApolloProvider as ApolloProviderComponent } from "@apollo/client";
import { useApollo } from "./apollo-client";

export const ApolloProvider = (props: any) => {
  const apolloClient = useApollo(props.cache ? JSON.parse(props.cache) : undefined);
  return (
    <ApolloProviderComponent client={apolloClient}>
      {props.children}
    </ApolloProviderComponent>
  );
};
