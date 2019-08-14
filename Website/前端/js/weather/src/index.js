import Search from './Models/Search';
import * as SearchView from './Views/SearchView'
const state ={}


//search 函数
const controlSearch = async() =>{
   let city = document.querySelector('.search-input').value
   if (city){
     state.search = new Search(city)
     try{
       await state.search.getWeather();
       SearchView.Insert(state.search.result)

     }catch(error){
       console.log(`there is a error which is ${error}`)
     }
   }
}

// 监听提交
document.querySelector('.input-group').addEventListener('submit', (e)=>{
  e.preventDefault()
  console.log('提交了数据')
  controlSearch()
})
