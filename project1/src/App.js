import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      newItem:'',
      list: []

    };
  }

  addItem(todoValue){
    if(todoValue !==''){
      const newItem={
        id: Date.now(),
        value: todoValue,
        isDone: false

      };
  const list = [...this.state.list];
  list.push(newItem);

  this.setState({
    list,
    newItem:''
  });

  
    }

  }

  deleteItem(id){
    const list =[...this.state.list];
    const updatelist= list.filter(item => item.id!==id);
    this.setState({list:updatelist});
  }

  updateInput(input){
    this.setState({newItem:input});
  }
  render(){
return(
  <div className='pro'>
    <h1>hello there</h1>
    <input class='text'
     placeholder='lets do it'
     value={this.state.newItem}
     onChange={e=>this.updateInput(e.target.value)}></input> 
    <button className='btn'
    onClick={()=> this.addItem(this.state.newItem)}
    disabled={!this.state.newItem.length }>submit</button>
    <ul>
      {this.state.list.map(item =>{return(
        <li key={item.id}>
          <input type='checkbox'
          name="idDone"
          checked = {item.isDone}
          onChange={()=>{}}
          />
          {item.value}
          <button className='btn'
          onClick={()=>this.deleteItem(item.id)}>
            delete
          </button>
        </li>
      );
      })}
    <input type='checkbox'></input>
    record video 
    <button className='btn'>Delete</button>
    </ul>
    </div>
);

}}

export default App;
