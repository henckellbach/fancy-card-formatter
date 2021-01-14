type Formatter = (value: string) => string;

const formatStandardCard: Formatter = value => value.replace(/(\d{4})/g, '$1 ');
const formatAmex: Formatter = value =>
  value.replace(/^(\d{4})/, '$1 ').replace(/\W(\d{6})/, ' $1 ');

const sanitize: Formatter = value => value.replace(/[^\d]/gi, '');

class FancyCardFormatter {
  private oldValue: string;
  private value: string;

  constructor(value = '') {
    this.oldValue = this.value = value ?? '';
  }

  getValue() {
    return this.value;
  }

  setValue(newValue: string) {
    const newValueRaw = sanitize(newValue);
    let finalValue = newValue;

    const isAmex = newValueRaw.startsWith('37') || newValueRaw.startsWith('34');

    // enable backspace
    if (newValue !== this.oldValue.trim()) {
      const maxLength = isAmex ? 15 : 16;
      const format = isAmex ? formatAmex : formatStandardCard;

      console.log(this);

      // enforce maxLength
      if (newValueRaw.length > maxLength) {
        return this.value;
      } else {
        finalValue = format(newValueRaw);
      }
    }

    finalValue = finalValue.trim();

    this.oldValue = this.value;
    this.value = finalValue;

    return finalValue;
  }
}

export default FancyCardFormatter;
