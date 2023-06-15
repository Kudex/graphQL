const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const users = require("./users-mock");

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

const rootValue = {
  getUsersList: () => {
    return users;
  },
  createUser: ({ input }) => {
    const id = Date.now();
    const user = {
      id,
      ...input,
    };
    users.push(user);
    return user;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue,
  })
);
app.listen(port, () => console.log("is running", port));
