import React from "react";
import { useSelector } from "react-redux";

const Age = () => {
  const age = useSelector((state) => state.age);

  return (
    <div className='inline'>
      <div className='inline'>Age: {age}</div>
    </div>
  );
};

export default Age;
