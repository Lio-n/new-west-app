import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ className = '', ...props }) => (
  <input {...props} className={`pl-4 pb-2 bg-transparent text-xl w-full focus-visible:outline-none ${className}`} />
);

export default Input;
