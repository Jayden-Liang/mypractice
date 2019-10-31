import React, {Component} from 'react'
import classes from './Input.module.css'


class Input extends Component{

  render(){
    // console.log(this.props)
    let inputfield=''
    let InputClasses=[classes.Input]
    let errorMsg=null
    if (this.props.infor.touched && !this.props.infor.valid){
      InputClasses.push(classes.inValid)
      console.log(this.props.infor.ErrorMsg)
      errorMsg=this.props.infor.ErrorMsg.map(item=>{
        return   <div key={item} className={classes.Error}>{item} </div>
      })

    }

    switch (this.props.infor.Type) {
      case 'input':
         inputfield = <input onChange={this.props.Changed} name={this.props.infor.id} value={this.props.infor.value} className={InputClasses.join(' ')} {...this.props.infor.config} />
        break;
      case 'password':
         inputfield = <input onChange={this.props.Changed} name={this.props.infor.id} value={this.props.infor.value} className={InputClasses.join(' ')} {...this.props.infor.config} />
        break;
      case 'select':
         inputfield=<select onChange={this.props.Changed} name={this.props.infor.id} className={classes.Select}>
                      {this.props.infor.config.option.map(item=>{
                        return <option key={item['value']} value={item['value']}>{item['displayValue']}</option>
                     })}
                     </select>
          break

      default:
         inputfield = <input onChange={this.props.Changed} name={this.props.infor.key} value={this.props.infor.value} className={InputClasses.join(' ')} {...this.props.infor.config} />
    }


    return (
      <div>
      {inputfield}
      {errorMsg}
      </div>


    )
  }
}

export default Input
