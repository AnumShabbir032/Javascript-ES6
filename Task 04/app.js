// subject 1 result
function chekper1() {
    let marks_1 = document.querySelector("#marks_1").value;
    let subperc_1 = marks_1 / 100 * 100;
    let subperc = subperc_1.toFixed(2);


    if(marks_1 > 100){
        document.querySelector("#subperc_1").innerHTML  = `Invalid Mark`;
    }
    else if(marks_1 == ""){
        document.querySelector("#subperc_1").innerHTML  = `Input is empty`;
    }
    else{
        document.querySelector("#subperc_1").innerHTML = `${subperc}%`;
    }
}
// subject 2 result
function chekper2() {
    let marks_2 = document.querySelector("#marks_2").value;
    let subperc_2 = marks_2 / 100 * 100;
    let subperc = subperc_2.toFixed(2);
    
    if(marks_2 > 100){
        document.querySelector("#subperc_2").innerHTML  = `Invalid Mark`;
    }
    else if(marks_2 == ""){
        document.querySelector("#subperc_2").innerHTML  = `Input is empty`;
    }
    else{
        document.querySelector("#subperc_2").innerHTML = `${subperc}%`;
    }
}
// subject 3 result
function chekper3() {
    let marks_3 = document.querySelector("#marks_3").value;
    let subperc_3 = marks_3 / 100 * 100;
    let subperc = subperc_3.toFixed(2);

    if(marks_3 > 100){
        document.querySelector("#subperc_3").innerHTML  = `Invalid Mark`;
    }
    else if(marks_3 == ""){
        document.querySelector("#subperc_3").innerHTML  = `Input is empty`;
    }
    else{
        document.querySelector("#subperc_3").innerHTML = `${subperc}%`;
    }
}
// subject 4 result
function chekper4() {
    let marks_4 = document.querySelector("#marks_4").value;
    let subperc_4 = marks_4 / 100 * 100;
    let subperc = subperc_4.toFixed(2);

    if(marks_4 > 100){
        document.querySelector("#subperc_4").innerHTML  = `Invalid Mark`;
    }
    else if(marks_4 == ""){
        document.querySelector("#subperc_4").innerHTML  = `Input is empty`;
    }
    else{
        document.querySelector("#subperc_4").innerHTML = `${subperc}%`;
    }
}
// subject 5 result
function chekper5() {
    let marks_5 = document.querySelector("#marks_5").value;
    let subperc_5 = marks_5 / 100 * 100;
    let subperc = subperc_5.toFixed(2);

    if(marks_5 > 100){
        document.querySelector("#subperc_5").innerHTML  = `Invalid Mark`;
    }
    else if(marks_5 == ""){
        document.querySelector("#subperc_5").innerHTML  = `Input is empty`;
    }
    else{
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

    if(ObtainedMarks > 501){
        document.querySelector("#obtMarks").innerHTML = `Invalid Marks`;
    }
    else if(marks_1 == "" && marks_2 ==""||  marks_3 == "" && marks_4 == "" || marks_5 == ""){
        document.querySelector("#obtMarks").innerHTML = `Fill all inputs first`;
    }
    else{
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
        else if(percentage >= 50 && percentage < 60){
            document.querySelector("#percentage").innerHTML = `${percentage}% (C)`;
        }
        else if(percentage >= 40 && percentage < 50){
            document.querySelector("#percentage").innerHTML = `${percentage}% (D)`;
        }
        else if(percentage > ""){
            document.querySelector("#percentage").innerHTML = `Invalid Result`;
        }
        else{
            document.querySelector("#percentage").innerHTML = `${percentage}% (Fail)`;
        }
}