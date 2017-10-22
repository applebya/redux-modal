import { SHOW, HIDE, DESTROY } from "./actionTypes";
import { Map } from "immutable";

const initialState = Map();

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW:
      return state.set(
        action.payload.modal,
        Map({
          show: true,
          props: action.payload.props
        })
      );
    case HIDE:
      return state.setIn([action.payload.modal, "show"], false);
    case DESTROY:
      return state.remove(action.payload.modal);
    default:
      return state;
  }
};
