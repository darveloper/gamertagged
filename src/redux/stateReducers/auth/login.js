import { LOGIN, LOGOUT } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  result: null,
  loading: false,
  error: null
};

const getInitStateFromStorage = (key, initialState) => {
  const storedState = JSON.parse(localStorage.getItem(key));

  if (storedState) {
    const unchangedInitialStateProps =
      Object.keys(storedState).every(
        property => initialState[property] !== undefined
      ) &&
      Object.keys(initialState).every(
        property => storedState[property] !== undefined
      );
    if (unchangedInitialStateProps) {
      return storedState;
    }
  }
  return initialState;
};

const login = (
  state = getInitStateFromStorage("login", initialState),
  action
) => {
  switch (action.type) {
    case LOGOUT.SUCCESS:
      return { ...initialState };
    default:
      return state;
  }
};

export default withAsyncReducer(LOGIN, login);
