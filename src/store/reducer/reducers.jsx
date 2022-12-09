import { combineReducers } from "redux";
import { Age, Fname, Lname, Gender, Profession } from "./reducer";

export const reducers = combineReducers({
  firstName: Fname,
  lastName: Lname,
  gender: Gender,
  age: Age,
  profession: Profession,
});
