// Libraries
import React, { useEffect, useState } from 'react';
// Configs
import app from '../firebase.js';

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setStatus(true);
    });
  }, []);
  if (!status) {
    return <>Loading...</>;
  }
  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
