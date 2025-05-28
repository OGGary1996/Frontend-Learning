// 获取DOM的几种方式：
// 1. document.getElementById('id')：通过id获取元素
let title_1_DOM = document.getElementById('title-1');
title_1_DOM.innerHTML = "Exercise of Form";
let title_2_DOM = document.getElementById('title-2');
title_2_DOM.style.fontStyle = "italic";
// 2. document.getElementsByClassName('class')：通过类名获取元素
// 3. document.getElementsByTagName('tag')：通过标签名获取元素

// 推荐用法，通过querySelector获取元素，只需要传递一个选择器即可，选择器可以同时包含以上的三种方式，id、类名、标签名
let personal_info_DOM = document.querySelectorAll('#personal-info');
personal_info_DOM.forEach(element => {element.style.fontFamily="monospace";});
