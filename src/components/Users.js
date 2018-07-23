import React, { Component } from 'react';

class Users extends Component {
    
    render(props){
        return <div>Username: {this.props.user.username}, Age: {this.props.user.age} <button onClick={this.props.deleteUser.bind(this,this.props.index)}>Delete User</button></div>;
    }
    
}

export default Users;