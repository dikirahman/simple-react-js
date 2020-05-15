import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table.jsx'
import Form from './Form.jsx'


class App extends React.Component {
  state = {
    characters: [
       {
         nama: 'Diki',
         hobi: 'vs'
       }
      ]
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
              
                  <div class="row mt-4">
                    <div class="col col-lg-9">
                     <Table
                                          characterData={characters}
                                          removeCharacter={this.removeCharacter}
                                      />
                    </div>
              
                    <div class="col col-lg-3">
                      <h3>Tambah Data</h3> <
                       Form handleSubmit = { this.handleSubmit }
                       />
                    </div>
                  </div>
            </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
