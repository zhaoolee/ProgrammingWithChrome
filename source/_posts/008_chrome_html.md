---
title: Chrome保存并运行Html代码片段的方法
top: 8
tags:
- 技巧
- HTML
- Chrome
categories:
- 前端工程师

---


在网页看到一段html代码, 想自己动手试一下的时候, 我们无需任何编辑器转存, 就可以在Chrome内运行, 查看运行的效果

![chrome_html](https://user-images.githubusercontent.com/15868458/64084748-d4aa5d00-cd60-11e9-8e9e-3073b4e16235.gif)




## 步骤详解

- 复制代码
- 打开Chrome开发者工具
- 选择Sources面板
- 扩大右侧区域, 选择Sources面板下的Snippets
- 在Snippets下新建`index.html` (这里命名随意,但要以`.html`后缀结尾, 否则后面Chrome无法识别)
- 将代码粘贴到index.html中, 快捷键`Commond+s`保存代码(Windows快捷键为`Ctrl+s`)
- 右键代码区, 选择`Save as ...` , 选择`index.html`的保存位置为桌面
- 将保存到桌面的index.html拖拽到Chrome中即可查看运行效果




## 项目推广:
本文属于《用Chrome学编程》的一部分, 《用Chrome学编程》用Gif图展示Chrome的骚操作, 充分挖掘Chrome的编程潜力!开源地址: [https://github.com/zhaoolee/ProgrammingWithChrome](https://github.com/zhaoolee/ProgrammingWithChrome)  如果你喜欢这个项目, 欢迎为项目加一颗🌟星 ~