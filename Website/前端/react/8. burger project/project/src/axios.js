import axios from 'axios';

const instance =axios.create({
  baseURL:'http://hit-the-road.cc/ingre'
})


export default instance;
