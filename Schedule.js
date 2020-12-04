
//Task 1 Constructor Function
function Schedule(tName,dTime,orig,desti) {
    this.trainName=tName;
    this.departTime=dTime;
    this.origin=orig;
    this.destination=desti;
}

//Task 2 - Populating the object array with given data in html
const codedTable=document.getElementById('codedTable');
console.log(codedTable);
var trains=[];
var data=[];
for (let i = 0; i < codedTable.rows.length; i++){
      for (let j = 0; j < codedTable.rows[i].cells.length; j++)
            data[j]=codedTable.rows[i].cells[j].innerHTML;
    trains[i]=new Schedule(data[0],data[1],data[2],data[3]);
}


//Task 3 - Creating a table from object array - populated in task 2

var row;
const newTable=document.getElementById('newTable');
console.log(newTable);
//creating Table body
for (let i = 0; i < codedTable.rows.length-1; i++){
    row=newTable.insertRow();
    for (let j = 0; j < codedTable.rows[i].cells.length; j++){
        row.insertCell();

    }
}
//creating table head
var tablehead=newTable.createTHead();
row=tablehead.insertRow();
for (let i = 0; i < codedTable.rows[0].cells.length; i++) {
    row.append(document.createElement('th'));
}

// populating the newtable with data
console.log(newTable.rows);
for (let i = 0; i < newTable.rows.length; i++){
    data=[trains[i].trainName,trains[i].departTime,trains[i].origin,trains[i].destination];
    for (let j = 0; j < newTable.rows[i].cells.length; j++)
          newTable.rows[i].cells[j].innerHTML=data[j];
    data=[];
}