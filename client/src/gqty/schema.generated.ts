/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface emailCreateInput {
  email: Scalars["String"];
  message?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  phone: Scalars["String"];
}

export interface userCreateInput {
  email: Scalars["String"];
  name: Scalars["String"];
  phone: Scalars["String"];
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  Float: true,
  ID: true,
  Int: true,
  String: true,
};
export const generatedSchema = {
  User: {
    __typename: { __type: "String!" },
    email: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    phone: { __type: "String!" },
  },
  emailCreateInput: {
    email: { __type: "String!" },
    message: { __type: "String" },
    name: { __type: "String!" },
    phone: { __type: "String!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    emailSend: { __type: "String!", __args: { input: "emailCreateInput!" } },
    userCreate: { __type: "User!", __args: { input: "userCreateInput!" } },
  },
  query: { __typename: { __type: "String!" }, users: { __type: "[User!]!" } },
  subscription: {},
  userCreateInput: {
    email: { __type: "String!" },
    name: { __type: "String!" },
    phone: { __type: "String!" },
  },
} as const;

export interface User {
  __typename?: "User";
  email: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  phone: ScalarsEnums["String"];
}

export interface Mutation {
  __typename?: "Mutation";
  emailSend: (args: { input: emailCreateInput }) => ScalarsEnums["String"];
  userCreate: (args: { input: userCreateInput }) => User;
}

export interface Query {
  __typename?: "Query";
  users: Array<User>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  Mutation: Mutation;
  Query: Query;
  Subscription: Subscription;
  User: User;
}
export type SchemaObjectTypesNames =
  | "Mutation"
  | "Query"
  | "Subscription"
  | "User";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
