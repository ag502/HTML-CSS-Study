# HTML-CSS-Study

HTML/CSS TIL

## 2019-07-19

1. 기본 HTML 태그
   - \<!DOCTYPE>
   - title <br>
     웹브라우저의 제목
   - \<h1>~\<h6> <br>
     크기는 설정할 수 있지만 따로 설정하지 않으면 <br>
     \<h1>부터 순서대로 작아짐
   - \<p> <br>
     문단은 \<p> 안에 삽입. <br>
     위, 아래에 여백이 생김
   - \<b> <br>
     굵은 텍스트
   - \<strong> <br>
     텍스트를 굵게 변환하지만 의미가 있는 semantic tag
   - \<i> <br>
     이탈릭체
   - \<em> <br>
     텍스트를 이탈릭체로 변환하지만 semantic tag
   - \<a> <br>
     하이퍼링크 태그, target = \_blank 속성 설정시 새탭에서 링크실행
   - \<img> <br>
     src속성에 상대경로, 절대경로 입력. <br>
     - 상대경로 <br>
       하위 폴더로 이동시 폴더명/파일이름.확장자 <br>
       상위 폴더로 이동시 ../파일이름.확장자
   - \<div>
   - \<span>
2. 기본 CSS 속성

   - font-size
   - text-align
   - color
   - margin-[top|bottom|left|right]

3. 클래스(class)와 아이디(id)

   - 클래스(class) <br>
     class="class명"으로 지정 <br>
     중복사용가능, 한 태그에 여러개의 class명 지정가능 <br>
     CSS 적용시 .클래스 명 <br>
   - id = "id명"으로 지정 <br>
     중복사용불가, 한 태그에 하나의 id명만 지정가능 <br>
     CSS 적용시 #아이디 명

4. TextStyling

   - TextColor
     - HEX(16진법)
     - 색이름 사용
     - RBG(r, g, b)
   - text-align <br>
     <U>inline 요소에는 적용되지 않음</U> <br>
     <u>block 요소로 감싸거나 display:block 후 적용</u>
   - text-weight <br>
     100 ~ 900까지 100단위
   - text-decoration <br>
     underline, overline, line-through, none <br>
     a **Tag의 링크 밑줄을 없앨때 none 사용**
   - font-size
     - Absolute
       - px <br>
       - pt <br>
         px보다 1.3배정도 큼
     - Relative
       - % <br>
         부모 요소와 비교해서 적용
       - em <br>
         % / 100
   - line-height <br>
     줄간격 조정, content-area에는 영향을 미치지 않음 <br>
     font-size, font-family에 영향을 받음
   - font-family <br>
     font-family : "제1폰트", "제2폰트",...., "font category" <br>
     google font 사용 <br>
     font file 사용 : @ font-face <br>
     font category
     - serif, sans-serif, monospace, cursive, fantasy

5. Box Model
   - content, border, padding, margin
   - width, height
     - min : 설정한 값 이하로 크기가 줄지 않음
     - max : 설정한 값 이상으로 크기가 늘어 나지 않음
   - overflow <br>
     width, height, max-width, max-height 설정시 <br>
     내용이 들어갈 공간이 부족하여 넘칠경우
     - : hidden <br>
       넘친 내용을 자름
     - : scroll <br>
       스크롤을 내려 볼 수 있게 함
     - : auto <br>
       스크롤을 내려 볼 수 있게 함(내용이 넘칠때만 스크롤 생성)
     - : visible <br>
       기본값 넘친 내용을 그대로 보여줌

---

## 2019-07-20

1. Border <br>

   - 한줄에 끝내기 <br>
     border: 선굵기, 선종류, 색깔
   - 나눠서 지정 <br>
     border-width, border-style, border-color
   - 테두리 없애기 <br>
     <u>input 태그에 기본설정 제거할때</u> <br>
     border: none;

2. Box Styling<br>

   - border-radius <br>
     border-[top|bottom]-[left|right] - radius <br>
     모서리를 둥글게 만듦
   - background-color
   - box-shadow <br>
     box-shadow: 세로 가로 [blur][spread] [color]

3. Box-Sizing <br>
   width, heigth 값을 정한 후 padding 이나 border를 지정하는 경우 기존의 width, height값에 padding, border의 값이 더해짐 <br>
   해결책: box-sizing: border-box <br>
   지정한 width, height 값을 유지하기 위해 자동조절됨.

4. Background Image
   - background-image: url("경로")
   - background-repeat
     - no-repeat: 반복없음
     - repeat-x : x축으로 반복
     - repeat-y : y축으로 반복
     - repeat : x, y축으로 반복
     - space: 반복할 수 있을 만큼 반복하고 남은공간 여백
     - round: 반복할 수 있을 만큼 반복하고 남는공간 이미지 확대
   - background-size
     - auto: 원래 사이즈대로 출력
     - cover:화면을 채우면서 비율 유지
     - contain: 가로, 세로중 먼저 채워지는 쪽에 맞춰서 출력
     - 픽셀값 지정
     - 퍼센트값 지정
   - background-position
     - [left|right|center top|bottom|center]

---

## 2019-07-21

1.  css 선택자

    - 태그이름 <br>
      ```css
      /* 모든 <h1> 태그 */
      h1 {
      }
      ```
    - 클래스/아이디 <br>

      ```css
      /* something이라는 클래스를 가지고 있는 모든 태그*/
      .something {
      }

      /* something이라는 아이디를 가지고 있는 태그 */
      #something {
      }
      ```

    - 자식(children) <br>
      ```css
      /* something 클래스를 가지고 있는 요소의 자식 중 모든 <a> 태그 */
      .something i {
      }
      ```
    - 직계 자식(direct children) <br>
      ```css
      /* something 클래스를 갖고 있는 모든 요소의 직속 자식 중 모든 <a> 태그 */
      .something > a {
      }
      ```
    - 복수 선택 <br>
      ```css
      /* one 클래스를 가지고 있는 태그 모두와 theOther 클래스를 가지고 있는 태그 모두 선택 */
      .one,
      .theOther {
      }
      ```
    - 여러조건 <br>
      ```css
      /* one 클래스도 가지고 있으면서도 theOther 클래스도 가지고 있는 태그 */
      .one.theOther {
      }
      ```
    - 가상 클래스(Pseudo-class) <br>

      ```css
      /* something 클래스의 자식인 p태그 중 세번째 */
      .something p:nth-child(3) {
      }

      /* something 클래스의 자식인 p태그 중 첫번째 */
      .something p:first-child {
      }

      /* something 클래스의 자식인 p태그 중 마지막 */
      .something p:last-child {
      }

      /* something 클래스의 자식인 p태그 중 마지막이 아닌 p태그 */
      .something p:not(:last-child) {
      }

      /* something 클래스의 자식인 p태그 중 첫번째가 아닌 p태크 */
      .something p:not(:first-child) {
      }
      ```

    - 마우스 호버 <br>
      ```css
      /* 마우스가 태그에 올라갔을 때 */
      tag:hover {
      }
      ```

2.  CSS 우선순위

    - 순서 <br>
      똑같은 선택자가 뒤에 나오게 되면 이전 스타일을 덮어씀
    - Specificity <br>
      1. 인라인 스타일
      2. 선택자의 id 갯수
      3. 선택자의 class, attribute, pseudo-class
      4. 나머지 요소(가상요소 포함)

3.  Display
    - 종류
      - inline <br>
        같은줄에 머무름, 필요한 만큼의 가로길이 <br>
        가로, 세로의 의미가 없음
      - block <br>
        새로운 줄에 생김, 최대한 넒은 가로길이
      - inline-block <br>
        inline요소와 같이 같은 줄에 머무르면서도, <br>
        block요소와 같이 가로, 세로의 길이가 필요할때
      - flex
      - list-item
      - none
    - BaseLine <br>
      글씨의 하단 부분 <br>
      inline 요소들은 baseline에 맞춰 정렬

---

## 2019-07-22

1. Positioning

   - static <br>
     defalut값, 원래의 있어야할 자리
   - relative<br>
     현재의 위치기준으로 [top | bottom | left | right] 의 값을 지정해서 움직일 수 있음 <br>
     위치를 움직이게 되면 원래의 있었던 자리에 공간이 남아 있음
   - fixed <br>
     브라우저의 위치기준으로 [top | bottom | left | right]의 값을 지정해서 움직일 수 있음 <br>
     스크롤을 해도 항상 그자리에 고정 되어 있음 <br>
     위치를 움직이게 되면 원래의 있었던 자리에 공간이 채워지게 됨
   - absolute <br>
     포지셔닝된(fixed, relative, absolute) 가장 가까운 조상 요소를 기준으로 [top | bottom | left | right]의 값을 지정해서 움직일 수 있음 <br>
     포지셔닝된 조상 요소가 없다면 브라우저 기준으로 이동

2. Float<br>
   해당요소를 띄우고 빈자리는 채워지게 됨. <br>
   단 inline요소나 inline-block 요소는 띄워진 요소 아래로 들어가지 못함 <br>
   공간이 부족하게 되면 다음줄로 내려감 --> 너비를 창너비의 %로 주게되면 비율이 유지됨 <br>
   - clear <br>
     [left | right]로 왼쪽과 오른쪽에 float된 요소를 없게함

---

## 2019-07-23

1. 리스트
   - ol(ordered list) <br>
     순서가 있는 리스트, type으로 번호 양식을 지정
   - ul(unordered list) <br>
     순서가 없는 리스트 <br>
     list-style-type로 모양 변화 <br>
   - list-style:none 으로 리스트의 기호 제거
