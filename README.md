# 🔥 타닥타닥 Tadak-Tadak
> 타닥타닥 테스트 계정 <br />
> ID : tadak123@email.com <br />
> PW : tadak123

<br />

## 프로젝트 소개
**타닥타닥**은 캠핑의 낭만적인 순간을 기록하여 자신만의 캠핑 이야기를 공유하고, 캠핑 용품들을 중고거래할 수 있는 SNS입니다.
- 타닥타닥 서비스는 캠핑을 즐기는 누구나 이용할 수 있는 SNS입니다.
- 글과 사진을 함께 게시물로 작성하여 자신만의 캠핑 이야기를 공유할 수 있습니다. 
- 다른 사용자를 팔로우하지 않아도 추천 게시물을 통해 많은 사람들의 캠핑 이야기를 확인할 수 있고, 팔로우를 통해 홈 피드에서는 팔로잉을 한 사용자의 글을 볼 수 있습니다. 
  댓글과 좋아요를 통해 직접 소통할 수도 있습니다.
- 사용자가 직접 각종 캠핑 상품을 등록하여 다른 사용자들과 중고거래 할 수 있습니다.

### 개발기간
2023.06.01 - 2023.06.30

### 개발환경

| 프론트엔드 | 백엔드 | 디자인 | 협업방식 |
| :---: | :---: | :---: | :---: | 
| <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=pink"> | 멋쟁이사자처럼에서 제공된 API 사용 | <img src="https://img.shields.io/badge/figma-FBCEB1?style=for-the-badge&logo=figma&logoColor=white"> | <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"> <img src="https://img.shields.io/badge/notion-ECE0CC?style=for-the-badge&logo=notion&logoColor=white">|



<br />

## 팀원

|안동섭|김지원|박지은|조원영|
| :---: | :---: | :---: | :---: |
| <img width="180" alt="프로필_안동섭" src="https://avatars.githubusercontent.com/u/96939334?s=400&u=6a4e635ccb574702b10b9464ce61bba61abefc72&v=4"> | <img width="180" alt="프로필_김지원" src="https://avatars.githubusercontent.com/u/126536438?v=4"> | <img width="180" alt="프로필_박지은" src="https://avatars.githubusercontent.com/u/98686191?v=4"> | <img width="180" alt="프로필_조원영" src="https://avatars.githubusercontent.com/u/92977925?v=4"> |
| [DongSup_Ahn](https://github.com/D-Sup) | [jiwon6635](https://github.com/jiwon6635) | [Eunnnnnnnn](https://github.com/Eunnnnnnnn) | [JoWonYeong](https://github.com/JoWonYeong) |
| 팀장 | 팀원 | 팀원 | 팀원 |

<br />

## 주요기능
🔐 계정
- 로그인 / 로그아웃
- 회원가입
- 프로필 설정
- 유효성 검증
  
<br />

🏕 홈 / 피드
- 추천 게시물
- 게시물 목록
- 유저 검색
- 무한 스크롤
- 게시물 신고
  
<br />

💬 채팅
- 채팅 리스트
- 채팅룸
<br />

📱 게시물
- 게시물 작성 / 수정 / 삭제
- 댓글 작성 / 수정 / 삭제 / 신고
- 이미지 업로드 / 수정
- 게시물 표시 방식(리스트형 / 앨범형 / 상품판매 목록)
- 좋아요 / 좋아요 취소

<br />

👤 프로필
- 프로필 수정
- 상품 등록 / 수정 / 삭제
- 팔로잉 / 언팔로우 / 팔로워
  
<br />

🖥 페이지
- Splash
- Loading
- 404Error

<br />

## 역할분담
![역할분담](https://github.com/FRONTENDSCHOOL5/final-02-Ta-dak_Ta-dak/assets/98686191/b2756ac9-f1c8-40e0-999d-a3101f7c09ba)

<br />

## 폴더 구조 

```
FINAL-02-TA-DAK-TA-DAK
├── 📁node_modules
├── .gitignore
├── .prettierrc.json
├── package-lock.json
├── package.json
├── README.md
├── 📁public
├── 📂src
      ├── 📁api
      ├── 📂assets
            ├── 📁img
      ├── 📂components
            ├── 📁common
            ├── 📁header
            ├── 📁UserPostList
      ├── 📁hooks
      ├── 📂Loader
            ├── 📁img
      ├── 📁pages
      ├── 📁recoil
      ├── 📁Routes
      ├── 📂style
            ├── 📁theme
```

<br />

## branch 전략
GitHub Flow
- 지속적인 배포를 진행하기 보다는 하나의 프로젝트가 완성되었을때 배포하는 개념이었기 때문에 지속적인 통합과 기능 개발에 중점을 두어 Git Flow 전략보다는 GitHub Flow 전략이 적합하다고 생각했습니다.
- 프로젝트 기간 동안 팀원들이 지속적으로 작업을 진행하기 때문에 충돌을 최소한으로 줄이고자 GitHub Flow 전략을 선택하였습니다. 
- 빠른 피드백과 이슈를 생성 할 수 있었고, 체계적인 협력 규칙을 정해서 관리 하였기 때문에 필요 이상의 복잡함을 줄이고 효율적인 과정으로 기능개발을 진행할 수 있었습니다.

<br />

## 협업방식
1. 매주 월요일, 목요일 회의를 진행하여 세부적인 역할 분담을 하고 이슈를 생성합니다.
2. 이슈 넘버에 맞게 각자 브랜치를 생성하여 지속적으로 작업을 진행합니다.
3. 브랜치에서 작업이 완료되면 각자 브랜치에서 컨벤션에 맞게 커밋후 PR(Pull Request)을 오픈합니다.
4. 다른 멤버들의 컨펌이 완료되면 main으로 merge합니다.
5. 각자 맡은 작업 진행후 LiveShare을 통해 문제가 생긴 부분을 함께 수정하고 추가한 코드를 리뷰하고 이슈를 Close합니다.

<br />

## 컨벤션

### commit 컨벤션

| 커밋 유형 | 커밋 메세지 | 의미 |
| :---: | :---: | :---: |
| 💡 | `:bulb: Feat:` | 새로운 기능 추가 |
| 🐛 | `:bug: Fix:` | 버그수정 |
| 📚 | `:books: Docs:` | 문서 수정 |
| ♻️ | `:recycle: Refactor:` | 리팩토링 |
| 🎨 | `:art: Design:` | CSS 등 사용자 UI 디자인 변경 |
| 💄 | `:lipstick: Style:` | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
| 💬 | `:speech_balloon: Comment:` | 필요한 주석 추가 및 변경 |
| 🌱 | `:seedling: Init:` | 프로젝트 초기 생성 |
| 🧸 | `:teddy_bear: Chore:` | 이외의 변경사항 |
| ✍🏻 | `:writing_hand: Rename:` | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
| 🗑️ | `:wastebasket: Remove:` | 파일을 삭제하는 작업만 수행한 경우 |
| 🚀 | `:rocket: Release:` | 배포 |

### code 컨벤션

```json
{
  "tabWidth": 2,
  "singleQuote": true,
  "semi": true,
  "printWidth": 80,
  "trailingComma": "es5"
}
```

<br />

## 기능 UI
- 🏕 타닥타닥 첫 화면 <br />

| Splash | 회원가입 | 회원가입실패 |
| :---: | :---: | :---:|
| gif | gif | gif |

<br />

- 🏕 로그인 / 로그 아웃 <br />

| 로그인 | 로그아웃 |
| :---: | :---: |
| gif | gif |

<br />

- 🏕 홈 / 피드 페이지 <br />

| 첫 가입 이후 홈 피드 | 홈 피드 | 로그인 |
| :---: | :---: | :---: |
| gif | gif | gif |

<br />

- 🏕 검색 <br />

| 검색 | ?? | ?? |
| :---: | :---: | :---: |
| gif | gif | gif |

<br />

- 🏕 프로필 <br />

| 프로필 수정 | 프로필 하단 게시물 유형 선택 |
| :---: | :---: | 
| gif | gif | 

<br />

- 🏕 상품 등록 <br />

| 상품 등록후 클릭 | 상품 수정 | 상품 삭제 | 
| :---: | :---: | :---: |
| gif | gif | gif |

<br />

- 🏕 게시글 <br />

| 게시글 작성 | 게시글 수정 | 게시글 삭제 | 게시글 신고 |
| :---: | :---: | :---: | :---: |
| gif | gif | gif | gif |

<br />

- 🏕 댓글 / 좋아요 <br />

| 게시글 작성 | 게시글 수정 | 게시글 삭제 | 게시글 신고 | 좋아요 |
| :---: | :---: | :---: | :---: | :---: |
| gif | gif | gif | gif | gif |

<br />

- 🏕 채팅 <br />

| 채팅 리스트 | 채팅룸 |  나가기 | 게시글 신고 | 좋아요 |
| :---: | :---: | :---: | :---: | :---: |
| gif | gif | gif | gif | gif |

<br />

- 🏕 다크모드 <br />

| 다크모드 |
| :---: |
| gif |

<br />

- 🏕 404Error / 로딩 <br />

| 404 Error | 로딩페이지 |
| :---: | :---: |
| gif | gif |

<br />

## 코드 특징

**custom Hook 사용**
1. `useAlertControl`, `useModalControl` 
  - 모달컴포넌트를 감싸서 모달을 컨트롤 할 수 있는 훅을 생성했습니다. 
  - children 속성을 이용해서 컨트롤 하고자 하는 모달을 동적으로 받아와서 관리했습니다. 
2. `useScrollBottom` 
  - 요소의 스크롤을 감지할 수 있는 훅을 생성했습니다. 
  - useRef Hook을 호출해서 객체를 생성하여 객체를 훅의 인자로 전달하고, 
    스크롤 이벤트를 감지하고 싶은 요소에 ref 속성을 전달하여 스크롤이 바닥에 닿을 때 작동하도록 했습니다.
3. `useImageUploader`
  - 선택한 파일을 통해 유효성 검사를 하고 미리보기 URL과 업로드된 이미지의 URL을 반환해주는 훅을 생성했습니다.
  - input 태그의 onChange 이벤트에서 선택한 파일을 통해 전달 받아 파일이 유효한 확장자인지 검사합니다.
  - 이미지 파일을 미리보기 위해 사용할 수 있는 URL을 생성하고 반환합니다.
  - 선택한 파일로 API 요청을 보내 업로드된 이미지의 URL을 반환받은 뒤에 반환합니다. 

**axios 라이브러리 활용**
  - API 요청을 보낼 기본 틀의 URL과 header을 포함하고 있는 jsx 파일을 별도로 생성해서, 요청할 URL과 HTTP 메서드만으로 API 요청이 가능하게끔 했습니다.
  - 토근이 필요한 API 요청의 경우 axios 라이브러리에서 제공하는 interceptors 을 이용해서 인증 헤더를 추가해서 인증된 요청을 보내도록 했습니다.

**컴포넌트의 재사용성 고려**
  - useLocation Hook을 호출해서 생성한 객체의 속성인 `pathname` 으로 현재 페이지의 경로를 확인하고, 이를 조건문에 활용하여 게시물 등록/수정, 상품 등록/수정 컴포넌트를 재사용하도록 했습니다.
**로그인 여부에 따른 페이지 접근**
  - Recoil의 `Selector`와 React-router의 `<Outlet/>`, `<Navigate>` 컴포넌트를 이용해서 
    로그인 유무에 따라 특정 페이지에 접근 시 페이지를 보호하고 특정 페이지로 리다이렉팅 시키는 Protected Route를 만들었습니다. 


## 프로젝트를 마치며

|안동섭|김지원|박지은|조원영|
| :---: | :---: | :---: | :---: |
| 소감 | 소감 | 소감 | 소감 |
