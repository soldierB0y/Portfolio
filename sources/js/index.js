const card1=document.getElementById('card1');
const card2=document.getElementById('card2');
const list1= document.getElementById('list1');
const list2=document.getElementById('list2');

list1.style.opacity=0;
list2.style.opacity=0;
list1.style.transition='.3s ease-in-out'
list2.style.transition='.3s ease-in-out'


function hideText(list)
{
    
    if(list=='list1')
    {
        list1.style.opacity=1;
    }
    else
    {
        list2.style.opacity=1;
    }
    
}

function showText(list)
{
    if(list=='list1')
    {
        list1.style.opacity=0;
    }
    else
    {
        list2.style.opacity=0;
    }

}

card1.addEventListener('mouseenter',()=>{
    hideText('list1');
});

card1.addEventListener('mouseleave',()=>{
    showText('list1');
});

card2.addEventListener('mouseenter',()=>{
    hideText('list2');
});

card2.addEventListener('mouseleave',()=>{
    showText('list2');
});


//homeButton
const homeButton= document.getElementById('homeButton');
homeButton.style.opacity=0;
var screenHeight= window.screen.height;
//efecto nav
const nav= document.getElementById('nav');

var screenTop;


document.addEventListener('wheel',()=>{
    screenTop=$(document).scrollTop();
    if(screenTop <= screenHeight)
    {
        homeButton.style.opacity=0;
        nav.classList.remove('navFixed');

    }
    else
    {
        homeButton.style.opacity=1;
        nav.classList.add('navFixed');
    }
})


//card

const cards = document.querySelectorAll('.cardInfoImg');
const cardText= document.querySelectorAll('.cardInfoSpanText')
const canQuit= false;
const startTimer=false;
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('styleFlipLikeCard');
        if(startTimer==false)
        {
            startTimer==true;
            setTimeout(() => {
                card.classList.remove('styleFlipLikeCard')
            }, 5000);
        }
    });

});


document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".container div p");
    text.addEventListener("animationend", function (event) {
        if (event.animationName === "typing1") {
            text.classList.add("finished"); // Removes the cursor effect
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".container div p");
    text.addEventListener("animationend", function (event) {
        if (event.animationName === "typing2") {
            text.classList.add("finished"); // Removes the cursor effect
        }
    });
});