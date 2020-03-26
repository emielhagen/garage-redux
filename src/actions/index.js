export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';

export function fetchCars(state, action) {
  const promise = fetch('https://wagon-garage-api.herokuapp.com/emiels-garage/cars')
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  }
}

export function fetchCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json())

    return {
      type: FETCH_CAR,
      payload: promise
    }
}

export function createCar(body, callback) {
  const request = fetch('https://wagon-garage-api.herokuapp.com/emiels-garage/cars', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

    return {
      type: 'CAR_CREATED',
      payload: request
    }
}

export function deleteCar(id, callback) {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json'}
  }).then(response => response.json())
    .then(callback)

    return {
      type: 'CAR_DELETED',
      payload: request
    }
}
