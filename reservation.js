document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"], select');
    const patient = new Patient();

    inputs.forEach(input => {
        input.addEventListener('change', (event) => {
            const target = event.target;
            const value = target.value;
            console.log(value);

            switch (target.id) {
                case 'name': patient.name = value; break;
                case 'number1': patient.number1 = value; break;
                case 'number2': patient.number2 = value; break;
                case 'number3': patient.number3 = value; break;
                case 'emailId': patient.emailId = value; break;
                case 'domain':
                    let domainInput = document.getElementById('domainInput');
                    if (value !== "") {
                        domainInput.value = value;
                        patient.domain = value; 
                    } else {
                        domainInput.value = '';
                    } break;
                case 'domainInput': patient.domain = value; break;
                case 'detailAddress':
                    patient.address[0] = document.getElementById('postcode').value;
                    patient.address[1] = document.getElementById('homeAddress').value;
                    patient.address[2] = value; break;
                case 'personNum1': patient.personNum1 = value; break;
                case 'personNum2': patient.personNum2 = value; break;
                default: break;
            }
            
            if (Object.values(patient).some(v => v !== '')) {
                console.log(patient);
            }
        });
    });

    const lastBtn = document.getElementById('lastBtn');
    if (lastBtn) {
        lastBtn.addEventListener('click', () => {
            const nameInput = document.getElementById('name');
            const numInputs = document.getElementsByClassName('number');
            const pnInputs = document.getElementsByClassName('personNum');

            // 이름 입력 필드 검사
            if (nameInput) {
                const nameValue = nameInput.value.trim();
                if (nameValue === '' || /\d/.test(nameValue) || nameValue.length < 2) {
                    alert("이름을 정확히 입력해 주세요.");
                    nameInput.focus();
                    return; // 검사를 종료합니다.
                }
            }

            // 핸드폰 번호 입력 필드 검사
            let allNumFilledAndValid = Array.from(numInputs).every(input => {
                const value = input.value.trim();
                return value !== '' && /^\d+$/.test(value) ; // 숫자만 포함되어야 함
            });

            if (!allNumFilledAndValid) {
                alert("핸드폰 번호를 정확히 입력해 주세요.");
                Array.from(numInputs).find(input => input.value.trim() === '' || !/^\d+$/.test(input.value.trim())).focus();
                return; 
            }

            // 주민등록번호 입력 필드 검사
            let allPnFilledAndValid = Array.from(pnInputs).every(input => {
                const value = input.value.trim();
                return value !== '' && /^\d+$/.test(value); // 숫자만 포함되어야 함
            });

            if (!allPnFilledAndValid) {
                alert("주민등록번호를 정확히 입력해 주세요.");
                Array.from(pnInputs).find(input => input.value.trim() === '' || !/^\d+$/.test(input.value.trim())).focus();
                return;
            }

            // 체크박스 상태 검사
            const check1 = document.getElementById('check1');
            const check2 = document.getElementById('check2');

            if (check1 && !check1.checked) {
                alert("고유식별번호 처리 안내에 동의해주세요.");
                check1.focus();
                return; 
            } else if (check2 && !check2.checked) {
                alert("개인정보 수집 이용 안내(필수)에 동의해주세요..");
                check2.focus();
                return; 
            }

            window.open('reservation2.html', 'PopupWindow', 'width=1400,height=500'); 
        });
    }
});

class Patient {
    constructor(name = '', number1 = '', number2 = '', number3 = '', emailId = '', domain = '', postcode = '', homeAddress = '', detailAddress = '', personNum1 = '', personNum2 = '') {
        this.name = name;
        this.number1 = number1;
        this.number2 = number2;
        this.number3 = number3;
        this.emailId = emailId;
        this.domain = domain;
        this.address = [];
        this.personNum1 = personNum1;
        this.personNum2 = personNum2;
    }

    get number() {
        return this.number1 + this.number2 + this.number3;
    }

    get email() {
        return this.emailId + "@" + this.domain;
    }

    get personNumber() {
        return this.personNum1 + this.personNum2;
    }

    get mw() {
        let getNum = this.personNum2.charAt(0);
        return (getNum == 1 || getNum == 3) ? "남성" : "여성";
    }

    get age() {
        let today = new Date();
        let year = today.getFullYear();
        let birthYear = Number(this.personNum1.substring(0, 2));
        let getNum = this.personNum2.charAt(0);

        let age = (getNum < 3) ? (year + 1) - (1900 + birthYear) : (year + 1) - (2000 + birthYear);
        return String(age);
    }
}