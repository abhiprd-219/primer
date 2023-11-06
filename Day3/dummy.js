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
 












































































// const sum= numbers.reduce((acc, num, index, arr)=>{

//     console.log(acc , num,  index ,arr);

//     return acc+num;

// })
// console.log(sum);