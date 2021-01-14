# Fancy Card Formatter 💳

Fancy payment card formatter written in TypeScript. Includes a React hook.

## Why this package?

While a number of credit card formatters already exist, many force their own styling and other design choices. In contrast, this package is a simple formatter for your HTML inputs, free for you to style and extend as you please.

## Usage

### TypeScript

```ts
import FancyCardFormatter from 'fancy-card-formatter';

const formatter = new FancyCardFormatter();
formatter.setValue('1234567890123456');
formatter.getValue(); // 1234 5678 9012 3456
```

### Setting an initial value

```ts
const formatter = new FancyCardFormatter('1234567890123456');
```

### React

You can use this package with any UI framework of your choice or even with plain old `input`s.

```tsx
import { FC, ChangeEvent } from 'react';
import { Form, Input } from 'antd';
import useFancyCardFormatter from 'fancy-card-formatter/react';

const CardInput: FC = () => {
  const [formattedCardNumber, formatCardNumber] = useFancyCardFormatter();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    formatCardNumber(event.target.value);
  };

  return (
    <Form>
      <Input value={formattedCardNumber} onChange={onChange} />
    </Form>
  );
};

export default CardInput;
```
