function checkvalue() {
    let num = document.querySelector("#numCheck").value;
   
    if (num % 2 === 0) {
        document.querySelector("#result").innerHTML = ` ${num} is an even number`;

    } else {
       document.querySelector("#result").innerHTML = `${num} is an Odd number`;

    }

}