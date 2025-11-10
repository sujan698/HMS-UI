import { CardProps } from '@/src/types'

export default function Card({
  children,
  className = '',
  hover = false,
  padding = 'p-6',
  ...props
}: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-md
        ${hover ? 'hover:shadow-xl transition-shadow duration-300 cursor-pointer' : ''}
        ${padding}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

