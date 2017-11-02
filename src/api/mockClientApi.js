import delay from './delay'

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const clients = [
  {
    id: '1',
    userName: 'eltacobar',
    name: 'El Taco Bar',
  },
  {
    id: '2',
    userName: 'javatime',
    firstName: 'Java Time',
  },
]


class ClientApi {
  static getAllClients() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], clients))
      }, delay)
    })
  }
}

export default ClientApi
