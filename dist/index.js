"use strict";
/* IMPORT */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var unstated_1 = require("unstated");
/* WITH CONTAINERS */
function withContainers() {
    var Containers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Containers[_i] = arguments[_i];
    }
    return function wrapper(WrappedComponent) {
        return /** @class */ (function (_super) {
            __extends(ContainersProvider, _super);
            function ContainersProvider() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ContainersProvider.prototype.render = function () {
                var _this = this;
                return (React.createElement(unstated_1.Subscribe, { to: Containers.slice() }, function () {
                    var containers = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        containers[_i] = arguments[_i];
                    }
                    return (React.createElement(WrappedComponent, __assign({ containers: containers }, _this.props)));
                }));
            };
            return ContainersProvider;
        }(React.Component));
    };
}
/* EXPORT */
exports.default = withContainers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLDZCQUErQjtBQUMvQixxQ0FBbUM7QUFFbkMscUJBQXFCO0FBRXJCLFNBQVMsY0FBYztJQUFHLG9CQUFhO1NBQWIsVUFBYSxFQUFiLHFCQUFhLEVBQWIsSUFBYTtRQUFiLCtCQUFhOztJQUVyQyxPQUFPLFNBQVMsT0FBTyxDQUFHLGdCQUFnQjtRQUV4QztZQUF3QyxzQ0FBK0I7WUFBaEU7O1lBY1AsQ0FBQztZQVpDLG1DQUFNLEdBQU47Z0JBQUEsaUJBVUM7Z0JBUkMsT0FBTyxDQUNMLG9CQUFDLG9CQUFTLElBQUMsRUFBRSxFQUFNLFVBQVUsWUFDMUI7b0JBQUUsb0JBQWE7eUJBQWIsVUFBYSxFQUFiLHFCQUFhLEVBQWIsSUFBYTt3QkFBYiwrQkFBYTs7b0JBQU0sT0FBQSxDQUNwQixvQkFBQyxnQkFBZ0IsYUFBQyxVQUFVLEVBQUUsVUFBVSxJQUFNLEtBQUksQ0FBQyxLQUFLLEVBQUksQ0FDN0Q7Z0JBRnFCLENBRXJCLENBQ1MsQ0FDYixDQUFDO1lBRUosQ0FBQztZQUVILHlCQUFDO1FBQUQsQ0FBQyxBQWRNLENBQWlDLEtBQUssQ0FBQyxTQUFTLEdBY3JEO0lBRUosQ0FBQyxDQUFDO0FBRUosQ0FBQztBQUVELFlBQVk7QUFFWixrQkFBZSxjQUFjLENBQUMifQ==