'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactReduxMeteor = require('react-redux-meteor');

var _loading_bar = require('./loading_bar');

var mapImmutableStateToProps = function mapImmutableStateToProps(state) {
  return {
    loading: state.get('loadingBar')
  };
};

exports.default = (0, _reactReduxMeteor.connect)(null, mapImmutableStateToProps)(_loading_bar.LoadingBar);