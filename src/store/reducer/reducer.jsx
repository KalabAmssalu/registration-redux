export const Fname = (state = "kalab", action) => {
  switch (action.type) {
    case "NAME":
      return action.payload;
    default:
      return state;
  }
};
export const Lname = (state = "Amssalu", action) => {
  switch (action.type) {
    case "LNAME":
      return action.payload;
    default:
      return state;
  }
};
export const Gender = (state = "Male", action) => {
  switch (action.type) {
    case "GENDER":
      return action.payload;
    default:
      return state;
  }
};
export const Age = (state = 21, action) => {
  switch (action.type) {
    case "AGE":
      return action.payload;
    default:
      return state;
  }
};
export const Profession = (state = "Student", action) => {
  switch (action.type) {
    case "PROFESSION":
      return action.payload;
    default:
      return state;
  }
};
