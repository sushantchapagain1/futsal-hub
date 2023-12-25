import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function currencyFormatter(amount: number) {
  return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
    amount,
  );
}
