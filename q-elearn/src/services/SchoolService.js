import { api } from "../boot/axios";

export const createSchool = async (school) => {
  return api
    .post("/api/schools", {
      data: school,
    })
    .then((response) => response.data);
};
