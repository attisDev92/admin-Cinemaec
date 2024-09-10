export const validateTitle = inputProps => {
  if (inputProps.value.length < 1) {
    return 'El título es obligatorio'
  }
  return ''
}

export const validateTwoNames = inputProps => {
  const regex = /^\p{L}+(?:\s+\p{L}+)+$/u
  if (!regex.test(inputProps.value)) {
    return 'Debe constar de al menos un nombre y un apellido'
  }

  if (inputProps.value.length < inputProps.mincharts) {
    return 'Debe contar con almenos 5 caractéres'
  }
  return ''
}

export const validateMinLength = inputProps => {
  if (inputProps.value.length < inputProps.mincharts) {
    return `El campo debe contener almenos ${inputProps.mincharts} caracteres`
  }
  return ''
}

export const validateUrl = inputProps => {
  const regex =
    /^(https?:\/\/)(www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\/[a-zA-Z0-9#?&=._\-\/]*)?$/

  if (!regex.test(inputProps.value)) {
    return 'El URL no es un link valido, incluya el link completo ejemplo: (http://...)'
  }
  return ''
}

export const validateMinNumber = inputProps => {
  if (inputProps.value < inputProps.min) {
    return `Debe ser un valor mayor a ${inputProps.min}`
  }
  return ''
}

export const validateMail = inputProps => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!regex.test(inputProps.value)) {
    return 'Registre un mail válido'
  }
  return ''
}

export const validatePhoneNumber = inputProps => {
  const regex = /^\s*(\+?[\d]{1,3})?\s*(\(\d{2}\)|\d{2})?\s*(\d{7,8})\s*$/

  if (!regex.test(inputProps.value)) {
    return 'Registre un número de teléfono válido (ej: +593999999999)'
  }
  return ''
}
