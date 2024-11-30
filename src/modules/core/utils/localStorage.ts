import { LOCAL_STORAGE_KEYS_TO_KEEP } from '@/modules/core/constants/localStorageConstants'

interface GetLocalProps {
  key: string
  defaultValue?: any
}

export const getLocalStorageFromKey = ({
  key,
  defaultValue = null,
}: GetLocalProps): any => {
  try {
    if (typeof window === 'undefined') {
      return defaultValue
    }

    const catValue = window.localStorage.getItem(key)

    return catValue ? JSON.parse(catValue) : defaultValue
  } catch (error) {
    return defaultValue
  }
}

export const setLocalStorageFromKey = ({
  key,
  value,
}: {
  key: string
  value: object | string | number
}): boolean => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    return false
  }
}

export const removeLocalStorageFromKey = (key: string) => {
  try {
    window.localStorage.removeItem(key)
    return true
  } catch (error) {
    return false
  }
}

export const clearLocalStorage = ({
  keepKeys = [],
}: {
  keepKeys: Array<string>
}) => {
  const keysToKeep = [...keepKeys, ...LOCAL_STORAGE_KEYS_TO_KEEP]
  const localStorageKeys = Object.keys(window.localStorage)

  try {
    localStorageKeys.forEach((key: string) => {
      if (!keysToKeep.includes(key)) {
        removeLocalStorageFromKey(key)
      }
    })
    return true
  } catch (error) {
    return false
  }
}
