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

    
var array=[5,3,5,7,3,56,45,78,458,42,48,46,12,48,88,51,4,1,56,89,78,452,26,12,13,16,15,14,17,18,12,49,454]
  console.log(array.pop());
  console.log(array);
  
// to remove item from begining
  array.shift();
  console.log(array);

// to add item from begining
// array.unshift("nikhil")
console.log(array);
console.log(array.length)
console.log(array[0]);
// 
let b=array.splice(2,5,-1)
console.log(b);
array[45]=11111111111
console.log(array); //32 to 45 tak empty
console.log(array[35]); //undefined
console.log(array.length); //46 
console.log(array[45]); //1111111111
array.length=40;
console.log(array.length);
console.log(array[45]); //undefined because length is been fixed to 40

let array1=new Array(1,2,3,4,4,5,5,6,6)
console.log(array1);

// ---------------join method-----------------------------
let aa=array1.join(",")
console.log(aa);
// if element is already there and we assign any element to that position that it will be replaced

array1[1]=12 
console.log(array1);

// ----------------splice method --------------------------
let v=array.splice(2,2,"1111111","12222222222222222")
console.log(v);
//later

// --------------------------concatenate method-----------------------------

let concat=array1.concat(array)
console.log(concat);

// -------------------------------slice method------------------------------

// The slice() method slices out a piece of an array into a new array.
//The slice() method creates a new array. It does not remove any elements from the source array
// The method then selects elements from the start argument, and up to (but not including) the end argument

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);

// if only 1 argument then it will give all the rest array elements
const cit=fruits.slice(2);
console.log(cit); // [lemon apple mango]

// --------------------------toString() method---------------------------------

//it converts an array to a comma separated string
console.log(array.toString());
// orginal array remains the same
console.log(array);

//  in const array we can do array methods but the array cannot be reassigned
const arra=[1,2,3,4,5]
arra[0]=12
console.log(arra);
