
import { useSelector } from "react-redux";
import { csrfFetch } from "./csrf";
import { clearErrors, setLoginErrors } from "./errors";
import { setSignupErrors } from "./errors";

const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';


const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  };
};

const initialState = { 
  user: JSON.parse(sessionStorage.getItem("currentUser"))
};

const storeCSRFToken = response => {
  const csrfToken = response.headers.get("X-CSRF-Token");
  if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}

const storeCurrentUser = user => {
  if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
  else sessionStorage.removeItem("currentUser");
}

export const restoreSession = () => async dispatch => {
  const response = await csrfFetch("/api/session");
  storeCSRFToken(response);
  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return response;
};

export const login = (user) => async (dispatch) => {
  const { email, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    })
  });
  const data = await response.json();
  if (response.ok) {
    dispatch(setCurrentUser(data.user));
  } else {
    dispatch(setLoginErrors(data.errors))
  }
  return response;
};

export const signup = (user) => async (dispatch) => {
  const { first_name, last_name, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      password
    })
  });
  const data = await response.json();
  if (response.ok) {
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
  } else {
    dispatch(setSignupErrors(data.errors))
  }
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE"
  });
  storeCurrentUser(null);
  dispatch(removeCurrentUser());
  return response;
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, user: action.user };
    case REMOVE_CURRENT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;