const btnList = document.querySelectorAll(".calendar_date");
const content = document.getElementsByClassName("alert_area")[0];
const timeBtn = document.querySelectorAll(".btn_time");
const nextBtn = document.getElementById("footer_btn");


//날짜버튼 클릭시 alert_area 띄우기
btnList.forEach(e=>{
    e.addEventListener('click',()=>{
        content.style.display = 'block';

    })
});

let check1 = 0;
let check2 = 0;

//날짜 클릭하는 곳으로 border색 입히기
btnList.forEach((e, index) => {
    e.addEventListener('click', () => {
        btnList.forEach((btn)=>{
            btn.classList.remove('selected');
        })
        
        btnList[index].classList.add('selected');
        check1 += 1;
        check();
    });
});

//시간 클릭하는 곳으로 border색 입히기
timeBtn.forEach((e, index) => {
    e.addEventListener('click', () => {
        timeBtn.forEach((btn)=>{
            btn.classList.remove('selected');
        })
        
        timeBtn[index].classList.add('selected');
        check2 += 1;
        check();
    });
});


//다음단계 활성화
function check(){
    if(check1 == 1 && check2 == 1){
        nextBtn.classList.add('selected');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // 첫 번째 탭 리스트와 내용 영역을 가져옵니다.
    const tabList = document.querySelectorAll(".nav_resev_list a");
    const tabContent = document.querySelectorAll(".choiceArea");

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

            const value = item.getAttribute("data-value");
            document.getElementById('tVal2').innerHTML = value;
        });
    });


    // 두 번째 탭 리스트와 내용 영역을 가져옵니다.
    const tabList2 = document.querySelectorAll("#subject a");
    const tabContent2 = document.querySelectorAll(".choiceArea2");
    const check1 = document.getElementById("check1");
    
    // 페이지가 로드될 때 choiceArea2를 숨깁니다.
    tabContent2.forEach((content) => {
        content.style.display = "none";
    });

    tabList2.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); // 기본 동작을 막습니다.

            // 선택한 탭의 href 속성 값을 가져옵니다.
            const targetId = item.getAttribute("href");

            // 모든 탭 내용 영역을 숨깁니다.
            tabContent2.forEach((content) => {
                content.style.display = "none";
                content.classList.remove("active");
            });

            // 모든 탭에서 active 클래스를 제거합니다.
            tabList2.forEach((tab) => {
                tab.parentElement.classList.remove("active");
            });

            // 클릭된 탭의 active 클래스를 추가합니다.
            item.parentElement.classList.add("active");

            // href 속성의 id를 가진 요소만 보이도록 active 클래스를 추가하고 display를 설정합니다.
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.style.display = "block";
                targetElement.classList.add("active");
                // 스크롤 기능 추가
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            check1.checked = true;
        });
    });

    // 두 번째 탭 리스트와 내용 영역을 가져옵니다.
    const tabList3 = document.querySelectorAll(".choiceArea2 a");
    const tabContent3 = document.querySelector(".section_calendar");
    const check2 = document.getElementById("check2");
    
    // 페이지가 로드될 때 choiceArea2를 숨깁니다.
    tabContent3.style.display = "none";

    tabList3.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); // 기본 동작을 막습니다.

            // 선택한 탭의 href 속성 값을 가져옵니다.
            const targetId = item.getAttribute("href");

            // 모든 탭 내용 영역을 숨깁니다.
            tabContent3.style.display = "none";

            // 모든 탭에서 active 클래스를 제거합니다.
            tabList3.forEach((tab) => {
                tab.parentElement.classList.remove("active");
            });

            // 클릭된 탭의 active 클래스를 추가합니다.
            item.parentElement.classList.add("active");

            // href 속성의 id를 가진 요소만 보이도록 active 클래스를 추가하고 display를 설정합니다.
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.style.display = "block";
                targetElement.classList.add("active");
                // 스크롤 기능 추가
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }

            check2.checked = true;
        });
    });

    const footerBtn = document.querySelector("#footer_btn");
    const step4Display = document.querySelector("#step4Display"); 
    const check3 = document.getElementById("check3"); 
    
    // 페이지가 로드될 때 step4Display를 숨깁니다.
    step4Display.style.display = "none";
    
    footerBtn.addEventListener("click", (e) => {
        e.preventDefault(); // 기본 동작을 막습니다.
    
        // step4Display를 보이도록 설정하고 active 클래스를 추가합니다.
        step4Display.style.display = "block";
        step4Display.classList.add("active");
    
        // 스크롤 기능 추가
        step4Display.scrollIntoView({ behavior: "smooth", block: "start" });
    
        // 확인 체크박스를 체크 상태로 만듭니다.
        check3.checked = true;
    });

    document.getElementById('footer_btn').addEventListener('click', () => {
        const selectedDate = document.querySelector(".calendar_date.selected").innerText;
        const selectedTime = String(document.querySelector(".btn_time.selected").innerText);
        console.log(selectedDate);
        
        document.getElementById('selectedSubject').innerHTML = selectedSubject;
        document.getElementById('selectedDoctor').innerHTML = selectedDoctor;
        document.getElementById('selectedDate').innerHTML = `2024년 8월 ${selectedDate}일 ${selectedTime}`;
        document.getElementById('selectedName').innerHTML = localStorage.getItem('userName');
        let userSerial1 = localStorage.getItem('userSerialNum').split(' ')[0];
        document.getElementById('sectionBirth').innerHTML = userSerial1;
    });

    document.querySelectorAll('.choiceArea a').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            selectedSubject = this.getAttribute('data-value');
        });
    });
    document.querySelectorAll('.choiceArea2 a').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            selectedDoctor = this.getAttribute('data-value');
        });
    });

    document.getElementById('reserv_btn').addEventListener('click', () => {
        alert("진료 예약이 완료되었습니다.");
        window.close();
    });
});