리액트 학습을 위한 연습 프로젝트 : 가계부

---

<details>
<summary>v1.0.1</summary>
<div markdown="1">
  
  - 정적인 데이터들을 화면에 표시만 해주고 있는 상태
  
  ![스크린샷, 2022-06-12 14-36-37](https://user-images.githubusercontent.com/43470398/173217279-0eea0f6e-77f6-41f0-bc68-49be86ec18cb.png)
  
</div>
</details>

---

<details>
<summary>v1.0.2</summary>
<div markdown="1">

- 폼 데이터 이벤트 처리

- 사용자 입력을 받아 상태로 관리, 상태 끌어 올리기

- 이전 상태에 의존하는 상태를 업데이트 하는 방법

```javascript
// 카운터 예시
setCount(prevCount => prevCount+1);
```
![스크린샷, 2022-06-13 17-32-15](https://user-images.githubusercontent.com/43470398/173314036-ecd6924f-01e9-4b95-b34a-191d707fb7f7.png)
  
</div>
</details>

---

<details>
<summary>v1.0.3</summary>
<div markdown="1">

- 배열 고차함수 map을 이용한 렌더링 **(블로그 링크 달아 놓기)**

- 년도별 데이터 필터링 및 조건부 렌더링(데이터가 있을 때와 없을 때)

- 동적인 스타일 지정 및 차트 추가

- 이전 상태에 의존하는 상태를 업데이트 하는 방법

```javascript
// 기존 가계부에 새로운 데이터 추가하는 로직
  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  }
```
  
 ![ezgif com-gif-maker](https://user-images.githubusercontent.com/43470398/174438311-78e4d764-2f72-45b1-a5c6-a23402462269.gif)

 
</div>
</details>

---
[Typescript로 리팩토링한 버전](https://github.com/tpgus/typescript_react/tree/main/account-book)


