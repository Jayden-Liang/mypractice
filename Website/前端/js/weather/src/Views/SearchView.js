export const Insert = data =>{
  if (data.error_code == 0){
    console.log(data)
    console.log(data.realtime)
    const _html=`
      <div class="detail">
      <span>温度: ${data.result.realtime.temperature}</span>
      <span>风向: ${data.result.realtime.direct}</span>
      <span>风力: ${data.result.realtime.power}</span>
      <span>湿度: ${data.result.realtime.humidity}</span>
      <span>天气: ${data.result.realtime.info}</span>
       </div>`
    document.getElementById('serach-result').insertAdjacentHTML('beforeend',_html)
    
  }else{
    console.log(data.reason)
  }
}
