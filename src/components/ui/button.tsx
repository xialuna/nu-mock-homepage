import React from 'react'
import { cn } from '@/lib/utils'
import { ButtonProps } from '@/types/button'

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '', icon }) => {
  const baseStyles =
    'flex items-center justify-center font-semibold rounded-[15px] transition-all px-[42px] py-[10px] text-xl'
  const variantStyles = {
    primary: 'bg-brand text-on-color hover:bg-brand-hover',
    secondary: 'border-2 border-brand text-brand hover:bg-brand hover:text-on-color'
  }

  const iconStyles = cn('w-4 h-4')

  const buttonClasses = cn(baseStyles, variantStyles[variant], className)

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
      {icon && <span className={iconStyles}>{icon}</span>}
    </button>
  )
}

export default Button
