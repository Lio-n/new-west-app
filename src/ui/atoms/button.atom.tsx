interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: "transparent";
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ intent = "transparent", color = "", children, className = "", ...props }) => {
  const variants = { transparent: "hover:text-blueberry-600 border-0 p-2" };

  return (
    <button {...props} className={`${color} ${variants[intent]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
