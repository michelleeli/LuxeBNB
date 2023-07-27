export const RECEIVE_lOGIN_ERRORS = 'errors/RECEIVE_LOGIN_ERRORS'
export const RECEIVE_SIGNUP_ERRORS = 'errors/RECEIVE_SIGNUP_ERRORS'
export const CLEAR_ERRORS = 'errors/CLEAR_ERRORS'

export const setLoginErrors = (errors) => {
    return {
      type: RECEIVE_lOGIN_ERRORS,
      errors
    };
  };

export const setSignupErrors = (errors) => {
    return {
      type: RECEIVE_SIGNUP_ERRORS,
      errors
    };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}

export default function errorsReducer(state={}, action) {
    let newState = {...state}
    switch (action.type) {
        case RECEIVE_lOGIN_ERRORS:
            const loginErrors = state?.login || []
            newState = {...state, login: [...loginErrors, ...action.errors]}
            return newState;
        case RECEIVE_SIGNUP_ERRORS:
          const signupErrors = state?.signup || []
          if (action.errors) {
            newState = {...state, signup: [...signupErrors, ...action.errors]}
          } else {
            newState = {...state, signup: [...signupErrors]}
          }
          return newState;
        case CLEAR_ERRORS:
          newState = {}
          return newState;
        default: 
            return newState;
    }
}