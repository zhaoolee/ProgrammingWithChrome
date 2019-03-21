# 用Chrome学编程 Programming with Chrome

#### 利用chrome学编程,一切都变得简单...
- 用chrome学编程,安装浏览器就可以上手,javascript本身也足够强大,前后端通吃,容易出成果,有了成果产生的成就感也就有了持续学习编程的动力...

> ![chrome_js](http://upload-images.jianshu.io/upload_images/3203841-caca2201163e8dd9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#### 编辑器在哪里?
> ![开启snippets](http://upload-images.jianshu.io/upload_images/3203841-94c224c203a10779.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



#### 第一次编程要打印"Hello world"!


> ![动图_天才第一步](http://upload-images.jianshu.io/upload_images/3203841-dfed97c78db9f5ad.gif?imageMogr2/auto-orient/strip)

源码:
```
alert("Hello World");
```


> 为什么第一次要打印`Hello world`?
`Hello world`是程序员的符号和图腾,第一本介绍C语言的书《C程序设计语言》,书的第一章通过打印`Hello world`介绍了c语言,后来人们也都跟着用了... 其实`Hello world`你可能一辈子也用不到,你也可以打印`Hello girl`

##  九九乘法表!

> ![打印小九九](http://upload-images.jianshu.io/upload_images/3203841-7a02ba88aa84a3b4.gif?imageMogr2/auto-orient/strip)

#### 源码:
```javascript
function jiujiu() {
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
jiujiu();
```



#### 九九乘法表涉及了编程的循环(负责从一数到九),函数(决定什么时候开始数)...

> 循环就是让计算机做重复的工作:


> ![动图_循环弹出](http://upload-images.jianshu.io/upload_images/3203841-6dcac29a90137748.gif?imageMogr2/auto-orient/strip)



#### 这里面的`i`被称为变量,负责计数,计算机每完成一次,`i`就会加一,当累加到十的时候,任务完成!

```javascript
for(var i = 1; i<=10; i++){

    alert("这是第"+i+"个弹窗");
    
}

```
- 这里面的function就是函数,函数是一个功能,它可以简单而无聊,也可以复杂而强大...
- 但一个好的函数可以简单而强大...

## 函数为chrome写扩展


#### chrome扩展可以看做是浏览器的一个小插件,这次我们就用函数为chrome写一个时钟...


> ![动图_时钟扩展](http://upload-images.jianshu.io/upload_images/3203841-78ab22ae11b14df4.gif?imageMogr2/auto-orient/strip)



#### 源码:
```javascript
function my_clock(clock_div){
	// 获取今天的日期	
	var today = new Date();
	// 获取当前的"时"	
	var h = today.getHours();
	// 获取当前的"秒"	
	var m = today.getMinutes();
	// 获取当前的"秒"	
	var s = today.getSeconds();

	// 为了美观, 当"分钟数"小于十的时候在个位数的前面补一个零
	m = m >= 10? m: ('0'+m);
	// 为了美观, 当"秒钟数"小于十的时候在个位数的前面补一个零
	s = s >= 10? s: ('0'+s);

	// 将刚刚得到的数据拼接好,插入到结点中
	clock_div.innerHTML = h+":" + m + ":" + s;
	// 每隔1000毫秒(一秒钟)更新一次时间	
	setTimeout(function(){my_clock(clock_div)}, 1000);
}

// 通过Id获取元素结点
var clock_div = document.getElementById("clock_div");

// 将元素结点传入my_clock函数

my_clock(clock_div);

```


简单与强大并不矛盾,getHours, getMinutes, getSeconds是系统内置的函数,我们简单调用它们,它们为程序员提供强大的功能.


> ##如何获取独立IDE?



> ![动图_独立IDE](http://upload-images.jianshu.io/upload_images/3203841-dc9bb5ed3322b07f.gif?imageMogr2/auto-orient/strip)


(未完待续...)


---
>教程涉及到的资源我都通过百度网盘分享给大家,为了便于大家的下载,资源整合到了一张独立的帖子里,链接如下:
http://www.jianshu.com/p/4f28e1ae08b1