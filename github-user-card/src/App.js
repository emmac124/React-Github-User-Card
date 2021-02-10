import React from 'react';
import axios from 'axios';
// import UserCard from './UserCard'
import './App.css';
 
class App extends React.Component{
 
 state = {
   users: []
 }
 
 // componentDidMount(){
   // axios.get(`https://api.github.com/users/emmac124`)
   // .then( ( res ) => {
   //   // console.log(res)
   //   this.setState({
   //     users: res.data
   //   })
   // })
   // .catch( ( error ) =>{
   //   console.log( error );
   // })
 // }
 componentDidMount(){
 
   axios.get(`https://api.github.com/users/emmac124/following`)
   .then(res => {
     console.log(res.data);
     this.setState({
       users: res.data
     })
   })
   .catch(err => {
     console.log(err);
   })
}
 
 render(){
   return (
     <div className='app'>
       <h1>Github UserCards</h1>
       <div className='users'>
         {this.state.users.map(user => (
           <>
           <img scr={user.avatar_url} alt='profile picture' />
           <div className='card-info'>
             <h3>{user.name}</h3>
             <p>{user.login}</p>
             <p>{user.location}</p>
             <p>{user.Profile}</p>
             <p>Profile: <a href='#'>{user.html_url}</a></p>
             <p>Followers: {user.followers}</p>
             <p>Following: {user.following}</p>
             <p>Bio : {user.bio}</p>
             </div>
             </>
         ))}
           </div>
       </div>
   )
 };
}
 
export default App;
