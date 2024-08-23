let token = null

export const setToken = newToken => {
  console.log(newToken)
  token`Bearer ${newToken}`
}

export const getToken = () => {
  return token
}

export const getConfigToken = () => {
  if (!token) {
    throw new Error(
      'Token not set. Please set a token using setToken before making requests.',
    )
  }
  return {
    headers: { Authorization: token },
  }
}
