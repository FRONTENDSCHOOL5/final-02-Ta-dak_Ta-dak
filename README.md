# 🔥 타닥타닥 Tadak-Tadak

🏕[타닥타닥 Tadak-Tadak](https://frontendschool5.github.io/final-02-Ta-dak_Ta-dak/#/splash) <br />
> 타닥타닥 테스트 계정 <br />
> ID : tadak123@email.com <br />
> PW : tadak123

<br />

## 프로젝트 소개
![썸네일](https://github.com/FRONTENDSCHOOL5/final-02-Ta-dak_Ta-dak/assets/98686191/4dbeb9a3-bf29-43e6-8627-eda7f237e32d)
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
| <img width="180" alt="프로필_안동섭" src="https://avatars.githubusercontent.com/u/96939334?s=400&u=6a4e635ccb574702b10b9464ce61bba61abefc72&v=4"> | <img width="180" alt="프로필_김지원" src="https://avatars.githubusercontent.com/u/126536438?v=4"> | <img width="180" alt="프로필_박지은" src="https://github.com/Eunnnnnnnn/Memo/assets/98686191/f5960459-4d30-4ec6-b991-fa2e03d2352e"> | <img width="180" alt="프로필_조원영" src="https://avatars.githubusercontent.com/u/92977925?v=4"> |
| [DongSup_Ahn](https://github.com/D-Sup) | [jiwon6635](https://github.com/jiwon6635) | [Eunnnnnnnn](https://github.com/Eunnnnnnnn) | [JoWonYeong](https://github.com/JoWonYeong) |
| 팀장 | 팀원 | 팀원 | 팀원 |

<br />

## 주요기능

|🔐계정|🏕 홈 / 피드|💬 채팅|📱 게시물|👤 프로필|🖥 페이지|
|--|--|--|--|--|--|
| - 로그인/로그아웃<br />- 회원가입<br />- 프로필 설정<br />- 유효성 검증 | - 추천 게시물<br /> - 게시물 목록<br />- 유저 검색<br />- 무한스크롤 <br /> - 게시물 신고| - 채팅 리스트<br /> - 채팅룸| - 게시물 작성 / 수정 / 삭제<br /> - 댓글 작성/수정/삭제/신고<br /> - 이미지 업로드 / 수정<br /> - 게시물 표시 방식<br />(리스트형/앨범형/상품판매목록)<br /> - 좋아요/좋아요 취소 |- 프로필 수정<br />- 상품 등록/수정/삭제<br /> - 팔로잉/언팔로우/팔로워|- Splash<br /> - Loading<br /> - 404Error|

<br />

## 역할분담
![역할분담](https://github.com/Eunnnnnnnn/Memo/assets/98686191/b0044bc2-eb16-4473-89a0-2811b6e38b62)

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
![image](https://github.com/FRONTENDSCHOOL5/final-02-Ta-dak_Ta-dak/assets/126536438/42952a45-3e13-467b-92aa-f12bdfb724c5)
이슈 넘버이자 브랜치명을 끝에 표기해줌

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

<br />

### code 컨벤션

**Prettier에 대한 사용자 정의 설정**
```js
{
  "tabWidth": 2, // 들여쓰기 간격을 2로 설정
  "singleQuote": true, // 문자열에는 작은 따옴표를 사용
  "semi": true, // 문장의 끝에 세미콜론을 추가
  "printWidth": 80, // 한 줄의 최대 길이를 80으로 제한
  "trailingComma": "es5" // ES5 문법에서만 뒷콤마를 허용
}
```

**import 순서 규칙**
```jsx
// 1. hook
import { useState } from 'react';
import { Link } from 'react-router-dom';
// 2. styled-component
import styled from 'styled-components';
// 한줄 공백
// 3. import로 가져오는 컴포넌트 파일
import Album from '../common/Album';
// 한줄공백
// 4. 불러오는 이미지 파일
import postImg1 from './../../assets/testImg/post1.png';
import postImg2 from './../../assets/testImg/post2.png';
```

<br />

## 기능 UI
| Splash | 회원가입/프로필 설정 | 로그인 |
| --- | --- | --- |
| <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/315d059e-a43f-4050-aaab-14c84a08a5df" width="250" height="497"/> | <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/10a33310-9661-4fc5-9138-a08840bf9118" width="250" height="497"/> | <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/750e0b25-e97f-479a-b977-9649ae803173" width="250" height="497"/> |

| 홈 게시글 | 추천 게시글 | 
| --- | --- | 
| <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/193a3ba7-d878-4f03-bb1c-4416f8c9e0c4" width="250" height="497"/> | <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/71f72bcb-b6a1-4fa6-bff1-d93f9df1c2d2" width="250" height="497"/> | 

| 검색 | 팔로우/언팔로우 | 팔로잉/팔로워 리스트 |
| --- | --- | --- |
| <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/9a6fe9e6-1e77-40f0-9a6c-6a1973eb889d" width="250" height="497"/> | <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/75de274e-3e32-4220-a5f2-af8a5ad10447" width="250" height="497"/> | <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/5dd82896-a5cb-4e6e-b922-7e41b090e3ea" width="250" height="497"/> |

| 게시물 업로드 | 게시물 수정 | 
| --- | --- | 
| <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/3874936a-fc61-4949-956a-256ec1eaff1a" width="250" height="497"/> | <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/643afea7-d22e-4ce4-8c5d-9e0a81e629c6" width="250" height="497"/>|

| 게시물 삭제 | 게시물 신고 |
|--- | --- |
| <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/14910d0d-19d6-421d-a4a1-615fffb96380" width="250" height="497"/> | <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/efdacf15-f91e-47d0-bf9e-49cccb8a5fc6" width="250" height="497"/> |

| 좋아요/댓글 작성/댓글 삭제 | 프로필 | 프로필 수정 |
| --- | --- | --- |
| <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/c2d5cd68-84b2-4f88-be58-df7b0cd5137f" width="250" height="497"/> | <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/8611dbb5-e9aa-4fef-8791-ef5f805050ac" width="250" height="497"/> | <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/696e72c0-2b99-4059-b9ce-537bf5b3316b" width="250" height="497"/> |

| 상품 등록 | 상품 수정 | 상품 삭제 |
| --- | --- | --- |
| <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/0383218d-686f-44b3-8981-0445622b920f" width="250" height="497"/> | <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/6689e76a-c02b-4450-875d-7c5aa83cd300" width="250" height="497"/> | <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/96513887-5be3-43ff-a11f-e594829666db" width="250" height="497"/> |

| 채팅 | 로그아웃 | 404 |
| --- | --- | --- |
| <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/99c915aa-0bda-42cf-83e5-d39314edf90b" width="250" height="497"/> | <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/70606c20-e804-4193-9345-c6fdc114352f" width="250" height="497"/> | <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/beb35fa0-82d8-4f98-a917-541ae1ec3645" width="250" height="497"/> |

| 다크모드 | 
| --- |
| <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/ef2471fe-5470-4dfc-b6b6-4316e175e83b" width="250" height="497"/> <img src="https://github.com/JoWonYeong/coding-test/assets/92977925/ef96db44-3080-4aa6-a6b5-f6ecb72826ba" width="250" height="497"/> | 

<br />

## 상태관리

<img src="https://github.com/FRONTENDSCHOOL5/final-02-Ta-dak_Ta-dak/assets/96939334/3d78f730-199b-43ac-8d9b-c364114c68ca">

**Recoil을 선택한 이유?**

- Redux는 많은 추가적인 코드와 설정을 필요로 하지만 Recoil은 상대적으로 간단하고 직관적인 boilerplate-free API를 제공합니다.
- React 문법 친화적이고, 전역 상태 값도 React의 state처럼 간단한 get/set 인터페이스로 사용할 수 있는 API를 제공합니다.
- React를 배운 기간이 얼마 되지 않은 팀원끼리 협업 할 때 유용합니다.
- React가 제공하는 전역 상태관리 기능인 Context API 활용해서 상태 관리를 할 수 있지만 나중에 중간 규모, 대규모 프로젝트를 생각했을 때 프로젝트의 요구사항과 복잡성을 고려해서 recoil과 같은 상태 관리 라이브러리를 경험해볼 필요성이 있기 때문에 recoil로 상태관리를 하기로 결정했습니다.

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
  
<table>
<caption>hook이 사용된 파일</caption>
  <tr>
    <th>useModalControl</th>
    <th>useAlertControl</th>
    <th>useScrollBottom</th>
    <th>useImageUploader</th>
  </tr>
  <tr>
    <td rowspan="4">Post.jsx <br /> ChatRoomPage.jsx <br /> PostDetail.jsx <br /> ProfilePage.jsx </td>
    <td> Post.jsx <br /> ProductDetail.jsx <br /> AddProductPage.jsx <br /> PostDetail.jsx <br /> ProfileModificationPage.jsx <br /> ProfilePage.jsx <br /> ProfileSettingPage.jsx <br /> UploadPage.jsx</td>
    <td> FeedHomePage.jsx <br /> FollowListPage.jsx </td>
    <td> AddProductPage.jsx <br /> ProfileModificationPage.jsx <br /> ProfileSettingPage.jsx <br /> UploadPage.jsx </td>
  </tr>
</table>

<br />

**axios 라이브러리 활용** `settingAxios.jsx`
  - API 요청을 보낼 기본 틀의 URL과 header을 포함하고 있는 jsx 파일을 별도로 생성하고 재사용하도록 하여,   
    요청할 URL과 HTTP 메서드만으로 API 요청이 가능하게끔 했습니다.
  - 토큰이 필요한 API 요청의 경우 axios 라이브러리에서 제공하는 interceptors 를 이용해서  
    인증 헤더를 추가하여 인증된 요청을 보내도록 했습니다.

<br />

**컴포넌트의 재사용성 고려** `FollowListPage.jsx` / `UploadPage.jsx` / `AddProductPage.jsx`
  - useLocation Hook을 호출해서 생성한 객체의 속성인 `pathname` 으로 현재 페이지의 경로를 확인하고,  
    이를 조건문에 활용하여 컴포넌트를 재사용하도록 했습니다.

<br />

**로그인 여부에 따른 페이지 접근** `AtomUserState.js` / `ProtectedRoute.jsx` / `App.js`
  - Recoil의 `Selector`와 React-router의 `<Outlet/>`, `<Navigate>` 컴포넌트를 이용해서  
    로그인 유무에 따라 특정 페이지에 접근 시 페이지를 보호하고 특정 페이지로 리다이렉팅 시키는 Protected Route를 생성했습니다.

<br />

## 리팩토링

1. 잘못된 확장자로 여러번 파일 업로드 시 예외처리
  - 문제: 잘못된 확장자로 파일 업로드를 할 경우 조건문으로 인해 동작되어야하는 state의 변화가 이루어지지 않아서,  
    사용자 입장에서 잘못된 접근임을 인지하기 어려웠습니다.
  - 해결: useEffect Hook을 이용해서 state의 상태값의 변화를 감지하도록 하여  
    상태의 boolean 값에 따라 state의 변화를 일으키도록 했습니다.  
    이를 통해 상태값이 변화하지 않는 현상에 대응하고 처리할 수 있었습니다.

2. 프로필 페이지에서의 탭바 활성화 상태 유지처리
  - 문제: 프로필 페이지에서 탭바를 useState Hook으로 state를 관리하기 때문에,  
    다른 컴포넌트로 이동 후에 뒤로가기를 버튼을 누를 경우 설정해놓은 state의 초기값에 해당하는 탭바가 활성화됐었습니다.
  - 해결: useParams Hook 이용해서 추출한 경로를 활용하여 유저 프로필 페이지에서 탭을 선택하고 해당하는 컨텐츠를 표시할 수 있게 했습니다. 

<br />
