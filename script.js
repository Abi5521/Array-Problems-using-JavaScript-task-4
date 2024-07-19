//remove duplicates in array
var arr = [1,2,4,8,4,6,7,2];
var unique = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(unique);

//longest string in an array
var arr1 = ["Archie","Jughead","Betty","Veronica"];
let value=arr1[0];
for(let i of arr1){
    if(value.length<i.length){
        value=i;
    }
}
console.log(value);

//create array with given length
let arr2 = new Array(5);
for(let i=0; i<arr2.length;i++){
    arr2[i]=i+1;
}
arr2 = arr2.map((i) => i*8);
console.log(arr2);

//array slice()
var arr3 = [1,2,3,4,5,6,7,8];
var arr4 = arr3.slice(2,4);
console.log(arr4);

//merging array
var arr5 = [1,2,3,4,5,6,7,8];
var arr6 = [9,10,11,12];
var arr7 = arr5.concat(arr6);
console.log(arr7);