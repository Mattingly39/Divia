    
export default function createMap (){
    if(this.map) {
        this.map.remove();
    }

    var greenIcon = new L.Icon({
        iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/man.png',
        shadowUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/man.shadow.png',
        iconSize: [41, 41],
        iconAnchor: [20, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var destinationIcon = new L.Icon({
        iconUrl: './public/finish-flag.png',
        shadowUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/man.shadow.png',
        iconSize: [41, 41],
        iconAnchor: [20, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var tramIcon = new L.Icon({
        iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/tram.png',
        shadowUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/tram.shadow.png',
        iconSize: [41, 41],
        iconAnchor: [20, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var busIcon = new L.Icon({
        iconUrl: './public/bus-32.png',
        shadowUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/bus.shadow.png',
        iconSize: [41, 41],
        iconAnchor: [20, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var tramIconR = new L.Icon({
        iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png',
        shadowUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/msmarker.shadow.png',
        iconSize: [21, 21],
        iconAnchor: [20, 20],
        popupAnchor: [1, -34],
        shadowSize: [21, 21]
    });

    var tramIconRD = new L.Icon({
        iconUrl: './public/start-point2.png',
        shadowUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/msmarker.shadow.png',
        iconSize: [41, 41],
        iconAnchor: [20, 20],
        popupAnchor: [1, -34],
        shadowSize: [21, 21]
    });

    var tramIconRA = new L.Icon({
        iconUrl: './public/finish-point2.png',
        shadowUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/msmarker.shadow.png',
        iconSize: [41, 41],
        iconAnchor: [20, 20],
        popupAnchor: [1, -34],
        shadowSize: [21, 21]
    });

    var tramIconAa = new L.Icon({
        iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/purple-dot.png',
        shadowUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/msmarker.shadow.png',
        iconSize: [21, 21],
        iconAnchor: [0, 20],
        popupAnchor: [1, -34],
        shadowSize: [21, 21]
        });

    var tramIconRa = new L.Icon({
        iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/orange-dot.png',
        shadowUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/msmarker.shadow.png',
        iconSize: [21, 21],
        iconAnchor: [20, 20],
        popupAnchor: [1, -34],
        shadowSize: [21, 21]
        });                          

    var tramIconA = new L.Icon({
        iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
        shadowUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/msmarker.shadow.png',
        iconSize: [21, 21],
        iconAnchor: [0, 20],
        popupAnchor: [1, -34],
        shadowSize: [21, 21]
    });

    // initialize map
    map = L.map('mapDiv');

    // set map tiles source
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 19,
    }).addTo(map);
    map.locate({setView: false, maxZoom: 8});
    // add marker to the map
    map.setView(new L.LatLng(lat, lon), 13); 

    var groupeA_destination = L.layerGroup().addTo(map);
    var groupeR_destination = L.layerGroup().addTo(map);
    var groupeA_depart = L.layerGroup().addTo(map);
    var groupeR_depart = L.layerGroup().addTo(map);

    
    L.control.layers(
        {}, // choix unique, ici on n'utilise pas
        { 
          // cases à cocher
          // "Le nom affiché dans l'interface" : variable_du_groupe,
          ["Ligne Départ : " + depA] : groupeA_depart, // ici un groupe
          ["Ligne Départ : " + depR] : groupeR_depart, // ici un groupe
          ["Ligne Destination : " + destA] : groupeA_destination, // ici un groupe
          ["Ligne Destination : " + destR] : groupeR_destination, // ici un groupe
//                           "Carte OSM" : carteOSM, // ici un tileLayer
        },
        { // les options du panel
          position: "topright", // topleft', 'topright', 'bottomleft' or 'bottomright'
          collapsed: false // fermé ou ouvert au démarrage (ici, ouvert au démarrage)
        }
      ).addTo(map); // on l'ajoute à la carte comme un marqueur
}

