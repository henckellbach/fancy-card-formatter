"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var fancy_card_formatter_1 = __importDefault(require("./fancy-card-formatter"));
function useFancyCardFormatter(initialValue) {
    if (initialValue === void 0) { initialValue = ''; }
    var formatter = react_1.useState(new fancy_card_formatter_1.default(initialValue))[0];
    var _a = react_1.useState(initialValue), stateValue = _a[0], setStateValue = _a[1];
    var setValue = function (newValue) {
        var result = formatter === null || formatter === void 0 ? void 0 : formatter.setValue(newValue);
        setStateValue(result);
        return result;
    };
    return [stateValue, setValue];
}
exports.default = useFancyCardFormatter;
