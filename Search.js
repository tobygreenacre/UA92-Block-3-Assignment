document.addEventListener("DOMContentLoaded", function () {
    const productPages = [
        { name: "Men's Burton Custom X Camber", url: "mens-burton1.html" },
        { name: "Men's Capita D.O.A", url: "mens-capita1.html" },
        { name: "Men's Capita The Big Nice Burgundy", url: "mens-capita3.html" },
        { name: "Men's Ride Zero", url: "mens-ride1.html" },
        { name: "Men's Salomon Huck Knife", url: "mens-salomon1.html" },
        { name: "Men's Burton Good Company Camber", url: "mens-burton2.html" },
        { name: "Men's Ride Benchwarmer", url: "mens-ride2.html" },
        { name: "Men's Ride Burnout", url: "mens-ride3.html" },
        { name: "Men's Capita SB Slush Slashers", url: "mens-capita2.html" },
        { name: "Women's Salomon Bliss", url: "womens-salomon2.html" },
        { name: "Women's Bataleon Push Up", url: "womens-bataleon1.html" },
        { name: "Women's Burton 3D Fish Directional Flat Top", url: "womens-burton2.html" },
        { name: "Women's Bataleon Spirit", url: "womens-bataleon2.html" },
        { name: "Women's Capita Paradise", url: "womens-capita1.html" },
        { name: "Women's Salomon No Drama", url: "womens-salomon1.html" },
        { name: "Women's Ride Zero x Trevor Andrew", url: "womens-ride1.html" },
        { name: "Women's Bataleon Feelbetter", url: "womens-bataleon3.html" },
        { name: "Women's Ride Saturday", url: "womens-ride2.html" },
        { name: "Women's Burton Story Board Camber", url: "womens-burton3.html" },
        { name: "Women's Bataleon Moodboard", url: "womens-bataleon4.html" },
        { name: "Women's Salomon Lotus", url: "womens-salomon3.html" },
        { name: "Women's Burton Blossom Camber", url: "womens-burton1.html" },
        { name: "Kids Bataleon Minishred", url: "Bataleon-kids.html" },
        { name: "Kids Capita Micro Mini", url: "Capita-kids.html" },
        { name: "Kids Ride Lowride", url: "Ride-kids.html" },
        { name: "Kids Salomon Oh Yeah Grom", url: "Salomon-kids.html" }
    ];

    const searchInput = document.getElementById("searchInput");
    const suggestionsList = document.getElementById("suggestions");

    // Function to show suggestions as the user types
    document.showSuggestions = showSuggestions
    
    function showSuggestions(){
        const typed = searchInput.value.toLowerCase();
        suggestionsList.innerHTML = ""; // Clear previous suggestions

        if (typed.length === 0){
            return;
        }

        const matches = []
        for(let i = 0; i < productPages.length; i++){
            if(productPages[i].name.toLowerCase().includes(typed)){
                matches.push(productPages[i])
            }
        }


        if (matches.length > 0) {
            let suggestionsInnerHTML = "";
            for(let x = 0; x < matches.length; x++){
                suggestionsInnerHTML += '<li><a href="'+matches[x].url+'">'+matches[x].name+'</a></li>'
            }
            suggestionsList.innerHTML = suggestionsInnerHTML
            suggestionsList.style.display = "block";
        }
    };

    document.addEventListener("click", function (event) {
        if (!searchInput.contains(event.target) && !suggestionsList.contains(event.target)) {
            suggestionsList.style.display = "none";
        }
    });
});
