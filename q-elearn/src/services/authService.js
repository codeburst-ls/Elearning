import qs from "qs";
import { api } from "../boot/axios";
import { updateUser, findUser } from "./userService";

const registerUser = async (user) => {
  return api
    .post("/api/auth/local/register", user)
    .then((response) => response.data);
};

export const createUserWithRole = async (url, state, status, role) => {
  const { jwt, user } = await registerUser({ ...state.user, ...status });

  const userRole = await api
    .post(url, {
      data: {
        user: user.id,
        slug: user.username,
        school: state.school.data.id,
      },
    })
    .then((response) => response.data);

  if (user.isAdmin) {
    return updateUser(jwt, user.id, { role: role, adminId: userRole.data.id });
  }
  if (user.isStudent) {
    return updateUser(jwt, user.id, {
      role: role,
      studentId: userRole.data.id,
    });
  }
  if (user.isTeacher) {
    return updateUser(jwt, user.id, {
      role: role,
      teacherId: userRole.data.id,
    });
  }
};

export const loginUser = async ({ identifier, password }) => {
  const query = qs.stringify(
    {
      populate: "school",
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { jwt, user } = await api
    .post("/api/auth/local", { identifier, password })
    .then((response) => response.data);

  //console.log(user);
  if (user.isAdmin) {
    const school = await findUser(
      `api/school-admins/${user.adminId}?${query}`
    ).then((admin) => ({
      ...admin.data.attributes.school.data.attributes,
      id: admin.data.attributes.school.data.id,
    }));
    return { jwt, user, school };
  }

  if (user.isStudent) {
    const school = await findUser(
      `api/school-admins/${user.studentId}?${query}`
    ).then((student) => ({
      ...student.data.attributes.school.data.attributes,
      id: student.data.attributes.school.data.id,
    }));
    return { jwt, user, school };
  }

  if (user.isTeacher) {
    const school = await findUser(
      `api/school-admins/${user.teacherId}?${query}`
    ).then((teacher) => ({
      ...teacher.data.attributes.school.data.attributes,
      id: teacher.data.attributes.school.data.id,
    }));
    return { jwt, user, school };
  }
};
