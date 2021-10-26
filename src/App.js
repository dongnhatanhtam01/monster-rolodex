import logo from './logo.svg';
import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

// function App() {

// }
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    }

    this.handleChange = this.handleChange.bind(this) // react class component chỉ xử lý context this cho các method extend từ Component của nó. Nếu mình tự viết thì phải bind this vô
    // cách 2 thì dùng es6 arrow function: bản chất arrow function tự động bind lại context của thằng this khi hàm được tạo ra - tức là lúc component tạo ra luôn
    // Nó là flexical scope - Nó được tạo ra ở đâu thì set this ở đó thôi
  }
  ShowName() {
    console.log(this.state.monsters);
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value }, () => {
      console.log(this.state)
    })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    this.ShowName()
    return (
      <div className="App">
      <h1>Monster Rodolex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json()
      })
      .then(users => {
        return this.setState({ monsters: users })
      })
  }
}
export default App;
