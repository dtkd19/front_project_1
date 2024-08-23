const tabList = document.querySelectorAll(".tabList");
const tabContent = document.querySelectorAll(".tab_content");

tabList.forEach((item, index) => {
    item.addEventListener("click", (e) => {

        e.preventDefault(); 
        
        tabContent.forEach((content) => {
            //탭 내용 부분들을 전부 active 클래스를 제거
            content.classList.remove("active");
        });

         tabList.forEach((content) => {
            content.classList.remove("active");
        });
        //탭 버튼과 탭 내용 영역의 index에 해당하는 부분에 active 클래스를 추가한다.
        // ex) 만약 첫번째 탭(index 0)을 클릭했다면, 같은 인덱스에 있는 첫번째 탭 내용 영역에
        // active 클래스가 추가된다.
        tabList[index].classList.add("active");
        tabContent[index].classList.add("active");
    });
});