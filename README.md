# 할리스 웹 페이지 리뉴얼
HTML + CSS + JS를 사용하여 할리스 홈페이지 리뉴얼을 진행했습니다.
<br>
전체적인 색감과 로고는 기존의 할리스의 것을 가져와 사용하였습니다.

<br>

## 1. 개발 환경
   - HTML + CSS + JS

<br>

## 2. 현재 디렉토리
   ```
<root>
├── index.html             # 메인 HTML 파일
├── script.js              # 전체 기능을 담고 있는 JS 파일
├── css/
│   ├── base.css           # 기본 설정 스타일
│   ├── footer.css         # 푸터 스타일
│   ├── header.css         # 헤더 스타일
│   ├── responsive.css     # 반응형 스타일
│   ├── section1.css       # 섹션 1 스타일
│   ├── section2.css       # 섹션 2 스타일
│   ├── section3.css       # 섹션 3 스타일
│   ├── section4.css       # 섹션 4 스타일
│   ├── section5.css       # 섹션 5 스타일
│   ├── section6.css       # 섹션 6 스타일
│   ├── sidebar.css        # 사이드바 스타일
│   └── style.css          # 전체 통합 및 공통 스타일
   ```

   <br>

## 3. 주요 기능

   ### 1) 🖱️ 스크롤 및 섹션 네비게이션
   - SectionScroller : 마우스 휠/터치 이벤트 기반 섹션 간 스무스 스크롤
     
   <br>
    
   ### 2) 🎠 캐러셀 / 슬라이더
   - Carousel : 자동 및 수동 제어 가능한 이미지 캐러셀
   - .slide-wrapper 관련 슬라이더 : 버튼 클릭 및 자동 슬라이드 전환
   - 섹션 6 : 반응형에 맞춘 프랜차이즈 슬라이더
  
   <br>
   
   ### 3) 🍔 메뉴 인터랙션
   - MenuDropdown : 메뉴 항목에 마우스 호버 시 드롭다운 표시
   - .pick_menu : 클릭 시 활성화 토글

   <br>
  
   ### 4) 🎬 애니메이션
   - IntersectionObserver 기반 스크롤 인식 애니메이션
   - 섹션2 메뉴 등장 애니메이션
   - 섹션3 메뉴 정보 등장
   - 섹션4 배너, 이미지, 숫자 카운팅 애니메이션
   - 하이라이터 및 기타 요소의 시각 효과 (visible 클래스)

   <br>

   ### 5) 📂 사이드바
   - SidebarToggle : 햄버거 메뉴 클릭 시 사이드바 열기/닫기
   - 드롭다운 메뉴 토글 기능 포함

   <br>

   ### 6) 📱 모바일 대응
   - 터치 이벤트로 스크롤 이동 처리
   - 윈도우 리사이즈 시 슬라이드 위치 초기화

   <br>
  
## 4. 결과 화면

- 할리스 로고 및 메뉴 사진 출처 : 할리스 공식 홈페이지
- 메인 페이지 광고 사진 : 메가커피 공식 홈페이지
- 할리스 커피 공식 홈페이지에 활용할 수 있는 고해상도 메인 이미지가 부족하였습니다.
- 대체 이미지로 메가커피의 프로모션 이미지를 임시 적용하였습니다.

<br>

![image](https://github.com/user-attachments/assets/259f078a-2ee2-4358-ada6-0c38a6ce9aab)


