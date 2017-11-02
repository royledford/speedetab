// import delay from './delay'

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const venues = [
  {
    id: 1,
    clientId: 1,
    name: 'El Taco Bar',
    location: '2323 N Federal Hwy',
  },
  {
    id: 2,
    clientId: 1,
    name: 'Taco Rio',
    location: 'Galleria',
  },
  {
    id: 3,
    clientId: 1,
    name: 'Taco Bar Cafe',
    location: '1314 NW 16th Terrace',
  },
  {
    id: 4,
    clientId: 2,
    name: 'Java Time - Fat Village',
    location: '501 NW 1st St',
  },
  {
    id: 5,
    clientId: 2,
    name: 'Java Time - Beach',
    location: '102 Ocean Drive',
  },
]

class VenueApi {
  static getClientVenues(clientId) {
    return venues.filter(venue => venue.clientId === clientId)
  }
}
// class VenueApi {
//   static getClientVenues(clientId) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(
//           venues.filter( venue => venue.clientId === clientId )
//         )
//       }, delay)
//     })
//   }
// }

export default VenueApi
