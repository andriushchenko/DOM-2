var dataTypes = ["false", "undefined", "null", "''", "0", "NaN"];

function CreateTable(compareStrict){
  var i, j, text, tdata, row;

  var table = document.createElement("TABLE");
  table.setAttribute("id", "myTable");
  document.body.appendChild(table);
  var headerRow = table.insertRow(0);
  headerRow.setAttribute("style", "background-color: yellow");
  tdata = document.createElement("TD");

  if (compareStrict) {
    text = document.createTextNode('===');
  } else {
    text = document.createTextNode('==');
  }
  tdata.appendChild(text);
  headerRow.appendChild(tdata);

  dataTypes.forEach(function(heading) {
    tdata = document.createElement("TD");
    text = document.createTextNode(heading);
    tdata.appendChild(text);
    headerRow.appendChild(tdata);
  })

  dataTypes.forEach(function(element, index){
    row = table.insertRow(index + 1);
    tdata = document.createElement("TD");
    text = document.createTextNode(element);
    tdata.appendChild(text);
    tdata.setAttribute("style", "background-color: yellow");
    row.appendChild(tdata);

    dataTypes.forEach(function(compareElement){
      tdata = document.createElement("TD");

      if (compareStrict) {
        if (eval(element) === eval(compareElement)) {
          text = document.createTextNode('true');
        } else {
          text = document.createTextNode('false');
        }

      } else {
        if (eval(element) == eval(compareElement)) {
          text = document.createTextNode('true');
        } else {
          text = document.createTextNode('false');
        }
      }

      tdata.appendChild(text);
      row.appendChild(tdata);
    });
  });
};

CreateTable(true);

CreateTable(false);
