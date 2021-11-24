export const isObject = (val: any): boolean => {
  return val !== null && typeof (val) === "object"
}

export const isString = (val: any): boolean => {
  return typeof (val) === "string"
}

export const isdef = (val: any): boolean => {
  return val === null || val === undefined
}

export const isUndf = (val: any): boolean => {
  return val !== null && val !== undefined
}

export const isTure = (val: any): boolean => {
  return !!val === true
}

export const isFalse = (val: any): boolean => {
  return !!val === false
}

