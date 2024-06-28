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
    - [Button 컴포넌트](#button-컴포넌트)
    - [Input 컴포넌트](#input-컴포넌트)
    - [Image 컴포넌트](#image-컴포넌트)
    - [GoodsItem 컴포넌트](#goodsitem-컴포넌트)
    - [Grid 컴포넌트](#grid-컴포넌트)
    - [Container 컴포넌트](#container-컴포넌트)
  - [3단계 - 질문의 답변을 README에 작성](#3단계---질문의-답변을-readme에-작성)

---

## 1단계 - 프로젝트 세팅

- **프로젝트 설정**
  - [x] Create React App(CRA)로 React 프로젝트를 생성합니다.
  - [x] 프로젝트가 Typescript로 동작하도록 설정합니다.
  - [x] 절대 경로로 import할 수 있도록 alias를 설정합니다.

- **tsconfig.json 설정**
  - [x] 필요한 항목들을 `tsconfig.json`에 구성합니다.
  - [x] 추가적인 설정을 완료합니다.

- **ESLint 설정**
  - [x] 프로젝트에 ESLint를 추가합니다.
  - [x] eslint-config-airbnb 규칙을 기본으로 설정합니다.
  - [x] ESLint의 추가적인 설정을 완료합니다.

- **Prettier 설정**
  - [x] 프로젝트에 Prettier를 추가합니다.
  - [x] airbnb 규칙을 기본으로 설정합니다.
  - [x] Prettier의 추가적인 설정을 완료합니다.

- **emotion 라이브러리 추가**
  - [x] `emotion` 라이브러리를 프로젝트에 추가합니다.
  - [x] reset CSS를 적용합니다.

- **.gitignore 설정**
  - [x] `.gitignore` 파일을 추가합니다.
  - [x] 프로젝트에 필요하지 않은 파일들을 정리합니다.
  - [x] 프로젝트에 필요하지 않은 폴더들을 정리합니다.

---

## 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

### Button 컴포넌트

- **theme**
  - [x] `Theme` Props에 따라 `Button`의 색상과 디자인을 다르게 설정합니다.
- **size**
  - [x] `Size` Props에 따라 `Button`의 크기를 다르게 설정합니다.
  - [x] `value`가 `responsive`인 경우, 미디어 쿼리에 따라 사이즈가 달라지도록 구현합니다.
- **HTMLAttributes**
  - [x] 기본 HTML `Button` 요소의 모든 속성을 사용할 수 있도록 설정합니다.

### Input 컴포넌트

- **set boolean**
  - [x] `disabled` Props에 따라 `Input`을 비활성화합니다.
  - [x] `invalid` Props에 따라 `Input`의 색상을 다르게 설정합니다.
- **size**
  - [x] `Size` Props에 따라 `Input`의 크기를 다르게 설정합니다.
  - [x] `value`가 `responsive`인 경우, 미디어 쿼리에 따라 사이즈가 달라지도록 구현합니다.
- **HTMLAttributes**
  - [x] 기본 HTML `Input` 요소의 모든 속성을 사용할 수 있도록 설정합니다.

### Image 컴포넌트

- **ratio**
  - [x] `value`가 `number`로 설정된 경우 해당 비율로 설정합니다.
  - [x] `value`가 `square`로 설정된 경우 정사각형 비율로 설정합니다.
- **radius**
  - [x] `value`가 `number`인 경우 해당 숫자만큼 모서리를 둥글게 설정합니다.
  - [x] `value`가 `circle`로 설정된 경우 원형으로 설정합니다.
- **HTMLAttributes**
  - [x] 기본 HTML `Img` 요소의 모든 속성을 사용할 수 있도록 설정합니다.

### GoodsItem 컴포넌트

- **Default**
  - [x] `Default` 형태의 `GoodsItem` 컴포넌트를 구현합니다.
  - [x] `imageSrc`, `subtitle`, `title`, `amount` Props를 설정합니다.
- **Ranking**
  - [x] `Ranking` 형태의 `GoodsItem` 컴포넌트를 구현합니다.
  - [x] `rankingIndex` Props를 추가로 설정합니다.
  - [x] 1~3위까지는 분홍색 랭킹 뱃지를 표시합니다.
  - [x] 4위 이상은 회색 랭킹 뱃지를 표시합니다.

### Grid 컴포넌트

- [x] `Grid` 컴포넌트를 구현합니다.

### Container 컴포넌트

- [x] `Container` 컴포넌트를 구현합니다.

---

## 3단계 - 질문의 답변을 README에 작성

- **질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?**
  [답변]

- **질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?**
  [답변]

- **질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?**
  [답변]
