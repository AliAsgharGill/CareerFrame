import { Input as AntdInput } from "antd";

type Variant = "default" | "error" | "success" | "warning" | "outline";
type Size = "sm" | "md" | "lg" | "xl";

interface CustomInputProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

export const Input: React.FC<CustomInputProps> = ({
  variant = "default",
  size = "md",
  className = "",
  ...props
}) => {
  const variantStyles: Record<Variant, string> = {
    default: "border-gray-300 focus:ring-blue-500",
    error: "border-red-500 focus:ring-red-500",
    success: "border-green-500 focus:ring-green-500",
    warning: "border-yellow-500 focus:ring-yellow-500",
    outline: "border-gray-300 focus:ring-gray-500",
  };

  const sizeStyles: Record<Size, string> = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-md",
    lg: "px-4 py-3 text-lg",
    xl: "px-5 py-4 text-xl",
  };

  return (
    <AntdInput
      className={`${variantStyles[variant as Variant]} ${
        sizeStyles[size as Size]
      } rounded focus:outline-none ${className}`}
      {...props}
    />
  );
};
