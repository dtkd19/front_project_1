// HTML tag selector
const selector = {
    id: (str) => document.getElementById(str),
    oneQuery: (str) => document.querySelector(str),
    allQuery: (str) => Array.from(document.querySelectorAll(str)),
    tag: (str) => document.getElementsByTagName(str)
}
const validateResultArr = [];

// functions
selector.id('name').addEventListener('input', validateName);
selector.id('id').addEventListener('input', validateId);
selector.id('password').addEventListener('input', validatePw);
selector.id('email').addEventListener('input', validateEmail);
selector.id('emailDomain').addEventListener('input', validateEmailDomain);
selector.id('phone02').addEventListener('input', validatePhone02);
selector.id('phone03').addEventListener('input', validatePhone03);
selector.id('emailSelect').addEventListener('change', applyEmailDomain);

function applyEmailDomain() {
    selector.oneQuery('.email-notify').textContent = ``;
    selector.id('emailDomain').value = selector.id('emailSelect').value;
}

function validateName() {
    const userName = selector.id('name').value;
    const nameRegex = /^[가-힣a-zA-Z]{2,}$/g;

    if (nameRegex.test(userName)) {
        validateResultArr.push(true);
    }
}

function validateId() {
    const userId = selector.id('id').value;
    const idRegex = /^(?=.*[a-zA-Z]{1,})(?=.*[0-9]{1,})[a-zA-Z0-9]{4,8}$/;
    
    if (idRegex.test(userId)) {
        selector.oneQuery('.id-notify').textContent = ``;
        validateResultArr.push(true);
    } else {
        selector.oneQuery('.id-notify').textContent = `영문자+숫자, 4자 이상 8자 미만.`;
    }
}

function validatePw() {
    const userPw = selector.id('password').value;
    const pwRegex = /^(?=.*[!@#?]{1,})(?=.*[a-zA-Z]{1,})(?=.*[0-9]{1,})[a-zA-Z0-9!@#?]{6,12}$/;

    if (pwRegex.test(userPw)) {
        selector.oneQuery('.password-notify').textContent = ``;
        validateResultArr.push(true);
    } else {
        selector.oneQuery('.password-notify').textContent = `영문자+숫자의 6자 이상 12자 미만, !@#? 중 하나 포함.`;
    }
}

function validateEmail() {
    const userEmail = selector.id('email').value;
    const emailRegex = /^(?=.*[^~!@#$%?])[a-zA-Z0-9]{2,}$/;

    if(emailRegex.test(userEmail)) {
        selector.oneQuery('.email-notify').textContent = ``;
        validateResultArr.push(true);
    }
}

function validateEmailDomain() {
    const userEmailDomain = selector.id('emailDomain').value;
    const emailDomainRegex = /^[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*(\.[A-Za-z]{2,})$/;
   
    if(emailDomainRegex.test(userEmailDomain)) {
        selector.oneQuery('.email-notify').textContent = ``;
        validateResultArr.push(true);
    } else {
        selector.oneQuery('.email-notify').textContent = `도메인:(영문자 숫자, 2자리 이상).(영문자 3자리 이상)`;
    }
}

function validatePhone02() {
    const userPhone02 = selector.id('phone02').value;
    const phoneRegex = /^[0-9]{4}$/;
    if(phoneRegex.test(userPhone02)) {
        selector.oneQuery('.phone-notify').textContent = ``;
        validateResultArr.push(true);
    } else {
        selector.oneQuery('.phone-notify').textContent = `숫자 4자리`;
    }
}

function validatePhone03() {
    const userPhone03 = selector.id('phone03').value;
    const phoneRegex = /^[0-9]{4}$/;
    if(phoneRegex.test(userPhone03)) {
        selector.oneQuery('.phone-notify').textContent = ``;
        validateResultArr.push(true);
    } else {
        selector.oneQuery('.phone-notify').textContent = `숫자 4자리`;
    }
}

function isValFull() {
    const userInfo = Array.from(document.querySelectorAll('.userInfo'));
    const userInfoVal = [];
    userInfo.forEach(tags => {
        userInfoVal.push(tags.value);
    })

    if(userInfoVal.every(vals => vals != "")){
        return true;
    } else {
        return false;
    }
}

// store user information into local storage
selector.id('confirm').addEventListener('click', () =>{
    localStorage.clear();
    // console.log(validateResultArr); // 길이가 6이네.
    const validateResult = validateResultArr.every(re => re === true);
    // validateResult에 true가 완벽히 들어왔을 때의 길이는 7.
    if(isValFull()) {
        if(validateResult && validateResultArr) {
            console.log(validateResultArr.length);
            console.log(validateResultArr);
            alert('회원가입이 완료되었습니다.');
            localStorage.setItem('userName', selector.id('name').value);
            localStorage.setItem('userId', selector.id('id').value);
            localStorage.setItem('userPw', selector.id('password').value);
            localStorage.setItem('userEmail', `${selector.id('email').value}@${selector.id('emailDomain').value}`);
            localStorage.setItem('userPhone', `${selector.id('phone01').value} ${selector.id('phone02').value} ${selector.id('phone03').value}`);
            localStorage.setItem('userAddress', `${selector.id('postcode').value} ${selector.id('homeAddress').value} ${selector.id('detailAddress').value}`);
            window.location.href = "login.html";
        } else {
            alert('모든 정보를 올바르게 적어주세요.');
        }
    } else {
        alert("비어 있는 입력값이 있습니다.");
    }
})