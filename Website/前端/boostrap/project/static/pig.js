
var round;

init()
player=1
playing= true
a=document.querySelector("#btn-1")
a.addEventListener('click', function() {
  if (playing){
    currentPlayer='player-'+player
    playerDom= document.querySelector('.'+currentPlayer).classList.add('active')              // 根据1还是2的player,拼接成player-1,添加active class，
    //随机点数
    num = Math.floor(Math.random()*6+1)
    diceDom =document.querySelector('.dice')
    diceDom.style.display='block';
    //显示点数
    round+=num
    if (num === 1){
      next()
    }
    document.querySelector('.'+'current-'+player).textContent = round
    //根据点数更换图片
    diceDom.src='static/images/dice-'+num+'.png'
  }

  })




document.querySelector(".btn-2").addEventListener('click', function(){
  //hold, 找到score,替换值，归零,检查值是否已经胜利
  if (playing){

    value = document.querySelector('.'+'current-'+player).textContent
    total = parseInt(document.querySelector('.'+'score-'+player).textContent)+parseInt(value)
    document.querySelector('.'+'score-'+player).textContent = total
    if (total>=20){
      document.querySelector('.'+'h-'+player).textContent='Winner'
      playing=false
    }else{
      //切换到下一个player
      next()
    }
    }
  })










function next(){
  player === 1 ? player=2 :player=1;
  document.querySelector('.dice').style.display='none';
  document.querySelector('.current-1').textContent=0;
  document.querySelector('.current-2').textContent=0;
  document.querySelector('.player-1').classList.toggle('active')
  document.querySelector('.player-2').classList.toggle('active')

  round=0
}


function init(){
  round =0
  document.querySelector('.score-1').textContent=0;
  document.querySelector('.score-2').textContent=0;
  document.querySelector('.current-1').textContent=0;
  document.querySelector('.current-2').textContent=0;
  document.querySelector('.dice').style.display='none';
}
