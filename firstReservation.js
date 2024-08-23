document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"], select');
    const nonMemberPatient = new NonMemberPatient();

    inputs.forEach(input => {
        input.addEventListener('change', (event) => {
            const target = event.target;
            const value = target.value;
            console.log(value);

            switch(target.id) {
                case 'number1': nonMemberPatient.number1 = value; break;
                case 'number2': nonMemberPatient.number2 = value; break;
                case 'number3': nonMemberPatient.number3 = value; break;
                case 'memotext' : nonMemberPatient.memo = value; break;
                default : break;
            }

            if (Object.values(nonMemberPatient).some(v => v !== '')) {
                console.log(nonMemberPatient);
            }
        });        
    });

    const btn = document.getElementById('btn');
    if(btn) {
        btn.addEventListener('click', () => {
            const numInputs = document.getElementsByClassName('number');
            const memo = document.getElementById('memotext');

            let allNumFilledAndValid = Array.from(numInputs).every(input => {
                const value = input.value.trim();
                return value !== '' && /^\d+$/.test(value); // 숫자만 포함되어야 함
            });
            if (!allNumFilledAndValid) {
                alert("핸드폰 번호를 정확히 입력해 주세요.");
                Array.from(numInputs).find(input => input.value.trim() === '' || !/^\d+$/.test(input.value.trim())).focus();
                return; 
            }

            if (memo) {
                const memoValue = memo.value;
                if (memoValue == '') {
                    alert("메모를 남겨 주세요.");
                    memoValue.focus();
                    return; // 검사를 종료합니다.
                }
            }
        })
    }
});


class NonMemberPatient {
    constructor(number1 = '', number2 = '', number3 = '', memo = '') {
        this.number1 = number1;
        this.number2 = number2;
        this.number3 = number3;
        this.memo = memo;
    }

    get nonMemberPatientInfo() {
        return `전화번호 : ${this.number1}${this.number2}${this.number3}, 전달 사항 : ${this.memo}`;
    }
};