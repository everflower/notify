# notify

## 如何使用
html中引入notify.js和notify.css

## 参数
+ `container` 容器节点 默认为document.body
+ `title` string 标题
+ `content` string 内容

## 方法
### show(options)
+ 描述：notify show
+ options
  + `autoHide` boolean true/false notify显示后是否在一段时间后自动隐藏 默认为true
  + `timeout` number notify显示后经过多久自动隐藏 autoHide为true时生效 默认为1000(ms)

### hide()
  + 描述: notify hide

## 示例
```js
const notify = new Notify({
  title: '最新通知',
  content: 'notify预览版发布',
  para: '------------Welcome ---------------'
})

notify.show({
  autoHide: true,
  timeout: 5000
})

```
## 增加的功能
+ 点击右上角的按钮，会弹出一个提示框，点击确定后，整个notify组件消失
```js
  function target_dis(){
  alert("欢迎参加Notify的发布会！");
  var target=document.getElementById("notify-container");
  target.style.display = 'none '
  
```
## 增加的内容
+ 添加了一个新的段落，显示Wlcome
+ 如图
+ 
![效果如图](\_notify.jpg  )

