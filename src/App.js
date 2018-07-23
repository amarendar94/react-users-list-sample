import React, { Component, Fragment } from 'react';
import './App.css';
import Users from './components/Users';

class App extends Component {

  state ={
    users: [
      {username:'amarendar94', age:23},
      {username:'venky95', age:21},
      {username:'kishore20', age:20},
      {username:'raghav23',age:22}],

      newUser:{
        username:"",
        age:null
      }
  };

  deleteUser = (index)=>{
    const tempUsers = Object.assign([],this.state.users);
    tempUsers.splice(index,1);
    this.setState({
      users:tempUsers,
      newUser:this.state.newUser
    });
  }

  addUser = (newUser)=>{
    const tempUsers = Object.assign([],this.state.users);
    tempUsers.push(newUser);
    this.setState({
      users:tempUsers,
      newUser:this.state.newUser
    });
  }

  editUser = (index, newUser)=>{
    const tempUsers = Object.assign([],this.state.users);
    tempUsers[index].username = newUser.username;
    tempUsers[index].age = newUser.age;
    this.setState({
      users:tempUsers,
      newUser:this.state.newUser
    });
  }

  updateNewUser = (event)=>{
    const tempUser = Object.assign({},this.state.newUser)
    tempUser[event.target.name] = event.target.value
    this.setState({
      users:this.state.users,
      newUser:tempUser
    })
  }

  render() {
    return (
      <div className="App">
        <div><br/>Username: <input name="username" type="text" onChange={this.updateNewUser}/><br/><br/>
            Age: <input name="age" type="number" onChange={this.updateNewUser}/><br/><br/>
            <button onClick={this.addUser.bind(this,this.state.newUser)}>Add User</button><br/><br/>
          </div>
        {
          this.state.users.map((user,index)=>{
            return(<Users deleteUser={this.deleteUser}  key={index} index={index} user={user}/>)
          })
        }
      </div>
    );
  }
}

export default App;
