import React, { Component } from 'react';

class Course extends Component {
   state={
     title: null,
     id: null
   }

   getFromProps=()=>{
     if (this.state.id != this.props.match.params.id){
       const search = new URLSearchParams(this.props.location.search)
       for (let a of search.entries()){
         this.setState({
           title: a[1],
           id: this.props.match.params.id
         })
       }
     }

   }
   componentDidMount(){
     this.getFromProps()
   }
   componentDidUpdate(){
     this.getFromProps()
   }

    render () {
      console.log('i am course', this.props)
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;
