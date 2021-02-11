import React, {Component} from 'react';
import axios from 'axios';

export default class UserProfile extends Component {
    
state = {
    user: null
}
//an object can be null 

componentDidMount(){
    axios.get(`https://api.github.com/users/${this.props.username}`)
    .then(res => {
        this.setState({ user: res.data })
    })
    .catch(err => {
        console.log(err);
    })
}

//this keeps it from unmounting and remounting, this just updates it
componentDidUpdate(prevProps){
    if(prevProps.username !== this.props.username){
        axios.get(`https://api.github.com/users/${this.props.username}`)
        .then(res => {
            this.setState({ user: res.data })
        })
        .catch(err => {
            console.log(err);
        })
    }
}

    render(){
        if(!this.state.user) return <h3>Loading USer Data</h3>
        return(
            <div style={{padding: '64px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
                <img src={this.state.user.avatar_url} alt={this.state.user.name} style={{borderRadius: '50%', maxWidth: '200px'}} />
                <h3>{this.state.user.name}</h3>
                <p>username: {this.state.user.login}</p>
                <p>repos: {this.state.user.public_repos}</p>
                <p>gists: {this.state.user.public_gists}</p>
            </div>
        )
    }
}