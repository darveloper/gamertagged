import { DELETEUSER } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";


const initialState = {
  loading: false,
  result: null,
  error: null
};

const deleteUser = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default withAsyncReducer(DELETEUSER, deleteUser);
