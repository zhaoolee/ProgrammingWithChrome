---
title: 小学生才背诵小九九, 程序员直接代码打印
top: 998
tags:
- for
- 循环
- 小九九
- 小学生
categories:
- 算法


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

## 编程小知识

- `for` 语句用于创建一个循环，它包含了三个可选的表达式，三个可选的表达式包围在圆括号中并由分号分隔， 后跟一个在循环中执行的语句 [MDN的专业解释链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for)

- 循环用于让计算机做一些重复的事, 九九乘法表(小九九)是一个典型的二层的循环, 理解了程序中**循环流程**的规则, 也就能打印出九九乘法表了

