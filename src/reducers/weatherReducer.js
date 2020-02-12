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
    default:
      return state
  }
}
