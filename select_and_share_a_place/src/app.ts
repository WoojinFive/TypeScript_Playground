import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyCB86i8gBsMzk6xUjEphNinO8fVH9ouXGo';

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number, lng: number } } }[];
  status: 'OK' | 'ZERO_RESULS';
}

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  const encodedAddress = encodeURI(enteredAddress);

  // send this to Google's API!
  const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GOOGLE_API_KEY}`
  axios
    .get<GoogleGeocodingResponse>(endpoint)
    .then(response => {
      if (response.data.status !== 'OK') {
        throw new Error('Could not fetch location!');
      }
      const coordinates = response.data.results[0].geometry.location;
    })
    .catch(err => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener('submit', searchAddressHandler);