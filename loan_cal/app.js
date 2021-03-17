const title = document.querySelector(".title");
const calculateBtn = document.querySelector("#calculateBtn");
const results = document.querySelector(".calculation");
const clear = document.querySelector("#clearBtn");
const loanAmount = document.querySelector("#loanAmount");
const interest = document.querySelector("#interest");
const years = document.querySelector("#years");
const monthlyPayment = document.querySelector("#monthly");
const totalPayment = document.querySelector("#total");
const totalInterest = document.querySelector("#totalInterest");

loadEventListeners();

function loadEventListeners() {
    
    calculateBtn.addEventListener('click', event => {
        event.preventDefault();
        getResult();

    });
    clear.addEventListener('click', clearValues);

};


function getResult() {

   

    const principal = parseFloat(loanAmount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // get monthly payments

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    if(isFinite(monthly)) {
        monthlyPayment.textContent = monthly.toFixed(2);
        totalPayment.textContent = (monthly * calculatedPayments).toFixed(2);
        totalInterest.textContent = ((monthly* calculatedPayments ) - principal).toFixed(2);
        if (results.classList.contains("show")) {
            return;
        }else {
            results.classList.add("show");

        }

    } else {
        const error = document.createElement("div");
        error.classList.add("alert","bg-red-300", "rounded", "text-lg", "text-center", "py-0.5", "text-pink-800")
        error.textContent = "Error - Check if your numbers are correct!"
        document.querySelector("main").insertBefore(error, title);
        window.setTimeout(clearError, 3000);

    }

}


function clearError() {
    document.querySelector(".alert").remove();
}

function clearValues() {
    loanAmount.value = "";
    interest.value = "";
    years.value = "";

}