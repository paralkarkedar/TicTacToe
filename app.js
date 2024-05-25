//  chapter first : variable and datatype 
// // there are three variable in javascript 
// let first ;
// const second = "Kedah";
// var third = true;



// // how to create object in javascript 
// const Student ={
//     firstName : "kedar",
//     lastName : "kulkarni",
//     age : 25,
//     address:"georai beed"
// }

// //how change the value of inside present variable 
// Student["firstName"] = "kartik";

// console.log(Student);


// //  loops java script 

// const nums = 19;

// if(nums > 18){
//     console.log("You Can vote");
// } else{
//     console.log("You Can't vote");
// }

// // // if else statement in java script
// let num = parseInt(prompt("Enter your number"));
// if(num > 18){
//     console.log("You Can vote");
//     } else if(num === 18){
//         console.log("You are 18");
//         } else{
//             console.log("You Can't vote");
//             }
            
           
//================ Loop In Js =======================
// // for loop
// for(let i =0; i<5;i++){
//     console.log("hellow kedar");
// }

// let i = 0;
// while(i<5){
//     console.log("hellow kedar");
//     i++;
// }


// let i =1;
// while(i%2 === 0 && i<100){
//     console.log(i);
//     i++
// }


// for(let i = 1; i<=100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }


// let num = 10;

// let input = prompt("Enter the number:")

// while(num != input){
//     input = prompt("Enter the correct number:")
// }

// console.log("congratulation");




//==================== String in Js ===========================

// let str = 'kedar';
// console.log(str[3]);


// let str = `kedar ${ 1+4} good boy`;
// console.log(str);

// let fullname = prompt("Enter your full name")

//  username = fullname.concat("@"+fullname+fullname.length)
//  console.log(username);



// ======================= Arrays in Js =======================

// // question for find the average of marks
// let marks = [10,23,46,78,99,87];
// let sum =0;
// for(let newmarks of marks){
//     sum = sum +newmarks;

// }
// let avg = sum/marks.length;

// console.log(avg);


// let prince = [200,300,400,399,100]

// for(let item of prince){
//     offer = item/10;
//     offer = item - offer;
//     console.log(offer);
// }


// ==============Function in Js====================


//// progrma for the find the vowel in the program 
// function countVolwel(str){
//     let count = 0;
//     for(let char of str){
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             count++;
//         }
//     }
//    return count;

// }

// let count = countVolwel("kedar");
// console.log(count);




//// program for find the vowel by the used of the arrow function
// const vowel = (str) =>{
//     let count = 0;
//     for(let char of str){
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             count++;
//         }
//     }
//    return count;
// }

// let count = vowel("kedar paralkar");
// console.log(count);



// let nums = prompt("Enter a number:")


// arr = [];

// for(let i =1; i<=nums; i++){
//     arr[i-1] = i;
// }

// console.log(arr);

// let sum = arr.reduce((pre,curr) => {
//     return pre + curr
// })

// console.log(sum);

// let factorial = arr.reduce((pre,curr) =>{
//     return pre*curr;
// })

// console.log(factorial);

// let h1 = document.querySelector("h1");

// console.dir(h1);
// h1.innerText = "hellow shivkanaya"

// let div = document.querySelectorAll(".box")
// console.dir(div);

// div[0].innerText = "hello four"
// div[1].innerText = "hello five"
// div[2].innerText = "hello six"

// let idx = 0;

// for(let divs of div){
//     divs.innerText = `hellow ${idx}`
//     idx++;
// }


 // ============Atributes================

//   let div = document.querySelector("div");
//   console.log(div);
//   let attr =  div.getAttributes("id");
//   console.log(attr);


// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","kedar"));



// ================ Attributes in Js =======================
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me";

// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

// document.querySelector("body").prepend(newBtn);




// =================== Events In Js ==================


// let btn = document.querySelector("button")
// btn.onclick = () =>{
//     console.log("Button Clicked" + alert("hello kedar"));
//     let a =3;
//     let b = 7;
//     console.log(a+b);
// }


//=======Events Listener =============

// let btn = document.querySelector("button");
// btn.addEventListener("click",()=>{
//     console.log("Button Clicked");
   
//     })

// btn.addEventListener("click",()=>{
//     console.log("Button Clicked-1");
   
//     })


// write program for light and dark mode

// let btn = document.querySelector("button")
// let mode = "light"
// btn.addEventListener("click",() =>{

//     if(mode === "light"){
//         mode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         mode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(mode);

// });




// change the color on the page
// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });



/// used th function in above 
// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function bgChange() {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// }

// btn.onclick = bgChange;


/// change the activity on front
// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");
// textBox.addEventListener("keydown", (event) => {
//   output.textContent = `You pressed "${event.key}".`;
// });



/// play video 

// const btn = document.querySelector("button");
// const box = document.querySelector("div");
// const video = document.querySelector("video");

// btn.addEventListener("click", () => box.classList.remove("hidden"));
// video.addEventListener("click", () => video.play());
// box.addEventListener("click", () => box.classList.add("hidden"));



// game of square box

// function random(number) {
//     return Math.floor(Math.random() * number);
//   }
  
//   function bgChange() {
//     const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//     return rndCol;
//   }
  
//   const container = document.querySelector("#container");
  
//   container.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = bgChange();
//   });
  

// tic tac tok game 

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);