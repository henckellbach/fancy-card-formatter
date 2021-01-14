"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatStandardCard = function (value) { return value.replace(/(\d{4})/g, '$1 '); };
var formatAmex = function (value) {
    return value.replace(/^(\d{4})/, '$1 ').replace(/\W(\d{6})/, ' $1 ');
};
var sanitize = function (value) { return value.replace(/[^\d]/gi, ''); };
var FancyCardFormatter = /** @class */ (function () {
    function FancyCardFormatter(value) {
        if (value === void 0) { value = ''; }
        this.oldValue = this.value = value !== null && value !== void 0 ? value : '';
    }
    FancyCardFormatter.prototype.getValue = function () {
        return this.value;
    };
    FancyCardFormatter.prototype.setValue = function (newValue) {
        var newValueRaw = sanitize(newValue);
        var finalValue = newValue;
        var isAmex = newValueRaw.startsWith('37') || newValueRaw.startsWith('34');
        // enable backspace
        if (newValue !== this.oldValue.trim()) {
            var maxLength = isAmex ? 15 : 16;
            var format = isAmex ? formatAmex : formatStandardCard;
            // enforce maxLength
            if (newValueRaw.length > maxLength) {
                return this.value;
            }
            else {
                finalValue = format(newValueRaw);
            }
        }
        finalValue = finalValue.trim();
        this.oldValue = this.value;
        this.value = finalValue;
        return finalValue;
    };
    return FancyCardFormatter;
}());
exports.default = FancyCardFormatter;
