function percentage() {
    // get all subject value
    let subject1 = document.querySelector("#subject1").value;
    let subject2 = document.querySelector("#subject2").value;
    let subject3 = document.querySelector("#subject3").value;
    let subject4 = document.querySelector("#subject4").value;
    let subject5 = document.querySelector("#subject5").value;
    let subject6 = document.querySelector("#subject6").value;
    let subject7 = document.querySelector("#subject7").value;
    let subject8 = document.querySelector("#subject8").value;
    let subject9 = document.querySelector("#subject9").value;
    let subject10 = document.querySelector("#subject10").value;

    //   then Add all subjects value

    let totalMarks = parseInt(subject1) +
        parseInt(subject2) +
        parseInt(subject3) +
        parseInt(subject4) +
        parseInt(subject5) +
        parseInt(subject6) +
        parseInt(subject7) +
        parseInt(subject8) +
        parseInt(subject9) +
        parseInt(subject10);
 
        console.log(totalMarks);
    document.querySelector("#totalMarks").innerHTML = `Total Marks ${totalMarks}`

    let result = totalMarks / 10;

    document.querySelector("#result").innerHTML = `You have got  ${result}%`;
}