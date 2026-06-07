function fillDropDown(key){
  let list = [];
  let build = `<option value="">Select Option</option>`;

  for(let i = 0; i < data.length; i++){
    let data_field = data[i];

    if (data_field[key] && !list.includes(data_field[key])) {
      list.push(data_field[key]);
    }
  }

  list.sort();

  for(let field of list){
    build += `<option value="${field}">${field}</option>`;
  }

  return build;
}