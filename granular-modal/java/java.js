document.addEventListener("DOMContentLoaded", function(event) {

  var button = document.querySelector(".default");
  button.addEventListener("click", addInput);

  function addInput(event) {
    event.preventDefault();
    var div = document.querySelector(".new-input");
    var table = document.createElement("table");
    div.appendChild(table);
    table.setAttribute("class", "table");

    if (true) { //coming

      //table headers
      var thead = document.createElement("tr");
      thead.setAttribute("class", "thead");
      table.appendChild(thead);

      var th = document.createElement("th");
      th.textContent = "INPUT NAME";
      thead.appendChild(th);

      var th = document.createElement("th");
      th.textContent = "TYPE";
      thead.appendChild(th);

      var th = document.createElement("th");
      th.textContent = "AREA";
      thead.appendChild(th);

      var th = document.createElement("th");
      th.textContent = "RATE";
      thead.appendChild(th);

      var th = document.createElement("th");
      th.textContent = "TOTAL";
      thead.appendChild(th);
    }

    //table data
    var tr = document.createElement("tr");
    table.appendChild(tr);
    tr.setAttribute("class", "tr");

    var td = document.createElement("td");
    tr.appendChild(td);
    var select = document.createElement("select");
    select.textContent = "Choose...";
    select.setAttribute("class", "table-input");
    td.appendChild(select);
    //
    var option = document.createElement("option");
    option.textContent = "Choose...";
    option.setAttribute("value", "Choose...");
    select.appendChild(option);

    var td = document.createElement("td");
    tr.appendChild(td);
    var text = document.createElement("text");
    text.textContent = "Mix";
    td.setAttribute("class", "body-copy");
    td.appendChild(text);

    var td = document.createElement("td");
    tr.appendChild(td);
    var text = document.createElement("text");
    td.textContent = "100.00 ac";
    td.setAttribute("class", "body-copy");
    td.appendChild(text);

    var td = document.createElement("td");
    tr.appendChild(td);
    var input = document.createElement("input");
    input.setAttribute("class", "input");
    td.appendChild(input);
    var text = document.createElement("text");
    text.textContent = "seed/ac";
    text.setAttribute("class", "body-copy");
    td.appendChild(text);

    var td = document.createElement("td");
    tr.appendChild(td);
    var text = document.createElement("text");
    text.textContent = "-- bag";
    text.setAttribute("class", "body-copy");
    td.appendChild(text);
  }
});
