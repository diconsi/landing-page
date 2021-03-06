/**
 * GQTY: You can safely modify this file and Query Fetcher based on your needs
 */

import { createReactClient } from '@gqty/react'

import { createClient } from 'gqty'
import { generatedSchema, scalarsEnumsHash } from './schema.generated'
import type { QueryFetcher } from 'gqty'
import type {
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from './schema.generated'

const queryFetcher: QueryFetcher = async function(
  query,
  variables,
  fetchOptions,
) {
  // Modify "/api/graphql" if needed
  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: 'cors',
    ...fetchOptions,
  })

  const json = await response.json()

  return json
}

export const client = createClient<
GeneratedSchema,
SchemaObjectTypesNames,
SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
})

const { query, mutation, mutate, subscription, resolved, refetch, track }
  = client

export { query, mutation, mutate, subscription, resolved, refetch, track }

const {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Set this flag as "true" if your usage involves React Suspense
    // Keep in mind that you can overwrite it in a per-hook basis
    suspense: false,

    // Set this flag based on your needs
    staleWhileRevalidate: false,
  },
})

export {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
}

export * from './schema.generated'
