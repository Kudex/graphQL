const { buildSchema } = require("graphql");

const schema = buildSchema(`
type User {
    id:ID,
    username:String,
    name:String,
    age:Int,
    posts:[Post]
}
type Post {
    id:ID,
    title:String!,
    description:String,
    
}

input  UserInput {    
    username:String!,
    name:String!,
    age:Int!,
    posts:[PostInput]    
}

input  PostInput {
  id:ID,    
  title:String!,
  description:String
    
}

type Query {
    getUsersList:[User],
    getUser(id:ID):User
}

type Mutation{
    createUser(input:UserInput):User,
    createPost(input:PostInput):Post
}

`);

module.exports = schema;
