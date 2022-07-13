function tempCheck() {
    let checkTemp = document.querySelector("#checkTemp").value;

    if (checkTemp > 30) {
        document.querySelector("#result")
            .innerHTML = "It's too hot";
    }
    else if (checkTemp > 25) {
        document.querySelector("#result")
            .innerHTML = "It's pleasent outside";
    }
    else if (checkTemp > 20) {
        document.querySelector("#result")
            .innerHTML = "If you are riding a bike, please carry a jacket"
    }
    else if (checkTemp > 10) {
        document.querySelector("#result")
            .innerHTML = "You probably need a jacket"
    }
    else if (checkTemp > 1) {
        document.querySelector("#result")
            .innerHTML = "You probably need a jacket and a maffler scarf too."
    }
    else {
        document.querySelector("#result")
            .innerHTML = "It's freezing outside."
    }

}