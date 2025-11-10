import Image from 'next/image'
import { AvatarProps } from '@/src/types'

export default function Avatar({
  name,
  image,
  size = 'md',
  className = '',
  ...props
}: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
    '2xl': 'w-20 h-20 text-2xl'
  }

  const sizeClass = sizes[size] || sizes.md

  // Get initials from name
  const getInitials = (name: string | undefined): string => {
    if (!name) return '?'
    const parts = name.trim().split(' ')
    if (parts.length === 1) return parts[0][0].toUpperCase()
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }

  // Generate background color based on name
  const getBackgroundColor = (name: string | undefined): string => {
    if (!name) return 'bg-gray-400'
    const colors = [
      'bg-teal-500',
      'bg-blue-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-red-500',
      'bg-indigo-500'
    ]
    const index = name.charCodeAt(0) % colors.length
    return colors[index]
  }
  if (image) {
    return (
      <div
        className={`
          ${sizeClass}
          rounded-full overflow-hidden relative
          ${className}
        `}
        {...props}
      >
        <Image
          src={image}
          alt={name || 'Avatar'}
          fill
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={`
        ${sizeClass}
        ${getBackgroundColor(name)}
        rounded-full flex items-center justify-center
        text-white font-semibold
        ${className}
      `}
      {...props}
    >
      {getInitials(name)}
    </div>
  )

}