---
title: Css经典动画之伪元素色块覆盖文字
top: 7
tags:
- Css
- 动画
- 色块
categories:
- 前端工程师

---


![bottom_color_block_cover_font](https://user-images.githubusercontent.com/15868458/64060231-49b05200-cbfc-11e9-9bb3-df50fe6eae7c.gif)


<!-- more -->

- Gif高清原图地址: https://user-images.githubusercontent.com/15868458/64060232-49b05200-cbfc-11e9-9eba-5616240a1739.gif


## [底部色块覆盖文字 在线地址: https://zhaoolee.com/ProgrammingWithChrome/bottom_color_block_cover_font/](https://zhaoolee.com/ProgrammingWithChrome/bottom_color_block_cover_font/)

------

源码: 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>底部色块覆盖文字</title>
</head>
<body>
    <span class="bottom_color_block_cover_font">天 是 方 的 地 是 圆 的</span>

    <style>
        body{
            height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;

        }
        .bottom_color_block_cover_font{
            display: inline-block;
            padding: 10px;
            position: relative;
            color: #020002;
            z-index: 1;
            font-size: 30px;
        }

        /*鼠标浮动到文字上方变成小手*/
        .bottom_color_block_cover_font:hover{
            cursor: pointer;
        }


        .bottom_color_block_cover_font::after{
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            height: 6px;
            background-color: #BE9F6A;
            transform-origin: bottom;
            transition: all 0.2s ease-in-out;
        }


        .bottom_color_block_cover_font:hover::after{
            z-index: -1;
            height: 100%;
            background-color: #BE9F6A;
        }


    </style>



</body>
</html>
```

## 编程小知识

为dom元素添加伪元素,可以实现很多有趣的效果
