const notify = new Notify({
  title: '最新通知',
  content: 'notify预览版发布',
  para: '------------Welcome ---------------'
})

notify.show({
  autoHide: true,
  timeout: 5000
})