function chekper1() {
    let marks_1 = document.querySelector("#marks_1").value;
    let subperc_1 = marks_1 / 100 * 100;
    document.querySelector("#subperc_1").innerHTML = `${subperc_1}%`;

}

function chekper2() {
    let marks_2 = document.querySelector("#marks_2").value;
    let subperc_2 = marks_2 / 100 * 100;
    document.querySelector("#subperc_2").innerHTML = `${subperc_2}%`;
}

function chekper3() {
    let marks_3 = document.querySelector("#marks_3").value;
    let subperc_3 = marks_3 / 100 * 100;
    document.querySelector("#subperc_3").innerHTML = `${subperc_3}%`;
}

function chekper4() {
    let marks_4 = document.querySelector("#marks_4").value;
    let subperc_4 = marks_4 / 100 * 100;
    document.querySelector("#subperc_4").innerHTML = `${subperc_4}%`;
}

function chekper5() {
    let marks_5 = document.querySelector("#marks_5").value;
    let subperc_5 = marks_5 / 100 * 100;
    document.querySelector("#subperc_5").innerHTML = `${subperc_5}%`;

}

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

    document.querySelector("#obtMarks").innerHTML = `${ObtainedMarks}`;

    var percentage = (ObtainedMarks / 500) * 100;

    document.querySelector("#percentage").innerHTML = `${percentage}%`;


    if (percentage >= 80) {
        document.querySelector("#percentage").innerHTML = `${percentage}%  A+`;
        } 
        else if (percentage >= 70 && percentage < 80) {
        document.querySelector("#percentage").innerHTML = `${percentage}% A`;
        }
         else if (percentage >= 60 && percentage < 70) {
            document.querySelector("#percentage").innerHTML = `${percentage}% B`;
        } 
        else if(percentage >= 50 && percentage < 60){
            document.querySelector("#percentage").innerHTML = `${percentage}% C`;
        }
        else if(percentage >= 40 && percentage < 50){
            document.querySelector("#percentage").innerHTML = `${percentage}% D`;
        }
        else if(percentage >= 100){
                document.querySelector("#percentage").innerHTML = `Invailid`;
        }
        else{
            document.querySelector("#percentage").innerHTML = `${percentage}% Fail`;
        }


    
}
// if (aver < 60) {
    //           alert( "Fail");
    //       }
    //       else if (aver < 70){
    //         alert( "Grade D");
    //       }
    //       else if (aver < 80){
    //         alert( "Grade C");
    //       }
    //       else if (aver < 90){
    //         alert( "Grade B");
    //       }
    //       else if (aver < 100){
    //         alert( "Grade A+");
    //       }
    //       else{
    //           alert(aver);
    //       }