export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

export type SizeVariant = 'small' | 'medium' | 'large' // Should be a union type, not an object

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: ButtonVariant
  className?: string
  icon?: React.ReactNode
  size?: SizeVariant // Use the defined SizeVariant type
}
