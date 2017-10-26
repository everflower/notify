const notify = new Notify({
    title: '最新通知',
    content: 'notify预览版发布：1、阅读notify文档实例化notify，即在你的在代码中引入notify，简单说就是要求你会使用notify 2、阅读并理解notify源码改造notify，如新增功能、修复bug等 3、改造之后在github上发起pull request' ,
    footer: '我知道了'
 
})
 
  notify.show({
    autoHide: true,
    timeout: 200000
})