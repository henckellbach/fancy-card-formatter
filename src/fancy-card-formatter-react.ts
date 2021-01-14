import { useState } from 'react';
import FancyCardFormatter, { sanitizeValue } from './fancy-card-formatter';

export default function useFancyCardFormatter(initialValue = '') {
  const [formatter] = useState(new FancyCardFormatter(initialValue));
  const [stateValue, setStateValue] = useState(initialValue);

  const setValue = (newValue: string) => {
    const result = formatter?.setValue(newValue);
    setStateValue(result);
    return result;
  };

  return [stateValue, setValue] as const;
}

export { sanitizeValue };
