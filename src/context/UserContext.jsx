import React, { useState, useContext, createContext } from 'react';
import { getCurrentUser } from '../services/auth';

const UserContext = createContext();

export function UserProvider({ children }) {
  const theUser = getCurrentUser();

  const [user, setUser] = useState(theUser);

  return <UserContext.Provider value={ { user, setUser } }>{ children }</UserContext.Provider>;

}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('userContext must be used within a UserProvider');
  }
  return context;
}
