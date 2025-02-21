document.addEventListener("DOMContentLoaded", function () {

    const addBasket = document.getElementsByClassName("add-basket")[0];

    addBasket.addEventListener("click", add); //event listener for if the add to basket button is clicked
    
    function add(){
        const productTitle = document.getElementsByClassName("product-page-title")[0].innerText; //get the product title
        const productPrice = document.getElementsByClassName("price")[0].innerText; //get the product price
        const productImage = document.getElementsByClassName("product-page-img")[0].src; //get the product image

        let basket = JSON.parse(localStorage.getItem("basket")) || []; //load the local storage into an array

        basket.push({ //put the product object in the basket array
            title: productTitle,
            price: productPrice,
            image: productImage
        });

        localStorage.setItem("basket", JSON.stringify(basket)); //store basket array back in local storage

        addBasket.innerText = "Added!"; //change text of the add to basket button to added
        setTimeout(() => {
            addBasket.innerText = "Add To Basket"; //wait 0.5 seconds then reset text back to normal
        }, 500);
    };
});
