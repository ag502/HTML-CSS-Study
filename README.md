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
     inline 요소에는 적용되지 않음 <br>
     block 요소로 감싸거나 display:block 후 적용
   - text-weight <br>
     100 ~ 900까지 100단위
   - text-decoration <br>
     underline, overline, line-through
