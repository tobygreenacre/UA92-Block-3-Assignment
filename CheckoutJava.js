document.addEventListener("DOMContentLoaded", function () {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    let total = document.querySelector(".total-cost");
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll(".checkout-details-box");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const checkoutData = {};
        inputs.forEach(input => {
            checkoutData[input.name] = input.value;
        });
    });

    if (basket.length === 0) {
        total.innerText = "Total: £0";
    } else {
        let totalcost = 0
        for(let i = 0; i < basket.length; i++){
            let price = parseFloat(basket[i].price.replace("£", ""));
            totalcost += price;
            ouput = "total: £"+totalcost.toFixed(2)
            total.innerText = ouput
        }
    }

});
