// import the data from data.js
const tableData = data;
// Reference the HTML table using d3 -- declare the variable tbody and then use d3 select to tell javascript to look for the tbody tag in the html
var tbody = d3.select("tbody");

function buildTable(data){
    //clears the table - use empty string
    tbody.html("") 
}
//Looped through each object in the array -- Appended a row to the HTML table -- Added each value from the object into a cell
data.forEach((dataRow)=>{
    // find the tbody tag in HTML and add table row tr
    let row = tbody.append("tr");
    //objects.values references one object from the arrary of UFO sightings
    //(dataRow) says you want the values to go into the dataRow
    //forEach((val)) to specify one object per row
    Object.values(dataRow).forEach((val) => {
        // appending data to table td
        let cell = row.append("td");
        //add values
        cell.text(val);
        }
    );
});