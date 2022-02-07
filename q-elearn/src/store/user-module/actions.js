export function storeUserInfo(context, { jwt, user, school }) {
  context.commit("set_jwt", jwt);
  context.commit("set_user", user);
  context.commit("set_school", school);
  context.commit("set_isAuthenticated", true);
}
