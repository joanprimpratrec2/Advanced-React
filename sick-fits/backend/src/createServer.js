/*
An Express GraphQL Server for:
1- implementing Query and Mutation Resolvers
2- Custom Server Side Logic
3- Charging Credit Cards,
4- Sending Email
5- Performing JWT Authentication
6- Checking Permissions
*/

const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');


/*
I catched in  ./src/schema.graphql

const typeDefs = `
  type Query {
    items: [Item!]!
  }

  type Item {
    name: String!
  }
`
*/

/*
I imported from ./resolvers  files.
There are two types:
  1- Mutation
  2- Query

const resolvers = {
  Query: {
    items: () => sampleItems,
  },
}

*/

/*
Create the GraphQl Yoga Server
*/

function createServer(){
    return new GraphQLServer({ 
        typeDefs: 'src/schema.graphql', 
        resolvers:{
            Mutation,
            Query
        },
        resolverValidationOptions:{
            requireResolversForResolveType: false,
        },
        context:  req =>({ ...req, db }),
    });   
} 

module.exports = createServer;

