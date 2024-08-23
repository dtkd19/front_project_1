// window.addEventListener('scroll', function() {
//     var btnTop = document.querySelector('.btn-top');
//     if (window.scrollY > 300) { // 스크롤 위치가 300px 이상일 때
//         btnTop.style.display = 'block'; // 버튼 표시
//     } else {
//         btnTop.style.display = 'none'; // 버튼 숨김
//     }
// });

// 버튼 클릭 시 페이지 상단으로 부드럽게 이동
function moveTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드러운 스크롤
    });
}
