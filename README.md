# 🌅 HourPlace Clone Project
- 촬영장소, 모두 여기에 - 촬영 장소 공유 플랫폼 - H&M 사이트 클론
- 프론트엔드와 백엔드가 각자 소통을 통해 기술 구현을 원활하게 할력 하였고
  ` Agile` 방식을 통해 작은거부터 차근차근 만들어 갈려고 노력했습니다


## 👩‍👩‍👧‍👦 팀 소개
- 팀명 : NoSleepPlace 
- 개발 기간 : 2021.10.18 ~ 2021.10.29
- 개발 인원
  - [FrontEnd](https://github.com/wecode-bootcamp-korea/25-2nd-NoSleepPlace-frontend) 3명 : [전태양](https://github.com/xodid157), [강성구](), [성해호]()
  - [BackEnd](https://github.com/wecode-bootcamp-korea/25-2nd-NoSleepPlace-backend) 2명 : [문승준](), [김주현]()

## 🎬 프로젝트 구현 영상(사진 클릭시 유투브 링크로 연결)
[![](https://user-images.githubusercontent.com/80348575/139586650-9d5195e7-0c74-45a2-bcff-aa2797f9894f.gif)](https://www.youtube.com/watch?v=gMjL4kwj8cE)


## ⚙️ 적용기술
- FrontEnd : React, HTML5, CSS3 , Styled Components
- BackEnd : 
- Communication : Git, GitHub, Trello, Slack, PostMan

## 💾 데이터베이스 
![Untitled (3)](https://user-images.githubusercontent.com/80348575/139586819-15c5be8b-5b56-4f4c-b21f-7e6ffe7a4fb6.png)


## 📒 구현기능

### Front-end

#### 전태양
- Nav(상단바), Footer(페이지 하단), 예약 페이지, 예약 조회 페이지 레이아웃 및기능 구현
- Nav 카테고리 클릭시 쿼리 파라미터로 상품 리스트 페이지로 이동 구현
- Nav 검색 필터링 기능 구현
- 장소 상세에서 데이터를 받아와 예약을 할수있도록 데이터 전송
- 예약 페이지 조건부 랜더링으로 페이지 이동하도록 구현
- 예약 조회 페이지 쿼리 파라미터에 따라 백엔드 데이터 받아오는게 다르도록 구현

#### 성해호
- 
- 
- 
- 

#### 강성구
- 
- 
- 
- 

### Back-end

## 공통
- 
- 

#### 문승준
- 
- 
- 
- 

#### 김주현
- 
- 
- 
- 


## ⌨️ EndPoint
예시)
- SignUpView : `POST` /users/signup
- SignInView : `POST` /users/signin
- CategoryView : `GET` /products/categories
- ProductListView : `GET` /products/
- ProductDetailView : `GET` /products/<int:product_id>
- LikeView : `POST`, `GET` /likes/like
- CartView : `POST`, `GET` /carts
- CartView : `PATCH`, `DELETE` /carts?<int:cart_id>

