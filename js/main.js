// Smooth Scrolling and Section Navigation
class SectionScroller {
   constructor() {
      this.sections = document.querySelectorAll("section"); // 모든 섹션을 선택
      this.currentSection = 0; // 현재 섹션을 추적
      this.isScrolling = false; // 스크롤이 진행 중인지 확인
      this.initEventListeners(); // 이벤트 리스너 초기화
   }

   initEventListeners() {
      window.addEventListener("wheel", this.handleWheel.bind(this), {
         passive: false,
      }); // 휠 이벤트 처리
      window.addEventListener("load", this.scrollToFirstSection.bind(this)); // 페이지 로드 시 첫 번째 섹션으로 이동
   }

   handleWheel(event) {
      if (this.isScrolling) return; // 스크롤이 진행 중이면 처리하지 않음

      event.preventDefault(); // 기본 스크롤 동작 방지
      this.isScrolling = true; // 스크롤 시작

      const scrollDirection = event.deltaY > 0 ? "down" : "up"; // 스크롤 방향 확인

      if (
         scrollDirection === "down" &&
         this.currentSection < this.sections.length - 1
      ) {
         this.currentSection++; // 섹션 증가
      } else if (scrollDirection === "up" && this.currentSection > 0) {
         this.currentSection--; // 섹션 감소
      }

      this.scrollToSection(this.currentSection); // 해당 섹션으로 스크롤 이동

      // 일정 시간 후에 스크롤 상태를 리셋
      setTimeout(() => {
         this.isScrolling = false;
      }, 400); // 400ms 후에 다시 스크롤 가능
   }

   scrollToSection(index) {
      this.sections[index].scrollIntoView({
         behavior: "smooth", // 부드럽게 스크롤
         block: "start", // 시작 지점에서 스크롤
      });
   }

   scrollToFirstSection() {
      this.sections[0].scrollIntoView({
         behavior: "smooth",
         block: "start",
      });
   }
}

// Carousel Management
class Carousel {
   constructor(selector) {
      this.$carouselInner = document.querySelector(selector); // 캐러셀 내부 선택
      this.$slides = this.$carouselInner.querySelectorAll(".carousel-item"); // 슬라이드 항목 선택
      this.$indicators = document.querySelectorAll(".indicator"); // 인디케이터 선택
      this.$prevButton = document.querySelector(".carousel-prev"); // 이전 버튼
      this.$nextButton = document.querySelector(".carousel-next"); // 다음 버튼

      this.currentIndex = 0; // 현재 슬라이드 인덱스
      this.totalItems = this.$slides.length; // 총 슬라이드 개수
      this.autoSlideInterval = null; // 자동 슬라이드 인터벌 변수

      this.initCarousel(); // 캐러셀 초기화
   }

   initCarousel() {
      this.showSlide(0); // 첫 번째 슬라이드 표시
      this.startAutoSlide(); // 자동 슬라이드 시작
      this.addEventListeners(); // 이벤트 리스너 추가
   }

   showSlide(index) {
      this.$carouselInner.style.transform = `translateX(-${index * 100}%)`; // 슬라이드 이동
      this.$indicators.forEach((indicator) =>
         indicator.classList.remove("active")
      ); // 기존 활성화된 인디케이터 비활성화
      this.$indicators[index].classList.add("active"); // 새로 활성화된 인디케이터 표시
   }

   startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
         this.currentIndex = (this.currentIndex + 1) % this.totalItems; // 자동으로 다음 슬라이드로 이동
         this.showSlide(this.currentIndex);
      }, 5000); // 5초마다 슬라이드 변경
   }

   resetAutoSlide() {
      clearInterval(this.autoSlideInterval); // 기존 자동 슬라이드 멈춤
      this.startAutoSlide(); // 새로운 자동 슬라이드 시작
   }

   addEventListeners() {
      this.$prevButton.addEventListener("click", () => {
         this.currentIndex =
            this.currentIndex === 0
               ? this.totalItems - 1
               : this.currentIndex - 1; // 이전 슬라이드로 이동
         this.showSlide(this.currentIndex);
         this.resetAutoSlide(); // 버튼 클릭 시 자동 슬라이드를 리셋
      });

      this.$nextButton.addEventListener("click", () => {
         this.currentIndex =
            this.currentIndex === this.totalItems - 1
               ? 0
               : this.currentIndex + 1; // 다음 슬라이드로 이동
         this.showSlide(this.currentIndex);
         this.resetAutoSlide(); // 버튼 클릭 시 자동 슬라이드를 리셋
      });

      this.$indicators.forEach((indicator, index) => {
         indicator.addEventListener("click", () => {
            this.currentIndex = index; // 인디케이터 클릭 시 해당 슬라이드로 이동
            this.showSlide(this.currentIndex);
            this.resetAutoSlide(); // 버튼 클릭 시 자동 슬라이드를 리셋
         });
      });
   }
}

// Menu Dropdown
class MenuDropdown {
   constructor() {
      this.menuItems = document.querySelectorAll(".menu > li"); // 메뉴 항목 선택
      this.initDropdown(); // 드롭다운 초기화
   }

   initDropdown() {
      this.menuItems.forEach((item) => {
         const submenu = item.querySelector(".submenu"); // 서브메뉴 선택

         item.addEventListener("mouseenter", () => {
            submenu.style.display = "block"; // 마우스가 올라가면 서브메뉴 표시
            submenu.style.animation = "dropdownAnimation 0.3s ease"; // 애니메이션 효과
         });

         item.addEventListener("mouseleave", () => {
            submenu.style.display = "none"; // 마우스가 떨어지면 서브메뉴 숨김
         });
      });
   }
}

// Sidebar Toggle
class SidebarToggle {
   constructor() {
      this.hamburger = document.querySelector(".hamburger"); // 햄버거 메뉴 선택
      this.sidebar = document.querySelector(".sidebar"); // 사이드바 선택
      this.initToggle(); // 사이드바 토글 초기화
   }

   initToggle() {
      this.hamburger.addEventListener("click", () => {
         this.sidebar.classList.toggle("open"); // 클릭 시 사이드바 열기/닫기
      });
   }
}

// 섹션2 애니메이션
class MenuPickAnimation {
   constructor() {
      this.pickMenus = document.querySelectorAll(".pick_menu"); // 메뉴 항목 선택
      this.otherMenuButton = document.querySelector(".other_menu"); // 다른 메뉴 버튼 선택
      this.initObserver(); // 옵저버 초기화
   }

   initObserver() {
      const observerOptions = {
         threshold: 0.5, // 요소가 화면의 50% 이상 보일 때
      };

      const observerCallback = (entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               // 화면에 보이면 애니메이션 효과 추가
               entry.target.classList.add("show");
            } else {
               // 화면에서 벗어나면 애니메이션 효과 제거
               entry.target.classList.remove("show");
            }
         });
      };

      const observer = new IntersectionObserver(
         observerCallback,
         observerOptions
      );

      this.pickMenus.forEach((menu) => observer.observe(menu)); // 각 메뉴 항목에 옵저버 설정
      observer.observe(this.otherMenuButton); // 다른 메뉴 버튼에 옵저버 설정
   }
}

document.addEventListener("DOMContentLoaded", () => {
   new SectionScroller(); // 스크롤 기능 초기화
   new Carousel(".carousel-inner"); // 캐러셀 기능 초기화
   new MenuDropdown(); // 메뉴 드롭다운 기능 초기화
   new SidebarToggle(); // 사이드바 토글 기능 초기화
   new MenuPickAnimation(); // 메뉴 애니메이션 기능 초기화
});

// 하이라이터 애니메이션
document.addEventListener("DOMContentLoaded", () => {
   const highlight = document.querySelector(".highlight");

   // IntersectionObserver 설정
   const observerOptions = {
      threshold: 0.5, // 섹션이 50% 이상 화면에 보일 때 트리거
   };

   const observerCallback = (entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            // 하이라이트가 보이면 애니메이션 적용
            highlight.classList.add("show");
         } else {
            // 하이라이트가 보이지 않으면 애니메이션 초기화
            highlight.classList.remove("show");
         }
      });
   };

   const observer = new IntersectionObserver(observerCallback, observerOptions);

   // 하이라이트에 대한 옵저버 적용
   observer.observe(highlight);
});

// 섹션3 스크롤 애니메이션
document.addEventListener("DOMContentLoaded", () => {
   const menuInfo = document.querySelector("#section3 .menu_info");
   const menuBox = document.querySelector("#section3 .menu_box");

   // 교차 관찰자 생성
   const observer = new IntersectionObserver(
      (entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               // 화면에 보이면 애니메이션 클래스 추가
               entry.target.classList.add("animate-slide-in-up");
            } else {
               // 화면에서 벗어나면 애니메이션 클래스 제거
               entry.target.classList.remove("animate-slide-in-up");
            }
         });
      },
      {
         threshold: 0.1, // 섹션의 10% 이상 보일 때 트리거
      }
   );

   // 섹션3 관찰 시작
   const section3 = document.getElementById("section3");
   observer.observe(menuInfo); // menuInfo 관찰 시작
   observer.observe(menuBox); // menuBox 관찰 시작
});

// 메뉴 슬라이더
document.addEventListener("DOMContentLoaded", () => {
   const slideWrapper = document.querySelector(".slide-wrapper");
   const slides = document.querySelectorAll(".slide");
   const prevButton = document.querySelector(".slide-prev");
   const nextButton = document.querySelector(".slide-next");

   let currentSlide = 0;
   const totalSlides = slides.length;
   let autoSlideInterval; // 자동 슬라이드를 위한 변수

   function moveSlide() {
      slideWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
   }

   function startAutoSlide() {
      // 자동 슬라이드가 이미 시작되어 있으면 기존 타이머를 제거하고 새로 시작
      if (autoSlideInterval) {
         clearInterval(autoSlideInterval);
      }
      autoSlideInterval = setInterval(autoSlide, 5000);
   }

   function autoSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      moveSlide();
   }

   nextButton.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      moveSlide();
      startAutoSlide(); // 자동 슬라이드 초기화
   });

   prevButton.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      moveSlide();
      startAutoSlide(); // 자동 슬라이드 초기화
   });

   // 처음 페이지 로드 시 자동 슬라이드 시작
   startAutoSlide();
});

document.querySelectorAll(".pick_menu").forEach((menu) => {
   menu.addEventListener("click", function () {
      this.classList.toggle("active");
   });
});

// IntersectionObserver를 사용하여 화면에 요소가 들어올 때마다 visible 클래스 추가/제거
document.addEventListener("DOMContentLoaded", function () {
   const elements = document.querySelectorAll(
      ".hollys_intro, .intro_title, .intro_title h1, .Hollys_info, .sns_text, .sns_btn, .sns_note"
   );

   const options = {
      root: null, // root는 viewport를 의미
      rootMargin: "0px",
      threshold: 0.1, // 요소가 10% 보이면 애니메이션 시작
   };

   const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // 화면에 들어오면 visible 클래스 추가
         } else {
            entry.target.classList.remove("visible"); // 화면에서 벗어나면 visible 클래스 제거
         }
      });
   }, options);

   elements.forEach((element) => {
      observer.observe(element); // 각 요소에 대해 IntersectionObserver 시작
   });
});

// 섹션4 슬라이드
document.addEventListener("DOMContentLoaded", function () {
   const slideLeft = document.querySelector(".slide_box_left");
   const slideRight = document.querySelector(".slide_box_right");
   const section4 = document.querySelector("#section4");
   const drinkImg = document.querySelector(".drink_info");
   const bannerTexts = document.querySelectorAll(".banner_text");

   const options = {
      root: null,
      threshold: 0.1,
   };

   const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            slideLeft.classList.remove("visible-left");
            slideRight.classList.remove("visible-right");

            setTimeout(() => {
               slideLeft.classList.add("visible-left");
               slideRight.classList.add("visible-right");

               // 애니메이션 종료 후 이미지와 텍스트 표시
               setTimeout(() => {
                  drinkImg.classList.add("visible");
                  bannerTexts.forEach((text) => text.classList.add("visible"));
               }, 1000); // 애니메이션 시간과 동일하게 설정
            }, 50);
         } else {
            slideLeft.classList.remove("visible-left");
            slideRight.classList.remove("visible-right");
            drinkImg.classList.remove("visible");
            bannerTexts.forEach((text) => text.classList.remove("visible"));
         }
      });
   };

   const observer = new IntersectionObserver(handleIntersection, options);
   observer.observe(section4);
});

// section4 숫자 카운팅
document.addEventListener("DOMContentLoaded", function () {
   const countElement = document.querySelector(".count");
   const targetNumber = 1500;
   let currentNumber = 0;
   let countingStarted = false; // 카운팅 시작 여부를 추적
   let counterInterval; // 카운팅 인터벌을 전역으로 선언

   // 카운팅 애니메이션 함수
   function countUp() {
      if (currentNumber < targetNumber) {
         currentNumber++;
         countElement.innerHTML = currentNumber;
      } else {
         clearInterval(counterInterval); // 카운팅이 끝나면 인터벌 정지
      }
   }

   // 섹션4가 화면에 들어왔을 때 카운팅 시작
   const section4 = document.getElementById("section4");

   // IntersectionObserver를 사용하여 섹션4가 화면에 들어올 때 카운팅 시작
   const observerOptions = {
      threshold: 0.5, // 섹션의 50%가 화면에 보일 때 트리거
   };

   const observerCallback = (entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting && !countingStarted) {
            countingStarted = true;
            counterInterval = setInterval(countUp, 1); // 카운팅 시작
         }
      });
   };

   const observer = new IntersectionObserver(observerCallback, observerOptions);

   observer.observe(section4);
});

// section6
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slideBox = document.querySelector(".franchise_slide_box");
const slide = document.querySelectorAll(".slide_item");
const slideLength = slide.length;
let currentIndex = 0;

// 슬라이드 이동 함수
const moveSlide = function (num) {
   slideBox.style.transform = `translateX(${-num * 930}px)`;
   currentIndex = num;
};

// 이전 버튼 클릭 시
prev.addEventListener("click", () => {
   if (currentIndex === 0) {
      moveSlide(1); // 마지막 세트로 이동
   } else {
      moveSlide(currentIndex - 1);
   }
});

// 다음 버튼 클릭 시
next.addEventListener("click", () => {
   if (currentIndex === 1) {
      moveSlide(0); // 첫 번째 세트로 돌아가기
   } else {
      moveSlide(currentIndex + 1);
   }
});
