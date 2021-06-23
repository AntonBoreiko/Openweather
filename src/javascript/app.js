import { FetchDataPromise } from './fetch'
import { Main } from './main'
import { Secondary } from './secondary'


const key = '03fb54ebf904aeecf7fbb0e169f0c7ad'
const urlWether = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=${key}`
const urlWether5 = `https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=${key}`


FetchDataPromise('GET', urlWether)
  .then(data => {
    const containerElement = document.querySelector('#container')
    new Main(containerElement, data)
  })
  .catch((error) => console.log(error))


FetchDataPromise('GET', urlWether5)
  .then(data => {
    const secondaryElement = document.querySelector('#secondaryContainer')
    new Secondary(ulElement, data)
  })
  .catch((error) => console.log(error))
