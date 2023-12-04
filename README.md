# React To do list✍

#### 프로젝트 이름
간단한 투두리스트

#### 사용 언어
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat-square&logo=React&logoColor=white"/>

#### 구현 사항
* 새로운 todo 추가
* todo 삭제
* todo 수정
* 완료된 todo는 줄 긋기
* Filter로 todo 상태 구분해서 분류하기
* DarkMode로 두 가지 테마(🌜,🌞) 중 선택해서 적용
* 새로고침해도 이전 todo 기록 기억하기

#### 주요 내용
* `useState`으로 입력받은 todo를 id와 status와 함께 배열로 추가
* `useEffect`으로 처음 어플리케이션을 켰을 때 한번만 실행되거나 특정 요소가 변경될 때마다 동작해야할 기능 구현
  - isDark 변수로 현재 darkMode인지 아닌지를 판단하여 그에 맞는 테마를 적용해서 화면에 보여준다
  - todos가 변경될때마다 localStorage에 저장된 새로운 todos를 받아와서 화면에 보여준다
*  todos에 변화가 있다면 todos를 JSON으로 변경한 다음 `localStorage.setItem`으로 localStorage에 저장 후
*  `localStorage.getItem`으로 localStorage로부터 변경된 todos를 받아온 후 다시 배열로 바꿔서 반환한다
*  이전 todo들이 localStorage에 저장되어있기 때문에 새로 고침하거나 어플리케이션을 껐다가 켜도 todo 기록이 남는다
*  Context를 생성하여 DarkMode 구현. 효과가 적용될 Header와 TodoList를 Provider로 감싸서 darkMode와 toggleDarkMode를 전달
*  Filter 버튼을 클릭하면 현재 status를 filter에 저장하고 todos 중 filter와 같은 status를 가진 todos만 filter해서 새로운 배열로 반환

#### 문제 해결
* Provider로 감싸고 자식 요소들이 써야하는 darkMode와 toggleDarkMode를 전달해주지 않아 Header에서 변수와 함수를 쓸 수 없었다
  - Provider에 value로 darkMode와 toggleDarkMode를 전달해주었다.
* localStorage에 todos가 저장되지가 않았다
   - todos는 배열인데 localStorage에는 문자열 데이터밖에 저장할 수 없기 때문에 todos가 저장되지 않았던 것
   - JSON.stringify로 todos를 JSON 파일로 변환하여 localStorage에 저장하고
   - todos를 받아온 후에는 JSON.parse로 배열로 변환한 후 반환했다
* 삭제 버튼과 함께 수정 버튼도 함께 구현하고 싶었다
  - useState로 edit의 초기값을 false로해서 처음에는 안보이게 했다가 삼항연산자를 써서 edit가 true가 되면 각각 다른 form을 반환하도록 했다
* todo를 많이 추가해서 스크롤이 생기게 되면 새로 추가한 todo에 맞게 scroll이 맨 밑으로 내려가야하는데 내려가지 않았다
  - React에서는 특정 DOM요소에 접근할 수 없는 대신에 useRef를 사용하면 된다
  - useRef hook을 사용해서 list 변수를 선언하고 선택하고자 하는 DOM요소인 li에 선언해준 list를 ref와 함께 속성으로 추가했다
  - scrollToBottom 함수를 만들고 함수 내에서 li.current.scrollIntoView로 새로 추가된 todo를 따라 scroll이 이동하도록 구현했다


#### 배포 링크 📌
https://sensational-nougat-9605dc.netlify.app

