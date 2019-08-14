---
title: 写一个抽奖(点名回答问题)的扩展程序~
top: 995
tags:
- Math
- sketch
- 扩展程序
categories:
- 前端工程师

---



![select_student](https://user-images.githubusercontent.com/15868458/62990263-e2fe0b00-be7d-11e9-8c72-b7f1bf743aee.gif)

<!-- more -->

- Gif高清原图地址:  https://user-images.githubusercontent.com/15868458/62990262-e2657480-be7d-11e9-8f3b-f14c42eb342e.gif

## 如何写一个扩展程序?

- 1.设计图标

> ![image](https://user-images.githubusercontent.com/15868458/62988534-54868b00-be77-11e9-9988-39e91449fc0c.png)

sketch设计稿下载地址如下:
```
https://github.com/zhaoolee/ProgrammingWithChrome/tree/master/pwc_source/select_student_sketch_design/
```

- 2. 新建select_student文件夹(工程目录), 并在`select_student`内新建`images`文件夹,从设计稿导出5个尺寸的图标, 并放到`images`文件夹中, 新建`js`文件夹, 在`js`文件夹中新建`index.js`文件, 新建`css`文件夹, 在`css`文件夹中新建`index.css`文件,  在`select_student`文件夹中新建`index.html`文件,在`select_student`文件夹中新建`manifest.json`文件

> ![](https://user-images.githubusercontent.com/15868458/62989082-3883e900-be79-11e9-971b-44b7056d5fff.png)


- 3.  在`manifest.json`中写入以下内容

```json
// manifest.json
{
	"manifest_version": 2,
	"name": "我们找个同学回答问题!",
	"version": "1.0",
	"description": "我们找个同学回答问题!",
	"icons":{
		"16": "images/icon16.png",
		"48": "images/icon48.png",
		"128": "images/icon128.png"

	},
	"browser_action":{
		"default_icon":{
			"19": "images/icon19.png",
			"38": "images/icon38.png"

		},
		"default_title": "我们找个同学回答问题!",
		"default_popup": "index.html"
	}
}
```

- 4. 在`index.html`中写入如下内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>找个同学回答问题</title>
	<link rel="stylesheet" href="./css/index.css">
	<script src="./js/index.js"></script>
</head>
<body>


<div class="content clearfix">

	<div class="best_student" id="istudent">找同学回答问题!</div>

	<div class="btn noselect" id = "ibtn">Start</div>


</div>
	
</body>
</html>
```

- 5. 在index.js中写入如下内容(核心逻辑)

```javascript
window.onload = function () {
  function choose_student(){
      var students  = [
      "坂田银时", 
      "旋涡鸣人", 
      "宇智波佐助", 
      "不摇碧莲_张楚岚",
      "一叶知秋_叶修",
      "空条承太郎",
      "乔鲁诺乔巴纳",
      "一方通行",
      "卡卡罗特",
      "贝吉塔"];
      // 生成一个0到1的随机数
      random_num = Math.random();
      //将随机数扩大N倍 (N为数组的长度), 然后取整,获得随机的索引!
      students_index = parseInt(random_num * (students.length));
      return students[students_index];
  }

  //获取两个元素对象
  var btn = document.getElementById("ibtn");
  // 幸运儿(被抽中的学生)
  var lucky_dog = document.getElementById("istudent");

  // 切换按钮显示的文字
  btn.onclick = (function () {
    if(btn.innerHTML === "Stop"){
      btn.innerHTML = "Start";
    }else if(btn.innerHTML === "Start"){
      btn.innerHTML = "Stop";
    }
  })

  // 如果按钮显示的文字为Stop则疯狂换人, 如果显示的为Start则停止选择
  setInterval(() => {
    if(btn.innerHTML === "Stop"){
      lucky_dog.innerHTML = choose_student();
    }
  }, 80);
};
```

- 6.在index.css中写入如下内容
```css
*{
    margin: 0;
    border: 0;

}

.clearfix:before, .clearfix:after{
    content: "";
    display: table;
}

.clearfix:after{

    clear:both;
}

/*适配非主流浏览器(IE浏览器)*/

.clearfix{

    zoom:1;

}


body{


}

.noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.content{

    width: 200px;
    height: 120px;
    background: #ea6f5a;
    margin: 0 auto;
    border: 1px solid white;
    border-radius: 5px;
    position: relative;

}

.best_student{

    font-size: 25px;
    line-height: 25px;
    text-align: center;
    color: white;
    margin-top: 15px;

}

.btn{
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    width: 80px;
    height:22px;
    margin: 0 auto;
    background: white;
    border-radius: 3px;
    color: #346956;
    position: absolute;
    bottom: 20px;
    left: 60px;
}

.btn:hover{
    color: #ea6f5a;
}

.btn:active{
    background: #f2f2f2;
}
```



## Gif图中相关资源:

- 进入chrome扩展页面
```
chrome://extensions
```

- 完整程序已经上传到github, 下载地址如下:

```
https://github.com/zhaoolee/ProgrammingWithChrome/tree/master/pwc_source/select_student
```


## 编程小知识

- Math.random() 函数返回一个浮点伪随机数, 在范围[0，1)，也就是说，从0（包括0）往上，但是**排除1**, 可以实现将初始种子选择到随机数生成算法 [MDN的专业解释链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementById)