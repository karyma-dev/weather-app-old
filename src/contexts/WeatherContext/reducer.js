import axios from 'axios'
import _ from 'lodash'

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      state = {
        city: '',
        weather: '',
        description: '',
        iconId: '',
        temperature: '',
        humidity: ''
      }
      return state
    case 'GET_WEATHER':
      return new Promise((resolve) => {
        axios
          .get(
            `http://api.openweathermap.org/data/2.5/weather?q=${action.payload},CA&APPID=29d3d4fa5f00dc1400ca4008a58633d4`
          )
          .then(({ data }) => {
            const { weather, main } = data

            const newObj = {
              city: action.payload,
              weather: _.toLower(weather[0].main),
              description: _.startCase(weather[0].description),
              iconId: weather[0].icon,
              temperature: Math.round(Number(main.temp) - 273.15) + '\xB0 C',
              humidity: main.humidity + '%'
            }

            state = newObj

            resolve(state)
          })
          .catch((error) => {
            throw error
          })
      })
    default:
      return state
  }
}
