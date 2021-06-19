function fetchData(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.onload = () => {
    if (xhr.status == 200) {
      const response = xhr.response
      const data = JSON.parse(response)

      callback(data)
    }
  }

  xhr.send();
}

export { fetchData }
