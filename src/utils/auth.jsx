import cookie from "js-cookie";
import jwtDecode from "jwt-decode";
// Set in Cookie
export const setCookie = (key, value) => {
  if (window !== "undefiend") {
    cookie.set(key, value, {
      // 1 Day
      expires: 1,
    });
  }
};
// remove from cookie
export const removeCookie = (key) => {
  if (window !== "undefined") {
    cookie.remove(key, {
      expires: 1,
    });
  }
};


export const getCookie = (key) => {
  if (window !== "undefined") {
    return cookie.get(key);
  }
};

// Set in localstorage
export const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// Remove from localstorage
export const removeLocalStorage = (key) => {
  if (window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// Auth enticate user by passing data to cookie and localstorage during signin
export const authenticate = (response) => {
  setCookie("token", response.token);
  setLocalStorage("user", response.user);
};

// Access user info from localstorage
export const isAuth = () => {
  console.log(getCookie("token"));
  if (window !== "undefined") {
    const cookieChecked = getCookie("token");

    if (cookieChecked) {
    }
  }
};

export const signout = () => {
  removeCookie("token");
  removeLocalStorage("user");
};

export const updateUser = (response, next) => {
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("user"));
    auth = response.data;
    localStorage.setItem("user", JSON.stringify(auth));
  }
  next();
};

export const decodeJwt = (token) => {
  try {
    return jwtDecode(token).is_admin;
  } catch (err) {
    return false;
  }
};
