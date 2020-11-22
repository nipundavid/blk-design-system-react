import { PROJECT_NAME } from "./projectName";

export const setProjectId = (arg) => {
  return {
    type: PROJECT_NAME,
    payload: arg,
  };
};
