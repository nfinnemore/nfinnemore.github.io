var firstnumber = "";
var secondnumber = "";
var operation = "";
var result = "";

window.onload = function() {
    document.getElementById("button1").onclick = one;
    document.getElementById("button2").onclick = two;
    document.getElementById("button3").onclick = three;
    document.getElementById("button4").onclick = four;
    document.getElementById("button5").onclick = five;
    document.getElementById("button6").onclick = six;
    document.getElementById("button7").onclick = seven;
    document.getElementById("button8").onclick = eight;
    document.getElementById("button9").onclick = nine;
    document.getElementById("button0").onclick = zero;
    document.getElementById("buttonadd").onclick = add;
    document.getElementById("buttonsubtract").onclick = subtract;
    document.getElementById("buttonmultiply").onclick = multiply;
    document.getElementById("buttondivide").onclick = divide;
    document.getElementById("buttonenter").onclick = enter;
    document.getElementById("buttonclear").onclick = clearcalc;

}

function one() {
    firstnumber = firstnumber.concat("1");
    document.getElementById("display").innerHTML = firstnumber;
}
function two() {
    firstnumber = firstnumber.concat("2");
    document.getElementById("display").innerHTML = firstnumber;
}
function three() {
    firstnumber = firstnumber.concat("3");
    document.getElementById("display").innerHTML = firstnumber;
}
function four() {
    firstnumber = firstnumber.concat("4");
    document.getElementById("display").innerHTML = firstnumber;
}
function five() {
    firstnumber = firstnumber.concat("5");
    document.getElementById("display").innerHTML = firstnumber;
}
function six() {
    firstnumber = firstnumber.concat("6");
    document.getElementById("display").innerHTML = firstnumber;
}
function seven() {
    firstnumber = firstnumber.concat("7");
    document.getElementById("display").innerHTML = firstnumber;
}
function eight() {
    firstnumber = firstnumber.concat("8");
    document.getElementById("display").innerHTML = firstnumber;
}
function nine() {
    firstnumber = firstnumber.concat("9");
    document.getElementById("display").innerHTML = firstnumber;
}
function zero() {
    firstnumber = firstnumber.concat("0");
    document.getElementById("display").innerHTML = firstnumber;
}

function add() {
    if (firstnumber == "") {
        return;
    }
    secondnumber = firstnumber;
    firstnumber = "";
    operation = "add";
    document.getElementById("display").innerHTML = "";
}
function subtract() {
    if (firstnumber == "") {
        return;
    }
    secondnumber = firstnumber;
    firstnumber = "";
    operation = "subtract";
    document.getElementById("display").innerHTML = "";
}
function multiply() {
    if (firstnumber == "") {
        return;
    }
    secondnumber = firstnumber;
    firstnumber = "";
    operation = "multiply";
    document.getElementById("display").innerHTML = "";
}
function divide() {
    if (firstnumber == "") {
        return;
    }
    secondnumber = firstnumber;
    firstnumber = "";
    operation = "divide";
    document.getElementById("display").innerHTML = "";
}

function enter() {
    if(operation == "add") {
        result = parseInt(firstnumber) + parseInt(secondnumber);
        document.getElementById("display").innerHTML = result;
        firstnumber = result;
    }
    if(operation == "subtract") {
        result = parseInt(secondnumber) - parseInt(firstnumber);
        document.getElementById("display").innerHTML = result;
        firstnumber = result;
    }
    if(operation == "multiply") {
        result = parseInt(firstnumber) * parseInt(secondnumber);
        document.getElementById("display").innerHTML = result;
        firstnumber = result;
    }
    if(operation == "divide") {
        result = parseInt(secondnumber) / parseInt(firstnumber);
        document.getElementById("display").innerHTML = result;
        firstnumber = result;
    }
}

function clearcalc() {
    firstnumber = "";
    secondnumber = "";
    operation = "";
    result = "";
    document.getElementById("display").innerHTML = " ";
}
