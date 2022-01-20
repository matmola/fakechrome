
const hjInfo = {
    name:"Hyejin",
    age:21,
    gender:"Female",
    isBeautiful:true,
    favMovies: ["Alice in the wonderland", "Taken"], //Object
    favFood: [                              //info object 안에 array안에 다시 object
        {   
            name:"sushi", fatty:false
        }, 
        {
            name:"Salmon", fatty:true
        }
    ]
}; //object로 동작

console.log(hjInfo.favFood[1]);




























/* let a = 221;  //let으로 변수 선언, 초기화 let은 이후에 변수 바뀌게 할 수 있음!
let b = a - 5;  //const로 선언하면 이후에 변수를 바꿀 수 없음!
a = 4
console.log(b,a); */

/* 여러줄의 주석을
넣을 수 있다! */

/* STRING 
const what = "Hyejin";  // const로 첫시작, 진짜 필요할때만 let 쓰기

console.log(what);
*/

//BOOLEAN const wat = false; // false=0 , true=1, 텍스트 아님! 불리언!

//NUMBER  const wit = 666; 

//FLOAT
// const wat = 55.1; //float는 딱 떨어지지 않는, 붕뜬 숫자!