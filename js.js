// --------------------------------High Order functions------------------------------------------------------
const companies=[
{name:"a",category:"infra",start:"2000", end:"2020",age:"12"},
{name:"b",category:"textile",start:"1955", end:"2015",age:"40"},
{name:"c",category:"it",start:"1999", end:"2030",age:"36"},
{name:"d",category:"mining",start:"1960", end:"2050",age:"22"},
{name:"e",category:"finance",start:"1980", end:"2010",age:"42"},
{name:"f",category:"Auto",start:"1975", end:"2000",age:"50"},
]
const ages=[12,1,65,45,78,48,15,85,48,2,36,45,69,36,25,14,45,42]
arr=[]
// normal forloop
for(i=0;i<companies.length;i++)
{
    if(companies[i].age<40){
        arr.push(companies[i])
    }
}
// console.log(arr);

//-------------------------------- --------------------forEach------------------------------------------------------
let a=companies.forEach((i,index,companies)=>{
    if(i.age>=40){
        return true
        console.log(i.age);
    }
// console.log(companies)  it will print the array as much as the index of the array for example if the total index count is 5 then it will print the array 5 times
// console.log(companies[index])
},this)
//-----------------------------------------------------filter-------------------------------------------------------
// console.log(a);
// let b=ages.filter((e)=>{
//     if(e<5){
//         console.log(e);
//     }
// })

// ages.forEach((e)=>{
    // if(e<5){
    //     console.log(e);
    // }
// })
// const aa=ages.filter((age)=> age>=21)
// console.log(aa);

const bb=companies.filter((e,index)=>{
    // if(e.age===21){
    //     console.log("hi");
    // }
})
// console.log(bb);
// return expected result and a empty array
// const bb=companies.filter((e,index,array)=>{
//     if(e.age<=21){
//        return array.push(e);
//     }
// })
// console.log(bb);

// --------------------------------------------------map----------------------------------------------
let testMap=ages.map((a,index,array)=>{
    if(a>21){
       arr.push(a) 
    }
})
// console.log(testMap);

// --------------------------------------------------typeof----------------------------------------------

let f=function a(){
    console.log(a)
}
let o={ a:"nikhil",b:"bansal"}

// console.log(typeof(NaN));   //Number
// console.log(typeof("2"));   //string
// console.log(typeof(undefined));   //undefined 
// console.log(typeof("NaN"));   //string
// console.log(typeof(5));   //number 
// console.log(typeof(companies));   //object 
// console.log(typeof(ages)); //object   
// console.log(typeof(f));   //function 
// console.log(typeof(o));   //object 
// console.log(typeof(null));   //object 
// console.log(typeof(true));   //boolean 
// console.log(typeof(false));   //boolean
// console.log(typeof(10>11));  //boolean 
// console.log(typeof(10==="10"));   //boolean 
// console.log(typeof(5.65));   //number 
// console.log(typeof(Infinity));   //number 
// console.log(typeof(new Date()));   //object 
// // console.log(typeof("any regex"));   //object 
// console.log(typeof(new Number(100))); //object
// console.log(typeof(10+"10")); //string
// console.log(typeof(window)); //undefined
// console.log(typeof(document)); //undefined
// // console.log(0.1 + 0.2 == 0.3);
// console.log(10==="10"); 
// console.log(typeof(1/0)); //number 
// console.log(typeof(1/0)); //number 
// console.log(typeof(alert)) // 


let c="number";
let cc="10+10"
console.log(Number(c));
console.log(typeof(Number(cc)));

// let ax=1;
// let bbbb=2;
// let v;
// v=ax;
// ax=bbbb;
// bbbb=v;
// console.log(ax,bbbb);

// ax=ax+bbbb;
// bbb=ax-bbbb;
// ax=ax-bbbb
// console.log(ax,bbbb);

// let timer=setTimeout((timer) => {
//     console.log(timer);
//     timer+=1
//     console.log(timer);
// }, 2000);
// console.log(timer)

// function x(){
//     var xx=10;
// }
// x()
// console.log(xx); //undefined

// console.log(aa);
// var aa=1;

// console.log(br);
let br;
console.log(br);
br=1;
console.log(br);
function x(){
 y=10
}
console.log(x);

// console.log(y); it can be visible with var,let, const keyword
// y will not be visible outside using the var keyword

// --------------------------------------------ibnterview question---------------------------------------------------
// 1)what is the value of y here
var y=2;
let z=function(){
    console.log(y); 
}
z();
// ANS - 2

// 2) what is the output of this code
var ye=22
let xx=function(){
console.log(ye);
var ye=12;
}
xx();
//  ANS - undefined

// what is the oiutput of this code
var yee=22
let xxx=function(){
var yee=1;
console.log(yee);
}
console.log(yee);
xxx();

// what is the output of this code

ages[-1]=1
console.log(ages);
console.log(ages[ages.indexOf(231453)]);
console.log(ages.indexOf(231453));

// console.log(ages[-1]) // normally it will give undefined
// ANS - 1
// explanation - if an array dont have have with the index like a[12432] then it returns -1 
// arr[1233]=-1 and arr[-1] here is 1 so the result is 1
console.log( ages.sort((a,b)=>{
    return a<b;
}));
// console.log(s);
let ff=[1,2,3]+[4,5,6];
console.log(ff); //it will give me "1,2,34,5,6" because + sign will convert each array into string here
//  and last letter of first array and first letter of second array will become one string

let g=[[1,2,3]+[4,5,6]]
console.log(g);

console.log(555555555555555555555); // ANS - 555555555555555540000
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991 it is the largest number that javascript can print other than that it will print the 00000...

console.log(666666666666666666666); //666666666666666600000


(function(){
    var a=b=10;  //here b is not defined with let or var keyword hence its glocal variable now and A is block scope that's why its given 10,undefioned as result
})();
console.log(b,a); //10,undefined because b is  global varibale here cause its not decalred with let and var in function

console.log(NaN===NaN); //false
// false because when when we compare somethin g with Nan it will give me false even when it compare with itself also

console.log({}+[]); // [object object]
console.log([]+[]); //empty string

function ab(aa){
    return "aa"
}

const sentence=ab `hi there welcome to another js tricky question`
console.log(sentence);

var variable=10;
(()=>{
    console.log( variable);
    variable=20
    console.log(variable);
})();
console.log(variable);
var variable=30;
// ANS - 10 20 20 because  
// in line 225 the variable is  declared here without any keyword(let var const) so it will be a global variable and value of original variable changes 
// if it declared with kewword then it will return undefined

var string="string"*12
console.log(string); //NaN
console.log("string"+1);//string1
console.log("string"-1);// NaN
console.log(1*"2");//2

console.log("12"==12);//true
console.log(0.1+0.2==0.3); //false because 
console.log(true+false); //1 because true =1 and false =0
console.log((true+false)>2+true); //false
console.log(false*true); //just like normal multiplication
console.log([]+1);//1

(()=>{
var a=b=3;
})();
console.log(a,b);

// --------------------------------------closure ----------------------------------------------------------

function foo(){
    var name="nikhil";
    function boo(){
        console.log(name);
    }
    boo();
}
// boo();
foo();

function first(){
    var name="nikhil"
    function second(){
        console.log(name);
    }
    return second;
}
let fd=first()
fd();

function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
    //   alert(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();

  function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12 

  