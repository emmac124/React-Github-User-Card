import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import Following from './components/Following';
import UserForm from './components/UserForm';

class App extends React.Component{

  state = {
    username: 'emmac124'
  }

  setUsername = (name) => {
    this.setState({
      username: name
    })
  }

  render(){
    return (
      <div className='app' style={{textAlign: 'center'}}>
        <h1>Github UserCards</h1>
        <div className='users'>
          <UserForm setUsername={this.setUsername} />
          <UserProfile username={this.state.username} />
          <Following username={this.state.username} />
            </div> 
        </div>
    )
  };
}

export default App;
