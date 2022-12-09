import React from "react";
import { useSelector } from "react-redux";

const Gender = () => {
  const gender = useSelector((state) => state.gender);

  return (
    <div className='inline'>
      <div className='inline'>Gender: {gender}</div>
    </div>
  );
};

export default Gender;
