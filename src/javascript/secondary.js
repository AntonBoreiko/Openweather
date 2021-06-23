class Secondary {
  constructor(ulElement, data) {

    this.ulElement = ulElement
    this.data = data
    this.list = data.list

    this.init(data)
  }


  init() {
    this.render(this.list)
  }


  template(list) {
    const template = `
      <li class="liElement">
      <div>${this.time}</div>
      <div><img src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt=""></div>
      <div>${this.temp} °C</div>
      </li>
    `
    return template
  }


  render(list) {
    for (var i = 2; i < list.length; i += 8) {
      this.time = list[i].dt_txt
      this.temp = Math.round(list[i].main.temp - 273)
      this.icon = list[i].weather[0].icon

      const template = this.template(list)
      this.ulElement.innerHTML += template
    }
  }
}


export { Secondary }
