
domSelector = function(target){
  return document.querySelector(target)
}

var manipulate =(function(){
  return {
    //save函数把数据存进data中
    get_id: function(type){
      var ID;
      if (type ==='inc'){
        //添加ID, ID为最后一个的ID加1
        var dataLength = manipulate.data.income.length
        if (dataLength > 0){
            ID=manipulate.data.income[dataLength-1].ID +1
        }else{
            ID=1
        }

      }else{
        var dataLength = manipulate.data.outcome.length
        if (dataLength > 0){
            ID=manipulate.data.outcome[dataLength-1].ID +1
        }else{
            ID=1
        }

      }
      return ID
    },
    get_percentage: function(value){
      var income = manipulate.update_budget().income_num
      // manipulate.data.outcome.forEach(function(cur){
      //   cur['percentage']= cur.value/budget
      // })
      // total_outcome = manipulate.update_budget().outcome_num
      return value/income
    },
    save: function(type,id, description, value){
      a ={
        ID:id,
        description: description,
        value: value
      }
      if (type==='inc'){
        manipulate.data.income.push(a)
      }else{
        manipulate.data.outcome.push(a)
      }

    },
    data:{
      income:[],
      outcome: []
    },
    update_budget: function(){
      var income_num=0
      var outcome_num=0
      var budget=0
      if (manipulate.data.income.length>0){
        manipulate.data.income.map(function(arr){
           income_num = income_num+ arr.value
        })                //map和forEach的区别，在与map返回新的数组，且不改变原数组，forEach不返回，可以改变原来的值
      }
      if (manipulate.data.outcome.length>0){
        manipulate.data.outcome.map(function(arr){
           outcome_num+=arr.value
        })
      }
      budget=income_num-outcome_num
      // var percentage =
      return {
        budget: budget,
        income_num: income_num,
        outcome_num: outcome_num
      }
    },
    delete_item: function(type, id){
      if (type==='income'){
        var ids=manipulate.data.income.map(function(cur){
          return cur.ID
        })
        var index=ids.indexOf(id)
        manipulate.data.income.splice(index,1)
      }else{
        var outcome_ids=manipulate.data.outcome.map(function(cur){
          return cur.ID
        })
        var index=outcome_ids.indexOf(id)
        manipulate.data.outcome.splice(index,1)
      }
    }
  }

})()







var ui = (function(){
  classValue ={                                     //写到一块方便到时候改class改值,
    budgetValue: '.budget__value',                  //直接搜索一键替换就好了
    budgetIncome:'.budget__income--value',
    budgetExpense:'.budget__expenses--value',
    expensePercent: '.budget__expenses--percentage',
    typeValue:'.add__type',
    button:'.add__btn',
  }
  return {                              //返回方法，用来调用
    clsValue: classValue,
    add_column: function(type, ID, description, value){
      if (type==='inc'){
        console.log('add income')
        html =`<div class="item clearfix" id="income-{id}">
            <div class="item__description">{description}</div>
            <div class="right clearfix">
                <div class="item__value">+ {num}</div>
                <div class="item__delete">
                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>`
        html = html.replace('{id}', ID)
        html = html.replace('{description}', description)
        html = html.replace('{num}', value)
        domSelector('.income__list').insertAdjacentHTML('beforeEnd', html)


      }else{
        html=`<div class="item clearfix" id="expense-{id}">
            <div class="item__description">{description}</div>
            <div class="right clearfix">
                <div class="item__value">- {num}</div>
                <div class="item__percentage">{percentage}%</div>
                <div class="item__delete">
                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>`
        var percentage=Math.round(manipulate.get_percentage(value)*100)
        html = html.replace('{id}', ID)
        html = html.replace('{description}', description)
        html = html.replace('{num}', value)
        if (percentage === Infinity){
          html = html.replace('{percentage}', '---')
        }else{
          html = html.replace('{percentage}', percentage)
        }
        domSelector('.expenses__list').insertAdjacentHTML('beforeEnd', html)
      }
    },
    remove_input: function(){
      addDes=domSelector(".add__description")
      addDes.value=''
      domSelector(".add__value").value=''
      addDes.focus()

    },
    update_num: function(budget, income, outcome){
      var percentage=Math.round(manipulate.get_percentage(outcome)*100)
      if (budget>0){
        domSelector(".budget__value").textContent='+ '+ budget
      }else{
        domSelector(".budget__value").textContent=budget
      }
      domSelector(".budget__income--value").textContent='+ '+income
      domSelector('.budget__expenses--value').textContent='- '+outcome
      if (percentage === Infinity){
        domSelector('.budget__expenses--percentage').textContent= '---'
      }else{
        domSelector('.budget__expenses--percentage').textContent= percentage+'%'
      }
    }
  }
})()








var controller = (function(){
  //click add button
  domSelector(ui.clsValue.button).addEventListener('click', function(){
    type=domSelector('.add__type').value
    description=domSelector('.add__description').value
    num = parseFloat(domSelector('.add__value').value)
    //添加到数据处理
    if (description !=='' && !isNaN(num) && num >0){
      id = manipulate.get_id(type)
      manipulate.save(type, id, description, num)
      var total= manipulate.update_budget()
      // //显示ui
      ui.add_column(type, id, description, num)
      ui.remove_input()
      ui.update_num(total.budget, total.income_num, total.outcome_num)

    }

  })
  //delete  item
  domSelector('.container').addEventListener('click', function(event){
    //pass
    var target = event.target
    parent = target.parentNode.parentNode.parentNode.parentNode
    parent.remove()
    id = parent.id
    if (id){
      type=id.split('-')[0]
      ID= id.split('-')[1]
      //数据中删除
      manipulate.delete_item(type, ID)
      //更新budget
      var total= manipulate.update_budget()
      ui.update_num(total.budget, total.income_num, total.outcome_num)
    }
  })

})()

function init(){
  domSelector(ui.clsValue.budgetValue).textContent=0
  domSelector(ui.clsValue.budgetIncome).textContent=0
  domSelector(ui.clsValue.budgetExpense).textContent=0
  domSelector(ui.clsValue.expensePercent).textContent='-'
}

init()
