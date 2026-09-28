
let display = document.getElementById("display");


 //Value display karna
function appendValue(value) {

    display.value = display.value + value;

}


// Display clear karna
function clearDisplay() {

    display.value = "";

}


// Last character delete karna
function deleteLast() {

    display.value = display.value.slice(0, -1);

}


// Calculation karna
function calculate() {

    try {

        if (display.value === "") {
            return;
        }

        display.value = eval(display.value);

    } 
    
    catch (error) {

        display.value = "Error";

    }

}

