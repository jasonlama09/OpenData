// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

// showMap() displays the map for a location [lat, lon] in the right panel
function showMap(lat, lon){
  //alert(location);
  let location = [lat, lon];
  //Line below needed to create the map object once.
  if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 14);// [lat, lon], zoom

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);// places marker on map
}

// card() accepts JSON of one complaint and returns a card for the complaint
function card( info ){ 

  let location = [info.latitude, info.longitude];
  //Some complaints may not have latitudes and longitudes
  //only create a button if these values exists
  let mapButton = "";
  if(info.latitude && info.longitude){
    mapButton = `<input type="button" onclick="showMap( ${location} )" value="Map">`
  }

  let build = `<div class="card fitted">
                  <h3>${info.project_name}</h3>
                  <h5>${info.borough}</h5>
                  <p>${info.postcode}</p>
                  <p>${info.street_name}</p><hr>
                  <p>${info.total_units}:units</p>
                  ${mapButton}
              </div>`;
  return build;
}