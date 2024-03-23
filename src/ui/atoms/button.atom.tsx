interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: 'transparent' | 'classic';
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ intent = 'transparent', color = '', children, className = '', ...props }) => {
  const variants = {
    transparent: 'hover:text-blueberry-600 border-0 p-2',
    classic:
      'transition-all px-4 py-2 bg-blueberry-700 rounded-xl font-medium border-2 border-blueberry-700 hover:bg-transparent hover:text-blueberry-700',
  };

  return (
    <button {...props} className={`${color} ${variants[intent]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
