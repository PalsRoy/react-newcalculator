'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mathjs = require('mathjs');

var math = _interopRequireWildcard(_mathjs);

require('./index.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_Component) {
  _inherits(Calculator, _Component);

  function Calculator(props) {
    _classCallCheck(this, Calculator);

    var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

    _this.state = {
      resultBlock: ''
    };
    _this.handleNumberClick = _this.handleNumberClick.bind(_this);
    _this.handleOperatorClick = _this.handleOperatorClick.bind(_this);
    _this.handlePercentage = _this.handlePercentage.bind(_this);
    _this.handlePlusMinus = _this.handlePlusMinus.bind(_this);
    _this.handleDecimal = _this.handleDecimal.bind(_this);
    return _this;
  }

  _createClass(Calculator, [{
    key: 'handleNumberClick',
    value: function handleNumberClick(event) {
      var removeZero = this.state.resultBlock === '0' ? event.target.value : this.state.resultBlock + event.target.value;
      this.setState({ resultBlock: removeZero });
    }
  }, {
    key: 'handleOperatorClick',
    value: function handleOperatorClick(event) {
      var expressionResult = math.eval(this.state.resultBlock);
      this.setState({ resultBlock: expressionResult });
    }
  }, {
    key: 'handlePercentage',
    value: function handlePercentage(event) {
      var percentageResult = math.eval(this.state.resultBlock + '/100');
      this.setState({ resultBlock: percentageResult });
    }
  }, {
    key: 'handlePlusMinus',
    value: function handlePlusMinus(event) {
      var alwaysString = this.state.resultBlock.toString();
      var plusMinusResult = alwaysString.charAt(0) === '-' ? alwaysString.slice(1) : '-' + alwaysString;
      this.setState({ resultBlock: plusMinusResult });
    }
  }, {
    key: 'handleDecimal',
    value: function handleDecimal(event) {
      var result = this.state.resultBlock;
      var singleDecimal = result.charAt(result.length - 1) === '.' ? this.state.resultBlock : result + '.';
      this.setState({ resultBlock: singleDecimal });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(
          'div',
          { className: 'Calculator' },
          _react2.default.createElement(
            'div',
            { className: 'Result' },
            this.state.resultBlock
          ),
          _react2.default.createElement(
            'div',
            { className: 'CalculatorRow' },
            _react2.default.createElement(
              'button',
              { className: 'Button', onClick: function onClick() {
                  return _this2.setState({ resultBlock: '0' });
                } },
              'AC'
            ),
            _react2.default.createElement(
              'button',
              { className: 'Button', onClick: this.handlePlusMinus },
              '+/-'
            ),
            _react2.default.createElement(
              'button',
              { className: 'Button', onClick: this.handlePercentage, value: '%' },
              '%'
            ),
            _react2.default.createElement(
              'button',
              { className: 'Button Operator', onClick: this.handleNumberClick, value: '/' },
              '/'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'CalculatorRow' },
            _react2.default.createElement(
              'button',
              { className: 'Button', onClick: this.handleNumberClick, value: '7' },
              '7'
            ),
            _react2.default.createElement(
              'button',
              { className: 'Button', onClick: this.handleNumberClick, value: '8' },
              '8'
            ),
            _react2.default.createElement(
              'button',
              { className: 'Button', onClick: this.handleNumberClick, value: '9' },
              '9'
            ),
            _react2.default.createElement(
              'button',
              { className: 'Button Operator', onClick: this.handleNumberClick, value: '*' },
              '*'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'CalculatorRow' },
            _react2.default.createElement(
              'button',
              { className: 'Button', onClick: this.handleNumberClick, value: '4' },
              '4'
            ),
            _react2.default.createElement(
              'button',
              { className: 'Button', onClick: this.handleNumberClick, value: '5' },
              '5'
            ),
            _react2.default.createElement(
              'button',
              { className: 'Button', onClick: this.handleNumberClick, value: '6' },
              '6'
            ),
            _react2.default.createElement(
              'button',
              { className: 'Button Operator', onClick: this.handleNumberClick, value: '-' },
              '-'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'CalculatorRow' },
            _react2.default.createElement(
              'button',
              { className: 'Button', onClick: this.handleNumberClick, value: '1' },
              '1'
            ),
            _react2.default.createElement(
              'button',
              { className: 'Button', onClick: this.handleNumberClick, value: '2' },
              '2'
            ),
            _react2.default.createElement(
              'button',
              { className: 'Button', onClick: this.handleNumberClick, value: '3' },
              '3'
            ),
            _react2.default.createElement(
              'button',
              { className: 'Button Operator', onClick: this.handleNumberClick, value: '+' },
              '+'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'CalculatorRow' },
            _react2.default.createElement(
              'button',
              { className: 'Button ZeroButton', onClick: this.handleNumberClick, value: '0' },
              '0'
            ),
            _react2.default.createElement(
              'button',
              { className: 'Button', onClick: this.handleDecimal, value: '.' },
              '.'
            ),
            _react2.default.createElement(
              'button',
              { className: 'Button Operator', onClick: this.handleOperatorClick },
              '='
            )
          )
        )
      );
    }
  }]);

  return Calculator;
}(_react.Component);

exports.default = Calculator;