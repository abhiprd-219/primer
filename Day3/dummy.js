//  let man={
//             name:"Stark",
//             age:50,
    
//             getDetails:function(){
//                  console.log(this.name);
              
//             }
//     }
    
//     man.getDetails();


const numbers = [1, 2, 3, 4, 5,7,8,9,10,11,12,13,14,15,16];

const valueMap= numbers.map((num,index, arr)=>{
    return num *= 3;
});
console.log(valueMap);
 
// Create a product class with name and price. Create 5 product objects and store in cart array. Use reduce method and print the final prize of cart items.



// console.log(document);

// console.log(document.body.childNodes);

// console.log(document.body.children);

// console.log(document.body.firstChild);  //text


// console.log(document.body.firstElementChild); //div


// console.log(document.body.parentElement);



// Select HTML Elements using selctors.

// getElementById('<idName>');


// const id1Element= document.getElementById('i1');
// console.log(id1Element);


// getElementsByClassName
// const mainClassElements = document.getElementsByClassName('mainDiv');
// console.log(mainClassElements);


// getElementsByTagName
// const divElements= document.getElementsByTagName('div');
// console.log(divElements);


// querySelector

// id selector => #<Name of ID>
// Class Selector => .<Name of Class>
// Tag selector => <Tag Name>

// const id1Element = document.querySelector('#i1');
// console.log(id1Element);


// const mainClassElements = document.querySelector('.mainDiv');
// console.log(mainClassElements);




// querySelctorAll
// const mainClassElementsAll = document.querySelectorAll('.mainDiv');
// console.log(mainClassElementsAll);

// const divElements= document.querySelectorAll('div');
// console.log(divElements);


// Change the text in DOM:

// innerHTML 
const id1ele=document.getElementById('i1');
id1ele.innerHTML="Shreysh";










































































// const sum= numbers.reduce((acc, num, index, arr)=>{

//     console.log(acc , num,  index ,arr);

//     return acc+num;

// })
// console.log(sum);