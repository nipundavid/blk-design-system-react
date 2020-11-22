import { PROJECT_NAME } from "./projectName";
const initialState = {
  projectName: "",
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_NAME:
      return {
        ...state,
        projectId: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
