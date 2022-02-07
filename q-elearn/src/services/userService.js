import { api } from "../boot/axios";

export const findUser = async (url) => {
  return api.get(url).then((response) => response.data);
};

export const updateUser = async (jwt, id, data) => {
  return api
    .put(`/api/users/${id}`, data, {
      Authorization: `Bearer ${jwt}`,
    })
    .then((response) => ({
      jwt,
      user: response.data,
    }));
};
