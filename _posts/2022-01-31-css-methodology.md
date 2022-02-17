---
layout: post
title: css 방법론 3가지
tags: [css, OOCSS, BEM, SMACSS]
---

# [CSS 방법론] OOCSS, BEM, SMACSS

CSS 방법론은 3가지가 있는데 각각 어떤 것에 중점을 두는지 알아보다가 정리해본다.

- TOC
{:toc}

방법론을 사용하는 이유는   
- 코드 재사용 할 수 있게
- 유지보수 쉽게
- 확장 가능하게
- class명으로 예측이 가능하게


## OOCSS (Object Oriented CSS)
**중복을 최소화 하고 캡슐화**를 원칙으로 한다.

(장) 공통된 부분을 찾아 어디서나 재활용 할 수 있다. <br>
(단) 다중 class 사용으로 유지보수의 어려움과 가독성이 떨어진다.

- 구조와 외형을 분리 또는 결합
```html
<a href="#" class="sns-link twitter">Twitter</a>  
<a href="#" class="sns-link facebook">Facebook</a>
```
```css
.sns-link{display:inline-block; padding:10px; border:1px solid #000; border-radius:10px; color:#fff;}
.twitter{background-color: skyblue;}
.facebook{background-color: dodgerblue;}
```


- 컨테이너와 컨텐츠를 분리
  ```html
    <header class="header width-1440">Header</header>
    <footer class="footer width-1440">Footer</footer>
  ```

  ```css
    .header{position: fixed;top: 0;}
    .footer{position: absolute;bottom: 0;}
    .width-1440{width: 1440px;margin: 0 auto;}
  ```


## BEM (Block, Element, Modifier)
  **block(전체를 감싸고 있는 블록 요소)__element(내부 요소)--modifier(기능/수정)** <br>
  ID는 사용할 수 없고, 오직 class명만 사용할 수 있다. <br>

  (장) 직관적인 class명으로 마크업구조 파악에 용이함 <br>
  (단) class명이 상대적으로 길어질 수 밖에 없어서 코드가 길어지고 복잡해짐
  
  ![BEM](/assets/img/post-img/bem.png "BEM")
  

  `block`은 문단 전체에 적용된 element 또는 element를 담고 있는 컨테이너를 말한다. <br>
      ex) header / menu / search from / content / footer <br>
  `element`는 block 안에서 내부 구성을 표현. element는 상황에 따라 달라진다. <br>
      ex) .header__logo / .header__menu / .header__search / .header__navigation <br>
  `Modifier`은 block 또는 element의 속성이다. <br>
      ex) .header__navigation‐‐secondary 



## SMACSS (Scalable and Modular Architecture for CSS)
**범주화(categorization)로 패턴화** 하고자 하는 방법론이다. <br>
기본(base), 레이아웃(layout), 모듈(module), 상태(state), 테마(theme) 다섯가지의 범주를 제시한다.

- Base : 스타일 초기화 (reset.css)
    ```css
    body,p,h1,h2,h3,h4,h5,h6,ul,ol,li,dl,dt,dd,table,th,td,form,fieldset,legend,input,textarea,button,select{margin:0;padding:0}
    body,input,textarea,select,button,table{font-size:14px;line-height:1.25}
    body{position:relative;background-color:#fff;color:#000;-ms-text-size-adjust:none;-webkit-text-size-adjust:none}
    img,fieldset{border:0}
    ul,ol{list-style:none}
    table{border-collapse:collapse}
    em,address{font-style:normal}
    a{color:inherit;text-decoration:none}
    ```

- Layout : 레이아웃과 관련된 스타일 정의
  - Class명에 suffix “l-”를 붙인다.
    
  ```css
      #content {width: 75%; float: left;}
      #aside {width: 25%}
      .l-fixed #content {width: 100%;margin-right: 10px;}
      .l-fixed #aside {width: 200px}
  ```

- module : 재사용 가능한 구성요소
    - 페이지에서 재사용 가능한 구성 요소 (버튼, 위젯, 배너 등)
    - 모듈은 레이아웃 구성 요소 안에 존재하지만 다른 모듈에도 존재할 수 있음
    - 각 모듈은 독립형으로 존재하도록 설계
    - 재사용을 위해 id선택자와 태그선택자를 사용하지 않음. 태그선택자를 사용해야 한다면, > child 셀렉터를 사용
    ```css
    .box {}
    .box-name {}
    .box-number {}
    .box > span{}
    ```

- state : 요소의 상태 변화를 표현하고 접두사 사용
  - 요소의 상태변화를 표현하는 요소 (툴팁, 아코디언 등)
  - active, disable 등이며 suffix "is-"나 "s-"를 붙여서 사용
    ```css
    .is-error {}
    .is-hidden {}
    .is-collapsed {}
    .is-disabled {}
    ```

- theme : 사용자가 선택 가능 하도록 스타일을 재선언하여 사용
    - 사용자가 선택 가능하도록 스타일을 재선언하여 사용.
    - Theme는 전반적인 Look and feel을 정의하며 suffix "theme-"를 붙인다.
  ```css
  .theme-black{}
  ```
