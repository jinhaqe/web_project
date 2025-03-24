let currentSection = 0; // 현재 섹션을 추적
let isScrolling = false; // 스크롤이 진행 중인지 확인

const sections = document.querySelectorAll("section");

// 섹션으로 스크롤
function scrollToSection(index) {
   sections[index].scrollIntoView({
      behavior: "smooth",
      block: "start", // 시작 지점에서 스크롤
   });
}

// 스크롤 이벤트 리스너
window.addEventListener("wheel", function (event) {
   // 이미 스크롤 중이면 처리하지 않음
   if (isScrolling) return;

   // wheel 이벤트에서 기본 동작 방지 (멀티 섹션 스크롤 방지)
   event.preventDefault();
   isScrolling = true; // 스크롤 시작

   const scrollDirection = event.deltaY > 0 ? "down" : "up"; // 스크롤 방향 확인

   if (scrollDirection === "down" && currentSection < sections.length - 1) {
      currentSection++; // 섹션 증가
   } else if (scrollDirection === "up" && currentSection > 0) {
      currentSection--; // 섹션 감소
   }

   // 섹션으로 스크롤
   scrollToSection(currentSection);

   // 일정 시간 후에 스크롤 상태를 리셋
   setTimeout(() => {
      isScrolling = false;
   }, 400); // 400ms 후에 스크롤 가능하도록 설정
});

// 페이지 로드 시 첫 번째 섹션으로 스크롤
window.onload = function () {
   document.getElementById("section1").scrollIntoView({
      behavior: "smooth",
      block: "start",
   });
};

// 슬라이드 배너 이동
$(document).ready(function () {
   let currentIndex = 0;
   const $carouselInner = $(".carousel-inner");
   const $slides = $(".carousel-item");
   const $indicators = $(".indicator");
   const totalItems = $slides.length;
   let autoSlideInterval; // 자동 슬라이드 인터벌을 저장할 변수

   // 페이지 로드 시 첫 번째 인디케이터 활성화 추가
   $indicators.eq(0).addClass("active");

   // 슬라이드 이동 함수
   function showSlide(index) {
      $carouselInner.css("transform", `translateX(-${index * 100}%)`);
      // 인디케이터 즉시 업데이트 (기다리지 않고)
      $indicators.removeClass("active");
      $indicators.eq(index).addClass("active");

      // 애니메이션 완료 이벤트 처리
      $carouselInner.one("transitionend", function () {
         console.log("슬라이드 전환 완료:", index);
      });
   }

   // 자동 슬라이드 변경 (5초마다)
   function startAutoSlide() {
      autoSlideInterval = setInterval(function () {
         currentIndex = (currentIndex + 1) % totalItems; // 다음 슬라이드로 이동
         showSlide(currentIndex);
      }, 5000); // 5초 마다 자동으로 슬라이드 변경
   }

   // 자동 슬라이드 시작
   startAutoSlide();

   // 슬라이드 이동 (이전, 다음 버튼)
   $(".carousel-prev").click(function () {
      currentIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
      showSlide(currentIndex);
      resetAutoSlide(); // 버튼 클릭 시 자동 슬라이드를 리셋
   });

   $(".carousel-next").click(function () {
      currentIndex = currentIndex === totalItems - 1 ? 0 : currentIndex + 1;
      showSlide(currentIndex);
      resetAutoSlide(); // 버튼 클릭 시 자동 슬라이드를 리셋
   });

   // 인디케이터 클릭 시 해당 슬라이드로 이동
   $indicators.click(function () {
      currentIndex = $(this).data("slide");
      showSlide(currentIndex);
      resetAutoSlide(); // 버튼 클릭 시 자동 슬라이드를 리셋
   });

   // 자동 슬라이드를 리셋하는 함수
   function resetAutoSlide() {
      clearInterval(autoSlideInterval); // 이전의 자동 슬라이드 인터벌을 멈춤
      startAutoSlide(); // 새로운 자동 슬라이드 인터벌 시작
   }

   // 사이드바 토글
   $(".hamburger").click(function () {
      $(".sidebar").toggleClass("open");
   });
});

$(document).ready(function () {
   // 메뉴 항목에 마우스가 들어가면 드롭다운을 표시
   $(".menu > li").mouseenter(function () {
      $(this).children(".submenu").stop(true, true).slideDown(200);
   });

   // 메뉴 항목에서 마우스를 떼면 드롭다운을 숨김
   $(".menu > li").mouseleave(function () {
      $(this).children(".submenu").stop(true, true).slideUp(200);
   });
});

// 메뉴 랜덤 추천
let random1 = Math.floor(Math.random() * 17 + 1);

console.log(random1);

// pick_menu 애니메이션
// IntersectionObserver를 사용하여 요소가 화면에 들어올 때 애니메이션을 적용
document.addEventListener("DOMContentLoaded", function () {
   const pickMenus = document.querySelectorAll(".pick_menu");
   const button = document.querySelector(".other_menu");

   // 옵저버 콜백 함수
   const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            // 요소가 화면에 보이면 show 클래스 추가
            entry.target.classList.add("show");
         }
      });
   };

   // 옵저버 설정
   const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5, // 요소가 화면의 50% 이상 보일 때
   });

   // 각 pick_menu와 버튼에 옵저버 설정
   pickMenus.forEach((menu) => observer.observe(menu));
   observer.observe(button);
});
