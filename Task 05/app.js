// var tableNum = +prompt("Enter table number");
// var tableStart = +prompt("Enter the table number where it starts");
// var tableEnd = +prompt("Enter the table number where is ends");

// document.write (`Table of  ${tableNum}<br /> <br />`)

// for (var i = tableStart; i <= tableEnd; i++) {
//         document.write(`${tableNum} x ${i}  = ${tableNum * i} <br />`);
// }


function getTable() {
        let tableNum = parseInt(document.getElementById("tableNum").value);
        let tableStart = parseInt(document.getElementById("tableStart").value);
        let tableEnd = parseInt(document.getElementById("tableEnd").value);


        // document.querySelector("#result").innerHTML = " ";

        for (var i = tableStart; i <= tableEnd; i++) {
                document.write(`${tableNum} x ${i}  = ${tableNum * i} <br />`);
        }

}
