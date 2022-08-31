import React from "react";
import Button from "@mui/material/Button";

//Import the useAuth0 hook from @auth0/auth0-react to get the methods
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  //get all the neccessary methods from the useAuth0 Hook
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    //to toggle the login and logout button
    <div>
      {isAuthenticated && <h1>Welcome to my homepage: {user.name}</h1>}

      {isAuthenticated ? (
        <Button
          variant="outlined"
          color="error"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </Button>
      ) : (
        <Button
          variant="contained"
          color="success"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </div>
  );
}

export default Home;
