import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      cariDedemit: ''
    };
    
  }

  componentDidMount() {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(pengguna => this.setState({ monsters: pengguna }))
  }

  adaKetikan = diketik => {this.setState({ cariDedemit: diketik.target.value })};
  

  render() {
    const { monsters, cariDedemit } = this.state; 
    const dedemitYangdicari = monsters.filter(demit => 
      demit.name.toLowerCase().includes(cariDedemit.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Dedemit Tak Berkomit </h1>
        <SearchBox 
          placeholder='Cari Dedemit'
          cariSiapa={this.adaKetikan}
        />
        <CardList siluman={dedemitYangdicari} />
      </div>
    );
  }
};

export default App;
