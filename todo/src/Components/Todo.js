import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
  constructor(){
    let d=JSON.parse(localStorage.getItem("data"));
    // console.log(d[d.length-1].id);
    // console.log(d);
    super();
    let uid=(d.length==0) ? 1 : d[d.length-1].id+1
    this.state={
      tasks:[
        {id:1,task:"revise Js"},
        {id:2,task:"revise DSA"}
      ],
      currTask:"" , 
      uniqueId:uid 
    }
    console.log("hello");
    let b=false;
    (localStorage.getItem("data")) ? this.state.tasks=JSON.parse(localStorage.getItem("data")) : b=true
    // console.log(this.state.tasks);
  }

  handleChange = (e) => {
    // console.log(e.target.value);
    // this.state={
    //   currTask:e.target.value
    // }
    this.setState({
      currTask:e.target.value
    })
  }

  handleSubmit = () => {
    // console.log("currTAsk "+this.state.currTask);
    // console.log(this.state.tasks);
    console.log(this.state.uniqueId);
    this.setState({
      uniqueId:this.state.uniqueId+1,
      tasks:[...this.state.tasks,{id:this.state.uniqueId,task:this.state.currTask}]
    },() => {
      // console.log(this.state.currTask);
      localStorage.setItem("data",JSON.stringify(this.state.tasks));
      console.log(this.state.uniqueId);
    })
  }
  
  handleDelete = (id) => {
    // console.log(id);
    let filteredArr=this.state.tasks.filter((tasksObj) => {
      return tasksObj.id != id;
    })
    // console.log(filteredArr);
    this.setState({
      tasks:filteredArr
    },() => {
    console.log(filteredArr);
    localStorage.setItem("data",JSON.stringify(filteredArr));
  })
  }
  
  render(){
    console.log("render method is called");
    return( // jsx starts
      <div>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
        { // use these brackets to write js in jsx
          this.state.tasks.map((taskObj)=>{
            return(
              <li key={taskObj.id}>
                <p>{taskObj.task}</p>
                <button onClick={() => {this.handleDelete(taskObj.id)}}>Delete</button>
              </li>
            )
          })
        }
      </div> 
    )
  }
}



