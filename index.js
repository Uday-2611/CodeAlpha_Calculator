const inputValue = document.getElementById("userInput");

//For performing arithmetic operations
const calculate = document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        let lastValue = inputValue.innerText.substring(inputValue.innerText.length, inputValue.innerText.length - 1);

        if (!isNaN(lastValue) && e.target.innerText === "=") {
            inputValue.innerText = eval(inputValue.innerText);
        } else if (e.target.innerText === "AC") {
            inputValue.innerText = "0";
        } else if (e.target.innerText === "DEL") {
            inputValue.innerText = inputValue.innerText.substring(0, inputValue.innerText.length - 1);

            if (inputValue.innerText.length == 0) {
                inputValue.innerText = "0";
            }
        } else {
            if (!isNaN(lastValue)) {
                inputValue.innerText += e.target.innerText
            }
        }
    });
});

//To input numbers
const number = document.querySelectorAll(".number").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "0") {
            inputValue.innerText = ""
        }
        inputValue.innerText += e.target.innerText.trim();
    });
});