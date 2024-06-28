# react-gift-react-foundation

## 개요

이 저장소는 FE 카카오 선물하기 1주차 과제 (2024-06-24 ~ 2024-06-28)를 위한 React 기초 구현을 포함하고 있습니다. 학습 일지는 [여기](https://www.notion.so/TIL-FE-25dbeb894e884b889eca0fa3e4e13904)에서 확인할 수 있습니다.

---

## 목차

- [react-gift-react-foundation](#react-gift-react-foundation)
  - [개요](#개요)
  - [목차](#목차)
  - [1단계 - 프로젝트 세팅](#1단계---프로젝트-세팅)
  - [2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현](#2단계---storybook을-사용하여-재사용-가능한-컴포넌트-구현)
  - [3단계 - 질문의 답변을 README에 작성](#3단계---질문의-답변을-readme에-작성)

---

## 1단계 - 프로젝트 세팅

- [x] **Typescript 설정**
  - [x] 프로젝트를 Typescript로 설정합니다.
  - [x] 절대 경로로 Import 할 수 있게 alias를 설정합니다.

- [x] **tsconfig.json 설정**
  - [x] Typescript 설정 파일인 `tsconfig.json`에 필요한 항목들을 구성합니다.
  - [x] 추가적인 설정이 필요한 경우 해당 항목들을 추가합니다.

- [x] **ESLint 및 Prettier 설정**
  - [x] ESLint와 Prettier를 프로젝트에 추가하고, 개인적인 Lint 규칙을 세팅합니다.
  - [x] eslint-config-airbnb 기준으로 시작하되, 필요에 따라 규칙을 수정하거나 추가합니다.

- [x] **emotion 라이브러리 추가**
  - [x] 프로젝트에 `emotion` 라이브러리를 추가합니다.
  - [x] reset css를 적용하여 초기화된 스타일을 사용합니다.

- [x] **gitignore 추가**
  - [x] 프로젝트에 필요하지 않은 파일이나 폴더를 `.gitignore` 파일에 추가하여 Git으로 관리하지 않습니다.
  - [x] 사용하지 않는 icon 파일 등을 정리합니다.

---

## 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

- [ ] **Button 컴포넌트**
  - [ ] Theme Props에 따라 버튼의 색상과 디자인이 다르게 보이도록 합니다.
  - [ ] Size Props에 따라 버튼의 크기가 다르게 조정되며, 미디어 쿼리를 활용하여 반응형으로 사이즈가 조절됩니다.
  - [ ] 기본 HTML Button 요소의 모든 속성을 사용할 수 있습니다.

- [ ] **Input 컴포넌트**
  - [ ] disabled Props에 따라 Input이 비활성화되며, UI에서도 비활성화 상태임을 시각적으로 나타냅니다.
  - [ ] invalid Props에 따라 잘못된 값이 입력되었음을 UI에서 표시합니다.
  - [ ] Size Props에 따라 Input의 크기가 다르게 조정되며, 미디어 쿼리를 활용하여 반응형으로 사이즈가 조절됩니다.
  - [ ] 기본 HTML Input 요소의 모든 속성을 사용할 수 있습니다.

- [ ] **Image 컴포넌트**
  - [ ] ratio Props에 따라 이미지의 비율을 설정할 수 있습니다. 숫자로 주어진 경우 해당 비율로 조정되며, square 값이 주어진 경우 정사각형으로 보여집니다.
  - [ ] radius Props에 따라 이미지의 모서리를 둥글게 처리합니다. 숫자 값이 주어진 경우 해당 값만큼 둥글게 처리되며, circle 값이 주어진 경우 원형으로 보여집니다.
  - [ ] 기본 HTML Img 요소의 모든 속성을 사용할 수 있습니다.

- [ ] **GoodsItem 컴포넌트**
  - [ ] Default 형태와 Ranking 형태의 GoodsItem 컴포넌트를 구현합니다.
  - [ ] 각각의 디자인은 Storybook을 참고합니다.
  - [ ] 공통으로 imageSrc, subtitle, title, amount Props를 받아서 렌더링합니다.
  - [ ] Ranking 컴포넌트의 경우 rankingIndex Props를 추가로 받아서 1~3까지는 분홍색 랭킹 뱃지가 보이고, 나머지 숫자에는 회색 랭킹 뱃지가 표시됩니다.

- [ ] **Grid, Container 컴포넌트**
  - [ ] Grid와 Container 컴포넌트를 구현합니다.

---

## 3단계 - 질문의 답변을 README에 작성

- **질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?**
  [답변]

- **질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?**
  [답변]

- **질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?**
  [답변]
