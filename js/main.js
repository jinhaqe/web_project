let currentSection = 0; // 현재 섹션을 추적
let isScrolling = false; // 스크롤이 진행 중인지 확인

// 모든 섹션을 가져옵니다.
const sections = document.querySelectorAll("section");

// 스크롤 이벤트 리스너
window.addEventListener("wheel", function (event) {
   // 이미 스크롤 중이면 처리하지 않음
   if (isScrolling) return;

   isScrolling = true;

   if (event.deltaY > 0) {
      // 아래로 스크롤 시
      if (currentSection < sections.length - 1) {
         currentSection++;
         scrollToSection(currentSection);
      }
   } else {
      // 위로 스크롤 시
      if (currentSection > 0) {
         currentSection--;
         scrollToSection(currentSection);
      }
   }

   // 스크롤 후 일정 시간 동안 다른 스크롤을 막음
   setTimeout(function () {
      isScrolling = false;
   }, 500); // 800ms 후에 다시 스크롤 가능 (시간을 조정 가능)
});

// 특정 섹션으로 스크롤
function scrollToSection(index) {
   sections[index].scrollIntoView({
      behavior: "smooth", // 부드러운 스크롤
      block: "start", // 시작 지점에서 스크롤
   });
}
