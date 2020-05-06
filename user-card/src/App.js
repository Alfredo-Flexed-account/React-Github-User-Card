import React from 'react';
import './App.css';
import axios from 'axios';
import Cards from './Cards';
import MyCard from './MyCard'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      git: [], followers: [] 
    };
  }



  componentDidMount() {
    axios.get(`https://api.github.com/users/Alfredov96`).then(response => {console.log('my git info', response.data)
      this.setState({
        git: response.data
      });
    })
    .catch(error => {
      console.log('error', error)
    })
    axios
      .get("https://api.github.com/users/Alfredov96/followers")
      .then(response => {console.log('my git followers info', response.data)
        this.setState({ followers: response.data });
      })
      .catch(error => {
        console.log('error', error)
      })
  }


  render() {
    return (
      <div className="App">
        <h1>It Worked!!</h1>
      <div className="git">

          <MyCard 
            name={this.state.git.login}
            img={this.state.git.avatar_url}
          />

          {this.state.followers.map(follower => (
          <Cards
            name={follower.login}
            img={follower.avatar_url}
          />
          
          ))}
        </div>
      </div>
    );
  }
}

export default App;
