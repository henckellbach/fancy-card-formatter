"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeValue = void 0;
var react_1 = require("react");
var fancy_card_formatter_1 = __importStar(require("./fancy-card-formatter"));
Object.defineProperty(exports, "sanitizeValue", { enumerable: true, get: function () { return fancy_card_formatter_1.sanitizeValue; } });
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
