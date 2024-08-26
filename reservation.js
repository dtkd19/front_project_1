document.addEventListener('DOMContentLoaded', () => {
    const tabList = document.querySelectorAll(".nav_memberchoice a");
    const tabContent = document.querySelectorAll(".infotabel");
    
    tabList.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); // 기본 동작을 막습니다.

            // 선택한 탭의 href 속성 값을 가져옵니다.
            const targetId = item.getAttribute("href");

            // 모든 탭 내용 영역을 숨깁니다.
            tabContent.forEach((content) => {
                content.classList.remove("active");
            });

            // 모든 탭에서 active 클래스를 제거합니다.
            tabList.forEach((tab) => {
                tab.parentElement.classList.remove("active");
            });

            // 클릭된 탭의 active 클래스를 추가합니다.
            item.parentElement.classList.add("active");

            // href 속성의 id를 가진 요소만 보이도록 active 클래스를 추가합니다.
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.classList.add("active");
            }
        });
    });

    const inputs = document.querySelectorAll('input[type="text"], input[type="password"], select');
    const patient = new Patient();

    inputs.forEach(input => {
        input.addEventListener('change', (event) => {
            const target = event.target;
            const value = target.value;
            console.log(value);

            switch (target.id) {
                case 'member_name': case 'non_member_name':
                    patient.name = value; break;
                case 'member_number1': case 'non_member_number1':
                    patient.number1 = value; break;
                case 'member_number1': case 'non_member_number2':
                    patient.number2 = value; break;
                case 'member_number3': case 'non_member_number3':
                    patient.number3 = value; break;
                case 'member_emailId': case 'non_member_emailId': 
                    patient.emailId = value; break;
                case 'member_domain': case 'non_member_domain':
                    let domainInput = document.getElementById(target.id === 'member_domain' ? 'member_domainInput' : 'non_member_domainInput');
                    if (value !== "") {
                            domainInput.value = value;
                            patient.domain = value; 
                    } else {
                            domainInput.value = '';
                        } break;
                case 'member_domainInput': case 'non_member_domainInput': patient.domain = value; break;
                case 'member_detailAddress': case 'detailAddress2':
                    patient.address[0] = document.getElementById(target.id === 'member_detailAddress' ? 'member_postcode' : 'postcode2').value;
                    patient.address[1] = document.getElementById(target.id === 'member_detailAddress' ? 'member_homeAddress' : 'homeAddress2').value;
                    patient.address[2] = value; break;
                case 'member_perNum1': case 'non_member_perNum1':
                    patient.personNum1 = value; break;
                case 'member_perNum2': case 'non_member_perNum2': 
                    patient.personNum2 = value; break;
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
            const nameInput = document.querySelector('.infotabel.active .reser_name');
            const relationshipSelect = document.querySelector('.infotabel.active #non_member_relationship');
            const numInputs = document.querySelectorAll('.infotabel.active .number');
            const pnInputs = document.querySelectorAll('.infotabel.active .personNum');

            // 이름 입력 필드 검사
            if (nameInput) {
                const nameValue = nameInput.value.trim();
                if (nameValue === '' || /\d/.test(nameValue) || nameValue.length < 2) {
                    alert("이름을 정확히 입력해 주세요.");
                    nameInput.focus();
                    return; // 검사를 종료합니다.
                }
            }

            if (relationshipSelect) {
                const relationshipValue = relationshipSelect.value;
                if (relationshipValue === "") {
                    alert("환자와의 관계를 선택해 주세요.");
                    relationshipSelect.focus();
                    return; // 검사를 종료합니다.
                }
            }

            // 핸드폰 번호 입력 필드 검사
            let allNumFilledAndValid = Array.from(numInputs).every(input => {
                const value = input.value.trim();
                return value !== '' && /^\d+$/.test(value); // 숫자만 포함되어야 함
            });

            if (!allNumFilledAndValid) {
                alert("핸드폰 번호를 정확히 입력해 주세요.");
                const invalidInput = Array.from(numInputs).find(input => input.value.trim() === '' || !/^\d+$/.test(input.value.trim()));
                if (invalidInput) invalidInput.focus();
                return;
            }

            // 주민등록번호 입력 필드 검사
            let allPnFilledAndValid = Array.from(pnInputs).every(input => {
                const value = input.value.trim();
                return value !== '' && /^\d+$/.test(value); // 숫자만 포함되어야 함
            });

            if (!allPnFilledAndValid) {
                alert("주민등록번호를 정확히 입력해 주세요.");
                const invalidInput = Array.from(pnInputs).find(input => input.value.trim() === '' || !/^\d+$/.test(input.value.trim()));
                if (invalidInput) invalidInput.focus();
                return;
            }

            const check1 = document.getElementById('check1');
            const check2 = document.getElementById('check2');

            if (check1 && !check1.checked) {
                alert("고유식별번호 처리 안내에 동의해주세요.");
                check1.focus();
                return; 
            } else if (check2 && !check2.checked) {
                alert("개인정보 수집 이용 안내(필수)에 동의해주세요.");
                check2.focus();
                return; 
            }

            // 유효성 검사를 모두 통과했을 때의 동작
            console.log("All inputs are valid. Proceeding to next step.");
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