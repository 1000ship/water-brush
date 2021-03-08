# 개발 계획
> 2021. 03. 05.

### PixiJS를 다뤄본다.
- 선 그리기, 선 속성
- DisplayObject 만들어 그려보기
- 각종 Filter 사용해보기 (Blur, ColorMatrix, DisplacementMap, ...)

## Touch API를 다뤄본다.
- 감압, 각도, 속도 등을 고려한다.

## 그림 그리기
- 아이패드 Pencil, 터치, 마우스를 모두 지원하는 그림판을 만든다.
- 파티클을 생성한다.

### Naming
- Stroke : 선을 긋는 동작
- Line : MoveEvent로 발생한 선 한개
- Particle : 일정 생명주기를 가지고 움직이다 Draw하고 사라질 입자

---

## 고민거리
- BitmapData처럼 비트맵에 자기자신을 Filter 적용하여 또 그리게 할 방법이 마땅히 떠오르지 않음..
