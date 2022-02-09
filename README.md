# 원티드 프리온보딩 코스

# Toggle

### 기능 구현

- 버튼 이동 구현

  클릭될 때마다 이동하는 버튼의 위치를 하드코딩하지 않고 transition, transform을 이용해 부모의 너비에 맞게 조절하도록 했습니다. 

- 배경 이동 구현

  색이 있는 배경을 overflow: hidden을 이용해 왼쪽에 숨기고 transform을 이용해 오른쪽으로 움직이며 채워지는 느낌이 나도록 구현했습니다.

- Text 변경 구현

  useState를 이용해 버튼의 위치에 따라 ON, OFF를 교체하도록 구현했습니다. 

### Error handling

- 버튼의 위치를 자동으로 조정하기 위해 필수적으로 left 속성을 이용할 수 밖에 없었는데 그러다보니 사파리에서 버벅이는 현상이 발견됐습니다.

  <img width="810" alt="스크린샷 2022-02-09 오후 3 15 38" src="https://user-images.githubusercontent.com/79268108/153138712-5d6bc2e0-4933-46fe-af48-8f01a9c46baa.png">

  성능 분석결과 left에 의해 버튼이 움직일때마다 layout이 발생했기 때문이라는것을 알게 됐습니다. 
  
  

  ![code](https://user-images.githubusercontent.com/79268108/153141148-aa673b67-83df-4315-b423-e1956e38fe36.png)

  따라서 기존에 있던 left를 제거하고
  
  

  ![code2](https://user-images.githubusercontent.com/79268108/153141065-37e7bab7-bfce-40f6-94e2-0400f81c8670.png)

  useEffect를 통해 처음 부모너비를 계산한 후 위치를 조정할 수 있도록 개선했습니다. 
  
  

  <img width="778" alt="스크린샷 2022-02-09 오후 3 46 30" src="https://user-images.githubusercontent.com/79268108/153141396-0d4e6585-43a0-4cb7-9cc8-a93e0db97ea1.png">

  레이아웃 변경이 최소화 된 것을 확인할 수 있었고 사파리에서도 부드러운 애니메이션을 구현할 수 있었습니다. 

  전 후 비교영상 보러가기 : https://statuesque-stag-6a0.notion.site/pre_onBoarding-de3d59959d4a438f990cb7844aae35b7

# Modal

### 기능 구현

- 모달 배경과 모달 구현

  Boolean 값을 가지는 상태에 따라 모달의 적용과 제거를 구현했습니다. 

- 모달 제거 구현
  close 버튼을 클릭하거나 모달의 배경을 클릭하면 모달이 제거되도록 구현했습니다. 

# Tab

### 기능 구현

- 탭 클릭 시 배경색 변경 구현

  각 탭의 상태는 Boolean으로 이루어진 배열을 useState를 이용해 관리했습니다. 그리고 styled-component를 이용해 true, false 상태에 따라 다른 색을 적용하도록 구현했습니다.

- 탭에 해당하는 페이지 구현

  페이지의 내용은 배열로 관리했고 상태가 true인 탭의 페이지만 보여줄 수 있도록 filter 메서드를 이용했습니다. 

# Tag

### 기능 구현

- focus 구현

  초기, 태그의 추가 후, 태그가 제거 후 모두 바로 입력이 가능하도록 useEffect와 useRef를 이용해 focus를 적용시켰습니다.

- 공백 방지 구현

  trim메서드를 이용해 공백인 태그는 추가될 수 없도록 구현했습니다. 

- 태그 제거 구현

  각 태그마다 고유한 식별값을 uuid를 이용해 부여했고, 타켓 태그의 id와   일치하는 태그를 제외한 나머지만 렌더링 할 수 있도록 filter 메서드를 이용했습니다.

- 태그 유효성 검사

  태그의 길이는 20자를 초과하지 못하고 중복 태그를 방지했습니다.

- 태그의 초과 방지

  태그의 양이 많아지면 초과하지 않고 스크롤될 수 있도록 구현했습니다.

# AutoComplete

### 기능 구현

- 검색 구현

  대소문자의 구분 없이 검색할 수 있도록 했고 입력한 검색어를 한 개라도 포함한 문자열이 있으면 list에서 보여줄 수 있도록 구현했습니다.

- 초기화 구현

  배경 클릭, 초기화 버튼 클릭 시 매칭 값(boolean), input의 검색어, data를 초기화했고 백스페이스를 클릭할 때마다 검색어와 데이터를 비교할 수 있도록 했습니다.

# ClickToEdit

### 기능 구현

- 유효성 검사

  이름 : 특수문자, 숫자가 입력될 수 없도록 구현했습니다.

  나이 : 숫자를 제외한 나머지, 음수, 120을 초과한 값은 입력될 수 없도록 구현했습니다. 



# 파일구조
<img width="906" alt="스크린샷 2022-02-09 오후 5 34 40" src="https://user-images.githubusercontent.com/79268108/153156792-33590f50-1ef5-44a4-b925-42af184dbf1b.png">

- common / ComponentContainer : 각 컴포넌트를 감싸는 부모 컨테이너 입니다.
- styles / idnex.js : 전역 스타일을 관리하는 파일입니다.
- util / uitl.js : 유틸리티 함수를 관리하는 파일입니다. 

