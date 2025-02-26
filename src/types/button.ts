export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: ButtonVariant
  className?: string
  icon?: React.ReactNode
}
