import { PROJECT_NAME } from "./projectName";

export const setProjectName = (arg) => {
  return {
    type: PROJECT_NAME,
    payload: arg,
  };
};
