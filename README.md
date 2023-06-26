# 🔥 타닥타닥 Tadak-Tadak
> 타닥타닥 테스트 계정 <br />
> ID : tadak123@email.com <br />
> PW : tadak123

<br />

## 프로젝트 소개
**타닥타닥**은 캠핑의 낭만적인 순간을 기록하여 자신만의 캠핑 이야기를 공유하고, 캠핑 용품들을 거래하는 SNS입니다.
- 타닥타닥 서비스는 캠핑을 즐기는 누구나 이용할 수 있는 SNS입니다.
- 글과 사진을 함께 게시물로 작성하여 자신만의 캠핑 이야기를 공유할 수 있습니다.
- 다른 사용자를 팔로우하지 않아도 캠핑 이야기를 확인할 수 있고, 팔로우하여 댓글과 좋아요를 통해 직접 소통할 수 있습니다.
- 각종 캠핑 상품을 등록하여 다른 사용자에게 판매할 수 있습니다.

### 개발기간
2023.06.01 - 2023.06.30

### 개발환경

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


## 폴더 구조 

```
my-app
FINAL-02-TA-DAK-TA-DAK
├── node_modules
├── public
└── src
  ├── api
  ├── assets
     ├── img
  ├── components
     ├── common
     ├── header
     ├── UserPostList
  ├── componentsTest  -- 컴포넌트 테스트를 위해 만든 임시 폴더, 추후 삭제 예정
  ├── hooks
  ├── Loader
     ├── img
  ├── pages
  ├── recoil
  ├── Routes
  ├── style
     ├── theme
  ├─ .gitignore
  ├─ .prettierrc.json
  ├─ package-lock.json
  ├─ package.json
  └─ README.md
```

<br />

## 협업방식

<br />

## branch 전략

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

## 프로젝트를 마치며

|안동섭|김지원|박지은|조원영|
| :---: | :---: | :---: | :---: |
| 소감 | 소감 | 소감 | 소감 |
