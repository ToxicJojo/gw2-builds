import config from './config.json'

const getTraits = async (ids, language = config.defaultLanguage) => {
  const response = await fetch(`${config.baseURL}/skills?ids=${ids}&lang=${language}`)
  const traits = await response.json()

  return traits
}

export default getTraits
