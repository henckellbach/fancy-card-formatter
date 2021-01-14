import { sanitizeValue } from './fancy-card-formatter';
export default function useFancyCardFormatter(initialValue?: string): readonly [string, (newValue: string) => string];
export { sanitizeValue };
