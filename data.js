//callback method
function AdditionalData_Loaded(data)
{
  //create a table
  var placeholder=document.getElementById("myTablePlaceholder");
  var table=document.createElement('TABLE');
  var tbdy=document.createElement('TBODY');
  table.appendChild(tbdy);

  //for each row in the table add the cell contents
  for (var i=1; i < data.d.length; i++)
  {
      var tr=document.createElement('TR');
      tbdy.appendChild(tr);
      tr.appendChild(AddCellContents(data.d, i,'raisonsociale'));
      tr.appendChild(AddCellContents(data.d, i,'soustype'));
      tr.appendChild(AddCellContents(data.d, i,'codepostal'));
      tr.appendChild(AddCellContents(data.d, i,'ville'));
      tr.appendChild(AddCellContents(data.d, i,'latitude'));
      tr.appendChild(AddCellContents(data.d, i,'longitude'));
      tr.appendChild(AddCellContents(data.d, i,'tlphone'));
  }
  //add the table to page
  placeholder.appendChild(table);
}

//add cell contents to the table
function AddCellContents(data, cell, id)
{
    var td=document.createElement('TD');
    var dataCell = data[cell][id];
    td.appendChild(document.createTextNode(dataCell));
    return td;
}

$(document).ready(function() {
  $('#dataLoading').on("click",function(event){
    LoadAdditionalData();
    event.preventDefault();
  });
});
