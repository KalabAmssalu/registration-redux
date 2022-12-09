import React from "react";
import { useSelector } from "react-redux";

const FirstName = () => {
  const firstName = useSelector((state) => state.firstName);
  return (
    <div className='inline'>
      <div className='inline'>First Name: {firstName}</div>
    </div>
  );
};

export default FirstName;
