// 1. 합은? 을 클릭 했을 때
// 2. 두 가지 인풋의 값의 합을 구해서
// 3. answer 에 넣는다.

let getSum = window.document.body.querySelector('#get-sum');
// let getSum = window.document.getElementById('get-sum'); // 요소의 id로 가져올 때만 사용.

let getSub = window.document.body.querySelector('#get-sub');
let getMul = window.document.body.querySelector('#get-mul');
let getDiv = window.document.body.querySelector('#get-div');
let getRem = window.document.body.querySelector('#get-rem');

let inputA = window.document.body.querySelector('#value-a');
let inputB = window.document.body.querySelector('#value-b');
/* 선택된 input 요소의 경우에는 value 속성(property)으로 그 값을 가져올 수 있다. */

let answer = window.document.body.querySelector('#answer');

window.document.body.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        let op = a.getAttribute('operator');
        answer.innerText = eval(`${inputA.value} ${op} ${inputB.value}`);
    });
});

// getSum.addEventListener('click', () => { 
//     let valueA = parseInt(inputA.value);
//     let valueB = parseInt(inputB.value);
//     // let valueA = (inputA.value);
//     // let valueB = (inputB.value);

//     answer.innerText = eval(valueA + valueB);
// });

// getSub.addEventListener('click', () => {
//     let valueA = parseInt(inputA.value);
//     let valueB = parseInt(inputB.value);

//     answer.innerText = eval(valueA - valueB);
// });

// getMul.addEventListener('click', () => {
//     let valueA = parseInt(inputA.value);
//     let valueB = parseInt(inputB.value);

//     answer.innerText = eval(valueA * valueB);
// });

// getDiv.addEventListener('click', () => {
//     let valueA = parseInt(inputA.value);
//     let valueB = parseInt(inputB.value);

//     answer.innerText = eval(valueA / valueB);
// });

// getRem.addEventListener('click', () => {
//     let valueA = parseInt(inputA.value);
//     let valueB = parseInt(inputB.value);

//     answer.innerText = eval(valueA % valueB);
// });
