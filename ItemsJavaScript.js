document.addEventListener("DOMContentLoaded", function () {

    const addBasket = document.getElementsByClassName("add-basket")[0];

    addBasket.addEventListener("click", add);
    
    function add(){
        const productTitle = document.getElementsByClassName("product-page-title")[0].innerText;
        const productPrice = document.getElementsByClassName("price")[0].innerText;
        const productImage = document.getElementsByClassName("product-page-img")[0].src;

        let basket = JSON.parse(localStorage.getItem("basket")) || [];

        basket.push({
            title: productTitle,
            price: productPrice,
            image: productImage
        });

        localStorage.setItem("basket", JSON.stringify(basket));

        addBasket.innerText = "Added!";
        setTimeout(() => {
            addBasket.innerText = "Add To Basket";
        }, 500);
    };
});
