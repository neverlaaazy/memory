import { _images } from "./data.js";

_images.sort(() => Math.random() - 0.5);

let visibleCards =[];

const container = document.querySelector(".container");
_images.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("card" + item.id);
    card.tabIndex = 0;

    const img = document.createElement("img");
    img.src = item.url;
    img.alt = item.id;

    card.append(img);
    container.append(card);

    card.addEventListener("click", ()=>
    {
        if(visibleCards.length<2){
            card.classList.add("card-show");
            visibleCards.push(item);
            if(visibleCards.length == 2){
                setTimeout(() =>{
                    card.classList.remove("card-show");
                    document.querySelector(".card"+visibleCards[0].id).classList.remove("card-show");
                    visibleCards = [];
                },2000);
            }
        }
        
        // card.classList.toggle("card-show");
        // setInterval(() =>{card.classList.toggle("card-show")},500);
    });
});

// const cards = document.querySelectorAll(".card");
// for (let card of cards)
// {
//     card.addEventListener("click", ()=>
//     {
//         card.classList.toggle("card-show");
//         setTimeout(() =>{card.classList.toggle("card-show")},2000);
//     });
// };