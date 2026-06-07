async function init(){
  let link = "nypd.json";
  let info = await fetch(link);
  data = await info.json();
}

function ByBorough(){
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;

  for(let complaint of data){
    if(complaint.borough == "QUEENS"){
      q++;
    } else if(complaint.borough == "MANHATTAN"){
      m++;
    } else if(complaint.borough == "BROOKLYN"){
      bk++;
    } else if(complaint.borough == "BRONX"){
      bx++;
    } else if(complaint.borough == "STATEN ISLAND"){
      s++;
    }
  }

  let chartData = [
    ["QUEENS", q],
    ["MANHATTAN", m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
  ];

  let chartType = document.getElementById("chartType").value;

  displayChart(chartData, "output", chartType);
}