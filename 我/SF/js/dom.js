// 用 ID 抓取元素
const header = document.getElementById('header')
// 取出元素內的文字
console.log(header.innerText)
// 取出元素內的 HTML
console.log(header.innerHTML)

// 取得所有 a 標籤，結果是陣列
// 不能用 array.forEach 跑，但是可以用 for / for in / for of
const links = document.getElementsByTagName('a')
for (let link of links) {
  // 修改文字
  link.innerText = '哈哈改掉了'
}

// 用 class 抓元素
const menus = document.getElementsByClassName('menu')
for (let menu of menus) {
  // 取 CSS 值
  console.log(menu.style.background)
  // 改 CSS 值
  menu.style.background = 'red'
}

// 先抓 role_list 的 class
// 再抓第一個 role_list 裡面的圖片
// 再取第一張圖片
const roleList = document.getElementsByClassName('role_list')
// roleList[0] 指定第一個roleList
const roleImg = roleList[0].getElementsByTagName('img')
// 取第一張圖片的 src
console.log(roleImg[0].src)
// 改第一張圖片的 src
roleImg[0].src = './images/0104.jpg'

// querySelector 用 CSS 選擇器取符合的第一個元素
const mainNews = document.querySelector('.main-news h1')
mainNews.innerText = 'querySelector'

// querySelectorAll 用 CSS 選擇器取符合的所有元素
const containers = document.querySelectorAll('.container')
for (let container of containers) {
  container.style.background = 'url(./images/0101.jpg)'
  container.style.color = 'black'
}

// 抓探索更多的清單
const list1 = document.querySelector('.card ul')
// children 抓 ul 裡面所有的 li
for (let li of list1.children) {
  console.log(li.innerText)
}
// ul 裡面的第一個 li 的 class 加上 text-red
list1.firstElementChild.classList.add('text-red')
// ul 裡面的最後一個 li 的 class 加上 text-center
list1.lastElementChild.classList.add('text-center')

// 改遊戲資訊(第三個 li)同一層前後鄰居的文字
list1.children[2].previousElementSibling.innerText = '上一個'
list1.children[2].nextElementSibling.innerText = '下一個'

// 從遊戲資訊(第三個 li)改同一層後面第二個東西的字
let el = list1.children[2]
for (let i = 1; i <= 2; i++) {
  el = el.nextElementSibling
}
el.innerText = '從遊戲資訊改最後一個'

// parentElement 可以抓取上一層元素
header.parentElement.style.filter = 'grayscale(1)'

// 刪除 iframe
const iframe = document.getElementsByTagName('iframe')[0]
iframe.remove()

// 在mainNews後插入 p 標籤
mainNews.insertAdjacentHTML('afterend', '<p>abcde</p>')
