import { Modal as AntdModal, ModalProps } from 'antd';

type Size = 'sm' | 'md' | 'lg' | 'xl';
type BackgroundColor = 'white' | 'gray' | 'blue' | 'red';

interface CustomModalProps {
  size?: Size;
  backgroundColor?: BackgroundColor;
  className?: string;
}

export const Modal: React.FC<CustomModalProps & ModalProps> = ({
  children,
  size = 'md',
  backgroundColor = 'white',
  className = '',
  ...props
}) => {
  const sizeStyles: Record<Size, string> = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  const backgroundColorStyles: Record<BackgroundColor, string> = {
    white: 'bg-white',
    gray: 'bg-gray-100',
    blue: 'bg-blue-100',
    red: 'bg-red-100',
  };

  return (
    <AntdModal
      className={`${sizeStyles[size]} ${backgroundColorStyles[backgroundColor]} ${className}`}
      {...props}
    >
      {children}
    </AntdModal>
  );
};
