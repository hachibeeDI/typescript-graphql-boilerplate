# typescript-graphql-boilerplate

## Commands

- yarn gen

  Generate typescript code follows codegen.yml

- yarn start

  Start express server

- yarn typeorm

  Shortcut to call typeorm with ts-node.
  You can pass any option like `yarn typeorm schema:sync`


## Database

### Define entity

While create entities, you'll get an error message like
`typeorm Property 'password' has no initializer and is not definitely assigned in the constructor.`.

That is due to "Strict Class Initialization" (http://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization).
You should apply `!` each before fields after properties.

### Initialize

TypeORM currently doesn't support table initialization from entities.
So you need some trick to do it.

1. Create an entity
2. Run `yarn typeorm schema:sync`
3. Observe "CREATE TABLE" was output when synchronized
4. Run `yarn typeorm migration:create -n Initialize` to create empty migration file
5. Copy and paste the SQL above

### Migration

https://github.com/typeorm/typeorm/blob/master/docs/migrations.md
