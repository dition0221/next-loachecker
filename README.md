# Next - Loachecker

### 로아체커.

##### LoaChecker.

<img src="https://img.shields.io/badge/Next.js-000?style=flat-square&logo=nextdotjs&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/>  
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white"/> <img src="https://img.shields.io/badge/React Hook Form-EC5990?style=flat-square&logo=reacthookform&logoColor=white"/>

---

- [useEffect] API로 캐릭터들 불러오기 -> 새로운 빈 DB테이블 생성
  - 캐릭터들 드래그로 순서 바꾸기
- [캐릭터] 닉네임/레벨 -> 카던/가토/에포나/출첵 -> 주간
  - 닉네임 or 클래스이미지
- [DB] Checker -> 사용자 계정명 -> 원정대 + 캐릭터[]
<!-- TODO: Firestore 규칙 설정 -->

- (로그인 중) 로그인 페이지 안 보이도록
- (비로그인) 체커 페이지 안 보이도록 or localStorage

---

- **24-01-12 / Create Firebase SDK & Test DB**
  - _DONE: Initial checking firebase authentication in App_
  - _TEST: ✅ Upload data to Firestore DB_
- **24-01-18 / Layout + Authentication**
  - _UPDATE_
    - _Create 'Layout.tsx'_
    - _Google social login_
  - _TEST_
    - _✅ Upload "checkbox" data to Firestore DB_
    - _✅ Use LOSTARK API_
  - _TODO_
    - _[CheckBox] 캐릭터마다 객체를 만들어야 함 - 캐릭터 prop 받아오기_
    - _첫 로그인 시 API를 사용해 캐릭터 리스트 받아오기_
  - 로컬 폰트 적용법
    1. 'src' 또는 'public' 폴더에 폰트 파일을 넣기
    2. 'font-face' 선언 및 import하기
       - 'globals.css'에서 선언 후 import하면 편함
       - 기본형
         ```
         @font-face {
          font-family: "폰트패밀리명";
          src: url("경로") format("포맷타입");
          font-weight: 값;
          font-style: 값;
         }
         ```
       - src폴더는 상대 경로 / public폴더는 절대 경로
       - ex.
         ```
         @font-face {
          font-family: "NotoSansKR";
          src: url("../fonts/NotoSansKR-Black.ttf") format("truetype");
          font-weight: 900;
          font-style: normal;
         }
         ```
    3. [Tailwind] 'tailwind.config.ts' 파일에서 클래스명 등록하기
       - 기본형
         ```
         const config: Config = {
           theme: {
             extend: {
               fontFamily: {
                 프로퍼티명: ["폰트명"],
               },
             },
           },
         }
         ```
       - 사용법 : 클래스명으로 `font-프로퍼티명`으로 사용
