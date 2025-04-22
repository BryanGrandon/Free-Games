export type Get_Api_Info = {
  url: string
  options: {
    method: string
    headers: {
      'x-rapidapi-key': string
      'x-rapidapi-host': string
    }
  }
}

const getApiInfo = async ({ url, options }: Get_Api_Info) => {
  try {
    const response = await fetch(url, options)
    const result = await response.text()
    return JSON.parse(result)
  } catch (error) {
    console.error(error)
  }
}

export { getApiInfo }
