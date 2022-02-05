// es6 topics
// let var const
//hoisting
//object deconstructuring
// arrow function this inside object and function inside function
//default parameters
//constructor function 
// call apply bind 
//object.create
//promises
//high order functions
//async await

// x=x+1
// var j;
// console.log(j);
// console.log(x);
// var x=10;
// // let x=10
// x=x+1
// console.log("hi there", x)

// let a=1+1
// a=1+"1" //2
// a=4*"5" //20
// a=true+"10" //true10
// a=true-10 //normal multimplication assume true /false =1/0
// a=false/"2" //0
// a=2/false //infinity
// a=
// console.log(a);

//object deconstructuring

// const user={
//     name:"nikhilE",
//     age:22,
//     sex:["1",2]
// }

// var {name,age,sex}=user
// console.log(name,age,sex[0]);

// var user2 ={
//     name:"nihkil",
//     age:22,
//     logName:function(){
//         console.log(this.name);
//         //if we use function inside any function in object and refer this.name then this will not refer to the object so use arrow function instead
//         var fullname=()=>{
//             console.log(this.name);
//         }
//         fullname()
//     }
// }
// user2.logName()

//real life scenario

// button.addEventListener('click',function(){
//     var addFage=()=>{
//         this.style.display="none"
//     }
// })


//default parameters 

// function multiple(x,y){
//     let a=x||1
//     let b=y||1
//     console.log(a*b);
// }
// multiple(10,20)

// //constructor function

function person(name,age,sex){
    this.name=name
    this.age=age
    this.sex=sex
}
const nikhil=new person("nikhil",22,"m")
// protoype property will not be added into the object but we can still access it
person.prototype.nme="nikhl";

function Nikhil(name,age,sex,occupation,hobby){
    person.call(this, name,age,sex)
    this.occupation=occupation;
    this.hobby=hobby
}
Nikhil.prototype=Object.create(person.prototype)
const nikhil1=new Nikhil("Nikhil",22,"m","Front end developer","traveeling")
console.log(nikhil1);
console.log(nikhil1.nme);
`use strict`
function cart (prod,number){
    // this.item=item
    this.prod=prod
    this.number=number
}
cart.prototype.confirmation="Yes"
// var prod=new cart(['n',"m","b"],32,23,12)
function Checkout(prod,number,amount,tax){
    cart.apply([this,prod,number])
    this.amount=amount;
    this.tax=tax;

}
const Order=new Checkout("g",4,15000,150)
console.log(Order.prod);
console.log(Order.amount);

//ES6 version

// class shoppingList{
//     constructor(items,nr){
//         this.items=items
//         this.nr=nr
//     }
// }

// const mylist=new shoppingList(["milk","choc","icream"],3);

// class Product extends shoppingList{
//     constructor(items,nr,amount,cost){
//         super(items,nr)
//         this.amount=amount
//         this.cost=cost
//     }
// }

// const product=new Product(["n","m"],3,2,20)
// console.log(product);

// function mammal(legs){
//     this.legs=legs
// }

// function cat(legs,isDomesticated)
// {
// mammal.call(this, legs)
// this.isDomesticated=isDomesticated
// }

// const meow=new cat(4,"yes")
// console.log(meow);

// //apply 

// let arr=[1,2,3,4,5,6,7]

// console.log( Math.min(1,2,3,4,5,56,6,0))


// class carte {
//     constructor(item,number){
//     this.item=item;
//     this.number=number
// }
// }

// const phone=new carte("iph0ne",1)
// carte.prototype.date=new Date()
// console.log(phone);

// class checkouting extends carte{
//     constructor(item,number,amount,confirm){
//         super(item,number)
//         this.amount=amount;
//         this.confirm=confirm
//     }
// }

// const iphone=new checkouting("iphone13",1,115000,"yes")
// console.log(iphone);

// console.log(iphone.date);