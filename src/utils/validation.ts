export interface ValidationRule {
  required?: boolean
  type?: 'email' | 'phone' | 'text' | 'number'
  minLength?: number
  maxLength?: number
  label?: string
  message?: string
  validate?: (value: any, data: any) => string | null
}

export interface ValidationResult {
  isValid: boolean
  errors: { [key: string]: string }
}

/**
 * Validate email format
 * @param email - Email address to validate
 * @returns True if valid
 */
export function validateEmail(email: string): boolean {
  if (!email) return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (basic validation)
 * @param phone - Phone number to validate
 * @returns True if valid
 */
export function validatePhone(phone: string): boolean {
  if (!phone) return false
  // Remove common characters and check if it's a valid phone format
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, '')
  return /^\d{10,15}$/.test(cleaned)
}

/**
 * Validate password strength
 * @param password - Password to validate
 * @param minLength - Minimum length (default: 6)
 * @returns Validation result with errors array
 */
export function validatePassword(
  password: string,
  minLength: number = 6
): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!password) {
    errors.push('Password is required')
    return { isValid: false, errors }
  }

  if (password.length < minLength) {
    errors.push(`Password must be at least ${minLength} characters`)
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }

  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Validate required field
 * @param value - Value to validate
 * @param fieldName - Name of the field
 * @returns Error message or null
 */
export function validateRequired(value: any, fieldName: string = 'This field'): string | null {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return `${fieldName} is required`
  }
  return null
}

/**
 * Validate form data
 * @param data - Form data object
 * @param rules - Validation rules object
 * @returns Validation result
 */
export function validateForm(
  data: { [key: string]: any },
  rules: { [key: string]: ValidationRule }
): ValidationResult {
  const errors: { [key: string]: string } = {}

  Object.keys(rules).forEach((field) => {
    const rule = rules[field]
    const value = data[field]

    // Required validation
    if (rule.required && validateRequired(value, rule.label || field)) {
      errors[field] = validateRequired(value, rule.label || field) || ''
      return
    }

    // Skip other validations if field is empty and not required
    if (!value && !rule.required) return

    // Email validation
    if (rule.type === 'email' && !validateEmail(value)) {
      errors[field] = rule.message || 'Please enter a valid email address'
      return
    }

    // Phone validation
    if (rule.type === 'phone' && !validatePhone(value)) {
      errors[field] = rule.message || 'Please enter a valid phone number'
      return
    }

    // Min length validation
    if (rule.minLength && value.length < rule.minLength) {
      errors[field] = rule.message || `Must be at least ${rule.minLength} characters`
      return
    }

    // Max length validation
    if (rule.maxLength && value.length > rule.maxLength) {
      errors[field] = rule.message || `Must be no more than ${rule.maxLength} characters`
      return
    }

    // Custom validation function
    if (rule.validate && typeof rule.validate === 'function') {
      const customError = rule.validate(value, data)
      if (customError) {
        errors[field] = customError
      }
    }
  })

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

