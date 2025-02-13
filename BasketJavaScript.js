document.addEventListener("DOMContentLoaded", function () {
    const basketContainer = document.getElementsByClassName("basket")[0];
    const emptyBasket = document.getElementsByClassName("empty-basket")[0];
    const total = document.getElementsByClassName("total-cost")[0];
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    loadPage()

    function loadPage(){
        emptyBasket.addEventListener("click", empty);
        document.addEventListener("click", checkForDelete);

        basketContainer.innerHTML = "<ul></ul>";
        
        if (basket.length == 0){
            basketContainer.innerHTML = '<ul><li style="font-size: 40px;">Basket is empty :(</li></ul>'
            total.innerText = "Total: £0"
        }
        else{
            let listHTML = "<ul>"
            let totalcost = 0
            for(let i = 0; i < basket.length; i++){
                listHTML += '<li><img src= '+basket[i].image+'></img><p>'+basket[i].title+'</p><p>'+basket[i].price+'</p><button class = "remove-button" id = '+i+'>remove</button></li>'
                let price = parseFloat(basket[i].price.replace("£", ""));
                totalcost += price;
            }
            listHTML += "</ul>"
            basketContainer.innerHTML = listHTML
            ouput = "total: £"+totalcost.toFixed(2)
            total.innerText = ouput
        }
    }

    function empty(){
        localStorage.clear();
        loadPage();
    }

    function checkForDelete(event){
        if (event.target.classList.contains("remove-button")) {
            const id = parseInt(event.target.id);
            let tempBasket = [];
            for(let i = 0; i < basket.length; i++){
                if (i!=id){
                    tempBasket.push(basket[i])
                }
            }
            basket=tempBasket
            localStorage.setItem("basket", JSON.stringify(basket));
            loadPage()
        }
    }
});