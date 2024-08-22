document.addEventListener('DOMContentLoaded', function() {
    var gnbBox = document.querySelector('.gnb-box');
    var section = document.querySelector('.opensection-wrap');

    function showSection() {
        section.style.display = 'block';
        setTimeout(function() {
            section.classList.add('show');
        }, 10);
    }

    function hideSection() {
        section.classList.remove('show');
        setTimeout(function() {
            section.style.display = 'none';
        }, 300); // 애니메이션 시간이 필요
    }

    gnbBox.addEventListener('mouseover', showSection);
    section.addEventListener('mouseover', showSection);

    function handleMouseOut(e) {
        if (!gnbBox.contains(e.relatedTarget) && !section.contains(e.relatedTarget)) {
            hideSection();
        }
    }

    gnbBox.addEventListener('mouseout', handleMouseOut);
    section.addEventListener('mouseout', handleMouseOut);
});
