import { LoadingSpinnerProps } from '@/src/types'

export default function LoadingSpinner({
  size = 'md',
  color = 'teal',
  className = '',
  ...props
}: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const colors = {
    teal: 'border-teal-600',
    blue: 'border-blue-600',
    gray: 'border-gray-600',
    white: 'border-white'
  }

  const sizeClass = sizes[size] || sizes.md
  const colorClass = colors[color] || colors.teal

  return (
    <div
      className={`
        inline-block animate-spin rounded-full border-4 border-solid border-r-transparent
        ${sizeClass}
        ${colorClass}
        ${className}
      `}
      role="status"
      aria-label="Loading"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

