import { Button as AntdButton, ButtonProps } from 'antd';

type Variant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'outline';
type Size = 'sm' | 'md' | 'lg' | 'xl';

interface CustomButtonProps extends Omit<ButtonProps, 'size'> {
  variant?: Variant;
  size?: Size;
  className?: string;
}

export const Button: React.FC<CustomButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const variantStyles: Record<Variant, string> = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-400',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
  };

  const sizeStyles: Record<Size, string> = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  return (
    <AntdButton
      className={`${variantStyles[variant]} ${sizeStyles[size]} rounded focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </AntdButton>
  );
};
