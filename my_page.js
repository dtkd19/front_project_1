const selector = {
    id: (str) => document.getElementById(str),
    oneQuery: (str) => document.querySelector(str),
    allQuery: (str) => Array.from(document.querySelectorAll(str)),
    tag: (str) => document.getElementsByTagName(str)
}

document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM successfully loaded.');
    
    const userName = selector.id('name');
    userName.value = localStorage.getItem('userName');
})