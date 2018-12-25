/*
Prisma bindings are a superset of GraphQL bindings, 
they're an extended version of GraphQL bindings 
specifically for Prisma APIs.

There are two extra features in Prisma bindings 
(compared to regular GraphQL bindings):

1- baked in authentication using the service secret

2- the exists function lets you to check whether a 
certain element exists in the database Prisma bindings 
use the data loader pattern to batch requests to the 
Prisma API.

Baked in authentication

The service secret is passed to the constructor of the 
Prisma binding. This allows the binding to generate the 
required service token (JWT) when it sends requests to 
your service's API.

Consider the following example:
*/

const { Prisma } = require('prisma-binding')

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
})

module.exports= db;

/*
The db binding object can now be used to send 
requests directly to your service (remote prisma DB) 
by invoking the auto-generated binding functions. 

Each request will be authenticated with a service token 
generated based on the secret that was passed to the 
Prisma constructor.

Give us the hability to query it with JS
*/