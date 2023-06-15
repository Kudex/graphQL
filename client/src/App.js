import React from "react";
import "./App.css";
import { useMutation, useQuery } from "@apollo/client";
import { getUsersList } from "./query/User";
import { createUser } from "./mutation/User";

function App() {
  const [name, setName] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [users, setUser] = React.useState([]);

  const { data, loading } = useQuery(getUsersList);

  React.useEffect(() => {
    if (!loading) {
      setUser(data.getUsersList);
    }
  }, [data, loading]);

  const [newUser] = useMutation(createUser);

  const addUserHandler = (e) => {
    e.preventDefault();
    newUser({
      variables: {
        input: {
          name,
          age,
          username,
        },
      },
    }).then(({ data }) => console.log("data", data));
  };

  return (
    <div className="App">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <input
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
      />
      <input
        value={age}
        onChange={(e) => setAge(+e.target.value)}
        type="number"
      />

      <button onClick={(e) => addUserHandler(e)}> Create user </button>

      <button onChange={console.log("PFPF")}>Get users</button>

      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              {user.name}
              <span> </span>
              {user.age}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
