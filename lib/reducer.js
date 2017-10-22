"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require("./actionTypes");

var _immutable = require("immutable");

var initialState = (0, _immutable.Map)();

exports.default = function() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : initialState;
  var action =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _actionTypes.SHOW:
      return state.set(
        action.payload.modal,
        (0, _immutable.Map)({
          show: true,
          props: action.payload.props
        })
      );
    case _actionTypes.HIDE:
      return state.setIn([action.payload.modal, "show"], false);
    case _actionTypes.DESTROY:
      return state.remove(action.payload.modal);
    default:
      return state;
  }
};
