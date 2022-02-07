import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { loginUser, createUserWithRole } from "../services/authService";
import { createSchool } from "../services/schoolService";
import { SessionStorage } from "quasar";

const storeUserInfoToSession = (jwt, user, school) => {
  SessionStorage.set("jwt", jwt);
  SessionStorage.set("user", user);
  SessionStorage.set("school", school);
};

export default function useAuth() {
  const store = useStore();
  const router = useRouter();

  const registerSchool = async () => {
    const school = await createSchool(store.getters.getSchool);
    store.commit("set_school", school);

    const status = {
      isAdmin: true,
    };

    const state = {
      school: store.getters.getSchool,
      user: store.getters.getUser,
    };

    const { jwt, user } = await createUserWithRole(
      "/api/school-admins",
      state,
      status,
      5
    );

    if (user && school && jwt) {
      storeUserInfoToSession(jwt, user, school);
      store.dispatch("storeUserInfo", { jwt, user, school });
      router.push("/dashboard");
    }
  };

  const login = async ({ identifier, password }) => {
    const { jwt, user, school } = await loginUser({ identifier, password });
    if (user && school && jwt) {
      storeUserInfoToSession(jwt, user, school);
      store.dispatch("storeUserInfo", { jwt, user, school });
      router.push("/dashboard");
    }
  };

  const authenticate = () => {
    const jwt = SessionStorage.getItem("jwt");
    const user = SessionStorage.getItem("user");
    const school = SessionStorage.getItem("school");
    if (user && school && jwt) {
      storeUserInfoToSession(jwt, user, school);
      store.dispatch("storeUserInfo", { jwt, user, school });
      if (router.currentRoute.path === "/") {
        router.push("/dashboard");
      }
    } else {
      router.push("/");
    }
  };

  return { authenticate, login, registerSchool };
}
