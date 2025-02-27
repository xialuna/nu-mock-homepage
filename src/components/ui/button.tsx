import React from 'react'
import { cn } from '@/lib/utils'
import { ButtonProps } from '@/types/button'

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'large', // Default size added
  className = '',
  icon
}) => {
  const baseStyles = 'flex items-center justify-center font-semibold rounded-[15px] transition-all px-[42px] py-[10px]'

  const variantStyles = {
    primary: 'bg-brand text-on-color hover:bg-brand-hover',
    secondary: 'border-2 border-brand text-brand hover:bg-brand hover:text-on-color',
    tertiary: 'text-brand hover:underline px-0 py-0'
  }

  const sizeStyles = {
    small: 'text-md',
    medium: 'text-l',
    large: 'text-xl'
  }

  const iconStyles = cn('w-5 h-5')

  const buttonClasses = cn(
    'flex items-center justify-center gap-1',
    baseStyles,
    sizeStyles[size], // Apply the size dynamically
    variantStyles[variant],
    className
  )

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
      {icon && <span className={iconStyles}>{icon}</span>}
    </button>
  )
}

export default Button
