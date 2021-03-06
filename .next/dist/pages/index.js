'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\workspace\\kickstart\\pages\\index.js?entry';


var CampaignIndex = function (_Component) {
	(0, _inherits3.default)(CampaignIndex, _Component);

	function CampaignIndex() {
		(0, _classCallCheck3.default)(this, CampaignIndex);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignIndex, [{
		key: 'renderCampaigns',

		// async componentDidMount()
		// {
		// const campaigns = await factory.methods.getDeployedCampaigns().call();

		// console.log(campaigns);
		// }  this getInitialProps is server side rendering, whenever any rendering occurs this function is called  

		value: function renderCampaigns() {
			var items = this.props.campaigns.map(function (address) {
				return {
					header: address,
					description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
							fileName: _jsxFileName,
							lineNumber: 26
						}
					}, _react2.default.createElement('a', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 27
						}
					}, 'View Campaign')),
					fluid: true
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, _react2.default.createElement(_semanticUiReact.Button, {
				floated: 'right',
				content: 'Create Campaign',
				icon: 'add circle',
				primary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}))), this.renderCampaigns()));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var campaigns;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _factory2.default.methods.getDeployedCampaigns().call();

							case 2:
								campaigns = _context.sent;
								return _context.abrupt('return', { campaigns: campaigns });

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFXOzs7Ozs7O0ksQUFFYjs7Ozs7Ozs7OztPQU9MOztBQUNBO0FBQ0M7QUFFQTs7QUFDRDs7O29DQUVpQixBQUNoQjtPQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFVLEFBQ2hEOzthQUFNLEFBQ0csQUFDUjtrQ0FDQSxBQUFDLDhCQUFLLHVCQUFOLEFBQTZCO2lCQUE3QjttQkFBQSxBQUNBO0FBREE7TUFBQSxrQkFDQSxjQUFBOztpQkFBQTttQkFBQTtBQUFBO0FBQUEsUUFKSyxBQUdMLEFBQ0EsQUFLQTtZQVRELEFBQU0sQUFTRSxBQUVSO0FBWE0sQUFDTDtBQUZGLEFBQWMsQUFlZCxJQWZjOzt3Q0FlUCxBQUFFLHNCQUFGLEFBQU8sU0FBTSxPQUFiLEFBQXNCO2VBQXRCO2lCQUFQLEFBQU8sQUFDUDtBQURPO0lBQUE7Ozs7MkJBSUEsQUFDUDswQkFDQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUVBO0FBRkE7QUFBQSxzQkFFQSxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUZBLEFBRUEsQUFLQSxtQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBYztlQUFkO2lCQUFBLEFBQ0E7QUFEQTtzQkFDQSxjQUFBOztlQUFBO2lCQUFBLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLEFBQUM7YUFBRCxBQUNVLEFBQ1Y7YUFGQSxBQUVVLEFBQ1Y7VUFIQSxBQUdPLEFBQ1A7YUFKQTs7ZUFBQTtpQkFUQSxBQU9BLEFBQ0EsQUFDQSxBQVVDO0FBVkQ7QUFDQSxjQVpELEFBQ0EsQUFDQyxBQW1CQyxBQUFLLEFBSVA7Ozs7Ozs7Ozs7OztlQTFEd0Isa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCLEFBQWhCLEFBQXVDOztZQUF6RDtBO3lDQUVDLEVBQUMsVyxBQUFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERULEEsQUFoRTRCOztrQkFnRTVCLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRjovd29ya3NwYWNlL2tpY2tzdGFydCJ9