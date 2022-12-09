import React from "react";
import { useSelector } from "react-redux";

const ProfessionAction = () => {
  const profession = useSelector((state) => state.profession);

  return (
    <div className='inline'>
      <div className='inline'>Profession: {profession}</div>
    </div>
  );
};

export default ProfessionAction;
