export const Insert = data =>{
  if (data.error_code == 0){
    const _html=`
      <div class="detail">
      <span>温度: ${data.realtime}</span>
      <span>风向: 南风</span>
      <span>风力: 2级</span>
      <span>湿度: 68</span>
      <span>天气: 大雨</span>
       </div>`
    document.querySelector('.serach-result').insertAjacentHTML('beforeend',_html)
  }else{
    console.log(data.reason)
  }
}
