---
title: 前端要开车,百度变谷歌
top: 3
tags:
- getElementById
- document
- 百度
- 谷歌
categories:
- 前端工程师

---

------


![baidu_2_google](https://user-images.githubusercontent.com/15868458/62856847-8e954700-bd28-11e9-8797-76e014ce06d3.gif)

<!-- more -->

- Gif高清原图地址: https://user-images.githubusercontent.com/15868458/62856843-8ccb8380-bd28-11e9-8ac7-f7b3aa760218.gif

如果把baidu-logo换成google-logo的会怎样?  | 换完后发现毫无违和感


---



## Gif图中相关资源:



![](https://user-images.githubusercontent.com/15868458/62853438-efb81d00-bd1e-11e9-8727-d113ff93c54f.png)



google_logo_src:  https://user-images.githubusercontent.com/15868458/62853438-efb81d00-bd1e-11e9-8727-d113ff93c54f.png



google_logo_width: 272

goolge_logo_height: 92

---



## 替换logo

```
document.getElementById("lg").childNodes[1].src="https://user-images.githubusercontent.com/15868458/62853438-efb81d00-bd1e-11e9-8727-d113ff93c54f.png";
```

## 调整logo大小

```
document.getElementById("lg").childNodes[1].width = 272;
```



```
document.getElementById("lg").childNodes[1].height = 92;
```

##  调整logo顶部距离

```
document.getElementById("head").style["padding-top"] = "100px"
```

## 我需要你的支持

本文源自[《用Chrome学编程》](https://github.com/zhaoolee/ProgrammingWithChrome) , Github开源地址 https://github.com/zhaoolee/ProgrammingWithChrome, 如果你感觉这是一个好项目, 可以给这个项目加一颗星~


## 编程小知识

- document 接口表示任何在浏览器中载入的网页，并作为网页内容的入口，也就是DOM 树。DOM 树包含了像 <body> 、<table> 这样的元素，以及大量其他元素。它向网页文档本身提供了全局操作功能，能解决如何获取页面的 URL ，如何在文档中创建一个新的元素这样的问题。[MDN的专业解释链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)

- document 的方法 getElementById()返回一个匹配特定 ID的元素. 由于元素的 ID 在大部分情况下要求是独一无二的，这个方法自然而然地成为了一个高效查找特定元素的方法。[MDN的专业解释链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementById)
