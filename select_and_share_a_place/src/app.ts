import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = '';

type MapCoordinates = { lat: number; lng: number };
// declare var google: any;

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number, lng: number } } }[];
  status: 'OK' | 'ZERO_RESULS';
}

let map: google.maps.Map;
async function initMap(coordinates: MapCoordinates): Promise<void> {
  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;
  if (!map) {
    map = new Map(document.getElementById("map") as HTMLElement, {
      center: coordinates,
      zoom: 16,
    });
  }
  const marker = new google.maps.Marker({
    position: coordinates,
    map,
  });
  marker.setMap(map);
  map.setCenter(coordinates);
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
      initMap(coordinates);
    })
    .catch(err => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener('submit', searchAddressHandler);