export const doLogin = (data) => {
  localStorage.setItem("token", JSON.stringify(data));
};

export const isLoggedIn = () => {
  let data = localStorage.getItem("token");
  if (data != null) return true;
  else return false;
};

export const doLogout = (next) => {
  localStorage.removeItem("token");
  next();
};
