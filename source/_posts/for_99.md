---
title: 小学生才背诵小九九, 程序员直接代码打印

top: 997
tags:
- 小学生才背诵小九九, 程序员直接代码打印

categories:
- 小学生才背诵小九九, 程序员直接代码打印


---

------

![for_99](https://user-images.githubusercontent.com/15868458/62908815-7e26b000-bdac-11e9-86ec-97251deb2ae0.gif)

<!-- more -->

https://user-images.githubusercontent.com/15868458/62908813-7d8e1980-bdac-11e9-9089-8cd172a825dc.gif



## Gif图中相关资源

```javascript
function for_99() {
    // 存储每一行的数据
    var result = "";
    for (var i = 1; i <= 9; i++) {
        // 清空上一行的数据
        result = "";
        for (var j = 1; j <= i; j++) {
            // 表示每一句运算口诀
            con = i + "*" + j + "=" + i*j;          
            result = result + " " + con;
        }
        // 打印每一行的数据
        console.log(result + "\n");       
    }
}
// 调用刚刚写好的函数
for_99();
```

