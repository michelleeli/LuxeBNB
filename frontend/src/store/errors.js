export const RECEIVE_lOGIN_ERRORS = 'errors/RECEIVE_LOGIN_ERRORS'

export const setLoginErrors = (errors) => {
    return {
      type: RECEIVE_lOGIN_ERRORS,
      errors
    };
  };

export default function errorsReducer(state={}, action) {
    let newState = {...state}
    switch (action.type) {
        case RECEIVE_lOGIN_ERRORS:
            const prevErrors = state?.login?.errors || []
            newState = {...state, login: [...prevErrors, ...action.errors]}

            return newState;
        default: 
            return newState;
    }
}