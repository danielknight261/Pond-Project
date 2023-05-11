import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create a user context using createContext
export const UserContext = createContext({});

// Define the UserContextProvider component
export function UserContextProvider({ children }) {
  // Define state variables using useState hook
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  // Use useEffect to fetch the user profile when the component mounts
  useEffect(() => {
    // Only fetch the user profile if the user is not already set
    if (!user) {
      axios.get('http://localhost:4000/profile').then(({ data }) => {
        // Set the user data and mark the component as ready
        setUser(data);
        setReady(true);
      });
    }
  }, []);

  // Render the UserContext.Provider and pass the user, setUser, and ready values as context values
  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
