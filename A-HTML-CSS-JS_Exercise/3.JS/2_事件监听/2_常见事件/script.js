// 获取用户名输入框的DOM对象
const usernameDOM = document.querySelector('#username');
// 添加一些常用的事件：
usernameDOM.addEventListener('focus',() => {
    usernameDOM.style.borderColor = 'red';
    usernameDOM.style.borderWidth = '1px';
})
usernameDOM.addEventListener('input',function() {
    this.style.backgroundColor = 'lightblue';
    console.log('start input');
})

// 获取密码输入框的DOM对象
const passwordDOM = document.querySelector('#password');
// 添加一些常用的事件：
passwordDOM.addEventListener('focus',function() {
    this.style.borderColor = 'red';
    this.style.borderWidth = '1px';
})
passwordDOM.addEventListener('input',function() {
    this.style.backgroundColor = 'lightpink';
    console.log('start input');
})

// 获取整个表单的DOM对象
const formDOM = document.querySelector('form')
// 添加提交事件
formDOM.addEventListener('submit',() =>{
    alert('Form submitted successfully!');
})
