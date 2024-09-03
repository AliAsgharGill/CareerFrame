import { Card as AntdCard, CardProps } from 'antd';

type Shadow = 'none' | 'sm' | 'md' | 'lg' | 'xl';
type Padding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
type BorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl';

interface CustomCardProps {
  shadow?: Shadow;
  padding?: Padding;
  borderRadius?: BorderRadius;
  className?: string;
}

export const Card: React.FC<CustomCardProps & CardProps> = ({
  children,
  shadow = 'md',
  padding = 'md',
  borderRadius = 'md',
  className = '',
  ...props
}) => {
  const shadowStyles: Record<Shadow, string> = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const paddingStyles: Record<Padding, string> = {
    none: 'p-0',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  };

  const borderRadiusStyles: Record<BorderRadius, string> = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  };

  return (
    <AntdCard
      className={`${shadowStyles[shadow]} ${paddingStyles[padding]} ${borderRadiusStyles[borderRadius]} ${className}`}
      {...props}
    >
      {children}
    </AntdCard>
  );
};
