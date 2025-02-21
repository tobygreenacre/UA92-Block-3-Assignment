document.addEventListener("DOMContentLoaded", function () {
    const basketContainer = document.getElementsByClassName("basket")[0];
    const emptyBasket = document.getElementsByClassName("empty-basket")[0];
    const total = document.getElementsByClassName("total-cost")[0];
    let basket = JSON.parse(localStorage.getItem("basket")) || []; //load local storage to array
    loadPage() //call load page function

    function loadPage(){
        emptyBasket.addEventListener("click", empty); //event listener for empty basket that calls empty function
        document.addEventListener("click", checkForDelete); //event listener for that calls checkfordelete on each click on the page

        basketContainer.innerHTML = "<ul></ul>";
        
        if (basket.length == 0){
            basketContainer.innerHTML = '<ul><li style="font-size: 40px;">Basket is empty :(</li></ul>' //if basket is empty then tell the user that
            total.innerText = "Total: £0"
        }
        else{ //if basket is not empty
            let listHTML = "<ul>"
            let totalcost = 0
            for(let i = 0; i < basket.length; i++){ //go thorugh each item in basket and add it to listHTML variable
                listHTML += '<li><img src= '+basket[i].image+'></img><p>'+basket[i].title+'</p><p>'+basket[i].price+'</p><button class = "remove-button" id = '+i+'>remove</button></li>'
                let price = parseFloat(basket[i].price.replace("£", "")); //add price to the total cost 
                totalcost += price;
            }
            listHTML += "</ul>"
            basketContainer.innerHTML = listHTML //set listHTML variable as the basket list
            ouput = "total: £"+totalcost.toFixed(2)
            total.innerText = ouput //set total as totalcost
        }
    }

    function empty(){
        localStorage.clear();
        loadPage(); //empty storage and reload page
    }

    function checkForDelete(event){
        if (event.target.classList.contains("remove-button")) { //if user clicked on the remove button
            const id = parseInt(event.target.id); //get id of the button
            let tempBasket = [];
            for(let i = 0; i < basket.length; i++){
                if (i!=id){
                    tempBasket.push(basket[i]) //rebuild basket but without the product with the id of the remove button
                }
            }
            basket=tempBasket
            localStorage.setItem("basket", JSON.stringify(basket)); //store new basket
            loadPage() //reload page
        }
    }
});