// 目标：在鼠标移入到一行时，添加一个高亮边框，移出时，移除高亮边框
// 由于tr标签本质上不能拥有边框，我们需要给th和td标签添加边框
// 1. 获取所有的tr标签
let rowDOMs = document.querySelectorAll('tr')

// 2. 遍历所有的行，并且添加上鼠标移入和移出事件，
// 在每一个事件监听器中，需要获取到td或者th标签
rowDOMs.forEach((rowDOM) => {
    // 2.1 添加鼠标移入事件
    rowDOM.addEventListener('mouseover',()=>{
        // 2.1.1 获取到所有的td和th标签
        const cells = rowDOM.querySelectorAll('td,th');
        // 2.1.2 遍历所有的td和th标签,并且加上边框
        cells.forEach((cell) => {
            cell.style.borderColor = 'red';
        })
    });
    // 2.2 添加鼠标移出事件
    rowDOM.addEventListener('mouseout',() => {
        // 2.2.1 获取到行中的所有的td和th标签
        const cells = rowDOM.querySelectorAll('td,th');
        // 2.2.2 遍历所有的td和th标签,并且去掉边框
        cells.forEach((cell) => {
            cell.style.borderColor = '';
        });
    });
});
