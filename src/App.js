import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Ciao from './components/Ciao';

// function App() {
//   const user = {
//     firstName: 'Ivan',
//     lastName: 'Yarem'
//   }
//   return <React.Fragment>
//     <Ciao name={`${user.firstName} ${user.lastName}`} />
//     <Ciao name='Nazar Ptushch' />
//     <Ciao name='Ann Lezed' />
//   </React.Fragment>

// }

// export default App;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isStraight:true,
      users: [
        {
          id:1,
          firstName:'Elon'
        },
        {
          id:2,
          firstName:'Nazar'
        },
        {
          id:3,
          firstName:'Ann'
        }
      ]
    }
    sortUsers = () => {
      const {users, isStraight} = this.setState;
      const sortUsers = JSON.parse(JSON.stringify(users));
      //const sortUsers = [...users];
      sortUsers.sort((prev, next) => isStraight ? next.id - prev.id : prev.id - next.id);
      this.setState({
        isStraight:isStraight,
        users:sortUsers
      })
    }
  }
  render(){
    const {users, isStraight} = this.state;
    return <>
    <p>
    <button onClick={this.sortUsers}>SORT BY NUMBER{isStraight ? 'straight' : 'reverse'}</button>
    {/* <button onClick={this.sortUsers}>SORT BY NAME{isAlphabet ? 'straight' : 'reverse'}</button> */}
    </p>
      <div>
        {users.map(({firstName, id}) =><Ciao key={id} id={id} name={firstName} />)}
      </div>
    </>

  }
}

export default App;