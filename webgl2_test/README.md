# Webgl2 예제 가져와보기
> 2021. 03. 03.

- 만들기 전 GL로 직접 만들 수 있을까 생각해봤다.
- Program, VertexShader, FragementShader 다루고 레지스터 넘겨주듯 값 전달해서 그리는게 Molehill과 크게 달라보이지 않았지만 실용적인 것을 생산력있게 만들기 위해서는 라이브러리를 사용해야할 것 같았다.
- canvas('2d')를 사용해보려했는데 Safari 브라우저에서 지원되지 않는 기능(filter, ...)이 꽤나 있어서 일단 사용 안하기로 한다.
- PIXI.js를 찾았는데 stage, addChild, Sprite 등 키워드와 구조가 AS3.0의 DisplayObject, Graphic 사용경험과 비슷해보여서 이를 사용하기로 정한다.
