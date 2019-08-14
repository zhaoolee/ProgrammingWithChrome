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