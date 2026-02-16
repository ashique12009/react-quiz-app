export const getAuthUser = () => {
  const raw = localStorage.getItem("authUser");

  if (!raw || raw === "undefined" || raw === "null") {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    return null;
  }
};

export const isAuthenticated = () => {
  return Boolean(getAuthUser());
};

export const setAuthUser = (user) => {
  if (!user) return;
  localStorage.setItem("authUser", JSON.stringify(user));
};

export const clearAuthUser = () => {
  localStorage.removeItem("authUser");
};

export const logout = () => {
  clearAuthUser();
};
