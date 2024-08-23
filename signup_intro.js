// 아래 둘 다 작동하는 거 확인함.
// const selector = {
//     id: (str) => document.getElementById(str),
//     oneQuery: (str) => document.querySelector(str),
//     allQuery: (str) => document.querySelectorAll(str)
// }

// function getElement(str) {
//     return{
//         id: document.getElementById(str),
//         oneQuery: document.querySelector(str),
//         allQuery: document.querySelectorAll(str)
//     }
// }

// selector.oneQuery('.child').addEventListener('click', ()=>{
//     alert('fad');
// })
// getElement('.foreign').oneQuery.addEventListener('click', ()=>{
//     alert('dafhioasdhf');
// })

const selector = {
    id: (str) => document.getElementById(str),
    oneQuery: (str) => document.querySelector(str),
    allQuery: (str) => Array.from(document.querySelectorAll(str)),
    tag: (str) => document.getElementsByTagName(str)
}

for(btns of selector.allQuery('.btn')){
    btns.addEventListener('click', ()=>{
        window.location.href = "signup_main.html";
    })
}