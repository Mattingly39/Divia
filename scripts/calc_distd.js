
function calculdistance_D(latitudeA, longitudeA, data, key) {
    let pi = Math.PI;
    let shortest = 20000000;
    let stationpro;
    const latitude1 = latitudeA*(pi/180);
    const longitude1 = longitudeA*(pi/180);
    var pic = document.createElement("img");
    var thermo = document.createElement("img");

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
            if (distance < shortest){
               shortest = distance;
                stationpro = nom;
                lignetot = ligne_codetotem;
                pic.src = picto;
                thermo.src = fichier_thermometre;
var lat = latitude;
var lon = longitude
            }
; 
        }
    } }}
    if(data[key][index1]['ligne_aller']['type'] != 'tram'){
        marker = new L.marker([lat, lon], {icon: busIcon})
        .bindPopup(data[key][index1]['arrets'][index2]['ligne_nom_commercial'] + ' - ' + nom)
        .addTo(map);
        var nomst = nom;
        var dirst = data[key][index1]['arrets'][index2]['ligne_direction'];
      //  var afterst_ = dirst.substring(dirst.indexOf('>') + 1);
        } else {
            marker = new L.marker([lat, lon], {icon: tramIcon})
            .bindPopup(data[key][index1]['arrets'][index2]['ligne_nom_commercial'] + ' - ' + nom)
            .addTo(map);
        var nomst = nom;
        var dirst = data[key][index1]['arrets'][index2]['ligne_direction'];
    //    var afterst_ = dirst.substring(dirst.indexOf('>') + 1);
    
        }
return lat, lon; 
 }
