
class Main {
  gr = ''
  constructor(containerElement, data) {
    this.containerElement = containerElement

    this.feels_like = Math.round(data.main.feels_like - 273)
    this.name = data.name
    this.country = data.sys.country
    this.temp = Math.round(data.main.temp - 273)
    this.datas = new Date(data.dt * 1000).getHours() + ':' + new Date(data.dt * 1000).getMinutes()
    this.deg = data.wind.deg
    this.speed = data.wind.speed
    this.icon = data.weather[0].icon

    this.init(data)
  }


  init() {
    this.render(this.data)
  }
  compas(deg) {
    if (this.deg > 0 && this.deg < 90) {
      this.gr = 'northeast'
      return this.gr
    } else if (this.deg > 90 && this.deg < 180) {
      this.gr = 'southeast'
      return this.gr
    } else if (this.deg > 180 && this.deg < 270) {
      this.gr = 'southwest'
      return this.gr
    } else if (this.deg > 270) {
      this.gr = 'northwest'
      return this.gr
    }
  }


  template(data) {
    this.compas(this.deg)
    const template = `
      <p id="country">${this.name}, ${this.country}</p>
      <p id="time">🕜 ${this.datas}</p>
      <div class="container__column">
      <div><img class="icon" src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt=""></div>
        <h1>${this.temp} °C</h1>
        <p>feels like ${this.feels_like} °C</p>
      </div>
      <div class="container__row">
        <div class="container__item"> 🧭${this.gr}</div>
        <div class="container__item">💨 ${this.speed} m/s</div>
      </div>
    `

    return template
  }


  render(data) {
    const template = this.template(data)
    this.containerElement.innerHTML += template
  }
}


export { Main }
