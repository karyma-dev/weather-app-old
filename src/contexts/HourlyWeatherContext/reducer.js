export const hourlyWeatherReduce = (state, action) => {
  switch (action.type) {
    case 'GET_WEATHER': {
      return new Promise((resolve) => {
        axios
          .get(
            `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=29d3d4fa5f00dc1400ca4008a58633d4`
          )
          .then(({ data }) => {
            const arr = data.list.map((item) => {
              const dateObj = new Date(item.dt * 1000)
              item.day = dateObj.toDateString().slice(0, 3)
              item.date = dateObj.toDateString().slice(4, 10)
              item.time = dateObj.toLocaleTimeString()

              return item
            })

            resolve(arr)
          })
          .catch((error) => {
            throw error
          })
      })
    }
  }
}
