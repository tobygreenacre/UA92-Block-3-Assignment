document.addEventListener("DOMContentLoaded", function () {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    let total = document.querySelector(".total-cost");
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll(".checkout-details-box");

    form.addEventListener("submit", (event) => { //when from is submitted
        event.preventDefault(); //stops default form submission behaviour
        const checkoutData = {}; //create checkout data dictionary
        inputs.forEach(input => {
            checkoutData[input.name] = input.value; //go through each input and add it to checkout data dictionary
        });
    });

    if (basket.length === 0) {
        total.innerText = "Total: £0";
    } else {
        let totalcost = 0
        for(let i = 0; i < basket.length; i++){ //go through each item in basket
            let price = parseFloat(basket[i].price.replace("£", "")); //remove pound sign then convert from string to float
            totalcost += price; //add to total cost
            ouput = "total: £"+totalcost.toFixed(2)
            total.innerText = ouput //update total cost text
        }
    }

});
