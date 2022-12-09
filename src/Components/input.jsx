import React, { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <div className='flex flex-row p-2 gap-3'>
        <label htmlFor='name' className='items-center font-bold w-32'>
          {" "}
          {props.title}:
        </label>
        <input
          type='text'
          className='w-80 h-10 border-2 rounded-md p-3 font-medium bg-slate-300 text-black text-2xl'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className='w-32 bg-gray-500 items-center '
          onClick={() => props.dispatchFunction(props.btnTitle, value)}>
          {" "}
          ADD{" "}
        </button>
      </div>
    </div>
  );
};

export default Input;
