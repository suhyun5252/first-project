# 다녀ALL

다녀ALL 프로젝트는 여행 계획을 세우고 게시판을 통해 공유할 수 있는 웹 애플리케이션입니다. 이 프로젝트는 React, styled-components 등을 사용하여 개발되었습니다.

## 1. 프로젝트 소개

```
- **프로젝트 명**: 다녀ALL
  **의미**:

  - "다녀ALL"이라는 이름은 **"다녀올"** 여행 계획을 세우자는 뜻을 담고 있습니다.
  - "다녀ON"이라는 게시판을 통해 사용자가 **"다녀온"** 여행지를 공유하고
     서로의 경험을 나누자는 의미도 포함하고 있습니다.

  **목표**: 여행 계획 작성 및 공유, 사용자 맞춤 여행 추천 기능 제공
```

## 2. 프로젝트 참여자(협업)

```
FE
- 팀장 : 이수현
- 팀원 : 강정호, 오은애

BE
- 팀장 : 심보윤
- 팀원 : 김일지, 백한별, 이어진, 김우준
```

## 3. FE 역할 분담

```

```

## 4. 개발 기간

```
-2024.12.16 ~ 2025.01.08
```

## 5. 기술 스택

```
- React
- styled-components
- Swiper (슬라이드)
- Axios (API 요청)
- Context (상태관리)
```

## 6. 설치 및 실행 방법

```

```

```

```

```

```

## 7. 협업 자료

### 1. 회의록

- [회의록 : Notion](https://buttercup-lyric-4ee.notion.site/1576cf890caa807e865deba39a032df0?v=1576cf890caa8194abf0000c14b5b68b&pvs=4)

### 2. 레이아웃

- [레이아웃 : Figma](https://www.figma.com/design/L57TThYRiljYfnrPiq9HEL/1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=1-6&p=f&t=mFne0RXla5MS88TH-0)

### 3. 발표

- [발표 자료: Canva](https://www.canva.com/design/DAGbHithVhQ/1s9tg3SOvaOuf8lpAN7tJA/edit)

## 8. 프로젝트 구조

```
danyeoall
├─ .prettierrc
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ images
│     ├─ 404
│     ├─ about
│     └─ icon
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ components
│  │  ├─ auth
│  │  │  ├─ Agreement.jsx
│  │  │  ├─ AgreementDetail.jsx
│  │  │  ├─ CodeCheck.jsx
│  │  │  ├─ FindPw.jsx
│  │  │  ├─ ResetPw.jsx
│  │  │  └─ SignupForm.jsx
│  │  ├─ common.js
│  │  ├─ footer
│  │  │  ├─ Footer.jsx
│  │  │  └─ footerStyle.js
│  │  ├─ header
│  │  │  ├─ Header.jsx
│  │  │  └─ headerStyle.js
│  │  ├─ Layout.jsx
│  │  ├─ list-result
│  │  │  ├─ PlanListInput.jsx
│  │  │  └─ PlanListResult.jsx
│  │  ├─ Logo.jsx
│  │  ├─ main
│  │  │  └─ SwiperItem.jsx
│  │  ├─ mypage
│  │  │  ├─ mypage.js
│  │  │  ├─ MypageTab.jsx
│  │  │  ├─ MypageTop.jsx
│  │  │  └─ MyplanlistItem.jsx
│  │  ├─ myplan
│  │  │  ├─ mydetailplan.js
│  │  │  └─ MyPlanTable.jsx
│  │  ├─ plantabs
│  │  │  ├─ AddPlace.jsx
│  │  │  ├─ FocusMap.jsx
│  │  │  ├─ OfferItem.jsx
│  │  │  ├─ PlanTop.jsx
│  │  │  ├─ RecommendItem.jsx
│  │  │  ├─ SchedulePush.jsx
│  │  │  └─ TravelMap.jsx
│  │  ├─ popup
│  │  │  ├─ ConfirmPopup.jsx
│  │  │  └─ popup.js
│  │  └─ ui
│  │     ├─ button
│  │     │  ├─ BasicBtn.jsx
│  │     │  └─ button.js
│  │     └─ logo
│  │        ├─ LayerLogo.jsx
│  │        └─ logo.js
│  ├─ constants
│  │  └─ login.js
│  ├─ contexts
│  │  ├─ LoginContext.jsx
│  │  └─ PopupContext.jsx
│  ├─ fetch
│  │  └─ auth.js
│  ├─ hooks
│  │  └─ Axios.js
│  ├─ index.css
│  ├─ main.jsx
│  └─ pages
│     ├─ about
│     │  ├─ about.js
│     │  ├─ GuidePage.jsx
│     │  └─ IndexPage.jsx
│     ├─ auth
│     │  ├─ FindPwPage.jsx
│     │  ├─ IndexPage.jsx
│     │  ├─ login.js
│     │  └─ SignupPage.jsx
│     ├─ index.js
│     ├─ IndexPage.jsx
│     ├─ mypage
│     │  ├─ my-info
│     │  │  ├─ DeleteMemberPage.jsx
│     │  │  ├─ EditProfilePage.jsx
│     │  │  ├─ IndexPage.jsx
│     │  │  ├─ myinfo.js
│     │  │  └─ UpdatePwPage.jsx
│     │  └─ plan-list
│     │     ├─ myplan.js
│     │     ├─ MyPlanDetailPage.jsx
│     │     └─ MyPlanListPage.jsx
│     ├─ NotFoundPage.jsx
│     ├─ planning
│     │  ├─ CalendarPickerPage.jsx
│     │  ├─ CityPage.jsx
│     │  ├─ MakePlannerPage.jsx
│     │  ├─ plan.js
│     │  └─ react-datepicker.css
│     └─ travel-board
│        ├─ board.js
│        ├─ DetailPage.jsx
│        ├─ IndexPage.jsx
│        ├─ WritePostPage.jsx
│        └─ WritePutPage.jsx
└─ vite.config.js

```

# Contact

`이수현` Email : o52o.suhyun@gmail.com
`강정호` Email : o52o.suhyun@gmail.com

# 감사합니다.
