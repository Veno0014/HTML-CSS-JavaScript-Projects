const exchange = [
    // Adds currency
    { currency: "USD", rate: 18.24 },
    { currency: "EUR", rate: 19.89 },
    { currency: "GBP", rate: 23.60 },
    { currency: "JPY", rate: 0.12 },
    { currency: "AUD", rate: 12.12 },
    { currency: "CAD", rate: 13.31 },
    { currency: "CHF", rate: 20.56 },
    { currency: "CNY", rate: 2.51 },
    { currency: "INR", rate: 0.22 },
    { currency: "BRL", rate: 3.37 }
];

//generates table when button is clicked
function generateTable() {
    const amount = document.getElementById("quantity").value;
    const tablebody = document.getElementById("exchange");
    const table = document.getElementById("table");

    // Displays the table when button is clicked
    table.style.display = "block";
    
    // Refreshs table when new amount is enterd
    tablebody.innerHTML = "";

    //Mutliples amount by the currency and displays in table
    exchange.forEach(rate => {
        const row = document.createElement("tr");

        const currencyCell = document.createElement("td");
        currencyCell.textContent = rate.currency;
        row.appendChild(currencyCell);

        const rateCell = document.createElement("td");
        rateCell.textContent = rate.rate.toFixed(2);
        row.appendChild(rateCell);

        const amountCell = document.createElement("td");
        amountCell.textContent = (amount * rate.rate).toFixed(2);
        row.appendChild(amountCell);

        tablebody.appendChild(row);
    });
}

//Generates the table when button is clicked
document.getElementById("conbtn").addEventListener("click", generateTable);
