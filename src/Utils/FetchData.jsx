export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '328c7f84demsh10c03321275d538p1989b3jsnc1cde0e254dc',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}