export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'About Us', href: '/#hero' },
  { label: 'Values', href: '/#values' },
  { label: 'Works', href: '/#works' },
  { label: 'Services', href: '/#services' },
  { label: 'CTA', href: '/#cta' }
]
