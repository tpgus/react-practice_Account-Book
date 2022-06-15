리액트 학습을 위한 연습 프로젝트 : 가계부

---
* v1.0.1
- 정적인 데이터들을 화면에 표시만 해주고 있는 상태

![스크린샷, 2022-06-12 14-36-37](https://user-images.githubusercontent.com/43470398/173217279-0eea0f6e-77f6-41f0-bc68-49be86ec18cb.png)

---
* v1.0.2

<details>
<summary>사용된 개념 및 학습 내용</summary>
<div markdown="1">

- 폼 데이터 이벤트 처리

- 사용자 입력을 받아 상태로 관리, 상태 끌어 올리기

- 이전 상태에 의존하는 상태를 업데이트 하는 방법

```javascript
// 카운터 예시
setCount(prevCount => prevCount+1);
```
</div>
</details>

![스크린샷, 2022-06-13 17-32-15](https://user-images.githubusercontent.com/43470398/173314036-ecd6924f-01e9-4b95-b34a-191d707fb7f7.png)

---
* v1.0.3

<details>
<summary>사용된 개념 및 학습 내용</summary>
<div markdown="1">

- 배열 고차함수 map을 이용한 렌더링 ([key의 필요성](https://velog.io/@tpgus758/map-%EC%82%AC%EC%9A%A9%EC%8B%9C-%ED%82%A4-%EA%B0%92%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C))

- 년도별 데이터 필터링 및 조건부 렌더링 (데이터가 없을 때)

- 이전 상태에 의존하는 상태를 업데이트

```javascript
// 기존 가계부에 새로운 데이터 추가하는 로직
  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  }
```
</div>
</details>
