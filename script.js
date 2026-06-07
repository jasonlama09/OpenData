let data, mapObj;
let output, result;

async function init() {
  let link = "nypd.json";
  let info = await fetch(link);
  data = await info.json();

  output = document.getElementById("output");
  result = document.getElementById("result");

  let build = "";
  let ct = 0;

  for (let i = 0; i < data.length; i++) {
    let complaint = data[i];

    build += `
      <div class="fitted card">
        <h3>${complaint.project_name}</h3>
        <p>${complaint.borough}</p>
        <p>${complaint.postcode}</p>
        <p>${complaint.street_name}</p>
        <p>${complaint.total_units} units</p>
      </div>
    `;
    ct++;
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;

  // Filling Dropdown Menus
  let complaint_types = fillDropDown("project_name");
  document.getElementById("complaint_types").innerHTML = complaint_types;

  let descriptors = fillDropDown("postcode");
  document.getElementById("descriptors").innerHTML = descriptors;

  let agencies = fillDropDown("borough");
  document.getElementById("agencies").innerHTML = agencies;

  console.log(data);
  console.log(data.length);
}

// MOVE THIS OUTSIDE INIT
function filterByZipAndAgency() {
  let zip = document.getElementById("zip").value.trim();
  let borough = document.getElementById("agencies").value;

  let build = "";
  let ct = 0;

  for (let i = 0; i < data.length; i++) {
    let complaint = data[i];

    if (
      complaint.postcode == zip &&
      complaint.borough == borough
    ) {
      build += `
        <div class="fitted card">
          <h3>${complaint.project_name}</h3>
          <p>${complaint.borough}</p>
          <p>${complaint.postcode}</p>
          <p>${complaint.street_name}</p>
          <p>${complaint.total_units} units</p>
        </div>
      `;
      ct++;
    }
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}




function filterByComplaintOrDescriptor() {
  let project = document.getElementById("complaint_types").value;
  let postcode = document.getElementById("descriptors").value;

  output = document.getElementById("output");
  result = document.getElementById("result");

  let build = "";
  let ct = 0;

  for (let i = 0; i < data.length; i++) {
    let complaint = data[i];

    if (
      (project === "" || complaint.project_name === project) &&
      (postcode === "" || complaint.postcode === postcode)
    ) {
      build += `
        <div class="fitted card">
          <h3>${complaint.project_name}</h3>
          <p>${complaint.borough}</p>
          <p>${complaint.postcode}</p>
          <p>${complaint.street_name}</p>
          <p>${complaint.total_units} units</p>
        </div>
      `;
      ct++;
    }
  }





  
  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;

}

