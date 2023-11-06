// const mainDiv = document.getElementById("mainDiv");
// const paraElements = document.querySelectorAll(".para");

// paraElements.forEach((para) => {
//     para.style.color = "red";
// });



function pClicked(){
    console.log("Hello");
}


// Event Listeners
const p2=document.getElementById('p2');

function pClickedwithListener(){

    p2.innerHTML = "BYE";
    p2.style.color = "red";


    
    console.log("Bye");
}

p2.addEventListener('click',pClickedwithListener);


