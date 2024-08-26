const selector = {
    id: (str) => document.getElementById(str),
    oneQuery: (str) => document.querySelector(str),
    allQuery: (str) => Array.from(document.querySelectorAll(str)),
    tag: (str) => document.getElementsByTagName(str)
}

document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM successfully loaded.');

    const userName = selector.id("name");
    userName.value = localStorage.getItem("userName");

    const userId = selector.id("id");
    userId.value = localStorage.getItem("userId");

    const userEmail = selector.id("email");
    const userDomain = selector.id("emailDomain");
    let userEmails = new Array(2);
    userEmails = localStorage.getItem("userEmail").split("@");
    userEmail.value = userEmails[0];
    userDomain.value = userEmails[1];
    
    const phone1 = selector.id("phone01");
    const phone2 = selector.id("phone02");
    const phone3 = selector.id("phone03");
    let phones = new Array(3);
    phones = localStorage.getItem("userPhone").split(" ");
    phone1.value = phones[0];
    phone2.value = phones[1];
    phone3.value = phones[2];
})