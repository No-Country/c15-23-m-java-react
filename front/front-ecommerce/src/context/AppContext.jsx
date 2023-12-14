/* eslint-disable react/prop-types */
import React from 'react';
import { useInitialState } from '../hooks/useInitialState';

const AppContext = React.createContext(null);

const ContextProvider = ({ children }) => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
};

export { AppContext, ContextProvider };
