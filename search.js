 //검색창 검색
 document.getElementById('searchBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const keyword = document.getElementById('keyword').value;
    const deptItems = document.querySelectorAll('.dept_list .name');
    deptItems.forEach(item => {
        const deptText = item.querySelector('.dept_text').innerText;
            if (deptText.includes(keyword) || keyword == '') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
    
    // //초성버튼
    // const choBtn = document.querySelectorAll(".choBtn");
    // const choDept = document.querySelectorAll(".dept_list .name");
    
    // choBtn.forEach((item, index) => {
    //     item.addEventListener("click", (e) => {
    //         e.preventDefault(); 
    //         choBtn.forEach((content) => {
    //             content.classList.remove("active");
    //         });
    //         choDept.forEach((content) => {
    //             const deptText = content.querySelector('.dept_text').innerText;
    //             // if(e.target.dataset.val == cho_hangul(deptText[0])){
    //             //     console.log(cho_hangul(deptText[0]));
    //             //     console.log(content);
    //             //     return content;
    //             // }else{
    //             //     content.classList.remove("active");
    //             // }
    //         });
    //         choBtn[index].classList.add("active");
    //         choDept[index].classList.add("active");
    //     });
    // });
    const choBtn = document.querySelectorAll(".choBtn");
    const choDept = document.querySelectorAll(".dept_list .name");
    choBtn.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const selectedVal = e.target.dataset.val;
            choBtn.forEach(button => button.classList.remove("active"));
            choDept.forEach(dept => {
                const deptText = dept.querySelector('.dept_text').innerText;
                const initialSound = cho_hangul(deptText[0]);
                if (initialSound === selectedVal) {
                    dept.style.display = 'block';
                } else {
                    dept.style.display = 'none';
                }
            });
            e.target.classList.add("active");
        });
    });
    // 전체버튼
    document.querySelector(".choBtn.t").addEventListener("click", (e) => {
        e.preventDefault();
        // 모든 항목을 표시
        document.querySelectorAll('.dept_list .name').forEach(item => item.style.display = 'block');
        // 모든 버튼의 active 클래스를 제거
        document.querySelectorAll(".choBtn").forEach(btn => btn.classList.remove("active"));
        // 전체 버튼에 active 클래스 추가
        e.target.classList.add("active");
    });
    
    //처음 전체화면 => 전체active추가
    document.addEventListener('DOMContentLoaded', () => {
        const choBtnAll = document.querySelector(".choBtn.t");
        const choDept = document.querySelectorAll('.dept_list .name');
        choBtnAll.classList.add("active");
        choDept.forEach(item => item.style.display = 'block');
    });
    
    
    //초성추출
    function cho_hangul(str) {
        cho = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
        result = "";
        for(i=0;i<str.length;i++) {
          code = str.charCodeAt(i)-44032;
          if(code>-1 && code<11172) result += cho[Math.floor(code/588)];
        }
        return result;
    };