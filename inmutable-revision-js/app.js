const fruits=["apple","banana","orange","mango"];
fruits.splice(1,1);
console.log(fruits);
const newFruits=fruits.filter((fruit)=>fruit !="mango")
console.log(fruits);
console.log(newFruits);
//  console.log(fruits);
// fruits.push("lemon");
// console.log(fruits);

// const newFruits=[...fruits,"grape"]
// console.log(fruits);
// console.log(newFruits);

const obj={
    a:'aaa',
    b:'bbb',
    c:'ccc'
}
// console.log(obj);
obj.d="ddd";
// console.log(obj);

const newObj={...obj,e:'eee'}
// console.log(obj);
// console.log(newObj);
