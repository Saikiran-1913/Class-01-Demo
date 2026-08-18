function multiplyNumbers() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("result").textContent = a * b;
}


function divideNumbers() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if (b === 0) {
        alert("Cannot divide by zero.");
    }
    else {
        document.getElementById("result").textContent = a / b;
    }
}


function incrementNumber() {

    let current =
        Number(document.getElementById("num1").value);

    document.getElementById("num1").value = current + 1;
}


document
    .getElementById("multiplyBtn")
    .addEventListener("click", multiplyNumbers);


document
    .getElementById("divideBtn")
    .addEventListener("click", divideNumbers);