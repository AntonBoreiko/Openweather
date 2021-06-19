import { fetchData } from './fetch'
// import { Main } from './main'


// Src для картинки получаем так:
// `http://openweathermap.org/img/wn/${icon}@2x.png`

const key = '03fb54ebf904aeecf7fbb0e169f0c7ad';
const urlWether = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=${key}`;
// const urlWether5 = `https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=${key}`;



// 03fb54ebf904aeecf7fbb0e169f0c7ad
// const containerElement = document.querySelector('#container')


class Main {
  constructor(containerElement, data) {
    this.containerElement = containerElement
    this.feels_like = Math.round(data.main.feels_like - 273)
    this.name = data.name
    this.country = data.sys.country
    this.temp = Math.round(data.main.temp - 273)
    this.datas = new Date(data.dt * 1000).getHours() + ':' + new Date(data.dt * 1000).getMinutes()
    this.deg = data.wind.deg
    this.speed = data.wind.speed



    this.init(data)
  }
  init() {
    this.render(this.data)
  }
  template(data) {
    const template = `
      <p id="country">${this.name}, ${this.country}</p>
      <p id="time">${this.datas}</p>
      <div class="container__column">
        <img src="http://openweathermap.org/img/wn/01n@2x.png" alt="">
        <h1>${this.temp} С</h1>
        <p>feels like ${this.feels_like} C</p>
      </div>
      <div class="container__row">
        <div class="container__item">${this.deg} фунцию для сторон света</div>
        <div class="container__item">${this.speed} m/s</div>
      </div>
    `
    return template
  }

  render(data) {
    const template = this.template(data)
    this.containerElement.innerHTML += template
  }
}


fetchData('GET', urlWether, (data) => {
  const containerElement = document.querySelector('#container')
  new Main(containerElement, data)
})




//промисы в вызове fetchData . then
