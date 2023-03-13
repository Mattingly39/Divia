export default function geoFindMe(data) {
  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');
  mapLink.href = '';
  mapLink.textContent = ''; 
  function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      var lata = latitude-0.001;
      var lona = longitude+0.001;
      
      calculdistanceD(latitude, longitude, lata, lona, data, 'liaisons');
      status.textContent = '';
  }
  function error() {
      status.textContent = 'Impossible de vous localiser';
  }
  if (!navigator.geolocation) {
      status.textContent = 'La géolocalisation n est pas supportée par votre navigateur';
  } else {
      status.textContent = 'Localisation…';
      navigator.geolocation.getCurrentPosition(success, error);
  }
}
