/**
 * Safe localStorage getter with error handling
 * @param key - Storage key
 * @param defaultValue - Default value if key doesn't exist
 * @returns Stored value or default value
 */
export function getStorageItem<T>(key: string, defaultValue: T | null = null): T | null {
  if (typeof window === 'undefined') return defaultValue

  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error)
    return defaultValue
  }
}

/**
 * Safe localStorage setter with error handling
 * @param key - Storage key
 * @param value - Value to store
 * @returns True if successful
 */
export function setStorageItem<T>(key: string, value: T): boolean {
  if (typeof window === 'undefined') return false

  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error)
    return false
  }
}

/**
 * Remove item from localStorage
 * @param key - Storage key
 * @returns True if successful
 */
export function removeStorageItem(key: string): boolean {
  if (typeof window === 'undefined') return false

  try {
    localStorage.removeItem(key)
    return true
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error)
    return false
  }
}

/**
 * Clear all localStorage items
 * @returns True if successful
 */
export function clearStorage(): boolean {
  if (typeof window === 'undefined') return false

  try {
    localStorage.clear()
    return true
  } catch (error) {
    console.error('Error clearing localStorage:', error)
    return false
  }
}

/**
 * Get string value from localStorage (non-JSON)
 * @param key - Storage key
 * @param defaultValue - Default value
 * @returns Stored value or default value
 */
export function getStorageString(key: string, defaultValue: string = ''): string {
  if (typeof window === 'undefined') return defaultValue

  try {
    return localStorage.getItem(key) || defaultValue
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error)
    return defaultValue
  }
}

/**
 * Set string value to localStorage (non-JSON)
 * @param key - Storage key
 * @param value - Value to store
 * @returns True if successful
 */
export function setStorageString(key: string, value: string): boolean {
  if (typeof window === 'undefined') return false

  try {
    localStorage.setItem(key, value)
    return true
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error)
    return false
  }
}

