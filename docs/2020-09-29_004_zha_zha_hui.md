---
title: 如何把渣渣辉广告放到百度首页?!
top: 4
tags:
- Array
- 渣渣辉
- 百度
categories:
- 前端工程师

---

------



![zha_zha_hui](https://www.v2fy.com/asset/0i/ProgrammingWithChrome/docs/zha_zha_hui.assets/62918966-d8873700-bdd3-11e9-8a64-02fe0fc3d170.gif)


<!-- more -->


- Gif高清原图地址:  https://user-images.githubusercontent.com/15868458/62918963-d7eea080-bdd3-11e9-93c7-9617c306fb92.gif


![](https://www.v2fy.com/asset/0i/ProgrammingWithChrome/docs/zha_zha_hui.assets/62919262-bc37ca00-bdd4-11e9-9fd3-fade1acac58e.jpg)




## Gif图中相关资源:


扩展程序Tampermonkey下载地址: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en



```javascript
// ==UserScript==
// @name         百度
// @namespace    https://github.com/zhaoolee/
// @version      0.1
// @description  try to take over the world!
// @author       zhaoolee
// @match        https://www.baidu.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 将要推送的信息, 拆成6个字以内,写到一个数组里
    let info = ["大扎好", "我西渣渣辉~", "探挽蓝月", "介系里~", "没有玩过的", "船新版本~", "挤需", "体验三番钟~", "里造会", "干我一样~", "爱象", "节款游戏!"];
    // 写一个函数,遍历数组
    for(let i = 0; i<info.length; i++){
        // 定义元素出现的时间间隔 这里定义为1000毫秒, 也就是1秒钟
        let time_interval = 1000;
        // 第一个元素1秒后出现, 第二个元素2秒后出现, 第三个元素3秒后出现... 依次类推
        setTimeout(()=>{document.getElementById("su").value=info[i]}, i*1000);
    }
})();
```


## 编程小知识:

数组(Array)是一个有序数据的集合, 我们可以把渣渣辉的台词, 按照顺序存到数组里`["大扎好", "我西渣渣辉~", "探挽蓝月", "介系里~", "没有玩过的", "船新版本~", "挤需", "体验三番钟~", "里造会", "干我一样~", "爱象", "节款游戏!"]`, 然后程序就可以把渣渣辉的台词依次显示到屏幕上~
[来自MDN的专业解释](https://developer.mozilla.org/zh-CN/docs/Glossary/array)


## 项目推广:
本文属于《用Chrome学编程》的一部分, 《用Chrome学编程》用Gif图展示Chrome的骚操作, 充分挖掘Chrome的编程潜力!开源地址: [https://github.com/zhaoolee/ProgrammingWithChrome](https://github.com/zhaoolee/ProgrammingWithChrome)  如果你喜欢这个项目, 欢迎为项目加一颗🌟星 ~