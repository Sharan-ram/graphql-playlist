const graphql = require("graphql");

const { GraphQLObjectType, GraphQLStringType } = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLStringType },
    name: { type: GraphQLStringType },
    genre: { type: GraphQLStringType },
  }),
});
