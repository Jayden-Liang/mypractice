import axios from 'axios';

export default class Search {
  constructor(city) {
      this.city = city;
  }
  async getWeather(){
    try{
      const result = await axios
      (`http://apis.juhe.cn/simpleWeather/query?city=${encodeURIComponent(this.city)}&key=46fb11e954240d63846a4f174b58222d`)
       // (`http://apis.juhe.cn/simpleWeather/cityList?key=46fb11e954240d63846a4f174b58222d`)
      this.result = result.data

    } catch(error){
      console.log(`there is a error which is ${error}`)
    }
  }
}
