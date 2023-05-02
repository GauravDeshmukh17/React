import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(){
    super();
    this.state={
      tasks:[
        {id:1,task:"revise Js"},
        {id:2,task:"revise DSA"}
      ],
      currTask:""      
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
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
    this.setState({
      tasks:[...this.state.tasks,{id:this.state.tasks.length+1,task:this.state.currTask}]
    },() => {
      localStorage.setItem("data",JSON.stringify(this.state.tasks));
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
