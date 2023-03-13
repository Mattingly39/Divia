
async function calculdistanceA(latitudeA, longitudeA, lata, lona, data, key, markersAller, markersRetour, markersType, destA) {
    var intersection1 =[];
    // var intersection2 =[];
    let pi = Math.PI;
    let shortesta = 5;
    let shortestLignes = 15;
    let stationproa;
    const latitude1 = lata*(pi/180);
    const longitude1 = lona*(pi/180);
    var pica = document.createElement("img");
    var thermoa = document.createElement("img");
    // let stringComparison = await import('string-comparison');

for (let index1 = 0; index1 < 32 ; ++index1) {
    if(typeof(data[key][index1]) != 'undefined'){
        for (let index2 = 0; index2 < data[key][index1]['arrets'].length ; ++index2) {
            if(typeof(data[key][index1]['arrets'][index2]) != 'undefined'){
                const {latitude, longitude, nom, ligne_codetotem} = data[key][index1]['arrets'][index2];
                const {picto} = data[key][index1];
                const latitude2 = latitude*(pi/180);
                const longitude2 = longitude*(pi/180);
                const{fichier_thermometre} = data[key][index1]['ligne_retour']; 
                const distance = Math.acos(Math.sin(latitude1)*Math.sin(latitude2)+Math.cos(latitude1)*Math.cos(latitude2)*Math.cos(longitude1-longitude2))*6371;
                if (distance < shortesta){
                    shortesta = distance;
                    stationproa = nom;
                    lignetota = ligne_codetotem;
                    pica.src = picto;
                    thermoa.src = fichier_thermometre;
                    var lat = latitude;
                    var lon = longitude; 
                    if(this.map) {
                        this.map.remove();
                    }
                    var greenIcon = new L.Icon({
                        iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/man.png',
                        iconSize: [41, 41],
                        iconAnchor: [20, 41],
                        popupAnchor: [1, -34],
                    });
                    var destinationIcon = new L.Icon({
                        iconUrl: './public/finish-flag.png',
                        iconSize: [41, 41],
                        iconAnchor: [20, 41],
                        popupAnchor: [1, -34],
                    });
                    var tramIcon = new L.Icon({
                        iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/tram.png',
                        iconSize: [41, 41],
                        iconAnchor: [20, 41],
                        popupAnchor: [1, -34],
                    });
                    var busIcon = new L.Icon({
                        iconUrl: './public/bus-32.png',
                        iconSize: [41, 41],
                        iconAnchor: [20, 41],
                        popupAnchor: [1, -34],
                    });
                    var tramIconRa = new L.Icon({
                        iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/orange-dot.png',
                        iconSize: [21, 21],
                        iconAnchor: [20, 20],
                        popupAnchor: [1, -34],
                    });
                    var tramIconRD = new L.Icon({
                        iconUrl: './public/start-point3.png',
                        iconSize: [41, 41],
                        iconAnchor: [20, 20],
                        popupAnchor: [1, -34],
                    });
                    var tramIconRA = new L.Icon({
                        iconUrl: './public/finish-point3.png',
                        iconSize: [41, 41],
                        iconAnchor: [20, 20],
                        popupAnchor: [1, -34],
                    });
                    var tramIconAa = new L.Icon({
                        iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/purple-dot.png',
                        iconSize: [21, 21],
                        iconAnchor: [0, 20],
                        popupAnchor: [1, -34],
                    });
                    var tramIconG = new L.Icon({
                        iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/green-dot.png',
                        iconSize: [21, 21],
                        iconAnchor: [20, 20],
                        popupAnchor: [1, -34],
                    });
                    var tramIconA = new L.Icon({
                        iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
                        iconSize: [21, 21],
                        iconAnchor: [0, 20],
                        popupAnchor: [1, -34],
                    });
                    var tramIconR = new L.Icon({
                        iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png',
                        iconSize: [21, 21],
                        iconAnchor: [20, 20],
                        popupAnchor: [1, -34],
                    });
                    var iconst = new L.Icon({
                        iconUrl: markersType[0]._popup._source.options.icon.options.iconUrl,
                        iconSize: [41, 41],
                        iconAnchor: [20, 41],
                        popupAnchor: [1, -34],
                    });
                    // initialize map
                    map = L.map('mapDiv');
                    // set map tiles source
                    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
                        maxZoom: 19,
                    }).addTo(map);
                    googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s,m&x={x}&y={y}&z={z}',{
                        maxZoom: 20,
                        subdomains:['mt0','mt1','mt2','mt3']
                    });
                    map.locate({setView: false, maxZoom: 8});
                    // add marker to the map
                    map.setView(new L.LatLng(lat, lon), 13); 
                    var groupeA_destination = L.featureGroup().addTo(map);
                    var groupeR_destination = L.featureGroup().addTo(map);
                    var groupeA_depart = L.featureGroup().addTo(map);
                    var groupeR_depart = L.featureGroup().addTo(map);
//
                    var T1 = L.featureGroup();
                    for (id in data[key][1]['ligne_aller']['arrets']) {
                            
                        const {latitude, longitude, nom, ligne_senstotem, ligne_nom_commercial, ligne_directionar} = data[key][1]['ligne_aller']['arrets'][id]
                        if(ligne_senstotem == 'A' && nomst != nom){
                            marker = new L.marker([latitude, longitude], {icon: tramIconG}) //red
                            .bindPopup(ligne_nom_commercial + ' : ' + ligne_directionar + '<br>' + 'Arrêt : ' + nom)
                        }   
                        marker.addTo(T1);
                    }

//
                    const ligne2 = []; 
                    for (let indexall = 0; indexall < markersAller.length ; ++indexall) {
                        marker = new L.marker([markersAller[indexall]._latlng.lat, markersAller[indexall]._latlng.lng], {icon: tramIconA}) //red
                        .bindPopup(markersAller[indexall]._popup._content)
                        .addTo(map);
                        ligne1 = markersAller[indexall]._popup._content.split(': ')[2];   
                        // ligne2.push(ligne1.split(' ')[0]);
                        ligne2.push(ligne1);                        
                        marker.addTo(groupeA_destination);
                        var depA = markersAller[indexall]._popup._content.split(' ')[0] + ' =>' + markersAller[indexall]._popup._content.split('>')[1];
                    }
                    for (let indexret = 0; indexret < markersRetour.length ; ++indexret) {
                        marker = new L.marker([markersRetour[indexret]._latlng.lat, markersRetour[indexret]._latlng.lng], {icon: tramIconR}) //blue
                        .bindPopup(markersRetour[indexret]._popup._content)
                        .addTo(map);
                        marker.addTo(groupeR_destination);
                        var depR = markersRetour[indexret]._popup._content.split(' ')[0] + ' =>' + markersRetour[indexret]._popup._content.split('>')[1];
                    }
                    marker = new L.marker([markersType[0]._latlng.lat, markersType[0]._latlng.lng], {icon: iconst}) //bus ou tram
                    .bindPopup(markersType[0]._popup._content)
                    .setZIndexOffset(100)
                    .addTo(map);
                    marker1 = new L.marker([lata, lona], {icon: destinationIcon, draggable:'true', autoPan: true})
                    .bindPopup('Ma destination')
                    .setZIndexOffset(100)
                    .addTo(map);
                    marker = new L.marker([latitudeA, longitudeA], {icon: greenIcon, draggable:'true', autoPan: true})
                    .bindPopup('Ma position / Départ')
                    .setZIndexOffset(100)
                    .addTo(map);
                    const distanceda = Math.acos(Math.sin(lata*(pi/180))*Math.sin(latitudeA*(pi/180))+Math.cos(lata*(pi/180))*Math.cos(latitudeA*(pi/180))*Math.cos(lona*(pi/180)-longitudeA*(pi/180)))*6371;
                    polyline1 = L.polyline([
                        [lata, lona], // les coords gps des sommets à relier
                        [latitudeA, longitudeA]
                    ], {
                       color: 'yellow'
                    })
                    //.bindPopup('Distance : ' + distanceda.toFixed(3)*1000 + ' m')
                    .bindTooltip('Distance : ' + distanceda.toFixed(3)*1000 + ' m', {permanent: true, direction:"center"})
                    .addTo(map);
                    marker.on('dragend', function(event) {
                        var marker = event.target;
                        var location = marker.getLatLng();
                        var lat = location.lat;
                        var lon = location.lng;
                        calculdistanceD(lat, lon, lata, lona,  data, key, markersAAller, markersARetour, markersDtype);
                    });
                    marker1.on('dragend', function(event) {
                        var marker = event.target;
                        var location = marker.getLatLng();
                        var lata = location.lat;
                        var lona = location.lng;
                        calculdistanceA(latitudeA, longitudeA, lata, lona, data, key, markersAller, markersRetour, markersType);
                    });
                    if(data[key][index1]['ligne_aller']['type'] != 'tram'){
                        marker = new L.marker([lat, lon], {icon: busIcon})  //Bus
                        .bindPopup(data[key][index1]['arrets'][index2]['ligne_nom_commercial'] + ' - ' + nom)
                        .addTo(map);
                        var nomst = nom;
                        } else {
                        marker = new L.marker([lat, lon], {icon: tramIcon})  //Tram
                        .bindPopup(data[key][index1]['arrets'][index2]['ligne_nom_commercial'] + ' - ' + nom)
                        .addTo(map);
                        var nomst = nom;
                    }
                    var markersDtype = [];
                    if(data[key][index1]['ligne_aller']['type'] != 'tram'){
                        marker = new L.marker([latitude, longitude], {icon: busIcon})  //Bus
                        .bindPopup(data[key][index1]['arrets'][index2]['ligne_nom_commercial'] + ' - ' + nom)
                        .addTo(map);
                        var nomst = nom;
                        } else {
                        marker = new L.marker([latitude, longitude], {icon: tramIcon})  //Tram
                        .bindPopup(data[key][index1]['arrets'][index2]['ligne_nom_commercial'] + ' - ' + nom)
                        .addTo(map);
                        var nomst = nom;
                    }
                    markersDtype.push(marker);
                    if(typeof(data[key][index1]) != 'undefined'){
                        var markersAAller = [];
                        var markersARetour = [];
                        const lignea = [];
                        const ligner = [];
                        for (id in data[key][index1]['ligne_aller']['arrets']) {
                            const {latitude, longitude, nom, ligne_senstotem, ligne_nom_commercial, ligne_directionar} = data[key][index1]['ligne_aller']['arrets'][id]
                            if(ligne_senstotem == 'A' && nomst != nom){
                                if (nom.toUpperCase() == ligne_directionar.split(' <')[0].toUpperCase()){
                                    marker = new L.marker([latitude, longitude], {icon: tramIconRA})
                                    .bindPopup(ligne_nom_commercial + ' : ' + ligne_directionar + '<br>' + 'Départ : ' + nom)
                                    .addTo(map);
                                } else {
                                marker = new L.marker([latitude, longitude], {icon: tramIconAa}) //purple
                                .bindPopup(ligne_nom_commercial + ' : ' + ligne_directionar + '<br>' + 'Arrêt : ' + nom)
                                .addTo(map);
                                }
                            }
                            markersAAller.push(marker);
                            // lignea.push(nom.split(' ')[0]);
                            var indexl = index1;
                           lignea.push(nom);
                            var intersection1 = lignea.filter(e => ligne2.indexOf(e) !== -1);
                            for (id in data[key][index1]['ligne_aller']['arrets']) {
                                const {latitude, longitude, nom} = data[key][index1]['ligne_aller']['arrets'][id]
                                if(nom == intersection1.slice(-1)){
                                    circle1 = new L.circle([latitude, longitude], {
                                        color: "red",
                                        fillColor: "#f03",
                                        fillOpacity: 0.2,
                                        radius: 50.0
                                    }).addTo(map);  
                                }
                            }
                            marker.addTo(groupeA_depart);    
                            var destA = ligne_nom_commercial + ' =>' + ligne_directionar.split('>')[1];
                            console.log(ligne_nom_commercial);
                        }
                        for (id in data[key][index1]['ligne_retour']['arrets']) {
                            const {latitude, longitude, nom, ligne_senstotem, ligne_nom_commercial, ligne_directionar} = data[key][index1]['ligne_retour']['arrets'][id]
                            if(ligne_senstotem == 'R' && nomst != nom){
                                if (nom.toUpperCase() == ligne_directionar.split(' <')[0].toUpperCase()){
                                    marker = new L.marker([latitude, longitude], {icon: tramIconRD})
                                    .bindPopup(ligne_nom_commercial + ' : ' + ligne_directionar + '<br>' + 'Départ : ' + nom)
                                    .addTo(map);
                                } else {
                                marker = new L.marker([latitude, longitude], {icon: tramIconRa}) //green
                                .bindPopup(ligne_nom_commercial + ' : ' + ligne_directionar + '<br>' + 'Arrêt : ' + nom)
                                .addTo(map);
                                }
                            } 
                            markersARetour.push(marker)
                            // ligner.push(nom.split(' ')[0]);
                            ligner.push(nom);                          
                            // var intersection2 = ligner.filter(e => ligne2.indexOf(e) !== -1);
                            marker.addTo(groupeR_depart);   
                            var destR = ligne_nom_commercial + ' =>' + ligne_directionar.split('>')[1];    
                        }    
                        L.control.layers(
                            {}, // choix unique, ici on n'utilise pas
                            { 
                              // cases à cocher
                              // "Le nom affiché dans l'interface" : variable_du_groupe,
                              ["Ligne Départ : " + depA] : groupeA_destination, // ici un groupe
                              ["Ligne Départ : " + depR] : groupeR_destination, // ici un groupe
                              ["Ligne Destination : " + destA] : groupeA_depart, // ici un groupe
                              ["Ligne Destination : " + destR] : groupeR_depart, // ici un groupe
                              ["T1 "] : T1, // ici un groupe
                             ["Vue Satellite"] : googleSat, // ici un tileLayer
                            },
                            { // les options du panel
                              position: "topright", // topleft', 'topright', 'bottomleft' or 'bottomright'
                              collapsed: false // fermé ou ouvert au démarrage (ici, ouvert au démarrage)
                            }
                          ).addTo(map); // on l'ajoute à la carte comme un marqueur
                        map.fitBounds( groupeA_depart.getBounds(), {padding: [50, 70]} );
                    };
                    document.getElementById("pictoa").innerHTML = '';
                    document.getElementById("thermometrea").innerHTML = '';
                }
                let fixeddista = shortesta.toFixed(3)*1000;
                console.log(fixeddista, stationproa, lignetota);
                if(intersection1.length == 0){
                    intersection1 = 'Il n y a aucune station commune entre la ligne du point de départ et la ligne du point d arrivée ';
                };
                document.getElementById("chan").hidden = false;
                document.getElementById("chan1").hidden = true;
                document.getElementById("chan2").hidden = true;
                document.getElementById("iti").hidden = false;
                document.getElementById("chan3").hidden = false;
                document.getElementById("chan4").hidden = false;
                document.getElementById("chan5").hidden = false;
                console.log(data);
                document.getElementById("arr1").hidden = false;
                document.getElementById("distancea").innerHTML = fixeddista + ' m';
                document.getElementById("nomstationa").innerHTML = stationproa;
                document.getElementById("nomstationdep").innerHTML = markersType[0]._popup._content;
                document.getElementById("nomstationarr").innerHTML = destA.split('=>')[0] + ' - ' + nomst;
                document.getElementById("nomstationtrs").innerHTML = intersection1;
                document.getElementById("nomstationtr").innerHTML = intersection1.slice(-1);
                // document.getElementById("totem").innerHTML = lignetot;
                document.getElementById("pictoa").appendChild(pica);
                document.getElementById("thermometrea").appendChild(thermoa);
            }
        }
    }
}

for (let indexall = 0; indexall < markersAller.length ; ++indexall) {
    const latAller = markersAller[indexall]._latlng.lat;
    const lonAller = markersAller[indexall]._latlng.lng; //red
    for (id2 in data[key][indexl]['ligne_aller']['arrets']) {
        const {latitude, longitude, nom} = data[key][indexl]['ligne_aller']['arrets'][id2]
        const distanceLignes = Math.acos(Math.sin(latAller*(pi/180))*Math.sin(latitude*(pi/180))+Math.cos(latAller*(pi/180))*Math.cos(latitude*(pi/180))*Math.cos(lonAller*(pi/180)-longitude*(pi/180)))*6371;
        console.log(distanceLignes);
        if(distanceLignes < shortestLignes){
            shortestLignes = distanceLignes;
            nom1 = nom;
            nom2 = markersAller[indexall]._popup._content;
           la1 = latAller;
           la2 = latitude;
           lon1 = lonAller;
           lon2 = longitude;
        }
        console.log(nom1, nom2);
    }
}
if(shortestLignes.toFixed(3)*1000 > 0){
polyline2 = L.polyline([
    [la1, lon1], // les coords gps des sommets à relier
    [la2, lon2]
], {
   color: 'red'
})
//.bindPopup('Distance : ' + distanceda.toFixed(3)*1000 + ' m')
.bindTooltip('Distance entre stations : ' + shortestLignes.toFixed(3)*1000 + ' m', {permanent: true, direction:"center"})
.addTo(map); 
document.getElementById("chan").hidden = true;
document.getElementById("chan1").hidden = false;
document.getElementById("chan2").hidden = false;
}
document.getElementById("nomstationdep1").innerHTML = destR.split(' ')[0] + ' - ' + nom1;
document.getElementById("nomstationarr1").innerHTML = markersType[0]._popup._content.split(' ')[0] + ' - ' + nom2.split('Arrêt : ')[1];
}