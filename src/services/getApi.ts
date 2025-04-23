const getApiInfo = async (url: string) => {
  try {
    const response = await fetch(url)
    const result = await response.text()
    return JSON.parse(result)
  } catch (error) {
    console.error(error)
  }
}

export { getApiInfo }
