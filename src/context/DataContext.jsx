'use client';
import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(220);

  

  return (
    <DataContext.Provider value={{ currentPage, setCurrentPage}}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
