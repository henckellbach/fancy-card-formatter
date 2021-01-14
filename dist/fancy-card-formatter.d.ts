declare type Formatter = (value: string) => string;
export declare const sanitizeValue: Formatter;
declare class FancyCardFormatter {
    private oldValue;
    private value;
    constructor(value?: string);
    getValue(): string;
    getRawValue(): string;
    setValue(newValue: string): string;
}
export default FancyCardFormatter;
