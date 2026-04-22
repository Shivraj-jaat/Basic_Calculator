let num1 = document.querySelector("#num1")
let ope = document.querySelector("#operator")
let num2 = document.querySelector("#num2")
let calcBtn = document.querySelector("#btn")
let answer = document.querySelector("#result")

let result = 0;

calcBtn.addEventListener("click", () => {

if(num1.value === "" || num2.value === ""){
    alert("Please enter number")
}
    switch (ope.value) {
        case '+':
            result = Number(num1.value) + Number(num2.value);
            break;

        case '-':
            result = Number(num1.value) - Number(num2.value)
            break;

        case '*':
            result = Number(num1.value) * Number(num2.value)
            break;

        case '/':
            if(Number(num2.value) === 0){
                alert("Not divisible by 0")
                return;
            }
            result = Number(num1.value) / Number(num2.value)
            break;

        default:
            alert("Invalid Operator")
            break;
    }
    answer.innerHTML = `Answer: ${result}`;

})