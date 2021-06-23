

function FetchDataPromise(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)

    xhr.onload = () => {
      if (xhr.status == 200) {
        const response = xhr.response
        const data = JSON.parse(response)

        resolve(data)
      } else {
        reject(xhr.status + 'Error')
      }
    }
    xhr.onerror = () => reject(xhr.status + 'Error')
    xhr.send()
  })
}


export { FetchDataPromise }
