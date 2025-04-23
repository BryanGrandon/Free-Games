const getApiInfo = async (url: string) => {
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'd4b1933d33msh063a054ed846936p15bf40jsn92d9dfbe268c',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    },
  }
  try {
    const response = await fetch(url, options)
    const result = await response.text()
    return JSON.parse(result)
  } catch (error) {
    console.error(error)
  }
}

export { getApiInfo }
