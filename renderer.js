const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // 打印 'pong'
  }
  console.log('run renderer.js')
  func()