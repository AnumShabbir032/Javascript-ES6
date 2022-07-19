// subject 1 result
function chekper1() {
    let marks_1 = document.querySelector("#marks_1").value;
    let subject_1 = document.querySelector("#subject_1").value;
    let error1 = document.getElementById("error1");
    let letters = /^[A-Za-z ]*$/;
    let subperc_1 = marks_1 / 100 * 100;
    let subperc = subperc_1.toFixed(2);



    if (subject_1 == '') {
        error1.innerHTML = "It must be filled";
        error1.style.display = "block";
        return false;
    }
    else if (!subject_1.match(letters)) {
        error1.innerHTML = "It contains only the alphabet";
        error1.style.display = "block";
        return false;
    }
    else if (marks_1 > 100) {
        document.querySelector("#subperc_1").innerHTML = `Invalid Mark`;
    }
    else if (marks_1 == "") {
        document.querySelector("#subperc_1").innerHTML = `Input is empty`;
    }
    else {
        document.querySelector("#subperc_1").innerHTML = `${subperc}%`;
    }
}
// subject 2 result
function chekper2() {
    let marks_2 = document.querySelector("#marks_2").value;
    let subject_2 = document.querySelector("#subject_2").value;
    let error2 = document.getElementById("error2");
    let letters = /^[A-Za-z ]*$/;
    let subperc_2 = marks_2 / 100 * 100;
    let subperc = subperc_2.toFixed(2);

    if (subject_2 == '') {
        error2.innerHTML = "It must be filled";
        error2.style.display = "block";
        return false;
    }
    else if (!subject_2.match(letters)) {
        error2.innerHTML = "It contains only the alphabet";
        error2.style.display = "block";
        return false;
    }



    else if (marks_2 > 100) {
        document.querySelector("#subperc_2").innerHTML = `Invalid Mark`;
    }
    else if (marks_2 == "") {
        document.querySelector("#subperc_2").innerHTML = `Input is empty`;
    }
    else {
        document.querySelector("#subperc_2").innerHTML = `${subperc}%`;
    }
}

// subject 3 result
function chekper3() {
    let marks_3 = document.querySelector("#marks_3").value;
    let subject_3 = document.querySelector("#subject_3").value;
    let error3 = document.getElementById("error3");
    let letters = /^[A-Za-z ]*$/;
    let subperc_3 = marks_3 / 100 * 100;
    let subperc = subperc_3.toFixed(2);

    if (subject_3 == '') {
        error3.innerHTML = "It must be filled";
        error3.style.display = "block";
        return false;
    }
    else if (!subject_3.match(letters)) {
        error3.innerHTML = "It contains only the alphabet";
        error3.style.display = "block";
        return false;
    }



    else if (marks_3 > 100) {
        document.querySelector("#subperc_3").innerHTML = `Invalid Mark`;
    }
    else if (marks_3 == "") {
        document.querySelector("#subperc_3").innerHTML = `Input is empty`;
    }
    else {
        document.querySelector("#subperc_3").innerHTML = `${subperc}%`;
    }
}
// subject 4 result
function chekper4() {
    let marks_4 = document.querySelector("#marks_4").value;
    let subject_4 = document.querySelector("#subject_4").value;
    let error4 = document.getElementById("error4");
    let letters = /^[A-Za-z ]*$/;
    let subperc_4 = marks_4 / 100 * 100;
    let subperc = subperc_4.toFixed(2);

    if (subject_4 == '') {
        error4.innerHTML = "It must be filled";
        error4.style.display = "block";
        return false;
    }
    else if (!subject_4.match(letters)) {
        error4.innerHTML = "It contains only the alphabet";
        error4.style.display = "block";
        return false;
    }


    else if (marks_4 > 100) {
        document.querySelector("#subperc_4").innerHTML = `Invalid Mark`;
    }
    else if (marks_4 == "") {
        document.querySelector("#subperc_4").innerHTML = `Input is empty`;
    }
    else {
        document.querySelector("#subperc_4").innerHTML = `${subperc}%`;
    }
}
// subject 5 result
function chekper5() {
    let marks_5 = document.querySelector("#marks_5").value;
    let subject_5 = document.querySelector("#subject_5").value;
    let error5 = document.getElementById("error5");
    let letters = /^[A-Za-z ]*$/;
    let subperc_5 = marks_5 / 100 * 100;
    let subperc = subperc_5.toFixed(2);


    if (subject_5 == '') {
        error5.innerHTML = "It must be filled";
        error5.style.display = "block";
        return false;
    }
    else if (!subject_5.match(letters)) {
        error5.innerHTML = "It contains only the alphabet";
        error5.style.display = "block";
        return false;
    }


    else if (marks_5 > 100) {
        document.querySelector("#subperc_5").innerHTML = `Invalid Mark`;
    }
    else if (marks_5 == "") {
        document.querySelector("#subperc_5").innerHTML = `Input is empty`;
    }
    else {
        document.querySelector("#subperc_5").innerHTML = `${subperc}%`;
    }
}

// Function for Percentage

function percentage() {
    let marks_1 = document.querySelector("#marks_1").value;
    let marks_2 = document.querySelector("#marks_2").value;
    let marks_3 = document.querySelector("#marks_3").value;
    let marks_4 = document.querySelector("#marks_4").value;
    let marks_5 = document.querySelector("#marks_5").value;

    let ObtainedMarks = parseInt(marks_1) +
        parseInt(marks_2) +
        parseInt(marks_3) +
        parseInt(marks_4) +
        parseInt(marks_5);

    // Validation on Obtained Marks result

    if (ObtainedMarks > 501) {
        document.querySelector("#obtMarks").innerHTML = `Your obtained mark more than 500`;
    }
    else if (marks_1 == "" && marks_2 == "" || marks_3 == "" && marks_4 == "" || marks_5 == "") {
        document.querySelector("#obtMarks").innerHTML = `Fill all inputs first`;
    }
    else {
        document.querySelector("#obtMarks").innerHTML = `${ObtainedMarks}`;
    }



    // Percentage Formula
    var percentageValue = (ObtainedMarks / 500) * 100;

    //The toFixed() method formats a number using fixed-point notation.

    let percentage = percentageValue.toFixed(2);


    //  Conditions On Percentage Grading   
    if (percentage >= 80) {
        document.querySelector("#percentage").innerHTML = `${percentage}%  (A+)`;
    }
    else if (percentage >= 70 && percentage < 80) {
        document.querySelector("#percentage").innerHTML = `${percentage}% (A)`;
    }
    else if (percentage >= 60 && percentage < 70) {
        document.querySelector("#percentage").innerHTML = `${percentage}% (B)`;
    }
    else if (percentage >= 50 && percentage < 60) {
        document.querySelector("#percentage").innerHTML = `${percentage}% (C)`;
    }
    else if (percentage >= 40 && percentage < 50) {
        document.querySelector("#percentage").innerHTML = `${percentage}% (D)`;
    }
    else if (percentage > "") {
        document.querySelector("#percentage").innerHTML = `Invalid Result`;
    }
    else {
        document.querySelector("#percentage").innerHTML = `${percentage}% (Fail)`;
    }
}