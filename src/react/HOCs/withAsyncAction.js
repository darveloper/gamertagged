import { connect } from ".";
import * as actionCreators from "../../redux";

const withAsyncAction = (reducerName, actionCreatorName) => component => {
  const makeError = message =>
    new Error(
      `${component.name} component: withAction: Failed to bind to action ${actionCreatorName}: ${message}`
    );

  if (!actionCreators[actionCreatorName]) {
    throw makeError(
      `${actionCreatorName} does not exist as an action creator function`
    );
  }

  const mapStateToProps = state => {
    if (!state[reducerName]) {
      throw makeError(`${reducerName} does not exist as a redux reducer`);
    }
    if (state[reducerName][actionCreatorName] === undefined) {
      throw makeError(
        `${actionCreatorName} does not exist as a property in redux state.${reducerName}`
      );
    }
    if (typeof state[reducerName][actionCreatorName] !== "object") {
      throw makeError(
        `${actionCreatorName} does not exist in redux state.${reducerName}.${actionCreatorName} as a javascript object with properties result, loading, and error`
      );
    }
    const { loading, result, error } = state[reducerName][actionCreatorName];
    if (typeof loading !== "boolean") {
      throw makeError(
        `${actionCreatorName} does not exist in redux state.${reducerName}.${actionCreatorName} with a loading property that is a boolean value`
      );
    }
    if (result === undefined) {
      throw makeError(
        `${actionCreatorName} does not exist in redux state.${reducerName}.${actionCreatorName} with a result property`
      );
    }
    if (error === undefined) {
      throw makeError(
        `${actionCreatorName} does not exist in redux state.${reducerName}.${actionCreatorName} with an error property`
      );
    }

    return { ...state[reducerName][actionCreatorName] };
  };

  const actionCreator = actionCreators[actionCreatorName];
  const mapDispatchToProps = { [actionCreatorName]: actionCreator };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);
};

export default withAsyncAction;
