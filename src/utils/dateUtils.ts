/**
 * Format a date string to a readable format
 * @param dateString - ISO date string
 * @param options - Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {}
): string {
  if (!dateString) return 'N/A'
  
  const date = new Date(dateString)
  
  if (isNaN(date.getTime())) return 'Invalid Date'

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    ...options
  }

  return date.toLocaleDateString('en-US', defaultOptions)
}

/**
 * Format date to date only (no time)
 * @param dateString - ISO date string
 * @returns Formatted date string
 */
export function formatDateOnly(dateString: string): string {
  return formatDate(dateString, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

/**
 * Format date to time only
 * @param dateString - ISO date string
 * @returns Formatted time string
 */
export function formatTimeOnly(dateString: string): string {
  return formatDate(dateString, {
    hour: '2-digit',
    minute: '2-digit'
  })
}

/**
 * Get relative time (e.g., "2 hours ago", "in 3 days")
 * @param dateString - ISO date string
 * @returns Relative time string
 */
export function getRelativeTime(dateString: string): string {
  if (!dateString) return 'N/A'
  
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((date.getTime() - now.getTime()) / 1000)

  if (Math.abs(diffInSeconds) < 60) {
    return diffInSeconds < 0 ? 'Just now' : 'In a moment'
  }

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  }

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(Math.abs(diffInSeconds) / seconds)
    if (interval >= 1) {
      return diffInSeconds < 0
        ? `${interval} ${unit}${interval > 1 ? 's' : ''} ago`
        : `in ${interval} ${unit}${interval > 1 ? 's' : ''}`
    }
  }

  return formatDate(dateString)
}

