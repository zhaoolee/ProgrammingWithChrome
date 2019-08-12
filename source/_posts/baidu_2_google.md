---
title: 前端要开车,百度变谷歌
top: 999
tags:
- 前端要开车,百度变谷歌
categories:
- 前端要开车,百度变谷歌

---

------

<!-- more -->



##  前端要开车,百度变谷歌



![baidu_2_google](https://user-images.githubusercontent.com/15868458/62856847-8e954700-bd28-11e9-8797-76e014ce06d3.gif)



- 原图地址: https://user-images.githubusercontent.com/15868458/62856843-8ccb8380-bd28-11e9-8ac7-f7b3aa760218.gif



---



## Gif图中相关素材:



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

