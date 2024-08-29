import { useEffect, useState } from 'react'
import axios from 'axios'

const apiCountriesUrl = 'https://restcountries.com/v3.1/all'

export const useFetchCountries = () => {
  const [countries, setCountries] = useState(null)
  const [languagesList, setLanguagesList] = useState(null)
  const [loading, setLoading] = useState(true)

  const extractCountryNames = countriesData => {
    return countriesData.map(country => country.name.common).sort()
  }

  const extractLanguages = countriesData => {
    const languages = new Set()
    countriesData.forEach(country => {
      if (country.languages) {
        Object.values(country.languages).forEach(language => {
          languages.add(language)
        })
      }
    })

    return Array.from(languages).sort()
  }

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true)
      try {
        const response = await axios.get(apiCountriesUrl)
        const countriesData = response.data
        setCountries(extractCountryNames(countriesData))
        setLanguagesList(extractLanguages(countriesData))
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [apiCountriesUrl])

  return { loading, countries, languagesList }
}
