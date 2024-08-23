// Element fetching function
const selector = {
    id: (str) => document.getElementById(str),
    oneQuery: (str) => document.querySelector(str),
    allQuery: (str) => Array.from(document.querySelectorAll(str)),
    tag: (str) => document.getElementsByTagName(str)
}

selector.id('loginBtn').addEventListener('click', ()=>{
    const userId = selector.id('userId').value;
    const userPw = selector.id('userPw').value;
    if(userId == "" || userPw == "") {
        alert('이름과 비밀번호를 모두 입력해주세요.');
        return;
    }
    if(userId != localStorage.getItem('userId')) {
        alert('아이디가 잘못되었습니다.');
        return;
    }
    if(userPw != localStorage.getItem('userPw')) {
        alert('비밀번호가 잘못되었습니다.');
        return
    }
    if((userId == localStorage.getItem('userId')) && (userPw == localStorage.getItem('userPw'))) {
        alert(`${localStorage.getItem('userName')}님 환영합니다.`);
        window.location.href = "main_page_logout.html";
    }
})