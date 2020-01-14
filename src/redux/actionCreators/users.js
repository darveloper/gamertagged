import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETUSER, POSTUSER, DELETEUSER, PUTUSERIMAGE } from "../actionTypes";

import { push } from "connected-react-router";

const url = domain + "/users";

export const getUser = username => dispatch => {
  dispatch({ type: GETUSER.START });

  return fetch(url + "/" + username, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETUSER.FAIL, payload: err }));
    });
};

const _postUser = registerData => dispatch => {
  dispatch({ type: POSTUSER.START });

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTUSER.SUCCESS,
        payload: result
      });
    })

    .catch(err => {
      return Promise.reject(dispatch({ type: POSTUSER.FAIL, payload: err }));
    });
};
export const postUser = registerData => (dispatch, getState) => {
  return dispatch(_postUser(registerData)).then(() =>
    dispatch(push("/profile/:username"))
  );
};

export const deleteUser = () => (dispatch, getState) => {
  dispatch({ type: DELETEUSER.START });

  const { username, token } = getState().auth.login.result;

  return fetch(url + "/" + username, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETEUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: DELETEUSER.FAIL, payload: err }));
    });
};

const _putUserImage = formData => (dispatch, getState) => {
  dispatch({ type: PUTUSERIMAGE.START });

  const { username, token } = getState().auth.login.result;

  return fetch(url + "/" + username + "/picture", {
    method: "PUT",
    headers: { Authorization: "Bearer " + token, Accept: "application/json" },
    body: formData
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: PUTUSERIMAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: PUTUSERIMAGE.FAIL, payload: err })
      );
    });
};

export const putUserImage = formData => (dispatch, getState) => {
  return dispatch(_putUserImage(formData)).then(() => {
    const username = getState().auth.login.result.username;
    return dispatch(getUser(username));
  });
};
