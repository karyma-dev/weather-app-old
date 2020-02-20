import axios from 'axios'

export const hourlyWeatherReducer = (state, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      return new Promise((resolve) => {
        axios
          .get(
            `http://api.openweathermap.org/data/2.5/forecast?q=${action.payload}&APPID=29d3d4fa5f00dc1400ca4008a58633d4`
          )
          .then(({ data }) => {
            const arr = data.list.map((item) => {
              const dateObj = new Date(item.dt * 1000)
              const time = dateObj.toLocaleTimeString()
              item.day = dateObj.toDateString().slice(0, 3)
              item.date = dateObj.toDateString().slice(4, 10)
              item.time =
                time.slice(0, time.search(/\D/)) +
                time.slice(time.search(/\s/), 11)

              return item
            })

            state = arr

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
