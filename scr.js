let data, mapObj;

async function init(){
  //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000"
  let link = "nypd.json"
  info = await fetch(link);
  data = await info.json();
  
  let cards_output = get("cards_output");
  let build = "";
  for(let i = 0; i < data.length; i+=1) {
    let complaint = data[i];
    build += card(complaint);
  }
  cards_output.innerHTML = build;
}