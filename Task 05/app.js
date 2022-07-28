function getTable() {
        let tableNum = +document.getElementById("tableNum").value;
        let tableStart = +document.getElementById("tableStart").value;
        let tableEnd = +document.getElementById("tableEnd").value;


        document.querySelector("#result").innerHTML = " ";

        for (var i = tableStart; i <= tableEnd; i++) {
                document.querySelector("#result")
                        .innerHTML += `${tableNum} x ${i}  = ${tableNum * i} <br />`;

        }
}
