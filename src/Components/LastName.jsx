import React from "react";
import { useSelector } from "react-redux";

const LastName = () => {
  const lastName = useSelector((state) => state.lastName);

  return (
    <div className='inline'>
      <div className='inline'>Last Name: {lastName}</div>
    </div>
  );
};

export default LastName;
