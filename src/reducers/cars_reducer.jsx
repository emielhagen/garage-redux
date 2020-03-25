export default function carsReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_CARS':
      return action.payload;
    default:
      return state;
  }
}
