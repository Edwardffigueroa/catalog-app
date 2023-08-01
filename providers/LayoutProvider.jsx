"use client";
import { createContext, useContext, useState } from "react";

const LayoutProviderContext = createContext(null);

export const LayoutProvider = ({ children }) => {
  const [toggleLayout, setToggleLayout] = useState(true);
  return (
    <LayoutProviderContext.Provider value={{ toggleLayout, setToggleLayout }}>
      {children}
    </LayoutProviderContext.Provider>
  );
};

export const useLayout = () => {
  return useContext(LayoutProviderContext);
};
