import React, { useContext } from "react";

// context
import { AuthContext } from "../context/auth.provider";

const Home = () => {
  const {
    state: { user },
  } = useContext(AuthContext);

  console.log(user);

  return (
    <div>
      <>
        <h2>Welcome {user.email}</h2>
      </>
    </div>
  );
};

export default Home;
