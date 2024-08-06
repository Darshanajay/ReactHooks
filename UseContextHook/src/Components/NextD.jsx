import React, { useContext } from "react";
import { DataProvider } from "../Store";

const NextD = () => {
  const count = useContext(DataProvider);
  return <>{count}</>;
};

export default NextD;
