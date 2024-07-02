import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PreventComponents = ({ go, tokenCheck, children }) => {
  const nav = useNavigate();
  useEffect(() => {
    if (tokenCheck) {
      nav(go);
    }
  }, []);
  return <div>{children}</div>;
};

export default PreventComponents;
