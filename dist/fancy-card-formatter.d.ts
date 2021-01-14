declare class FancyCardFormatter {
    private oldValue;
    private value;
    constructor(value?: string);
    getValue(): string;
    setValue(newValue: string): string;
}
export default FancyCardFormatter;
