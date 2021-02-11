import React, {Component} from 'react';
import axios from 'axios';

export default class Following extends Component {

    state = {
        following: []
    }
    //an array should be initialized as an empty array
    
    componentDidMount(){
        axios
            .get(`https://api.github.com/users/${this.props.username}/following`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    following: res.data
                })
                })
            .catch(err => {
                console.log(err);
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps.username !== this.props.username){
            axios.get(`https://api.github.com/users/${this.props.username}/following`)
            .then(res => {
                this.setState({ following: res.data })
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    render(){
        return(
            <div style={{display: 'flex', flexFlow: 'row wrap',}}>
                {this.state.following.map(user => (
                    <div key={user.id} style={{width: '160px', margin: '10px', padding: '16px'}}>
                        <img src={user.avatar_url} alt={user.login} style={{borderRadius: '50%', maxWidth: '130px'}} />
                        <h4>{user.login}</h4>
                    </div>
                ))}
            </div>
        )
    }
}