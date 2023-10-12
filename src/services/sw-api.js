const BASE_URL = 'https://swapi.dev/api/starships/'



export async function getAllStarships() {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

