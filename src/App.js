import "./App.css";
import Age from "./store/action/ageAction";
import Name from "./store/action/firstAction";
import Lname from "./store/action/lastAction";
import Gender from "./store/action/genderAction";
import Profession from "./store/action/professionAction";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Components/input";

function App() {
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const gender = useSelector((state) => state.gender);
  const age = useSelector((state) => state.age);
  const profession = useSelector((state) => state.profession);

  const dispatch = useDispatch();

  const dispatchFunction = (btnTitle, valueInput) => {
    switch (btnTitle) {
      case "firstName":
        dispatch(Name(valueInput));
        break;
      case "lastName":
        dispatch(Lname(valueInput));
        break;
      case "age":
        dispatch(Age(valueInput));
        break;
      case "gender":
        dispatch(Gender(valueInput));
        break;
      case "profession":
        dispatch(Profession(valueInput));
        break;
      default:
        alert("please insert some data");
    }
  };
  return (
    <div>
      <>
        {" "}
        <div>
          <div className='flex flex-col mt-6 border-3 p-3 items-center'>
            <h1 className='text-xl font-serif mb-4'>
              {" "}
              REGISTRATION REDUX CLASS DEMO
            </h1>
            <Input
              title='First Name'
              btnTitle='firstName'
              dispatchFunction={dispatchFunction}
            />
            <Input
              title='Last Name'
              btnTitle='lastName'
              dispatchFunction={dispatchFunction}
            />
            <Input
              title='Age'
              btnTitle='age'
              dispatchFunction={dispatchFunction}
            />
            <Input
              title='Gender'
              btnTitle='gender'
              dispatchFunction={dispatchFunction}
            />
            <Input
              title='Profession'
              btnTitle='profession'
              dispatchFunction={dispatchFunction}
            />
            <div>
              <p>FirstName: {firstName}</p>
              <p>LastName: {lastName}</p>
              <p>gender: {gender}</p>
              <p>age: {age}</p>
              <p>profession: {profession}</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
